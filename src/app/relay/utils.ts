import { commitMutation as relayCommitMutation } from 'react-relay';
import { MutationParameters, Environment, MutationConfig } from 'relay-runtime';

/**
 * Promise-wrapper for the original Relay `commitMutation` function.
 */
export function commitMutation<
  TOperation extends MutationParameters = MutationParameters
>(
  environment: Environment,
  config: Omit<MutationConfig<TOperation>, 'onCompleted' | 'onError'>,
) {
  return new Promise<TOperation['response']>((resolve, reject) => {
    relayCommitMutation(environment, {
      onCompleted: resolve,
      onError: reject,
      ...config,
    });
  });
}
