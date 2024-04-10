import {View, Pressable, Text} from 'react-native';
import React, {memo} from 'react';
import AddFriendsButton from '../atoms/Buttons/AddFriendsButton';
import Avatar from '../atoms/Avatar/Avatar';
import styles from './molecules.styles';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigatorNavigationProps} from '../../navigation/DrawerNavigation/DrawerNavigation.types';
import useManageSingedInUser from '../../hooks/useManageSignedInUser';
import {modifyUserFromApi} from '../../service/usersApi';

type Props = {
  name: string;
  friendId: string;
};
const PersonCard = ({name, friendId}: Props) => {
  const {signedInUser, loadSignedInUser} = useManageSingedInUser();
  const navigation = useNavigation<DrawerNavigatorNavigationProps>();

  const manageFriend = (id: string) => async () => {
    const updatedFriendsId = signedInUser.friendsIds.includes(id)
      ? signedInUser.friendsIds.filter(currentId => currentId !== id)
      : [...signedInUser.friendsIds, id];

    const modifiedUser = {...signedInUser, friendsIds: updatedFriendsId};

    await modifyUserFromApi(modifiedUser);
    await loadSignedInUser(signedInUser.id);
  };
  const isFriend = signedInUser.friendsIds.includes(friendId);

  const handleGoToUserProfile = (userId: string) => () => {
    navigation.navigate('OtherUserProfile', {userId: userId});
  };

  return (
    <View style={styles.personCardContainer}>
      <Avatar />
      <View style={styles.personCardContent}>
        <Pressable onPress={handleGoToUserProfile(friendId)}>
          <Text style={styles.name}>{name}</Text>
        </Pressable>
        <AddFriendsButton
          onPress={manageFriend(friendId)}
          isFriend={isFriend}
        />
      </View>
    </View>
  );
};

export default memo(PersonCard);
