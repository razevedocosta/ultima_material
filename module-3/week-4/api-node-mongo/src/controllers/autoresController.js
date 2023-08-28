import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = (req, res) => {
    autores.find((error, autores) => {
      res.status(200).json(autores)
    })
  }

  static listarAutorPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (error, autores) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - ID não encontrado` })
      } else {
        res.status(200).send(autores)
      }
    })
  }

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save((error) => {
      if (error) {
        res.status(500).send({ message: `${error.message} - Falha ao cadastrar autor.` })
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: 'autor atualizado com sucesso!' })
      } else {
        res.status(500).send({ message: error.message })
      }
    })
  }

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: 'autor removido com sucesso!' })
      } else {
        res.status(500).send({ message: error.message })
      }
    })
  }

}

export default AutorController
