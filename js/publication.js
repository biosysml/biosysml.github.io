function togglePublication(element) {

  const publication =
  element.parentElement;

  const details =
  element.nextElementSibling;

  publication.classList.toggle('active');

  details.classList.toggle('active');
}
