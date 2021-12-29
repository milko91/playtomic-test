export type Action<E, T> = {
  type: E;
  payload: T;
};
