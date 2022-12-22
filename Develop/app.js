const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");


// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions =
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Place your name here:",
            },
            {
                type: "input",
                name: "id",
                message: "Place your ID number here:",
            },
            {
                type: "input",
                name: "GitHub",
                message: "Place your GitHub username here:",
            },
            {
                type: "input",
                name: "email",
                message: "Place your email address here:",
            },
            {
                type: "list",
                name: "role",
                message: "Place your role as an employee here:",
                choices: ["Engineeer", "Intern", "Manager"],
            },
        ])


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.                                   
 function init() {
    inquirer.prompt(questions)
        .then((data) => { fs.writeFileSync('index.html'(data)) })
        .then(() => console.log('Successfully wrote to index.html'))
}
