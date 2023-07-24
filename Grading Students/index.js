function gradingStudents(grades) {
    if(grades != null || grades.length > 0){
        for(let i = 0; i < grades.length; i++){
            if(grades[i] > 37){
                let restdiv = parseInt((grades[i] / 5).toFixed(1).split(".")[1]);
                if(restdiv > 5){
                    grades[i] = (restdiv == 6) ? grades[i] + 2 : grades[i] + 1;
                }  
            }
            console.log(grades[i]);
        }
    }

    return grades;

}

const grades = [75,67,40,33];
gradingStudents(grades);