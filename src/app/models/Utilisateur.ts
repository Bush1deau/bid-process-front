import {Role} from './Role.model';
export class Utilisateur {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
    public role?: Role,
  ) {
  }
}


