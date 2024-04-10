import {FlatList} from 'react-native';
import React from 'react';
import {User} from '../../data/data.types';
import PersonCard from '../molecules/PersonCard';
import LoadMoreButton from '../atoms/Buttons/LoadMoreButton';

type Props = {
  peopleList: User[];
  isRefreshing: boolean;
  onRefresh: () => void;
  handleLoadMore: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const PersonCardsList = ({
  peopleList,
  isRefreshing,
  onRefresh,
  handleLoadMore,
  isLoading,
  endReached,
}: Props) => {
  const renderItem = ({item}: {item: User}) => {
    return <PersonCard name={item.name} friendId={item.id} />;
  };

  return (
    <FlatList
      data={peopleList}
      renderItem={renderItem}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ListFooterComponent={
        <LoadMoreButton
          onPress={handleLoadMore}
          isLoading={isLoading}
          endReached={endReached}
        />
      }
    />
  );
};

export default PersonCardsList;
