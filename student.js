/*
1.- Crear un prototipo alumno, el cual debe incluir:
Nombre
Apellidos
Edad
Materias inscritas
Calificaciones
*/

class Student {
    constructor (name, surname, age, assignatures, grades){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.assignatures=[];
        this.grades=[];
    }

    addSubject(newAssignature){
        this.assignatures.push(newAssignature);
        this.grades.push(null);
        console.log("Se asigno la clase de "+ newAssignature + " al alumno: "+ this.name);
    }

    assignGrade(grade, assignature){
        var assignatureList=this.assignatures;
        for(let i=0; i<assignatureList.length; i++){{
            if(assignature===assignatureList[i]){
                this.grades[i]=grade;
                console.log("Calificacion de "+ grade + " en la materia de "+ assignatureList[i]);
            } 
        }}
    }

    getFinalGrade(){
        let average=0;
        for(let i=0; i<this.grades.length; i++){
        average=average+this.grades[i]; 
        }
        return average/this.grades.length;
    }

}

// exportamos la clase Student
export { Student };  
