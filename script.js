document.addEventListener("DOMContentLoaded", () => {
console.log("JS carregado com sucesso!");

    // Modo escuro
    const darkToggle = document.createElement("button");
    darkToggle.textContent = "🌙";
    darkToggle.id = "dark-toggle";
    darkToggle.style.position = "fixed";
    darkToggle.style.right = "20px";
    darkToggle.style.bottom = "20px";
    darkToggle.style.padding = "10px";
    darkToggle.style.border = "none";
    darkToggle.style.borderRadius = "50%";
    darkToggle.style.background = "#333";
    darkToggle.style.color = "#fff";
    darkToggle.style.cursor = "pointer";
    darkToggle.style.fontSize = "18px";
    darkToggle.style.zIndex = "999";
    document.body.appendChild(darkToggle);

    // Aplica modo escuro salvo 
    if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️";
    }

    // Alternar modo escuro
    darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const ativo = document.body.classList.contains("dark-mode");
    darkToggle.textContent = ativo ? "☀️" : "🌙";
    localStorage.setItem("dark-mode", ativo);
    });

});
