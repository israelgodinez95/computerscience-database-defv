//Importamos la clase "Student" desde el archivo student.js
import { Student } from "./student.js";
import { StudentList } from "./studentList.js";

const devfStudents = new StudentList();

const formStudent = document.getElementById("form-student");

formStudent.addEventListener("submit", function (event) {
  event.preventDefault(); // prevenimos el comportamiento por defecto del formulario

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;

  const newStudent = new Student(name, surname, age); //lo unico que pedimos como requisito inicial es nombre, apellidos y edad.
  formStudent.reset(); //reset al formulario
  devfStudents.addStudent(newStudent); //agrego el nuevo objeto al arreglo allStudents[]
});

const searchStudent = document.getElementById("formSearchStudent");

searchStudent.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameOrSurename = document.getElementById("nameOrSurename").value;
  formStudent.reset();

  if ((devfStudents.searchStudent(nameOrSurename)) == true) {
    mainMenu.style.display = 'none';
    newStudentMenu.style.display = 'none';
    searchStudentMenu.style.display = 'flex';
    studentListMenu.style.display = 'none';
    studentTable2.style.display="";
  }


})





const student1 = new Student("Israel", "Godinez", 22);

student1.addSubject("historia");
student1.addSubject("biologia");
student1.addSubject("histologia");
student1.assignGrade(10, "biologia");
student1.assignGrade(1, "historia");
student1.addSubject("matematicas");
student1.addSubject("fisica");
student1.addSubject("astronomia");
student1.assignGrade(10, "astronomia");
devfStudents.addStudent(student1);
console.log(devfStudents);
/*
const student2=new Student("Pelusa","Nei",26);

student2.addSubject("historia");
student2.addSubject("biologia");


const defvStudents=new StudentList();
defvStudents.addStudent(student1);
defvStudents.addStudent(student2);
student2.addSubject("Probabilidad");
student2.assignGrade(3,"biologia");

defvStudents.displayStudentList();
*/

/*
2.- Alta de alumnos
Una vez creado el prototipo desde su sitio, deberán dar de alta alumnos, por defecto lo único que deben pedir 
como requisito al inicio es nombre, apellidos, edad.
*/

/*
let studentList=[];

const formStudent = document.getElementById("form-student");

formStudent.addEventListener("submit", function (event) {
    event.preventDefault(); // prevenimos el comportamiento por defecto del formulario

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;

    const newStudent = new Student(name, surname, age); //lo unico que pedimos como requisito inicial es nombre, apellidos y edad.
    formStudent.reset(); //reset al formulario
    studentList.push(newStudent); //agrego el nuevo objeto al arreglo allStudents[]
});
*/


/*
//funcion para desplegar la lista completa de estudiantes dados de alta, deplegados en <li>
function displayStudentList() {
    const studentTableBody = document.querySelector('#student-table tbody');
    studentTableBody.innerHTML = '';
  
    studentList.forEach((student) => {
      const studentRow = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.innerText = student.name;
      studentRow.appendChild(nameCell);
  
      const surnameCell = document.createElement('td');
      surnameCell.innerText = student.surname;
      studentRow.appendChild(surnameCell);
  
      const ageCell = document.createElement('td');
      ageCell.innerText = student.age;
      studentRow.appendChild(ageCell);
  
      const assignaturesCell = document.createElement('td');
      if (student.assignatures.length > 0) {
        const assignaturesList = document.createElement('ul');
        student.assignatures.forEach((assignature, index) => {
          const grade = student.grades[index];
          const listItem = document.createElement('li');
          listItem.innerText = `${assignature}: ${grade}`;
          assignaturesList.appendChild(listItem);
        });
        assignaturesCell.appendChild(assignaturesList);
      }
      studentRow.appendChild(assignaturesCell);
  
      const enrollButtonCell = document.createElement('td');
      const enrollButton = document.createElement('button');
      enrollButton.innerText = 'Inscribir';
      enrollButton.addEventListener('click', () => {
        enrollStudentToClass(student);
      });
      enrollButtonCell.appendChild(enrollButton);
      studentRow.appendChild(enrollButtonCell);
  
      studentTableBody.appendChild(studentRow);
    });
  }

*/

/*
//funcion para inscribir a un alumno a una asignatura, toma una instancia student como argumento y agrega la instancia a la propiedad assignatures
function enrollStudentToClass(student) {
        const assignature = prompt('Ingrese la asignatura:');
        const grade = prompt('Ingrese la nota:');
      
        if (assignature && grade) {
          student.assignatures.push(assignature);
          student.grades.push(grade);
      
          displayStudentList();
        }
      }
*/

//Obteniendo el contenido HTML de los botones del menu principal
const addStudent = document.getElementById('newStudentButton');
const backButton = document.getElementById('backButton');
const studentListButton = document.getElementById('studentListButton');
const searchStudentButton = document.getElementById('searchStudentButton');


//addEventListener en el boton newStudentMenu para activar el menu para dar de alta un nuevo estudiante
addStudent.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'flex';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'none';
})



//addEventListener en el boton backButton para regresar al menu principal
backButton.addEventListener('click', function () {
  mainMenu.style.display = 'flex';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'none';
})


//addEventListener en el boton studentListButton para desplegar la lista completa de estudiantes
studentListButton.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'flex';
  searchStudentMenu.style.display = 'none';
  devfStudents.displayStudentList();

})



//addEventListener en el boton gropuListButton para desplegar la lista completa de estudiantes
searchStudentButton.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'flex';

})


/*
const groupList = [];

function createGroup(event) {
  event.preventDefault();

  const groupNameInput = document.querySelector('#group-name');
  const groupName = groupNameInput.value;
  const studentSelect = document.querySelector('#student-select');
  const selectedStudents = Array.from(studentSelect.selectedOptions)
    .map((option) => option.value);

  const group = {
    name: groupName,
    students: selectedStudents,
  };
  groupList.push(group);

  
    displayGroupList();
    groupNameInput.value = '';
    studentSelect.selectedIndex = -1;
}
*/

/*
function displayGroupList() {
  
  const groupTableBody = document.querySelector('#group-table tbody');
  groupTableBody.innerHTML = '';

  groupList.forEach((group) => {
    const groupRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.innerText = group.name;
    groupRow.appendChild(nameCell);

    const studentsCell = document.createElement('td');
    const studentsList = document.createElement('ul');
    group.students.forEach((studentName) => {
      const listItem = document.createElement('li');
      listItem.innerText = studentName;
      studentsList.appendChild(listItem);
    });
    studentsCell.appendChild(studentsList);
    groupRow.appendChild(studentsCell);

    groupTableBody.appendChild(groupRow);
  });

  // generar opciones de estudiantes en el formulario
  const studentSelect = document.querySelector('#student-select');
  studentSelect.innerHTML = '';
  studentList.forEach((student) => {
    const option = document.createElement('option');
    option.value = student.name;
    option.innerText = `${student.name} ${student.surname}`;
    studentSelect.appendChild(option);
  });
}
*/

/*
const groupForm = document.querySelector('formGroup');
groupForm.addEventListener('submit', createGroup);
*/
