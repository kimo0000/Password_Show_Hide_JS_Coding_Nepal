const wrapper = document.querySelector(".wrapper"),
  input = document.querySelector(".inp"),
  eye = document.querySelector(".wrapper i"),
  password = document.querySelector(".pass");

console.log(input, eye, password);

input.addEventListener("click", () => {
  wrapper.classList.add("active");
});

eye.addEventListener("click", () => {
  if (input.value) {
    input.type = input.type === "password" ? "text" : "password";
    eye.className =
      input.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
  }
});
