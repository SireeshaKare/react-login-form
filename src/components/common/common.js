export const getUser = () => {
  const userstr = sessionStorage.getItem("user");
  if (userstr) return JSON.parse(userstr);
  else return null;
};

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const removeSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};
