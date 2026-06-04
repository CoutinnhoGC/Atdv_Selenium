const path = require("path");
const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const paginaUrl =
  "file:///" + path.resolve(__dirname, "../index.html").replace(/\\/g, "/");

async function criarDriver() {
  const options = new chrome.Options();

  return new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
}

async function realizarLogin(driver, usuario, senha) {
  await driver.findElement(By.id("usuario")).clear();
  await driver.findElement(By.id("usuario")).sendKeys(usuario);

  await driver.findElement(By.id("senha")).clear();
  await driver.findElement(By.id("senha")).sendKeys(senha);

  await driver.findElement(By.id("btn-entrar")).click();
}

async function aguardarMensagemLogin(driver) {
  const mensagem = await driver.findElement(By.id("mensagem-login"));

  await driver.wait(async function () {
    const texto = await mensagem.getText();
    const classes = await mensagem.getAttribute("class");

    return texto.trim() !== "" && !classes.includes("oculto");
  }, 5000);

  return mensagem;
}

async function testeLoginValido() {
  const driver = await criarDriver();

  try {
    await driver.get(paginaUrl);

    await realizarLogin(driver, "admin", "123456");

    const mensagem = await aguardarMensagemLogin(driver);
    const textoMensagem = await mensagem.getText();

    console.log("Mensagem de login válido:", textoMensagem);

    if (!textoMensagem.includes("Login realizado com sucesso!")) {
      throw new Error("Login válido falhou: " + textoMensagem);
    }

    console.log("Teste de login válido passou!");
  } finally {
    await driver.quit();
  }
}

async function testeLoginInvalido() {
  const driver = await criarDriver();

  try {
    await driver.get(paginaUrl);

    await realizarLogin(driver, "usuario-invalido", "senha-incorreta");

    const mensagem = await aguardarMensagemLogin(driver);
    const textoMensagem = await mensagem.getText();

    console.log("Mensagem de login inválido:", textoMensagem);

    if (!textoMensagem.includes("Usuário ou senha inválidos.")) {
      throw new Error("Login inválido não exibiu a mensagem esperada: " + textoMensagem);
    }

    console.log("Teste de login inválido passou!");
  } finally {
    await driver.quit();
  }
}

async function executarTestes() {
  await testeLoginValido();
  await testeLoginInvalido();
}

executarTestes().catch(function (erro) {
  console.error("Teste falhou:", erro.message);
  process.exit(1);
});
