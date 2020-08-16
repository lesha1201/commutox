import { graphql, Environment } from 'react-relay';

import { commitMutation } from '../utils';
import { SignInInput, SignInMutation } from './__generated__/SignInMutation.graphql';

const mutation = graphql`
  mutation SignInMutation($input: SignInInput!) {
    signIn(input: $input) {
      user {
        id
        email
      }
    }
  }
`;

function commit(environment: Environment, input: SignInInput) {
  return commitMutation<SignInMutation>(environment, {
    mutation,
    variables: {
      input,
    },
  });
}

export default { commit };
