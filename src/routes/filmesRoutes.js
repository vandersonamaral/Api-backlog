import express from "express";
import filmesController from "../controllers/filmesController.js";

const router = express.Router();
const filme = new filmesController();

router.get("/", (req, res) => {
  try {
    filme.BuscarTodosOsFilmes(req, res);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});


router.get('/:id',(req,res)=>{
  try{
    filme.BuscarFilmePorId(req,res);
  }catch(err){
    res.status(500).json({erro:err.message});
  }
});

router.post('/',(req,res)=>{
  try{
    filme.CadastrarFilme(req,res);
    }
  catch(err){
    res.status(500).json({erro:err.message});
    
  }

});


export default router;
