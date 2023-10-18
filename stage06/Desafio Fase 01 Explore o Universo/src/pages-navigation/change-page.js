export function changePage(pageClass) {
  const currentClass = document.body.classList.value || "home" ;
  document.body.classList.remove(currentClass);
  document.body.classList.add(pageClass);
}