export interface User {
    id: string,
    credentials: userCredentials
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    address: string,
}

export interface userCredentials {
    username: string,
    password: string
}