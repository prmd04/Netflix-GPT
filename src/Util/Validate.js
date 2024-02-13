export const chakeValidData = (isSignin,email,password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isSignin &&!isNameValid) {
    return "Name is Not Valid";
  }
  else if (!isEmailValid) {
    return "Email is Not Valid";
  }
  else if (!isPasswordValid) {
    return "Password is Not Valid";
  }
  

}
