let s_btn = document.querySelector("#btn");
let uname_input = document.querySelector("#uname");
let age_input = document.querySelector("#age");
let gender_input = document.querySelector("#gender");

class User {
  constructor(uname, age, gender) {
    (this.uname = uname), (this.age = age), (this.gender = gender);
  }
}

function addUser(uname, age, gender) {
  let user1 = new User((uname = uname), (age = age), (gender = gender));
  // console.log("My name is " + user1.uname + "I am " + user1.age + "years old");

  localStorage.setItem(user1);
}

function submitUser() {
  let new_user_uname = uname_input;
  let new_user_age = age_input;
  let new_user_gender = gender_input;
  addUser(new_user_uname, new_user_age, new_user_gender);
}
// const user1 = new User(uname = "Kip", age = 22, gender = "male");
// console.log("My name is " + user1.uname + "I am " + user1.age + "years old");
