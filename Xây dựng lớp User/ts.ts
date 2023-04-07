class User {
    private _name :string;
    private _email:string;
    private _role : number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get role(): number {
        return this._role;
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: number) {
        this._role = value;
    }

// getInfo(){
    //     return this.name + this.email
    getInfo(){
        return this._name + this._email
    }
    getisAdmin(){
        if(this._role == 1){
            return "admin"
        }  else if  (this._role == 2){
            return 'la nguoi dung binh thuong'
        } else  return undefined
    }
    }

//     getisAdmin(){
//         if(this.role == 1){
//             return "admin"
//         // } else {
//         //     return 'la nguoi dung binh thuong'
//         // }
//         }
//     }
//     getisAdmins(){
//         if (this.role == 2){
//             return 'la nguoi dung binh thuong'
//         }
//     }
// }
let user = new User("Phan xao lam","shy0610",3)
console.log(user.getisAdmin())
