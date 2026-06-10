import { Router } from "express";
import agendamentoRoutes from "./modules/agendamento/agendamento.routes.js";
import animalRoutes from "./modules/animal/animal.routes.js";
import clienteRoutes from "./modules/cliente/cliente.routes.js";
import servicoRoutes from "./modules/servico/servico.routes.js";
import profissionalRoutes from "./modules/profissional/profissional.routes.js";
import relatorioRoutes from "./modules/relatorio/relatorio.routes.js";

const routes = Router();

routes.get("/health", (request, response) => {
   return response.status(200).json({
     message: "API Rodando OK!!"
   })
});

routes.use("/agendamentos", agendamentoRoutes)
routes.use("/animais", animalRoutes)
routes.use("/clientes", clienteRoutes)
routes.use("/servicos", servicoRoutes)
routes.use("/profissionais", profissionalRoutes)
routes.use("/relatorios", relatorioRoutes)

export default routes;