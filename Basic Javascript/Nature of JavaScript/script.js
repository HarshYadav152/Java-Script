console.log("I am Harsh Yadav"); // -----\
                               // --------sabse pehle ye dono run honge
// console.log("We are harsh"); // --------/

setTimeout(() => {
    console.log("I am inside the settimeout"); // 4th pe ye
}, 0);
// setTimeout(() => {
//     console.log("I am inside the settimeout 2"); // 5th pe ye
// }, 0);

console.log("The end"); // phir 3rd no. pe ye ryn hoga 

const callback = (arg)=>{
    console.log(arg);
}

const loadScript = (src, callback) => { // lekin callback hone ki vajah se settimeout se pehle run hoga
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harsh");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)