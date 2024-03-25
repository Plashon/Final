/* Person */
class Person {
    name = "";
    address = "";
    email = "";
    constructor(name,address,email){
        this.name = name;
        this.address = address;
        this.email = email;
    }
    toString(){
        return `${this.name}`
    }
}
class Student extends Person{
    studentId = "";
    year = 0;
    courses = []
    constructor(name,address,email,studentId,year){
        super(name,address,email)
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(course){
        this.courses.push(course);
    }
    dropCourse(course){
        let drop = this.courses.indexOf(course)
        this.courses.splice(drop,1,"drop")
    } 
    getCourse(){
        return this.courses
    }
    toString(){
        return `${super.toString()}`
    }
    toStringDetail(){
        return `Student: ${super.toString()} Student ID: ${this.studentId} Year: ${this.year}
        ${this.courses.toString()}`
    }
}
class Professor extends Person{
    staffId = "";
    courses = [];
    constructor(name,address,email,staffId){
        super(name,address,email)
        this.staffId = staffId;
    }
    teachCourse(course){
        this.courses = course
        return `teach ${this.courses}`
    }
    stopTeachCourse(course){
        this.courses = course
        return `stopteach ${this.courses}`
    }
    getCourse(){
        return this.teaccCourse()
    }
    toString(){
        return `${super.toString()}`
    }
    toStringDetail(){
        return `Professor: ${super.toString()} Staff ID: ${this.staffId}
        Course: ${this.courses.toString()} `
    }
}

/* University */
class University{
    name = "";
    location = "";
    depsrtments = [];
    students = [];
    professors = [];
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    addDepartment(depsrtment){
        this.depsrtments.push(depsrtment);
    }
    addStudent(student){
        this.students.push(student);
    }
    addProfessor(professor){
        this.professors.push(professor);
    }
    removeDepartment(depsrtmentName){
        if(this.depsrtments.name = depsrtmentName){
            delete this.depsrtments;
        }
    }
    removeStudent(studentName){
        if(this.students.name = studentName){
            delete this.students;
        }
    }
    removeProfessor(professorName){
        if(this.professors.name = professorName){
            delete this.professors;
        }
    }
    getDepartment(){
        return this.depsrtments;
    }
    getStudent(){
        return this.students;
    }
    getProfessor(){
        return this.professors;
    }
    
    toString(){
        return `University: ${this.name}
        Location: ${this.location}
        Department: ${this.depsrtments.toString()}
        Student: ${this.students.toString()}
        Professor: ${this.professors.toString()}
        `
    }
    toStringDetail(){
        return `Student in the University
        `
    }

}
 
class Department{
    name = "";
    students = [];
    professors = [];
    courses =[];
    constructor(name){
        this.name = name;
    }
    addCourse(course){
        this.courses.push(course)
    }
    removeCourse(courseCode){
        if(this.courses.code = courseCode){
            delete this.courses;
        }
    }
    addStudent(student){
        this.students.push(student)
    }
    removeStudent(studentName){
        if(this.students.name = studentName){
            delete this.students
        }
    }
    addProfessor(professor){
        this.professors.push(professor);
    }
    removeProfessor(professorName){
        if(this.professors.name = professorName){
            delete this.professors;
        }
    }
    getCourse(){
        return this.courses;
    }
    getStudent(){
        return this.students;
    }
    toString(){
        return `${this.name}`
    }
    toStringDetail(){
        return `Department: ${this.name}
        Course: ${this.courses.length}
        Student: ${this.students.toString()}
        Professor: ${this.professors.toString()}
        `
    }
    
} 
class Course {
    code = "";
    title = ""
    professor = null;
    students = [];
    constructor(code,title){
        this.code = code;
        this.title = title;
        
    }
    addStudent(student){
        this.students.push(student)
    }

    removeStudent(studentName){
        if(this.studens.name = studentName){
            delete this.studens;
        }
    }   
    setProfessor(professor){
        this.professor = professor;
    }
    getProfessor(){
        return this.professor;
    }
    getStudent(){
        return this.students;
    }
    toStringDetail(){
        return `Course: ${this.code} - ${this.title}
        Professor: ${this.professor.toString()}
        Student: ${this.students.toString()}
        `
    }
    toString(){
        return `Course: ${this.title}
        `
    }
}



const main = () =>{
    //university
    const npru = new University("Nakhon Pathom Rajabhat University","85 Malaiman Rode, Nakhon Pathom, Thailand")
    //department
    const cs = new Department("Computer Science")
    const se = new Department("Software Engineering")
    //course
    const cs101 = new Course("CS101","Introduction to Programming")
    const se101 = new Course("SE101","Introduction of Database Desiign")
    //student
    const alice = new Student("Alice","Alice Home","Alice@email","S001",1)
    const bob = new Student("Bob","Bob Home","Bob@email","S002",2)
    //professor
    const worachet = new Professor("Dr. Worachet Uttha","Worachet Home","Worachet@email","P001")
    const udsanee = new Professor("Dr. Udsanee Pakdeetrakulwong","Udsanee Home","Udsanee@email","P002")


    //add department to university
    npru.addDepartment(cs)
    npru.addDepartment(se)
    //add professor to university
    npru.addProfessor(worachet)
    npru.addProfessor(udsanee)
    //add student to university
    npru.addStudent(alice)
    npru.addStudent(bob)

    //add course to department
    cs.addCourse(cs101)
    se.addCourse(se101)
    //add student
    cs.addStudent(bob)
    se.addStudent(alice)

    cs101.addStudent(alice)
    se101.addStudent(bob)
    //add professor
    cs.addProfessor(worachet)
    se.addProfessor(udsanee)
    cs101.setProfessor(worachet)
    se101.setProfessor(udsanee)
    

    //registerCourse
    alice.registerCourse(cs101)
    bob.registerCourse(se101)
    //teachCourse
    worachet.teachCourse(cs101)
    udsanee.teachCourse(se101)

    console.log(npru.toString());
    console.log(se.toStringDetail());
    console.log(cs.toStringDetail());
    console.log(cs101.toStringDetail());
    console.log(se101.toStringDetail());
    console.log(alice.toStringDetail());
    console.log(bob.toStringDetail());
    console.log(worachet.toStringDetail());
    console.log(udsanee.toStringDetail());
    console.log(npru.toStringDetail());

    
} 
main();