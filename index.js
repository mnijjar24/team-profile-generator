const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const renderer = require("./lib/htmlRenderer");

const teams = [];
addTeam();

function addTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "addEmployee",
      message: "Add an employee, or select 'Finish'.",
      choices: [
        "Engineer",
        "Manager",
        "Intern",
        "Finish"
      ]
    }
  ]).then(function(data) {
    const employeeRoles = data.addEmployee;
    if (employeeRoles === "Manager") {
      managerDetails();
    }
    else if (employeeRoles === "Engineer") {
      engineerDetails();
    }
    else if (employeeRoles === "Intern") {
      internDetails();
    }
    else if (employeeRoles === "Finish") {
      generateTeam();
    }

  });
}

function managerDetails() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Manager's Name:"
    },
    {
      type: "input",
      name: "managerId",
      message: "Manager's ID:"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Manager's E-mail:"
    },
    {
      type: "input",
      name: "managerOffice",
      message: "Manager's Office Number:"
    }
  ]).then(function(data) {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
    teams.push(manager);
    addTeam();
  });
}

function engineerDetails() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Engineer's Name:"
    },
    {
      type: "input",
      name: "engineerId",
      message: "Engineer's ID:"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Engineer's E-mail:"
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Engineer's Github username:"
    }
  ]).then(function(data) {
    const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    teams.push(engineer);
    addTeam();
  });
}

function internDetails() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Intern's Name:"
    },
    {
      type: "input",
      name: "internId",
      message: "Intern's ID:"
    },
    {
      type: "input",
      name: "internEmail",
      message: "Intern's E-mail:"
    },
    {
      type: "input",
      name: "internSchool",
      message: "Intern's School:"
    }
  ]).then(function(data) {
    const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
    teams.push(intern);
    addTeam();
  });
}

function generateTeam() {
  fs.writeFile(outputPath, renderer(teams), "utf-8", function(error, data) {
    if (error) {
      throw error;
    }

    console.log("Team has been successfully rendered!");

  })
}