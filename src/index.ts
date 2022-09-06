// creating a global interface to use for our "users"
interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}


// specifying the type of parameters we pass in as well as the output we expect from the function

const getFullName = (name: string, surname: string): string => {
    return  name + " " + surname;
}; 

console.log(getFullName("nate", "traugh"))


// typescript out of the box can tell what your object value types are
const user: UserInterface =  {
    name: "joey",
    age: 30,
    getMessage() {
        return "Hello" + user.name
    }
}

const user2: UserInterface = {
    name: "Smith",
    getMessage() {
        return "Hello" + user.name
    },
}

console.log(user.getMessage())
