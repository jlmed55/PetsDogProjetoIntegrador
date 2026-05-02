import mongoose from "mongoose"

export interface IServico {
    _id: mongoose.Types.ObjectId
    name: string
    tipo: string
    duracao_min: number
    preco: number
}

export interface ICreateServicoDTO{
    name: string
    tipo: string
    duracao_min: number
    preco: number
}

export interface IUpdateServicoDTO{
    name?: string
    tipo?: string
    duracao_min?: number
    preco?: number
}