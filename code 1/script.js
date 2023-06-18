//PROMPT THE USER TO FILL IN THEIR MARKS
const prompt=require("prompt-sync")({sigint:true});
 
const studentMarks=parseInt(prompt("enter your mark: "))
console.log(studentMarks)
//conditional statements
if(studentMarks > 79){
    console.log("the attained grade is A")
}
else if(studentMarks >=60 &&  studentMarks <=79){
    console.log("the mark attained is B")

} else if (studentMarks >=49&& studentMarks <=59){
    console.log("the grade attained is C")
    
} else if(studentMarks >=40 && studentMarks <=49){
    console.log("the grade attained is D")

}
else (studentMarks <40)
    console.log("the attained grade is E")
