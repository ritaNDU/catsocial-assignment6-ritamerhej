import {Text, FlatList} from 'react-native';
import React from 'react';
import {User} from '../../data/data.types';
import PersonCard from '../molecules/PersonCard';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import {modifyUserFromApi} from '../../service/usersApi';
import LoadMoreButton from '../atoms/Buttons/LoadMoreButton';

type Props = {
  peopleList: User[];
  isRefreshing?: boolean;
  onRefresh?: () => void;
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
  const {signedInUser, loadSignedInUser} = useManageSingedInUser();

  const manageFriend = (friendId: string) => async () => {
    const updatedFriendsId = signedInUser.friendsIds.includes(friendId)
      ? signedInUser.friendsIds.filter(id => id !== friendId)
      : [...signedInUser.friendsIds, friendId];

    const modifiedUser = {...signedInUser, friendsIds: updatedFriendsId};

    await modifyUserFromApi(modifiedUser);
    await loadSignedInUser(signedInUser.id);
  };

  const renderItem = ({item}: {item: User}) => {
    const areFriends = signedInUser.friendsIds.includes(item.id);
    return (
      <PersonCard
        isFriend={areFriends}
        name={item.name}
        manageFriend={manageFriend(item.id)}
      />
    );
  };
  if (peopleList.length > 0) {
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
  } else {
    return <Text>No cat parents to show!</Text>;
  }
};

export default PersonCardsList;
