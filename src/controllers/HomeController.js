import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Emilia',
      sobrenome: 'Malfatti',
      email: 'emilia@gmail.com',
      idade: 39,
      peso: 65,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
