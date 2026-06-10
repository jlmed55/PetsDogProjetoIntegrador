import mongoose, { Schema, Types } from "mongoose"
import type { IAgendamento } from "./agendamento.types.js"

const agendamentoSchema = new Schema<IAgendamento>(
    {
        data_hora: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
        observacoes: {
            type: String,
            required: false,
            trim: true,
        },
        cliente: {
            type: Types.ObjectId,
            ref: 'Cliente',
            required: true,
        },
        animal: {
            type: Types.ObjectId,
            ref: 'Animal',
            required: true,
        },
        profissional: {
            type: Types.ObjectId,
            ref: 'Profissional',
            required: true,
        },
        servico: {
            type: Types.ObjectId,
            ref: 'Servico',
            required: true,
        },
    },
    { timestamps: true }
)

const Agendamento = mongoose.model<IAgendamento>("Agendamento", agendamentoSchema)

export default Agendamento