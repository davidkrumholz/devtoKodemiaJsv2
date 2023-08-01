//login JS
import { createHeader } from "../js/components/dom.js";

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

const saveUser = async (userObject) => {
  let response = await fetch(
    "https://equipo3js-f94ab-default-rtdb.firebaseio.com/users/.json",
    { method: "POST", body: JSON.stringify(userObject) }
  );

  let data = await response.json();
  return data;
};

document.getElementById("btnLogin").addEventListener("click", async () => {
  let response = await saveUser(user);
  console.log(response);
  if (response.name) {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    window.open("../index.html", "_self");
  }
});
