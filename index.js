#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlueBright.underline("\n\t\t\t Welcome to School \t\t\t\n"));
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class person {
    students = [];
    addStudent(object) {
        this.students.push(object);
    }
}
let persons = new person();
let program = async (persons) => {
    do {
        let ans = await inquirer.prompt({
            name: "options",
            type: "list",
            message: (chalk.italic.magenta("Whom would you like to intrect with?")),
            choices: ["Staff", "Student", "Principle", "Exit"]
        });
        if (ans.options == "Staff") {
            console.log(chalk.italic.yellow("Welcome to the Staff Room, Feel free to ask any things to our staff"));
        }
        else if (ans.options == "Principle") {
            console.log(chalk.italic.blue("You are in the Principle office, Feel free to say anything and be Respecfull!!"));
        }
        else if (ans.options == "Student") {
            let ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: (chalk.italic.green("Ener the student name you want to intrect with:"))
            });
            let studentt = persons.students.find(val => val.name == ans.student);
            if (!studentt) {
                let name = new student(ans.student);
                persons.addStudent(name);
                console.log(chalk.italic.blue(`Hello I am ${name.name}`));
                console.log(chalk.italic.yellow("New student added"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.italic.magenta(`Hello I'm ${studentt.name}. Do you call me?`));
                console.log(persons.students);
            }
        }
        else if (ans.options == "Exit") {
            console.log(chalk.italic.red("Exiting......"));
            process.exit();
        }
    } while (true);
};
program(persons);
