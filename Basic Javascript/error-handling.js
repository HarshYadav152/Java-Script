let a = prompt("Enter the First number : ");
let b = prompt("Enter the Second number : ");
// if we give a string in this case it will show NaN (Not a Number)

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allow");
}
let sum = parseInt(a) + parseInt(b); // function parseInt convert the a ke datatype to integer datatype


function main(){
    let x = 1;
    try {
        console.log('The sum is ',sum*x);
        return true;
    } catch (error) {
        console.log('Error aa gaya hai bhai');
        return false;
    }
    finally{ // mainly after the returning the value of a function remaining code don't run but in this case due to finnaly{} clause this line is run
        console.log('files are being closed and db is being closed now');
        
    }
}

main();

// try {
    
//     console.log("The sum of two number is ",sum*x)
// } catch (error) {
//     console.log('Error aa gaya hai bhai');
//     alert(error.name) // alert of error name ReferenceError
//     alert(error.message) // alert of error message x is not defined
//     alert(error.stack) // alert of error where the error occuered and what error
// }