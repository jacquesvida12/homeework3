const today = prompt("Please enter the first three letters of today in lowercase. Ex: wed");
switch (today) {
    case "mon":
        console.log(`You entered: ${today} `);
        console.log("The following day is: Tuesday");
        break;
    case "tue":
            console.log(`You entered: ${today} `);
            console.log("The following day is: Wednesday");
            break;
    case "wed":
            console.log(`You entered: ${today} `);
            console.log("The following day is: Thursday");
            break;   
    case "thu":
            console.log(`You entered: ${today} `);
            console.log("The following day is: Friday");
            break;
    case "fri":
            console.log(`You entered: ${today} `);
            console.log("The following day is: Saturday");
            break;
    case "sat":
            console.log(`You entered: ${today} `);
            console.log("The following day is: Sunday");
            break;
    case "sat":
            console.log(`You entered: ${today} `);
            console.log("The following day is: Sunday");
            break;
    default:
        console.log("Not a valid day, Please try again: the first three letters of today's name in lowercase");

}