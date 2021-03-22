import { v4 as uuid } from 'uuid'

interface IConstructor {
   label: string
   password: string
}

export default class Keep {
  public id: string
  public label: string
  public password: string

  constructor ({ label, password }: IConstructor) {
    this.id = uuid()
    this.label = label
    this.password = password
  }
}
