import {useState} from 'react';
import {Post} from '../data/data.types';
import useManageSingedInUser from './useManageSignedInUser';
import {storePostInApi} from '../service/postsApi';
import {Alert} from 'react-native';

const useManagePosts = () => {
  const {signedInUser} = useManageSingedInUser();

  const [post, setPost] = useState<Post>({
    id: '1',
    userId: signedInUser.id,
    text: '',
    imageUri: '',
    comments: [],
    publicationDate: `${JSON.stringify(new Date().getDate()).padStart(
      2,
      '0',
    )}/${JSON.stringify(new Date().getMonth() + 1).padStart(
      2,
      '0',
    )}/${JSON.stringify(new Date().getFullYear())}`,
  });

  const addPost = () => {
    if (post.text === '' && post.imageUri === '') {
      Alert.alert(
        'Cannot create post. You need to add either a picture, or some text.',
      );
    } else {
      storePostInApi(post);
    }
  };
  const addImageToPost = (newImageUri: string) => {
    setPost({...post, imageUri: newImageUri});
  };
  const addTextToPost = (newText: string) => {
    setPost({...post, text: newText});
  };

  return {post, addPost, addImageToPost, addTextToPost};
};

export default useManagePosts;
