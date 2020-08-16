import { graphql, Environment } from 'react-relay';

import { commitMutation } from '../utils';
import { SignUpInput, SignUpMutation } from './__generated__/SignUpMutation.graphql';

const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      user {
        id
        email
      }
    }
  }
`;

function commit(environment: Environment, input: SignUpInput) {
  return commitMutation<SignUpMutation>(environment, {
    mutation,
    variables: {
      input,
    },
  });
}

export default { commit };
