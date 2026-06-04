const USUARIO_VALIDO = "admin";
const SENHA_VALIDA = "123456";

const formLogin = document.getElementById("form-login");
const mensagemLogin = document.getElementById("mensagem-login");
const btnMostrar = document.getElementById("btn-mostrar");
const btnOcultar = document.getElementById("btn-ocultar");
const mensagemAcao = document.getElementById("mensagem-acao");
const btnAdicionar = document.getElementById("btn-adicionar");
const novaTarefa = document.getElementById("nova-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const selectCidade = document.getElementById("cidade");
const cidadeSelecionada = document.getElementById("cidade-selecionada");

function mostrarMensagem(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = "mensagem " + tipo;
}

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  if (usuario === USUARIO_VALIDO && senha === SENHA_VALIDA) {
    mostrarMensagem(mensagemLogin, "Login realizado com sucesso!", "sucesso");
  } else {
    mostrarMensagem(mensagemLogin, "Usuário ou senha inválidos.", "erro");
  }
});

btnMostrar.addEventListener("click", function () {
  mensagemAcao.classList.remove("oculto");
  mensagemAcao.classList.add("info");
});

btnOcultar.addEventListener("click", function () {
  mensagemAcao.classList.add("oculto");
});

btnAdicionar.addEventListener("click", function () {
  const texto = novaTarefa.value.trim();
  if (!texto) return;

  const item = document.createElement("li");
  item.className = "tarefa";
  item.textContent = texto;
  listaTarefas.appendChild(item);
  novaTarefa.value = "";
});

selectCidade.addEventListener("change", function () {
  const opcao = selectCidade.options[selectCidade.selectedIndex];
  if (selectCidade.value === "") {
    cidadeSelecionada.textContent = "Nenhuma cidade selecionada";
  } else {
    cidadeSelecionada.textContent = "Cidade selecionada: " + opcao.text;
  }
});
