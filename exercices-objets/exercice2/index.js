let student = {
	name : "Steven",
	age : 19,
	grades : [12, 14, 8],
	average : 0
};

let sum = 0;
let count = 0;

for(let i = 0; i < student.grades.length; i++)
{
    sum += student.grades [i];
    count++;
}

student.average = sum / count;

student.average = "11.333333333333334";

console.log(student.average);

