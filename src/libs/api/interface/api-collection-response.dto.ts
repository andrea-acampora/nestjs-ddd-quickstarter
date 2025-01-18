import { Collection } from '../dto/collection';

export interface ApiCollectionResponse<E> {
  readonly data: E[];
  readonly offset: number;
  readonly limit: number;
  readonly total: number;
}

export const toApiCollectionResponse = <E>(
  data: Collection<E>,
  offset: number,
  limit: number,
): ApiCollectionResponse<E> => {
  return {
    data: data.items,
    offset,
    limit,
    total: data.total,
  };
};
