import Servico from "./servico.model.js";
import type {
  ICreateServicoDTO,
  IUpdateServicoDTO
} from "./servico.types.js";

class ServicoService {

  public async create(data: ICreateServicoDTO) {
    const servico = await Servico.create({
      name: data.name,
      duracao_min: data.duracao_min,
      preco: data.preco,
      tipo: data.tipo
    });
    return servico;
  }

  public async findAll() {
    return await Servico.find();

  }

  public async findById(id: string) {
    return await Servico.findById(id);

  }

  public async delete(id: string) {
    return await Servico.findByIdAndDelete(id);
  }

  public async update(id: string, data: IUpdateServicoDTO) {
    return await Servico.findByIdAndUpdate(id, data, {
      new: true
    })
  }
}

export default new ServicoService();