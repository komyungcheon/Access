export class Employee {
    private _lastname :string;
    private _firstname : string;
    private _birthday : string;
    private _address : string;
    private _position :string;


    constructor(lastname: string, firstname: string, birthday: string, address: string, position: string) {
        this._lastname = lastname;
        this._firstname = firstname;
        this._birthday = birthday;
        this._address = address;
        this._position = position;
    }


    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }
}