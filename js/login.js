//login JS
import { createHeader } from "../js/components/dom.js";
import { saveUser } from "./modules/userAPI.js";

let header = document.getElementById("header");
header.append(createHeader());

let user = {};

let loginFields = document.querySelectorAll("#loginForm input");

loginFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    user[property] = value;
  });
});

document.getElementById("btnLogin").addEventListener("click", async () => {
  let response = await saveUser(user);
  console.log(response);
  if (response.name) {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    localStorage.setItem("user", user.email);
    window.open("../index.html", "_self");
  }
});
