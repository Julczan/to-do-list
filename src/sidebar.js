function createSidebar() {
  const container = document.createElement("div");
  container.classList.add("sidebar");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const projects = document.createElement("div");
  projects.classList.add("sidebar-element");
  projects.textContent = "My Projects";

  container.appendChild(profile);
  container.appendChild(projects);
  return container;
}

export default createSidebar();
