import fs from "fs/promises";

//promise
const writeData = async ()=>{
    try {
        console.log("about to write......");
        await fs.writeFile('stud.txt',"Name:Dishank Devrani");
        console.log("file written");

    } catch (error) {
        console.log(error);
        
    }
}

const f1=()=>{
console.log("f1");
};

const f2=()=>{
console.log("f2");
};

const f3=()=>{
    console.log("f3");
};

const main=()=>{
    console.log("main");
    setTimeout(f1,0);       //5000 == 0.5 second  
    //Callbackfunction(timeout function)-> that pass as argument or the parameter to another function.
    //setInterval(f2,1000);
    setImmediate(f2);
    process.nextTick(f3);
    writeData();
    console.log("end");
};
main();

