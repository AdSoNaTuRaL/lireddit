import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useForgotPasswordMutation } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  return (
    <Wrapper variant='small'>
      <Formik 
        initialValues={{ email: '' }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({isSubmitting}) => 
          complete ? (
            <Box>
              if an account with that email exists, we sent you can email
            </Box>
          ) : 
          (
            <Form>
              <InputField
                name="email"
                placeholder="Type your email"
                label="E-mail"
                type="email"
              />
              <Button 
                mt={4} 
                type="submit" 
                isLoading={isSubmitting} 
                variantColor="teal"
              >
                Forgot password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
}

export default withUrqlClient(createUrqlClient)(ForgotPassword);