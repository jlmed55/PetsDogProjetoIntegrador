import mongoose from "mongoose"

export interface ICliente {
    _id: mongoose.Types.ObjectId
    name: string
    email: string
    telefone: string
    senha: string
    createdAt: string
    updatedAt?: string
}

export interface ICreateClienteDTO {
    name: string
    email: string
    telefone: string
    senha: string
}

export interface IUpdateClienteDTO {
    name?: string
    email?: string
    telefone?: string
    senha?: string
}