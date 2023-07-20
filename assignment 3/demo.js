var CSPIT = {
    departments: ['CE', 'IT', 'CS', 'EC', 'EE', 'CL', 'ME'],
    yearOfEstablishment: 2000,
    location: 'CHANGA',
    getDetails: function() {
        var output = 'CSPIT Details:\n';
        output += 'Departments: ' + this.departments.join(', ') + '\n';
        output += 'Year of Establishment: ' + this.yearOfEstablishment + '\n';
        output += 'Location: ' + this.location + '\n';
        return output;
    }
};

CSPIT.CE = Object.create(CSPIT);
CSPIT.CE.totalStudents = 250;
CSPIT.CE.totalFaculties = 30;