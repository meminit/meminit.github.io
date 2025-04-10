/* Just a script to redirect to tools  */

document.querySelectorAll('.gamecard').forEach(element => {
    element.addEventListener('click', () => {
      window.location.href = element.getAttribute('data-l')
    });
  });

  function redirect(link) {
    window.location.href = link
  }