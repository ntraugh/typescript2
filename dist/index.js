"use strict";
const popularTags = ["dragon", "cofee"];
let username = "alex";
let pageName = "1";
let errorMessage = null;
let newUser = null;
const getFullName = (name, surname) => {
    return name + " " + surname;
};
console.log(getFullName("nate", "traugh"));
const user = {
    name: "joey",
    age: 30,
    getMessage() {
        return "Hello" + user.name;
    }
};
const user2 = {
    name: "Smith",
    getMessage() {
        return "Hello" + user.name;
    },
};
console.log(user.getMessage());
//# sourceMappingURL=index.js.map