import Cliente from './cliente.model.js';
import type { ICreateClienteDTO, IUpdateClienteDTO } from './cliente.types.js';

class ClienteService {

    async create(data: ICreateClienteDTO) {
        try {

            await Cliente.create({
                name: data.name,
                email: data.email,
                telefone: data.telefone,
                senha: data.senha
            })

            return ({
                name: data.name,
                email: data.email,
                telefone: data.telefone
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {
            
            const clientes = await Cliente.find();

            const resposta: { name: string }[] = [];

            clientes.forEach((cliente) => {
                resposta.push({
                name: cliente.name,
                email: cliente.email,
                telefone: cliente.telefone
                });
            });

            return resposta

        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {
            
            return await Cliente.findById(id)

        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateClienteDTO) {
        try {

            return await Cliente.findByIdAndUpdate(id, {
                name: data.name,
                email: data.email,
                telefone: data.telefone,
                senha: data.senha
            }, { new: true })

        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {
            
            return await Cliente.findByIdAndDelete(id)

        } catch (e) {
            console.log(e)
        }
    }

}

export default new ClienteService()