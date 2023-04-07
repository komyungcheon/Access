class Instructor {
    constructor({name,role = "assistant"} = {}) {
        this.name = name;
        this.role = role;
    }
    renderDetails(){
        console.log(`${this.name},${this.role}`)
    }
    static helloWorld(){
        console.log('Hi there');
    }
    static canTeach(instructor){
        return(instructor.role === 'classroom')
    }
}
let app1 = new Instructor({'name':'Brian'});
let app2 = new Instructor({'name':'Alice',"role":'classroom'});
app1.renderDetails();
app2.renderDetails()
Instructor.helloWorld()
console.log(`${app1.name} can teach : ${Instructor.canTeach(app1)}`);
console.log(`${app2.name} can teach : ${Instructor.canTeach(app2)}`);