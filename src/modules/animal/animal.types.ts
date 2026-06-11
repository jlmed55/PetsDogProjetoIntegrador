import mongoose from "mongoose"

export interface IAnimal {
    _id: mongoose.Types.ObjectId
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
    nome: string
    especie: string
    idade: number
    porte: string
    observacoes_saude?: string
    preferencias_especificas?: string
    clienteId: string
}

export interface IUpdateAnimalDTO {
    nome?: string
    especie?: string
    idade?: number
    porte?: string
    observacoes_saude?: string
    preferencias_especificas?: string
    clienteId?: string
}