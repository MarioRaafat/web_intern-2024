import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

let __fileName = "index.js";
const __dirName = path.dirname(__fileName); // no handling for the case of moving files to another directory
let __filePath = path.join(__dirName, __fileName);
let __dirFiles = new Set();
const content = "// This is the index.js file\n";

function getFiles() {
    fs.readdir(__dirName, (err, files)=>{
        if (err) {
            console.log(err);
        } else {
            __dirFiles = new Set(files);
        }
    });
}

function getNewName(callback) {
    fs.readdir(__dirName, (err, files) => {
        if (err) {
            console.log(err);
            callback("unknown");
        } else {
            const newFiles = new Set(files);

            if (__dirFiles.size > newFiles.size) {
                callback("delete");
            } else if (__dirFiles.size === newFiles.size) {
                const diff = new Set([...newFiles].filter(x => !__dirFiles.has(x)));

                if (diff.size === 1) {
                    __fileName = [...diff][0];
                    __filePath = path.join(__dirName, __fileName);
                    __dirFiles = new Set(files);
                    callback("rename");
                } else {
                    callback("unknown");
                }
            } else {
                callback("moved"); // not handled
            }
        }
    });
}


function checkSyntax(filePath) {  // From ChatGPT
    exec(`node --check ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Syntax error in file ${filePath}:\n`, stderr);
        }
    });
}

function logChange(eventType, fileName, callback) {
    const date = new Date().toString().replace(/GMT.*/, '');

    if (eventType === "rename") {
        getNewName((state) => {
            if (state === "rename") {
                console.log(`[Monitor] The file ${fileName} has been renamed to ${__fileName} at ${date}`);
            } else if (state === "unknown") {
                console.log('Unknown error');
            } else {
                console.log(`[Monitor] The file ${fileName} has been ${state}d at ${date}`);
            }
            callback(state);
        });
    } else {
        console.log(`[Monitor] the file ${fileName} has been ${eventType}d at ${date}`);
        callback("change");
    }
}


function startWatching(flag = false) {
    // flag for handling the case that the file is renamed
    if (!flag) {
        console.log(
            `
        Start Watching...
        to exit press Ctrl+C
    `);
    }

    fs.watch(__dirName, (eventType, fileName) => {

        if (fileName === __fileName) {
            logChange(eventType, fileName, (state) => {
                if (state === 'change' && fileName.endsWith('.js')) {
                    checkSyntax(__filePath);
                } else if (state === 'rename') {
                    startWatching(true);
                } else if (state === 'delete' || state === 'moved') {
                    console.log('Exiting...');
                    process.exit(0);
                } else {
                    console.log('Unknown error');
                }
            });
        } else {
            getFiles();
        }
    });
}


// Check if the file exists and create it if not
fs.stat(__filePath, (err, stats) => {
    if (err) {
        fs.writeFile(__filePath, content, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Created file: ${__filePath}`);
                getFiles();
                startWatching();
            }
        });
    } else {
        getFiles();
        startWatching();  // File exists, start watching immediately
    }
});
