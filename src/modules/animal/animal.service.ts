import mongoose from 'mongoose'
import Animal from "./animal.model.js"
import type { ICreateAnimalDTO, IUpdateAnimalDTO } from "./animal.types.js"

class AnimalService {

    async create(data: ICreateAnimalDTO) {
        try {
            return await Animal.create({
                id_animal: data.id_animal,
                nome: data.nome,
                especie: data.especie,
                idade: data.idade,
                porte: data.porte,
                observacoes_saude: data.observacoes_saude,
                preferencias_especificas: data.preferencias_especificas,
                cliente: new mongoose.Types.ObjectId(data.clienteId)
            })
        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {
            return await Animal.find().populate('cliente')
        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {
            return await Animal.findById(id).populate('cliente')
        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateAnimalDTO) {
        try {
            const updateData: any = {}

            if (data.id_animal !== undefined) updateData.id_animal = data.id_animal
            if (data.nome !== undefined) updateData.nome = data.nome
            if (data.especie !== undefined) updateData.especie = data.especie
            if (data.idade !== undefined) updateData.idade = data.idade
            if (data.porte !== undefined) updateData.porte = data.porte
            if (data.observacoes_saude !== undefined) updateData.observacoes_saude = data.observacoes_saude
            if (data.preferencias_especificas !== undefined) updateData.preferencias_especificas = data.preferencias_especificas
            if (data.clienteId !== undefined) updateData.cliente = new mongoose.Types.ObjectId(data.clienteId)

            return await Animal.findByIdAndUpdate(id, updateData, { new: true })
        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {
            return await Animal.findByIdAndDelete(id)
        } catch (e) {
            console.log(e)
        }
    }

}

export default new AnimalService()