import Keep from '../models/Keep'

interface ICreate {
  label: string
  password: string
}

interface IUpdate {
  id: string
  label: string
  password: string
}

export default class KeepRepository {
  private keeps: Array<Keep>

  constructor () {
    this.keeps = []
  }

  public find (): Keep[] {
    return this.keeps
  }

  public findById (id: string): Keep {
    const keepIndex = this.keeps.findIndex((elem) => elem.id === id)
    const keep = this.keeps[keepIndex]

    if (!keepIndex) {
      throw new Error('keep not found')
    }

    return keep
  }

  public create ({ label, password }: ICreate): Keep {
    const keep = new Keep({ label, password })
    this.keeps.push(keep)

    return keep
  }

  public update ({ id, label, password }: IUpdate): Keep {
    const keepIndex = this.keeps.findIndex((elem) => elem.id === id)

    if (!keepIndex) {
      throw new Error('keep not found')
    }

    this.keeps[keepIndex] = {
      id,
      label,
      password
    }

    const updatedKeep = this.keeps[keepIndex]

    return updatedKeep
  }

  public delete (id: string): void {
    const keepIndex = this.keeps.findIndex((elem) => elem.id === id)
    if (!keepIndex) {
      throw new Error('keep not found')
    }
    delete this.keeps[keepIndex]
  }
}
