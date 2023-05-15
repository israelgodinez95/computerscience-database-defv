
class Group{
    constructor(name, selectedStudents){
        this.name=name;
        this.selectedStudents=[];
    }

    setName(groupName){
        this.name=groupName;
    }

    addStudentGroup(student){
        this.selectedStudents.push(student);
        console.log("Se agrego a " + student.name + " al grupo "+ this.name);
        }
    
    getAverage(){
        var auxList=this.selectedStudents;
        var groupAverage=0;
        for(let i=0; i<auxList.length; i++){
            groupAverage+=auxList[i].getFinalGrade();
        }
        return groupAverage/auxList.length;
    }
}

export { Group };