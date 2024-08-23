import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const __fileName = "index.js";
const __dirName = path.dirname(__fileName);
const filePath = path.join(__dirName, __fileName);
const content = "// This is the index.js file\n";




fs.stat(filePath, (err, stats) => {
   if (err) {
       fs.writeFile(filePath, content, (err)=>{
           if (err) {
               console.log(err);
           } else {
               console.log(`Created file: ${filePath}`);
           }
       });
   }
});

function checkSyntax(filePath) {  // From ChatGPT
    exec(`node --check ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Syntax error in file ${filePath}:\n`, stderr);
        }
    });
}

function logChange(eventType, fileName) {
    const date = new Date().toString().replace(/GMT.*/, '');
    console.log(`[Monitor] the file ${fileName} has been ${eventType}d at ${date}`);
}


function startWatching() {
    console.log(
        `
        Start Watching...
        to exit press Ctrl+C
    `);

    fs.watch(filePath, (eventType, __fileName) => {
        logChange(eventType, __fileName);
        if (eventType === 'change' && __fileName.endsWith('.js')) {
            checkSyntax(filePath);
        }
    });
}


// Check if the file exists and create it if not
fs.stat(filePath, (err, stats) => {
    if (err) {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Created file: ${filePath}`);
                startWatching();
            }
        });
    } else {
        startWatching();  // File exists, start watching immediately
    }
});
