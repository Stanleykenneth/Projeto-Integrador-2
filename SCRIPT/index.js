const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota inicial com o formulário de login
app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Login</h1>
        <form action="/login" method="POST">
            <label for="username">Usuário:</label><br>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Senha:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Entrar">
        </form>
    `);
});

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulação de autenticação simples
    if (username === 'admin' && password === '1234') {
        res.status(200).send('<h1>Bem-vindo, Admin!</h1>');
    } else {
        res.status(401).send('<h1>Login ou senha incorretos!</h1>');
    }
});

// Exemplo de uma rota de listagem de usuários (apenas para testar)
app.get('/users', (req, res) => {
    res.status(200).json({
        users: [{
            nome: 'Projeto integrador',
            email: 'projeto@gmail.com',
            id: 1
        }]
    });
});

// Iniciando o servidor
app.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando!');
});
