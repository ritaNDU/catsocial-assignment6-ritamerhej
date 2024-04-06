import {Text, FlatList} from 'react-native';
import React from 'react';
import {User} from '../../data/data.types';
import PersonCard from '../molecules/PersonCard';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import {modifyUserFromApi} from '../../service/usersApi';

type Props = {
  peopleList: User[];
  isRefreshing?: boolean;
  onRefresh?: () => void;
  areFriends: boolean;
};

const PersonCardsList = ({
  peopleList,
  isRefreshing,
  onRefresh,
  areFriends,
}: Props) => {
  const {signedInUser, loadSignedInUser} = useManageSingedInUser();

  const manageFriend = (friendId: string) => async () => {
    const updatedFriendsId =
      areFriends && signedInUser.friendsIds.includes(friendId)
        ? signedInUser.friendsIds.filter(id => id !== friendId)
        : [...signedInUser.friendsIds, friendId];

    const modifiedUser = {...signedInUser, friendsIds: updatedFriendsId};

    await modifyUserFromApi(modifiedUser);
    await loadSignedInUser(signedInUser.id);
  };

  const renderItem = ({item}: {item: User}) => {
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
      />
    );
  } else {
    return <Text>No cat parents registered yet!</Text>;
  }
};

export default PersonCardsList;
