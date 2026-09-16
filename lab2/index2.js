import {mkdir,rm} from "fs/promises";

//await mkdir("uploads");
//await mkdir("uploads/images");

//await mkdir("docs/resumes/data",{recursive: true});

//removes only data folder and 
//recursive checks if the folder is actually there or not before performing a function.
//await rm("docs/resumes/data",{recursive: true});

//removes main folder and sub folder also 
await rm("docs", {recursive: true});
