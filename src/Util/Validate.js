export const chakeValidData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (name !== null && !isNameValid) {
  //   return "Name is Not Valid";
  // }

  if (!isEmailValid) {
    return "Email is Not Valid";
  }
  if (!isPasswordValid) {
    return "Password is Not Valid";
  }

}
