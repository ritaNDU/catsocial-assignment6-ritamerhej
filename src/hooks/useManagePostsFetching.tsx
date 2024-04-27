import {useEffect, useState} from 'react';
import {POSTS_LIMIT} from '../service/api.data';
import useManageAllPosts from './useManageAllPosts';
import {getPostsFromApi} from '../service/postsApi';

const useManagePostsFetching = () => {
  const {allPosts, addPosts, storePosts} = useManageAllPosts();
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleLoadMore = (page: string) => async () => {
    setIsLoading(true);
    const posts = await getPostsFromApi(page);
    setIsLoading(false);
    if (posts.length === 0 || allPosts.length % POSTS_LIMIT !== 0) {
      setEndReached(true);
      return;
    }
    addPosts(posts);
  };

  async function handleInitialFetch() {
    setIsLoading(true);
    const posts = await getPostsFromApi('1');
    setIsLoading(false);
    storePosts(posts);
  }

  const handleRefresh = async () => {
    setRefresh(true);
    handleInitialFetch();
    setEndReached(false);
    setRefresh(false);
  };

  useEffect(() => {
    handleInitialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  };
};

export default useManagePostsFetching;
