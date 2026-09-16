const f1 = ()=>{
    
    console.log("f1 start");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};  
const f2 = ()=>{
    
    console.log("f2 start");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};  
const f3 = ()=>{
    
    console.log("f3 start");
    console.log("f3 running");
    console.log("f3 end");
};  

function main(){
    console.log("main stars");
    f1();
    console.log("main running");
    console.log("end main");
 
}

main();
//synchronous calls, single threaded
//In asynchronous we use event loop to manage the call stack.
//Asynchronous call using timers. 
// 1)Set time out. 
// 2)Set immediate. 
// 3)Process.next tick. 
// 4)