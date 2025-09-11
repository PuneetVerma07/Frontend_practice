let form = document.querySelector("form")
let username = document.querySelector("username")
let email = document.querySelector("email")
let password = document.querySelector("password")
let confirmPassword = document.querySelector("confirmPassword")

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  fetch("url", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
      confirmPassword
    })
  })
})