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


  async BuscarFilmePorId(req,res){
    try{
      const filmesEncotrado= await filmeModel.findByPk(req.params.id);
      if(!filmesEncotrado){
        return res.status(404).json({erro:'Filme não encotrado'});// o return foi ultilizado para evitar a queda do servidor 
       
      }
      return res.json(filmesEncotrado);
      
    }catch(err){
      res.status(500).json({erro:err.message});
    }
  }


  async CadastrarFilme(req,res){
    try{
      const filmeCadastrado=await filmeModel.create(req.body);
      res.json({message:"Filme cadastrado com sucesso!",filmeCadastrado});

    }
    catch(err){
      res.status(500).json({erro:err.message});
      
    }

  }

}
