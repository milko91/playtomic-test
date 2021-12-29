export const USER_STORAGE_KEY = 'user';

export const setToSessionStorage = (key: string, value: unknown) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSessionStorage = (key: string) => {
  const value = window.sessionStorage.getItem(key);
  if (!value) {
    return null;
  }
  return JSON.parse(value);
};
