interface Person {
    readonly id: number,
    myName: string,
    phone: string,
    sayHi:() => string;
}

const Mahir: Person = {
    id: 1,
    myName: "Mahir",
    phone: "01813775757",
    sayHi: () => {
        return 'Hi there....'
    },
}

console.log(Mahir.sayHi())
export{}