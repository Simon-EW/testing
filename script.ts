interface projects {
  "projects": [
    string
  ]
}

interface project {
  "title": string,
  "description": string,
  "entry": string,
  "tags": [
    string
  ],
}

const getProject = (dir: string) => {
  const data: Promise<project> = fetch(`./projects/${dir}/project.json`).then((res) => res.json());
  return data;
};

const createElement = (tag: string, parent: Element, className: string, text?: String) => {
  const element = document.createElement(tag);
  parent.appendChild(element);
  element.setAttribute("class", className);
  return element;
};

const addProjectToDOM = (project: project) => {
  const { title, description, entry, tags } = project;
  const projectList = document.querySelector(".project-list");
  const parent = createElement("div", projectList, "project");
  


};


const main = async () => {
    const projects = await fetch("./projects/")//.then((res) => res.json());
    // const projects = data.projects;
    // projects.map(async (projectPath) => {
    //   const project = await getProject(projectPath);
    //   addProjectToDOM(project);
    // });
    console.log(projects);
  };
  
  main();
  