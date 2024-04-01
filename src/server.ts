import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// Criar um novo usuário
app.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser: User = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Atualizar um usuário existente
app.put('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { id, name, email };
    res.json(users[index]);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

// Excluir um usuário
app.delete('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [];
let nextId = 1;