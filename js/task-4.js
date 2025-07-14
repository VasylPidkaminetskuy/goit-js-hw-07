const searchForm = document.querySelector('.login-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const userEmail = searchForm.elements.email.value;
  const userPassword = searchForm.elements.password.value;

  if (userEmail.trim() === '' || userPassword.trim() === '') {
    return alert('All form fields must be filled in');
  }
  const dataUser = {
    email: userEmail,
    password: userPassword,
  };
  console.log(dataUser);
  searchForm.reset();
});
