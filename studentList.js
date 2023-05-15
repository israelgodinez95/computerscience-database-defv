class StudentList {
    constructor() {
        this.studentList = [];
    }

    addStudent(student) {
        this.studentList.push(student);
    }

    displayStudentList() {

        //console.log(this.studentList);
        const studentTableBody = document.querySelector('#student-table tbody');
        studentTableBody.innerHTML = '';


        this.studentList.forEach((student) => {
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
                    listItem.innerText = assignature + ":" + grade;
                    assignaturesList.appendChild(listItem);
                });
                assignaturesCell.appendChild(assignaturesList);
            }
            studentRow.appendChild(assignaturesCell);



            studentTableBody.appendChild(studentRow);
        });
    }

    searchStudent(studentData) {
        var auxList = this.studentList;

        for (let i = 0; i < auxList.length; i++) {
            if ((studentData === auxList[i].name) || (studentData === auxList[i].surname)) {


                const spottedStudent = auxList[i];
                const studentTableBody = document.querySelector('#studentTable2 tbody');
                studentTableBody.innerHTML = '';

                const studentRow = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.innerText = spottedStudent.name;
                studentRow.appendChild(nameCell);

                const surnameCell = document.createElement('td');
                surnameCell.innerText = spottedStudent.surname;
                studentRow.appendChild(surnameCell);

                const ageCell = document.createElement('td');
                ageCell.innerText = spottedStudent.age;
                studentRow.appendChild(ageCell);

                const assignaturesCell = document.createElement('td');
                if (spottedStudent.assignatures.length > 0) {
                    const assignaturesList = document.createElement('ul');
                    spottedStudent.assignatures.forEach((assignature, index) => {
                        const grade = spottedStudent.grades[index];
                        const listItem = document.createElement('li');
                        listItem.innerText = assignature + ":" + grade;
                        assignaturesList.appendChild(listItem);
                    });
                    assignaturesCell.appendChild(assignaturesList);
                }
                studentRow.appendChild(assignaturesCell);



                studentTableBody.appendChild(studentRow);
                return auxList[i];

            }
        } return false;
    }
}

export { StudentList };