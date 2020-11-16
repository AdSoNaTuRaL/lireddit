import React, { useState } from 'react';
import { Box, Button, Flex, Link } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';
import { useChangePasswordMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import NextLink from 'next/link';

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');

  return (
    <Wrapper variant='small'>
      <Formik 
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, {setErrors}) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token: typeof router.query.token === 'string' ? router.query.token : '',
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ('token' in errorMap) {
              setTokenError(errorMap.token);
            }

            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            // worked
            router.push("/");
          }
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="Type your new password"
              label="New password"
              type="password"
            />
            { tokenError ? (
              <Flex>
                <Box mr={2} style={{ color: 'red' }}>{tokenError}</Box>
                <NextLink href="/forgot-password">
                  <Link>Click here to get a new one</Link>
                </NextLink>
              </Flex>
            ) : null }
            <Button 
              mt={4} 
              type="submit" 
              isLoading={isSubmitting} 
              variantColor="teal"
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default withUrqlClient(createUrqlClient)(ChangePassword);