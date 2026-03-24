// Skill tabs switching
const tabs = document.querySelectorAll(".skill-tab");
const panels = document.querySelectorAll(".skills-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    const target = document.getElementById("panel-" + tab.dataset.panel);
    if (target) target.classList.add("active");
  });
});
