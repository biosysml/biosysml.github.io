function showPlot(id) {

  const plots = document.querySelectorAll('.plot-content');

  plots.forEach(plot => {
    plot.classList.remove('active-content');
  });

  document.getElementById(id)
  .classList.add('active-content');
}