import { where } from "sequelize";
import filmeModel from "../models/filmesModel.js";

export default class Filmes {
  async BuscarTodosOsFilmes(req, res) {
    try {
      const filmes = await filmeModel.findAll();
      res.json(filmes);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }

  async BuscarFilmePorId(req, res) {
    try {
      const filmesEncotrado = await filmeModel.findByPk(req.params.id);
      if (!filmesEncotrado) {
        return res.status(404).json({ erro: "Filme não encotrado" }); // o return foi ultilizado para evitar a queda do servidor
      }
      return res.json(filmesEncotrado);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }

  async BuscarFilmePorTitulo(req, res) {
    try {
      const filmesEncotrado = await filmeModel.findAll({
        where: { titulo: req.body.titulo },
        attributes: ["genero", "ano"],
      });
      if (filmesEncotrado.length == 0) {
        return res.status(404).json({ erro: "Filme não encotrado" }); // o return foi ultilizado para evitar a queda do servidor
      }
      return res.json(filmesEncotrado);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }

  async CadastrarFilme(req, res) {
    try {
      const filmeCadastrado = await filmeModel.create(req.body);
      res
        .status(201)
        .json({ message: "Filme cadastrado com sucesso!", filmeCadastrado });
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }
  
  async AualizarFilme(req, res) {
    try {
      const [atualizado] = await filmeModel.update(req.body, {
        where: { id: req.params.id },
      });
      if (!atualizado) {
        return res.status(404).json({ erro: "Filme não encontrado" });
      }
      const filmeAtualizado = await filmeModel.findByPk(req.params.id);
      return res.json({
        messagem: "Filme Atualizado com sucesso!",
        filmeAtualizado,
      });
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }

  async DeletarFilme(req, res) {
    try {
      const filmeDeletado = await filmeModel.destroy({
        where: { id: req.params.id },
      });
      if (!filmeDeletado) {
        return res.status(404).json({ erro: "Filme não encontrado" });
      }
      return res.status(204).json({ messagem: "Filme deletado com sucesso! " });
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }
}
