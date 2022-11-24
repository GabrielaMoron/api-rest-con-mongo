import { Router} from "express";
const ArtistaRouter=Router()

// Controller
import  ArtistaController from "../controllers/ArtistaController.js";


// GET  http://localhost:3004/api/Artista/
ArtistaRouter.get("/", ArtistaController.getAll);

// GET  http://localhost:3004/api/Artista/:id
ArtistaRouter.get("/:id", ArtistaController.getOne);

// POST  http://localhost:3004/api/Artista/
ArtistaRouter.post("/", ArtistaController.store);

// DELETE  http://localhost:3004/api/Artista/:id
ArtistaRouter.delete("/:id", ArtistaController.delete);

// PUT http://localhost:3004/api/Artista/:id
ArtistaRouter.put("/:id", ArtistaController.update);

export default ArtistaRouter;