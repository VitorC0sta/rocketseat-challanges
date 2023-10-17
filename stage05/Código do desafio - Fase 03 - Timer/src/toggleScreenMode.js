let darkMode = false
const toggleScreenModeButton = document.querySelector(".toggle-mode");

toggleScreenModeButton.addEventListener('click', e => {
    document.documentElement.classList.toggle("dark");
    const currentMode = darkMode ? "Escuro":"Claro";
    darkMode = !darkMode;
    e.currentTarget.querySelector('span').textContent = `Modo ${currentMode} ativo.`;
})