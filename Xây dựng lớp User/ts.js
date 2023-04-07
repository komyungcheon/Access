var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    // getInfo(){
    //     return this.name + this.email
    User.prototype.getInfo = function () {
        return this._name + this._email;
    };
    User.prototype.getisAdmin = function () {
        if (this._role == 1) {
            return "admin";
        }
        else if (this._role == 2) {
            return 'la nguoi dung binh thuong';
        }
        else
            return undefined;
    };
    return User;
}());
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
var user = new User("Phan xao lam", "shy0610", 3);
console.log(user.getisAdmin());
