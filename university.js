class University {
    name = "";
    location = "";
    departments = [];
    students = [];
    professors = [];
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
    addDepartment(department) {
        this.departments.push(department)
    }
    addStudent(student) {
        this.students.push(student)
    }
    addProfessor(professor) {
        this.professors.push(professor)
    }
    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getDepartments() {
        let department = "";
        for (let i = 0; i < this.departments.length; i++) {
            department += this.departments[i].name + ", "

        } return department

    }
    getStudents() {
        let student = "";
        for (let i = 0; i < this.students.length; i++) {
            student += this.students[i].name + ", "

        } return student
    }
    getProfessors() {
        let professor = "";
        for (let i = 0; i < this.professors.length; i++) {
            professor += this.professors[i].name + ", "

        } return professor
    }
    toString() {
        return `University: ${this.name}, \n\tLocation: ${this.location},\n\tDepartment: ${this.getDepartments()}\n\tStudent: ${this.getStudents()}\n\tProfessor: ${this.getProfessors()}\n`
    }
}
//------------- Department
class Department {
    name = "";
    courses = [];
    students = [];
    professors = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    addStudent(student) {
        this.students.push(student)
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    addProfessor(professor) {
        this.professors.push(professor)
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getCourses() {
        return this.courses.length
    }

    getStudents() {
        let student = "";
        for (let i = 0; i < this.students.length; i++) {
            student += this.students[i].name + ", "

        } return student
    }
    getProfessors() {
        let professor = "";
        for (let i = 0; i < this.professors.length; i++) {
            professor += this.professors[i].name + ", "

        } return professor
    }
    toString() {
        return `Department: ${this.name},\n\tCourse: ${this.getCourses()}\n\tStudent: ${this.getStudents()}\n\tProfessor: ${this.getProfessors()}\n`
    }
}
class Course {
    code = "";
    title = "";
    professor = null;
    students = [];
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
    addStudent(student) {
        this.students.push(student)
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    setProfessor(professor) {
        this.professor = professor
    }
    getStudents() {
        let student = "";
        for (let i = 0; i < this.students.length; i++) {
            student += this.students[i].name + ", "

        } return student
    }
    getProfessor() {
        return this.professor
    }
    setProfessor(professor){
        this.professor = professor;
    }
    toString() {
        return `Course: ${this.code} - ${this.title},\n\tProfessor: ${this.getProfessor()},\n\tStudent: ${this.getStudents()}\n`
    }
}
//----------PerSon
class Person {
    name = "";
    address = "";
    email = "";
    constructor(name, address, email) {
        this.name = name;
        this.address = address;
        this.email = email;
    }
    toString() {
        return `Person: ${this.name}, ${this.address}, ${this.email}`
    }
}

//-------------Student
class Student extends Person {
    studentId = "";
    year = 0;
    courses = [];
    constructor(name, address, email, studentId, year) {
        super(name, address, email);
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(course) {
        this.courses.push(course)
    }
    dropCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let course = "";
        for (let i = 0; i < this.courses.length; i++) {
            course += this.courses[i].title + ", "

        } return course
    }

    toString() {
        return `Student: ${this.name}, Student ID: ${this.studentId}, Year: ${this.year},\n\tCourses: ${this.getCourses()}\n`
    }
}
class Professor extends Person {
    staffId = "";
    courses = [];
    constructor(name, address, email, staffId) {
        super(name, address, email)
        this.staffId = staffId;
    }
    teachCourse(course) {
        this.courses.push(course)
    }
    stopTeachingCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let course = "";
        for (let i = 0; i < this.courses.length; i++) {
            course += this.courses[i].title + ", "

        } return course
    }
    toString() {
        return `Professor: ${this.name}, Staff ID: ${this.staffId},\n\tCourses: ${this.getCourses()}\n`
    }
}
main = () => {
    // Creating University
  const myUniversity = new University(
    "Nakhon Pathom Rajabhat University",
    "85 Malaiman Road, Nakhon Pathom, Thailand"
  );

  // Creating Departments
  const department1 = new Department("Computer Science");
  const department2 = new Department("Software Engineering");

  // Adding Departments to University
  myUniversity.addDepartment(department1);
  myUniversity.addDepartment(department2);

  // Creating Students
  const student1 = new Student(
    "Alice",
    "123 Kanchanaburi",
    "alice@example.com",
    "S001",
    1
  );
  const student2 = new Student(
    "Bob",
    "456 Ratchaburi",
    "bob@example.com",
    "S002",
    2
  );

  // Adding Students to University
  myUniversity.addStudent(student1);
  myUniversity.addStudent(student2);

  // Adding Students to Department
  department1.addStudent(student1);
  department2.addStudent(student2);

  // Creating Professors
  const professor1 = new Professor(
    "Dr. Worachet Uttha",
    "789 Phetchakaseam road",
    "wuttha@example.com",
    "P001"
  );
  const professor2 = new Professor(
    "Dr. Udsanee Pakdeetrakulwong",
    "101 Wangtaku",
    "udsanee@example.com",
    "P002"
  );

  // Adding Professors to University
  myUniversity.addProfessor(professor1);
  myUniversity.addProfessor(professor2);
  //adding Professor to department
  department1.addProfessor(professor1);
  department2.addProfessor(professor2);
  // Creating Courses
  const course1 = new Course(
    "CS101",
    "Introduction to Programming",
    professor1
  );
  const course2 = new Course(
    "SE101",
    "Introduction of Database Design",
    professor2
  );

  //adding student to course
  course1.addStudent(student1);
  course2.addStudent(student2);
  course1.setProfessor(professor1);
  course2.setProfessor(professor2)

  // Registering Students to Courses
  student1.registerCourse(course1);
  student2.registerCourse(course2);

  // Teaching Courses by Professors
  professor1.teachCourse(course1);
  professor2.teachCourse(course2);

  //add course to department
  department1.addCourse(course1);
  department2.addCourse(course2);

  // Printing Information
  console.log(myUniversity.toString());
  console.log(department1.toString());
  console.log(department2.toString());
  console.log(course1.toString());
  console.log(course2.toString());
  console.log(student1.toString());
  console.log(student2.toString());
  console.log(professor1.toString());
  console.log(professor2.toString());

  // Printing all students in the university
  console.log("Students in the University:");
  myUniversity.students.forEach((student) => {
    console.log(student.toString());
  });

  // Printing all professors in the university
  console.log("Professors in the University:");
  myUniversity.professors.forEach((professor) => {
    console.log(professor.toString());
  });

  // Printing all departments in the university
  console.log("Departments in the University:");
  myUniversity.departments.forEach((department) => {
    console.log(department.toString());
  });
}

main();