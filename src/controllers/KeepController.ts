import { Request, Response } from 'express'

import KeepRepository from '../repositories/KeepRepository'

const repository = new KeepRepository()

export default class KeepController {
  public async index (_request: Request, response: Response): Promise<Response> {
    try {
      const keeps = repository.find()

      return response.json(keeps)
    } catch (err) {
      return response.status(400).send()
    }
  }

  public async show (request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      const keep = repository.findById(id)

      return response.json(keep)
    } catch (err) {
      return response.status(400).send()
    }
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const { label, password } = request.body

    try {
      const keep = repository.create({ label, password })

      return response.json(keep)
    } catch (err) {
      return response.status(400).send()
    }
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const { label, password } = request.body

    try {
      const keep = repository.update({ id, label, password })

      return response.json(keep)
    } catch (err) {
      return response.status(400).send()
    }
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    try {
      repository.delete(id)

      return response.send()
    } catch (err) {
      return response.status(400).send()
    }
  }
}
