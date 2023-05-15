//*Proyecto: Base de datos de alumnos. Modulo: Computer Science. Israel Godinez Bravo.
//*14/5/23

//*Importamos la clase "Student" desde el archivo student.js
import { Student } from "./student.js";
import { StudentList } from "./studentList.js";
import { Group } from "./Group.js";


const devfStudents = new StudentList(); //*Instancia de la clase StudentList para guardar todos nuestros objetos Student

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *2.- Alta de alumnos
/*Una vez creado el prototipo desde su sitio, deberán dar de alta alumnos, por defecto lo único que deben pedir 
como requisito al inicio es nombre, apellidos, edad.*/

const formStudent = document.getElementById("form-student");

formStudent.addEventListener("submit", function (event) {
  event.preventDefault(); // prevenimos el comportamiento por defecto del formulario

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;

  const newStudent = new Student(name, surname, age); //lo unico que pedimos como requisito inicial es nombre, apellidos y edad.
  formStudent.reset(); //reset al formulario
  devfStudents.addStudent(newStudent); //agrego el nuevo objeto al arreglo allStudents[]
  alert("Inscrito con exito");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *2

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *3.- Buscar alumno (nombre o apellido)
const searchStudent = document.getElementById('searchStudentAction');
var spottedStudent = "";

searchStudent.addEventListener('click', function (event) {
  event.preventDefault();

  var nameOrSurename = document.getElementById("nameOrSurename").value;
  if ((devfStudents.searchStudent(nameOrSurename)) != false) {
    spottedStudent = devfStudents.searchStudent(nameOrSurename);
    mainMenu.style.display = 'none';
    newStudentMenu.style.display = 'none';
    searchStudentMenu.style.display = 'flex';
    studentListMenu.style.display = 'none';
    studentTable2.style.display = "";
    formSearchStudent.reset();
    alert("Encontrado");
  } else if ((devfStudents.searchStudent(nameOrSurename)) == false) {
    alert("No se encuentra");
    formSearchStudent.reset();
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *4.- Agregar materia nueva a Student
const newSubject = document.getElementById('enroll');

newSubject.addEventListener('click', function () {
  let newAssignature = prompt("Materia:");
  spottedStudent.addSubject(newAssignature);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *4

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *5.- Asignar una calificacion a Student
const newGrade = document.getElementById('evaluate');

newGrade.addEventListener('click', function () {
  let assignature = prompt("Materia:");
  let grade = parseInt(prompt("Calificacion:"));
  spottedStudent.assignGrade(grade, assignature);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *5

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *6.- Ver el promedio final
const getAverage = document.getElementById('average');

getAverage.addEventListener('click', function () {
  alert(spottedStudent.getFinalGrade())
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *6

const student1 = new Student("Israel", "Godinez", 27);
const student2 = new Student("Pelusa", "Nei", 26);
const student3 = new Student("Jamaico", "Camion", 2);
const student4 = new Student("Coquis", "Bolis", 1);

devfStudents.addStudent(student1);
devfStudents.addStudent(student2);
devfStudents.addStudent(student3);
devfStudents.addStudent(student4);

student1.addSubject("Biofisica");
student1.addSubject("Salud");
student1.addSubject("Herramientas");
student1.assignGrade(20, "Biofisica");
student1.assignGrade(100, "Salud");
student1.assignGrade(150, "Herramientas");

student2.addSubject("Estadistica");
student2.addSubject("Programacion");
student2.addSubject("Imagenes");
student2.assignGrade(10, "Estadistica");
student2.assignGrade(60, "Programacion");
student2.assignGrade(70, "Imagenes");

student3.addSubject("Automatizacion");
student3.addSubject("Instrumentacion");
student3.addSubject("Circuitos");
student3.assignGrade(5, "Automatizacion");
student3.assignGrade(5, "Instrumentacion");
student3.assignGrade(50, "Circuitos");

student4.addSubject("Matematicas");
student4.addSubject("Biologia");
student4.addSubject("Filosofia");
student4.assignGrade(100, "Matematicas");
student4.assignGrade(30, "Biologia");
student4.assignGrade(50, "Filosofia");

console.log(student4.getFinalGrade());

const A = new Group("A");
A.addStudentGroup(((devfStudents.searchStudent("Coquis"))));
console.log(A);
A.addStudentGroup(((devfStudents.searchStudent("Israel"))));
console.log(A.selectedStudents);
console.log(A.getAverage());
console.log(devfStudents);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *7.- Crear/Ver grupos

const devfGroupList = [];

function createGroup(event) {
  event.preventDefault();

  const groupNameInput = document.querySelector('#group-name');
  const groupName = groupNameInput.value;
  const studentSelect = document.querySelector('#student-select');
  const selectedStudents = Array.from(studentSelect.selectedOptions)
    .map((option) => option.value);


  const group = new Group(groupName);
  group.addStudentGroup(selectedStudents);

  devfGroupList.push(group);
  console.log(group);
  displayGroupList();
  groupNameInput.value = '';
  studentSelect.selectedIndex = -1;
}

function displayGroupList() {
  const groupTableBody = document.querySelector('#group-table tbody');
  groupTableBody.innerHTML = '';
  console.log(devfGroupList);
  devfGroupList.forEach((group) => {
    const groupRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.innerText = group.name;
    groupRow.appendChild(nameCell);

    const studentsCell = document.createElement('td');
    const studentsList = document.createElement('ul');
    group.selectedStudents.forEach((studentName) => {

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
  devfStudents.studentList.forEach((student) => {
    const option = document.createElement('option');
    option.value = student.name;
    option.innerText = student.name + " " + student.surname;
    studentSelect.appendChild(option);
  });
}

displayGroupList();
const groupForm = document.querySelector('#formNewGroup');
groupForm.addEventListener('submit', createGroup);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *7

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *8.-Obtener contenido HTML de los botones para navegar en los menus + EventListeners 
//Obteniendo el contenido HTML de los botones del menu principal
const newStudentButton = document.getElementById('newStudentButton');
const backButton = document.getElementById('backButton');
const studentListButton = document.getElementById('studentListButton');
const searchStudentButton = document.getElementById('searchStudentButton');
const newGroupButton = document.getElementById('newGroupButton');

//addEventListener en el boton newStudentMenu para activar el menu para dar de alta un nuevo estudiante
newStudentButton.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'flex';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'none';
  studentTable2.style.display = 'none';
  newGroupMenu.style.display = 'none';
})

//addEventListener en el boton backButton para regresar al menu principal
backButton.addEventListener('click', function () {
  mainMenu.style.display = 'flex';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'none';
  studentTable2.style.display = 'none';
  newGroupMenu.style.display = 'none';

})

//addEventListener en el boton studentListButton para desplegar la lista completa de estudiantes
studentListButton.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'flex';
  searchStudentMenu.style.display = 'none';
  studentTable2.style.display = 'none';
  newGroupMenu.style.display = 'none';
  devfStudents.displayStudentList();
})

//addEventListener en el boton gropuListButton para desplegar la lista completa de estudiantes
searchStudentButton.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'flex';
  studentTable2.style.display = 'none';
  newGroupMenu.style.display = 'none';
})

newGroupButton.addEventListener('click', function () {
  mainMenu.style.display = 'none';
  newStudentMenu.style.display = 'none';
  studentListMenu.style.display = 'none';
  searchStudentMenu.style.display = 'none';
  studentTable2.style.display = 'none';
  newGroupMenu.style.display = 'flex';
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// *8