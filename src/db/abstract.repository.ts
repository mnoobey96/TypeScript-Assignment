

abstract class User{
    constructor(public Id:number,
                public name:string,
                public email:string,
                private password:string,
                protected phone:string,
                private age:number) {
            this.Id=Id;
            this.name=name;
            this.email=email;
            this.password=password;
            this.phone=phone;
            if(age>=18 && age <=60){
                this.age=age;
            }else{
                throw new Error("Age must be between 18 and 60");
            }
    }
    public displayInfo():void{
        console.log(`ID is  ${this.Id}`);

        console.log(`Name is  ${this.name}`);

        console.log(`Email is  ${this.email}`);

        console.log(`phone is  ${this.phone}`);

        console.log(`Age is ${this.age}`);
    }


}

class Admin extends User{
        constructor(Id:number,
                    name:string,
                    email:string,
                    password:string,
                    phone:string,
                    age:number
        ) {
            super(Id,name,email,password,phone,age);
        }
    public manageNotes(): void {
        console.log("Admin is managing notes");
}
}

class Note {
    constructor(public Id:number,
                public title:string,
                public content:string,
                public userId:User) {

    }
    public preview():string{
        return this.content;

    }
}

class NoteBook extends Note{

}

