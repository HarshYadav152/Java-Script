function mainFunction(callback){
    console.log('Performing Operation');
    
    // setTimeout to simulate an asynchronous operation
    setTimeout(() => {
        callback("Operation Complete");
    }, 1000);
}

function callbackFunction(result){
    console.log('Result : '+result);
}

mainFunction(callbackFunction)