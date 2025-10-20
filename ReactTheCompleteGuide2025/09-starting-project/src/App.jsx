import { useState } from "react";
import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectState(prevState => {
      const newTask = {
        id: Math.random(),
        projectId: prevState.selectedProjectId,
        text: text
      };
      const updatedTasks = [newTask, ...prevState.tasks];
      return { ...prevState, tasks: updatedTasks };
    });
  }
  function handleDeleteTask(taskId) {
    setProjectState(prevState => {
      const updatedTasks = prevState.tasks.filter(task => task.id !== taskId);
      return { ...prevState, tasks: updatedTasks };
    });
  }
  function handleSelectProject(id) {
    setProjectState(prevState => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return { ...prevState, selectedProjectId: null };
    });
  }
  function handleCancelAddProject() {
    setProjectState(prevState => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }
  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {...projectData, id: Math.random()};
      return { 
        ...prevState, 
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject] };
    });
  }
  function handleDeleteProject() {
    setProjectState(prevState => {
      const updatedProjects = prevState.projects.filter(project => project.id !== prevState.selectedProjectId);
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects
      };
    });
  }
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} tasks={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;

  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} projects={projectState.projects} selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
