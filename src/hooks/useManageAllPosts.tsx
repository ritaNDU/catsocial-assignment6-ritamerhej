import {Comment, Post} from '../data/data.types';
import {add, addComment, store} from '../store/allPostsSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const useManageAllPosts = () => {
  const allPosts = useAppSelector(state => state.allPosts.value);
  const dispatch = useAppDispatch();

  const addPosts = (posts: Post[]) => {
    dispatch(add(posts));
  };
  const storePosts = (posts: Post[]) => {
    dispatch(store(posts));
  };
  const addCommentToPost = (postId: string, comment: Comment) => {
    dispatch(addComment({postId, comment}));
  };

  return {
    allPosts,
    addPosts,
    storePosts,
    addCommentToPost,
  };
};

export default useManageAllPosts;
