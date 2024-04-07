import React from 'react';
import {initialSignupFormValues} from '../../data/formsData';
import {Formik} from 'formik';
import FormInput from '../atoms/Inputs/FormInput';
import PasswordInputField from '../atoms/Inputs/PasswordInput';

import ErrorText from '../atoms/ErrorText';
import {SignupSchema} from '../../data/ValidationSchemas/signupSchema';
import {InitialSignupFormType} from '../../data/formsData.types';
import {User} from '../../data/data.types';
import {storeUserInApi} from '../../service/usersApi';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigatorNavigationProps} from '../../navigation/NativeStackNavigation/NativeStackNavigator.types';
import NavigationButton from '../atoms/Buttons/NavigationButton';

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SignupForm = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();

  const handleSignup = (
    values: InitialSignupFormType,
    {resetForm}: {resetForm: () => void},
  ) => {
    const user: User = {
      id: '1',
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      password: values.password,
      token: '',
      friendsIds: [],
      avatar: '',
    };
    storeUserInApi(user);
    resetForm();
    navigation.navigate('SignIn');
  };

  return (
    <Formik
      initialValues={initialSignupFormValues}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}>
      {({handleChange, handleBlur, submitForm, values, errors, touched}) => (
        <>
          <FormInput
            placeholder="First name..."
            handleChangeText={handleChange('firstName')}
            handleBlur={handleBlur('firstName')}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName ? (
            <ErrorText error={errors.firstName} />
          ) : (
            <></>
          )}
          <FormInput
            placeholder="Last name..."
            handleChangeText={handleChange('lastName')}
            handleBlur={handleBlur('lastName')}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName ? (
            <ErrorText error={errors.lastName} />
          ) : (
            <></>
          )}
          <FormInput
            placeholder="Email..."
            handleChangeText={handleChange('email')}
            handleBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <ErrorText error={errors.email} />
          ) : (
            <></>
          )}
          <PasswordInputField
            placeholder={'Password...'}
            handleChangeText={handleChange('password')}
            handleBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <ErrorText error={errors.password} />
          ) : (
            <></>
          )}
          <PasswordInputField
            placeholder={'Repeat password...'}
            handleChangeText={handleChange('repeatPassword')}
            handleBlur={handleBlur('repeatPassword')}
            value={values.repeatPassword}
          />
          {errors.repeatPassword && touched.repeatPassword ? (
            <ErrorText error={errors.repeatPassword} />
          ) : (
            <></>
          )}
          <NavigationButton onPress={handleSubmit(submitForm)} name="Submit" />
        </>
      )}
    </Formik>
  );
};

export default SignupForm;
