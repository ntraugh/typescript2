type ID = string    
type PopularTag = string
type MaybePopularTag = PopularTag | null

// creating a global interface to use for our "users"
interface UserInterface {
    id?: ID;
    name: string;
    age?: number;
    getMessage(): string;
}

interface newUserInterface {
    name: string,
    age: string,

}

const popularTags: PopularTag[] = ["dragon", "cofee"]

const dragonsTag: MaybePopularTag = "dragon"

let username: string = "alex";
// setting pageName to be either type of string OR number
let pageName: string | number = "1"

let errorMessage: string | null = null;

let newUser: newUserInterface | null = null



// specifying the type of parameters we pass in as well as the output we expect from the function

const getFullName = (name: string, surname: string): string => {
    return  name + " " + surname;
}; 



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

