

// el typeScrip tiene tipado dinamico 

// typeScript permite definir tipos de datos para las variables, funciones y objetos
function suma(a: number, b: number): number {
    return a + b;
}

suma(1, 2); // 3
//suma("a", 2) // "a2"  
//suma("a", "b") // "ab"


// usar any es dependiendo de como lo usaras 
let a: number = 1
let b: number[] = [1, 2, 3]
a = "2" as unknown as number // Error: Type 'string' is not assignable to type 'number'.

interface User {
    name: string;
    age: number;
    email?: string; // Propiedad opcional
}
class UserClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }

}
const usere: User = {
    name: "John",
    age: 30,
}

const useree: UserClass = {
    name: "John",
    getName: () => "John",
}


const userClass : UserClass = new UserClass("Pepe");