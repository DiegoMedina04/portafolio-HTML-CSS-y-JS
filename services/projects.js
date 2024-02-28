


document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects-list");
    const projectsData = [
        {
            "title": "Proyecto 1",
            "description": "Proyecto que consta para crear usuarios con SpringBoot",
            "link": "https://github.com/DiegoMedina04/backendUsuarios"
        },
        {
            "title": "Proyecto 2",
            "description": "Interfaz intuitiva para visualizar los pokemons con React",
            "link": "https://github.com/DiegoMedina04/pokemons-react"
        },
        {
            "title": "Proyecto 3",
            "description": "Proceso de autenticacion en memoria con React",
            "link": "https://github.com/DiegoMedina04/auth-react"
        },
        {
            "title": "Proyecto 4",
            "description": "Chat con Node.js y React utilizando webSockets",
            "link": "https://github.com/DiegoMedina04/chat-react-nodejs"
        },
        {
            "title": "Proyecto 5",
            "description": "Backend con Nodejs con el flujo de una tienda de compras",
            "link": "https://github.com/DiegoMedina04/backend-node-platzi"
        },
        {
            "title": "Proyecto 6",
            "description": "Algoritmos soluciones de la plataforma de Codeforces",
            "link": "https://github.com/DiegoMedina04/practice-codeforces-solutions"
        },
    ];

    projectsData.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsList.appendChild(projectElement);
    });

    function createProjectElement(project) {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const projectImage = document.createElement("img");
        projectImage.src = "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg";
        projectImage.alt = project.title;

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = "Ver más";
        projectLink.id = "verMas";

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        return projectDiv;
    }
});
