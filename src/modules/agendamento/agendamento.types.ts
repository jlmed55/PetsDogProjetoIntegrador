import mongoose from "mongoose"

export interface IAgendamento {
    _id: mongoose.Types.ObjectId
    data_hora: Date
    status: string
    observacoes?: string
    cliente: mongoose.Types.ObjectId
    animal: mongoose.Types.ObjectId
    profissional: mongoose.Types.ObjectId
    servico: mongoose.Types.ObjectId
    createdAt: string
    updatedAt?: string
}

export interface ICreateAgendamentoDTO {
    data_hora: Date
    status: string
    observacoes?: string
    clienteId: string
    animalId: string
    profissionalId: string
    servicoId: string
}

export interface IUpdateAgendamentoDTO {
    data_hora?: Date
    status?: string
    observacoes?: string
    clienteId?: string
    animalId?: string
    profissionalId?: string
    servicoId?: string
}