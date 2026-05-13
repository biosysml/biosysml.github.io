function showResearch(id) {

  const sections = document.querySelectorAll('.research-content');

  sections.forEach(section => {
    section.classList.remove('active-content');
  });

  document.getElementById(id)
  .classList.add('active-content');
}