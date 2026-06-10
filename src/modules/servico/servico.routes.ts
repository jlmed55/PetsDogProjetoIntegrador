import { Router } from "express";
import servicoController from "./servico.controller.js";

const servicoRoutes = Router ();

servicoRoutes.post("/", servicoController.create);
servicoRoutes.get("/", servicoController.findAll);
servicoRoutes.get("/:id",servicoController.findById);
servicoRoutes.delete("/:id",servicoController.delete)
servicoRoutes.put("/:id", servicoController.update);

export default servicoRoutes;       