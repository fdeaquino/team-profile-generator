// TODO: create function to generate HTML boilerplate template - team cards generate in a container below header
const createWebpage = teamProfile => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/85d59f5270.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="/dist/styles.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="container d-flex justify-content-around flex-wrap">
        <div class="row justify-items-center">
            ${teamProfile.join('')}
        </div>
    </div>
</body>
</html>
`;
} 


// TODO: create function to generate Manager data into HTML card

const genManagerSection = manager => {
    return `

    <div class="card col-lg-3 col-md-5 col-sm-12" style="width: 15rem">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4><i class="fa-solid fa-chalkboard-user"></i> Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>

`
}

// TODO: create function to generate Engineer data into HTML card
const genEngineerSection = engineer => {
    return `

    <div class="card col-lg-3 col-md-5 col-sm-12" style="width: 15rem">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4><i class="fa-solid fa-user-gear"></i> Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item git">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
    </div>

`
}

// TODO: create function to generate Intern data into HTML card
const genInternSection = intern => {
    return `

    <div class="card col-lg-3 col-md-5 col-sm-12" style="width: 15rem">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>

`
}

// TODO: for loop that will generate the employee sections by passing through the response data
const generateHTML = data => {
    let teamProfile = [];

    for(i = 0; i < data.length; i++) {
        const emp = data[i];
        const position = emp.getRole();
        if (position === 'Manager') {
            const managerContainer = genManagerSection(emp)
            teamProfile.push(managerContainer)
        } else if (position === 'Engineer') {
            const engineerContainer = genEngineerSection(emp)
            teamProfile.push(engineerContainer)
        } else {
            const internContainer = genInternSection(emp)
            teamProfile.push(internContainer)
        }
    }
    return createWebpage(teamProfile);
}

module.exports = generateHTML;