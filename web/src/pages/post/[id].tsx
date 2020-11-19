import React from 'react';
import { withUrqlClient } from 'next-urql';
import { Box, Heading } from '@chakra-ui/core';
import { Layout } from '../../components/Layout';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { useGetPostFromUrl } from '../../utils/useGetPostFromUrl';
import { EditDeletePostButtons } from '../../components/EditDeletePostButtons';

const Post = ({ }) => {
  const [{ data, error, fetching }] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return <Box>{error.message}</Box>
  }

  if (!data?.post) {
    return (
      <Layout>
        <Heading mt={80} textAlign="center">Could not find post 😥</Heading>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Box mb={4}>{data.post.text}</Box>
      <EditDeletePostButtons id={data.post.id} creatorId={data.post.creator.id} />
    </Layout>
  );
}

export default withUrqlClient(createUrqlClient)(Post);