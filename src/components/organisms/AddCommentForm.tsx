import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {initialCommentsFormValue} from '../../data/formsData';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import FormInput from '../atoms/Inputs/FormInput';
import ErrorText from '../atoms/Errors/ErrorText';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import {Comment, Post} from '../../data/data.types';
import {modifyPostFromApi} from '../../service/postsApi';
import {AddCommentSchema} from '../../data/ValidationSchemas/addCommentSchema';
import {initialCommentsFormType} from '../../data/formsData.types';
import useManageAllPosts from '../../hooks/useManageAllPosts';
import {getPostById} from '../../utils/postsUtils';
import {Alert} from 'react-native';

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

type Props = {
  postId: string;
};

const AddCommentForm = ({postId}: Props) => {
  const {signedInUser} = useManageSingedInUser();
  const {allPosts} = useManageAllPosts();
  const [isLoading, setIsLoading] = useState(false);
  const {addCommentToPost} = useManageAllPosts();
  const [currentPost, setCurrentPost] = useState<Post>();

  useEffect(() => {
    const post = getPostById(allPosts, postId);
    try {
      if (post) {
        setCurrentPost(post);
      } else {
        throw new Error('Post not found.');
      }
    } catch (error) {
      console.log(`Error fetching post: ${error}`);
      Alert.alert(
        "Couldn't get Meow. It might have been deleted by its. Try again later.",
      );
    }
  }, []);

  const handleAddComment = async (
    values: initialCommentsFormType,
    {resetForm}: {resetForm: () => void},
  ) => {
    if (!currentPost) {
      return;
    }
    const commentToAdd = {
      id: JSON.stringify(Math.floor(Math.random() * 100000)),
      userId: signedInUser.id,
      text: values.comment,
    };
    const updatedCommentsArray: Comment[] = [
      ...currentPost.comments,
      commentToAdd,
    ];
    const modifiedPost: Post = {...currentPost, comments: updatedCommentsArray};

    setIsLoading(true);
    await modifyPostFromApi(modifiedPost);
    addCommentToPost(currentPost.id, commentToAdd);
    setIsLoading(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialCommentsFormValue}
      onSubmit={handleAddComment}
      validationSchema={AddCommentSchema}>
      {({handleChange, handleBlur, submitForm, values, errors, touched}) => (
        <>
          <FormInput
            placeholder="Write a comment... Meow!"
            handleChangeText={handleChange('comment')}
            handleBlur={handleBlur('comment')}
            value={values.comment}
          />
          {errors.comment && touched.comment ? (
            <ErrorText error={errors.comment} />
          ) : (
            <></>
          )}
          <NavigationButton
            name="Add Comment"
            onPress={handleSubmit(submitForm)}
            isLoading={isLoading}
          />
        </>
      )}
    </Formik>
  );
};

export default AddCommentForm;
