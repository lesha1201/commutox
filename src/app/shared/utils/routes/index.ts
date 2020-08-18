import { generatePath } from 'react-router-dom';
import { ValuesType } from 'utility-types';
import * as qs from 'query-string';

import { PATH } from 'app/shared/constants';

type PATHType = typeof PATH;

export type BuildPathPath = ValuesType<PATHType>;

export type BuildPathOptions = {
  queryParams?: Record<string, any>;
  pathParams?: Record<string, string | number | boolean | undefined>;
};

/**
 * Build url with query and path params.
 *
 * @example
 * buildPath('/chats/:id', { pathParams: { id: 123 }, queryParams: { filter: 'someFilter' } }) // "/chats/123?filter=someFilter"
 */
export function buildPath(
  path: BuildPathPath,
  { pathParams, queryParams }: BuildPathOptions,
) {
  let query = '';

  if (queryParams) {
    const queryParamsString = qs.stringify(queryParams);
    query = queryParamsString.length > 0 ? `?${queryParamsString}` : '';
  }

  const generatedPath = generatePath(path, pathParams);

  return `${generatedPath}${query}`;
}
