export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return userStr;
  else return null;
};
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};
export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", user);
  console.log(sessionStorage);
};
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};
