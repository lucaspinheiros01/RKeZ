var modal = document.getElementById("job-form-modal");

// Pega o botão que abre o modal
var btn = document.getElementById("job-button");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha ele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Quando o usuário clica no botão Enviar, mostra uma mensagem de sucesso
document.getElementById("job-form").onsubmit = function(e) {
  e.preventDefault();
  alert("Currículo enviado com sucesso!");
}