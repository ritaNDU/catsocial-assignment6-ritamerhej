import {useState} from 'react';
import {Post} from '../data/data.types';
import useManageSingedInUser from './useManageSignedInUser';
import {storePostInApi} from '../service/postsApi';
import {Alert} from 'react-native';

const useManagePosts = (
  initialPost: Post = {
    id: '1',
    userId: '',
    text: '',
    imageUri: '',
    likes: 0,
    comments: [],
    publicationDate: `${JSON.stringify(new Date().getDate()).padStart(
      2,
      '0',
    )}/${JSON.stringify(new Date().getMonth() + 1).padStart(
      2,
      '0',
    )}/${JSON.stringify(new Date().getFullYear())}`,
  },
) => {
  const {signedInUser} = useManageSingedInUser();

  const [post, setPost] = useState<Post>(initialPost);

  const addPost = () => {
    if (post.text === '' && post.imageUri === '') {
      Alert.alert(
        'Cannot create post. You need to add either a picture, or some text.',
      );
    } else {
      const postToStore = {...post, userId: signedInUser.id};
      storePostInApi(postToStore);
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
