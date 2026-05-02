import { Router } from "express"
import profissionalController from "./profissional.controller.js"

const profissionalRoutes = Router()

profissionalRoutes.post('/', profissionalController.create)
profissionalRoutes.get('/', profissionalController.getAll)
profissionalRoutes.get('/:id', profissionalController.getById)
profissionalRoutes.put('/:id', profissionalController.update)
profissionalRoutes.delete('/:id', profissionalController.delete)

export default profissionalRoutes