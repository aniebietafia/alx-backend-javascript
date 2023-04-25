export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let query = weakMap.get(endpoint) || 0;

  query += 1;

  weakMap.set(endpoint, query);

  if (query >= 5) {
    throw Error('Endpoint load is high');
  }

  return query;
}
