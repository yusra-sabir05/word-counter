#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter you paragraph/sentance to count the words"
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`your sentence has ${word.length} words`);
