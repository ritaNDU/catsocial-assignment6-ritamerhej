import {Alert} from 'react-native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {initialSigninFormValues} from '../../data/formsData';
import FormInput from '../atoms/Inputs/FormInput';
import PasswordInputField from '../atoms/Inputs/PasswordInput';
import base64 from 'react-native-base64';

import {SigninSchema} from '../../data/ValidationSchemas/signinSchema';
import {InitialSigninFormType} from '../../data/formsData.types';
import {getAllUsersFromApi} from '../../service/usersApi';
import {getUserByEmail} from '../../utils/usersUtils';
import useManageUser from '../../hooks/useManageUser';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import useManageSignedInUser from '../../hooks/useManageSignedInUser';

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SigninForm = () => {
  const {signUserIn} = useManageUser();
  const {loadSignedInUser} = useManageSignedInUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async (values: InitialSigninFormType) => {
    const allUsers = await getAllUsersFromApi();
    let user = getUserByEmail(allUsers, values.email);
    setIsLoading(true);
    if (user && user.password === values.password) {
      user.token = base64.encode(`${user.id} ${user.email}`);
      await signUserIn(user);
      await loadSignedInUser(user.id);
    } else {
      Alert.alert('Incorrect credentials. Are you registered?');
    }
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={initialSigninFormValues}
      onSubmit={handleSignin}
      validationSchema={SigninSchema}>
      {({handleChange, handleBlur, submitForm, values, errors, touched}) => (
        <>
          <FormInput
            placeholder="Email Address"
            handleChangeText={handleChange('email')}
            handleBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />

          <PasswordInputField
            placeholder={'Password'}
            handleChangeText={handleChange('password')}
            handleBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
          />
          <NavigationButton
            onPress={handleSubmit(submitForm)}
            name="Submit"
            isLoading={isLoading}
          />
        </>
      )}
    </Formik>
  );
};

export default SigninForm;
