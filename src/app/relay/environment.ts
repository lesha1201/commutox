import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters,
} from 'relay-runtime';

import { API_URL } from 'app/shared/constants';

function fetchQuery(request: RequestParameters, variables: Variables) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables: variables,
    }),
  }).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
