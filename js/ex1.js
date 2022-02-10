let firstname = prompt("Please enter your first name: ");
let numUnits = prompt("Enter the number of units completed" );

if (Number(numUnits) >= 0) {
    //console.log("valid input");
    units = Number(numUnits);
    let grade;
    if(units <= 30) {
        grade = "Freshman";
    } else if (units <= 60) {
        grade = "Sophomore";
    } else if (units <= 90) {
        grade = "Junior";
    } else if (units <= 120) {
        grade = "Senior";
    }
    console.log(`Hello ${firstname}`);
    console.log(`Your grade standing is ${grade}`);
}
else {
    console.log(`${firstname} you entered ${numUnits}, You must enter a number >= 0`);
}