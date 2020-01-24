import Cookies from 'js-cookie';

export const getCookie1 = (key, options = {}) => Cookies.get(key, options);

export const getCookies1 = () => Cookies.get();

export const setCookie1 = (key, value, options = {}) => Cookies.set(key, value, options);

export const removeCookie1 = (key, options = {}) => Cookies.remove(key, options);

export function getCookie2(key, options = {}) {
  return Cookies.get(key, options);
}

export function getCookies2() {
  return Cookies.get();
}

export function setCookie2(key, value, options = {}) {
  return Cookies.set(key, value, options);
}

export function removeCookie2(key, options = {}) {
  return Cookies.remove(key, options);
}
