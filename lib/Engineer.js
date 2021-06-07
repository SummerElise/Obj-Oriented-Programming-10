const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, ID, email, gitHub) {
        super (name, ID, email);

        this.gitHub = gitHub;
    }
     getRole() {
         return 'Engineer';
     }
     getGitHub() {
         return this.gitHub;
     }
}

module.exports = Engineer;