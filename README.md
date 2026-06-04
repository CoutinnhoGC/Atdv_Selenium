# Testes Selenium WebDriver

Página HTML simples + teste automatizado com Selenium em JavaScript (Node.js).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- [Google Chrome](https://www.google.com/chrome/) instalado

## Instalação

Na **pasta raiz** do projeto (onde está o `package.json`):

```powershell
cd d:\TestesSeleniumWebDriver
npm install
```

Para instalar só o Selenium WebDriver:

```powershell
npm install selenium-webdriver
```

> Instale na raiz do projeto, **não** dentro da pasta `test/`.

## Rodar o teste

```powershell
npm test
```

Esse comando executa o arquivo `test/login.test.js` e abre o Chrome automaticamente.

> O script configurado é `npm test`, não `npm start`.

## Credenciais de login (página de teste)

| Campo   | Valor    |
|---------|----------|
| Usuário | `admin`  |
| Senha   | `123456` |

## Estrutura do projeto

```
TestesSeleniumWebDriver/
├── index.html          # Página para testar
├── styles.css
├── script.js
├── package.json
└── test/
    └── login.test.js   # Teste Selenium
```
