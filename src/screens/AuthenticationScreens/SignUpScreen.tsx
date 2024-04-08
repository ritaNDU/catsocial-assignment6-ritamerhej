import React from 'react';
import SignupForm from '../../components/molecules/SignupForm';
import AuthenticationScreensTemplate from '../../components/templates/AuthenticationScreensTemplate';

const SignUpScreen = () => {
  return (
    <AuthenticationScreensTemplate name="Register">
      <>
        <SignupForm />
      </>
    </AuthenticationScreensTemplate>
  );
};

export default SignUpScreen;
