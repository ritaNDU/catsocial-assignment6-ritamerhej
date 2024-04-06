import {View, Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import useManageSecureStorage from '../../hooks/useManageSecureStorage';
import {getUserFromApi} from '../../service/usersApi';
import useManageSignedInUser from '../../hooks/useManageSignedInUser';
import useManageUser from '../../hooks/useManageUser';

const SignedInScreen = () => {
  const {getStoredUserInfo} = useManageSecureStorage();
  const {signedInUser, addSignedInUser, removeSignedInUser} =
    useManageSignedInUser();
  const {signUserOut} = useManageUser();

  useEffect(() => {
    async function setSignedInUser() {
      const userInfo = await getStoredUserInfo();
      console.log(userInfo);

      if (userInfo && userInfo.token !== '' && userInfo.userId !== '') {
        const user = await getUserFromApi(userInfo.userId);
        addSignedInUser(user);
      }
    }
    setSignedInUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>SignedInScreen</Text>
      <Pressable
        onPress={() => {
          console.log(signedInUser.id);
          //   signUserOut(signedInUser);
          //   removeSignedInUser();
        }}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default SignedInScreen;
