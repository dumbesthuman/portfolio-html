const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));

    tab.classList.add("active");
    const selected = tab.getAttribute("data-tab");
    document.getElementById(selected).classList.add("active");
  });
});
