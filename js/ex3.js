const num1 = prompt("Please enter a number");
const num2 = prompt("Please enter a second number for calculations");
if (Number(num1) && Number(num2) >= 0  )
{
    console.log(`${num1} + ${num2} = ${Number(num1)+Number(num2)}`);
    console.log(`${num1} - ${num2} = ${Number(num1)-Number(num2)}`);
    console.log(`${num1} * ${num2} = ${Number(num1)*Number(num2)}`);
    console.log(`${num1} / ${num2} = ${Number(num1)/Number(num2)}`);
    console.log(`${num1} % ${num2} = ${Number(num1)%Number(num2)}`);
    
} else if (Number(num1) && Number(num2) <= 0){
    console.log(`${num1} + ${num2} = ${Number(num1)+Number(num2)}`);
    console.log(`${num1} - ${num2} = ${Number(num1)-Number(num2)}`);
    console.log(`${num1} * ${num2} = ${Number(num1)*Number(num2)}`);
    console.log(`${num1} / ${num2} = ${Number(num1)/Number(num2)}`);
    console.log(`${num1} % ${num2} = ${Number(num1)%Number(num2)}`);
  
}
else{
    console.log("Please try again ")
}

