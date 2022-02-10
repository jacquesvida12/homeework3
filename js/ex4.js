
let count = 0;
let password = "secret";
while( count != 3) {
let passwordattempt = prompt("Please enter your password");
if (passwordattempt == password){
    count++;
    console.log(`You entered the correct password after ${count} attempt(s)`);
    break;
}
else{
    count++;
    console.log("Try again");
}

    }
if (count == 3)
{
    console.log(`Your account is locked! You failed to enter the correct password ${count} times`);
}


