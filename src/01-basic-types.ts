// Verfügbare Typen in TypeScript
let myString = 'hello world';
let myBoolean = false;
let myNumber = 4.5;
const empty = null;
const unavailable = undefined;
const anything: any = 1; // Schaltet effektiv das TypeChecking aus, vermeiden
const externalData: unknown = false;
let impossible: never; // Zuweisen eines Werts produziert Fehler

let speedInMph: null | number = null;

speedInMph = 10;

if (typeof speedInMph === 'number') {
    speedInMph.toExponential();
    let speedInKph = speedInMph * 1.60934;
}

const user = {
    id: 1,
    username: 'philip',
    age: 29,
    professions: ['developer']
};

user.id = 2;

// const getFullName = (firstName: string, lastName: string, separator?: string) => {
const getFullName = (firstName: string, lastName: string, separator = ' ') => {
    return `${firstName}${separator}${lastName}`;
};

const fullName = getFullName('Philip', 'Braunen');

// console.log(fullName);

type User = {
    username: string;
    password: string;
    id: number;
};

const getUsername = (user: User) => {
    return user.username;
};

getUsername({ username: 'johndoe22', password: 'secret', id: 1 });

{
    const getUsername = (user: { isSignedIn: boolean; username?: string }): string => {
        if (user.isSignedIn && typeof user.username === 'string') {
            return user.username;
        }

        return 'Anonymous';
    };

    getUsername({ isSignedIn: true, username: undefined });
}

{
    type User =
        | { isSignedIn: true; username: string }
        | { isSignedIn: false; username: undefined };

    const getUsername = (user: User): string => {
        return user.isSignedIn ? user.username : 'Anonymous';
    };

    const result = getUsername({ isSignedIn: true, username: 'johndoe22' });
}
