import mongoose from 'mongoose'
import Agendamento from './agendamento.model.js'
import type { ICreateAgendamentoDTO, IUpdateAgendamentoDTO } from './agendamento.types.js'

class AgendamentoService {

    async create(data: ICreateAgendamentoDTO) {
        try {

            return await Agendamento.create({
                data_hora: data.data_hora,
                status: data.status,
                observacoes: data.observacoes,
                cliente: new mongoose.Types.ObjectId(data.clienteId),
                animal: new mongoose.Types.ObjectId(data.animalId),
                profissional: new mongoose.Types.ObjectId(data.profissionalId),
                servico: new mongoose.Types.ObjectId(data.servicoId)
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {

            return await Agendamento.find()
                .populate('cliente')
                .populate('animal')
                .populate('profissional')
                .populate('servico')

        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {

            return await Agendamento.findById(id)
                .populate('cliente')
                .populate('animal')
                .populate('profissional')
                .populate('servico')

        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateAgendamentoDTO) {
        try {
            const updateData: any = {}

            if (data.data_hora !== undefined) updateData.data_hora = data.data_hora
            if (data.status !== undefined) updateData.status = data.status
            if (data.observacoes !== undefined) updateData.observacoes = data.observacoes
            if (data.clienteId !== undefined) updateData.cliente = new mongoose.Types.ObjectId(data.clienteId)
            if (data.animalId !== undefined) updateData.animal = new mongoose.Types.ObjectId(data.animalId)
            if (data.profissionalId !== undefined) updateData.profissional = new mongoose.Types.ObjectId(data.profissionalId)
            if (data.servicoId !== undefined) updateData.servico = new mongoose.Types.ObjectId(data.servicoId)

            return await Agendamento.findByIdAndUpdate(
                id,
                updateData,
                { new: true }
            )

        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {

            return await Agendamento.findByIdAndDelete(id)

        } catch (e) {
            console.log(e)
        }
    }
}

export default new AgendamentoService()