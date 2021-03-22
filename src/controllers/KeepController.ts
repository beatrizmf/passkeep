import { Request, Response } from 'express'

import KeepRepository from '../repositories/KeepRepository'

const repository = new KeepRepository()

export default class KeepController {
  public async index (_request: Request, response: Response): Promise<Response> {
    const keeps = repository.find()

    return response.json(keeps)
  }

  public async show (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const keep = repository.findById(id)

    return response.json(keep)
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const { label, password } = request.body
    const keep = repository.create({ label, password })

    return response.json(keep)
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const { label, password } = request.body
    const keep = repository.update({ id, label, password })

    return response.json(keep)
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    repository.delete(id)

    return response.send()
  }
}
