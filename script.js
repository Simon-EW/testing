const getProject = (dir) => {
    const data = fetch(`./projects/${dir}/project.json`).then((res) => res.json());
    return data;
};
const createElement = (tag, parent, className) => {
    const element = document.createElement(tag);
    parent.appendChild(element);
    element.setAttribute("class", className);
    return element;
};
const addProjectToDOM = (project) => {
    const { title, description, entry, tags } = project;
    const projectList = document.querySelector(".project-list");
    const parent = createElement("div", projectList, "project");
};
const main = async () => {
    const data = await fetch("./projects/projects.json").then((res) => res.json());
    const projects = data.projects;
    projects.map(async (projectPath) => {
        const project = await getProject(projectPath);
        addProjectToDOM(project);
    });
    console.log(data);
};
main();
