let grades = new Map([
    ["A", 4],
    ["A-", 3.7],
    ["B+", 3.3],
    ["B", 3],
    ["B-", 2.7],
    ["C+", 2.3],
    ["C", 2],
    ["C-", 1.7],
    ["D+", 1.3],
    ["D", 1],
    ["D-", 0.7],
    ["F", 0],
])

function calculateGPA(userGrades: string[]){
    let allPoints: number = 0;
    let numberGradeAvg: number = 0;
    for(let i = 0; i < userGrades.length; i++){
        let points = grades.get(userGrades[i]);
        allPoints += points ? points : 0;
    }
    numberGradeAvg = allPoints / userGrades.length;
}
