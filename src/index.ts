// specifying the type of parameters we pass in as well as the output we expect from the function

const getFullName = (name: string, surname: string): string => {
    return  name + " " + surname;
}; 

console.log(getFullName("nate", "traugh"))
