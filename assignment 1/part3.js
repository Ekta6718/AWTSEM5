const cspit={
    departments :['CE','IT','CSE','EC','EE','CL','ME'],
    establishment :2000,
    location :"Changa",

    departmentFunction : ()=>{

        console.log("Year of Establishment :" + cspit.establishment);
        console.log("Location :" + cspit.location);
        console.log("Using for of loop");
        for(let i of cspit.departments)
        {
            console.log(i);
        }
    }
}

const CE=Object.create(cspit);
CE.Students=250;
CE.Faculties=30;

CE.CEdept = () => {
    CE.departmentFunction();
    console.log("Total Students :" + CE.Students);
    console.log("No of Faculty :" + CE.Faculties);
    console.log("Using for in loop");
    for(let i in CE.departments)
    {
        console.log(CE.departments[i]);
    }
}

CE.CEdept(); 