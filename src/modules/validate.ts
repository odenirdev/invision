export const validateEmail = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const validatePassword = (password: string) => {
  return !(password.length < 6);
}