// creating a global interface to use for our "users"
interface User {
    name: string
    age?: number
}


// specifying the type of parameters we pass in as well as the output we expect from the function

const getFullName = (name: string, surname: string): string => {
    return  name + " " + surname;
}; 

console.log(getFullName("nate", "traugh"))


// typescript out of the box can tell what your object value types are
const user: User =  {
    name: "joey",
    age: 30
}

const user2: User = {
    name: "Smith",
}
