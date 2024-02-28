document.addEventListener("DOMContentLoaded", function () {
    const skillsData = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "Dart",
        "Flutter",
        "Php",
        "Laravel",
        "Java",
        "SpringBoot",
        "Sql",
        "Postegress"
    ];

    const skillsList = document.getElementById("projects-skills");

    skillsData.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
});
