const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'ESTETICA MARTINS'
});

app.post('/clientes/agendar', (req, res) => {
    const { cliente_id, servico_id, funcionario_id, agendamento_date, abertura_time, final_time } = req.body;

    const query = 'INSERT INTO AGENDAMENTOS (funcionario_id, cliente_id, servico_id, agendamento_date, abertura_time, final_time) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [funcionario_id, cliente_id, servico_id, agendamento_date, abertura_time, final_time], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Agendamento criado com sucesso!', id: results.insertId });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
