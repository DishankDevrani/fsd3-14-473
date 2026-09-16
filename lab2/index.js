
import {writeFile,readFile, appendFile} from 'fs/promises';

// await writeFile('stud.txt',"Dishank Devrani\nRoll No:75");
// console.log("File written");

// const data = await readFile("stud.txt","utf-8");
// console.log(`file contents: ${data}`);

const addContent = async (fname, content)=> {
    await writeFile(fname,content);
    console.log(`"${content}" written in File.`);

};

const readContent = async (fname)=> {
    const data = await readFile(fname,`utf-8`);
    return data;
};

const appendData= async(fname,content)=> {
    await appendFile(fname,"\n" + content);
    console.log(`added in File.`);
}

await addContent("notes.txt","FS is easy in JS");
console.log("Contents:\n",await readContent("notes.txt"));
await appendFile("notes.txt", "\nit can add, read and update content");
console.log("Updated Contents\n",await readContent("notes.txt"));