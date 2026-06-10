import mongoose from "mongoose"

export interface IAnimal {
    _id: mongoose.Types.ObjectId
    id_animal: number
    nome: string
    especie: string
    idade: number
    porte: string
    observacoes_saude?: string
    preferencias_especificas?: string
    cliente: mongoose.Types.ObjectId
    createdAt: string
    updatedAt?: string
}

export interface ICreateAnimalDTO {
    id_animal: number
    nome: string
    especie: string
    idade: number
    porte: string
    observacoes_saude?: string
    preferencias_especificas?: string
    clienteId: string
}

export interface IUpdateAnimalDTO {
    id_animal?: number
    nome?: string
    especie?: string
    idade?: number
    porte?: string
    observacoes_saude?: string
    preferencias_especificas?: string
    clienteId?: string
}