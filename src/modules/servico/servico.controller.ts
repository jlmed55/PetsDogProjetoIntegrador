import type { Request , Response} from"express";
import servicoService from "./servico.service.js";


class CategoryController {

    public async create( request:Request, response: Response): Promise<Response>{
        const category = await servicoService.create({
            name: request.body.name,
            duracao_min: request.body.duracao_min,
            preco: request.body.preco,
            tipo: request.body.tipo
        });
        
        return response.status(201).json(category);
    }
    public async findAll( request:Request, response: Response):Promise<Response>{
       const categories = await servicoService.findAll();

       return response.status(200).json(categories);
   
    }

    public async delete(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;

        if(!id || typeof id!== "string"){
            return response.status(400).json({
                message :"id invalido",
            });
        }

        await servicoService.delete(id);
        return response.status(200).json({
            message:"removido com sucesso!",
        });
    }

    public async findById(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;

        if(!id || typeof id!== "string"){
            return response.status(400).json({
                message :"id invalido",
            });
        }

        const  category = await servicoService.findById(id);

        return response.status(200).json(category);
    }

    public async update( request:Request, response: Response):Promise<Response>{
       const {id} = request.params;

       if(!id || typeof id !== "string"){
        return response.status(400).json({
           message: "Id invalido"
        });
       }
       const category = await servicoService.update(id, {
        name: request.body.name,
        duracao_min: request.body.duracao_min,
        preco: request.body.preco,
        tipo: request.body.tipo
       });

       return response.status(200).json(category);

    }

}

export default new CategoryController();