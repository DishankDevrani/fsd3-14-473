import { EventEmitter } from 'node:events';

const sayHi = (name) => {
    console.log(`${name} logged in`);
};

const exit =(name)=> {
    console.log(`shutdown system by ${name} `);
};





const task = new EventEmitter();

task.once("exit",exit)

task.once("greet",(name)=> {
    console.log("System started");
})

task.on("greet",sayHi);



task.on("greet",(name)=>{
    console.log(`${name} starts working`);
});

const saybye = (name) => {
    console.log(`${name} logged out`);
};

task.on("greet", saybye);



task.emit("greet","Rahul Singh");


console.log();

task.off("greet",sayHi);

task.emit("greet","Dishank Devrani");

console.log();
console.log();

task.emit("exit","Manager");

task.emit("exit","Employee"); //Won't work because of task.once

console.log("total listener",task.listenerCount("greet"));
task.removeAllListeners("greet");