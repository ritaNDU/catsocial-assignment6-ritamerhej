import React, {useState} from 'react';
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

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

type Props = {
  post: Post;
};
const AddCommentForm = ({post}: Props) => {
  const {signedInUser} = useManageSingedInUser();
  const [isLoading, setIsLoading] = useState(false);
  const {addCommentToPost} = useManageAllPosts();

  const handleAddComment = async (
    values: initialCommentsFormType,
    {resetForm}: {resetForm: () => void},
  ) => {
    const commentToAdd = {
      id: JSON.stringify(Math.floor(Math.random() * 100000)),
      userId: signedInUser.id,
      text: values.comment,
    };
    const updatedCommentsArray: Comment[] = [...post.comments, commentToAdd];
    const modifiedPost: Post = {...post, comments: updatedCommentsArray};

    setIsLoading(true);
    await modifyPostFromApi(modifiedPost);
    addCommentToPost(post.id, commentToAdd);
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
