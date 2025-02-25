import { v4 as uuid } from 'uuid';
import { IUser } from './IUser';

export class User implements IUser {
  public id: string;
  public email: string;
  public name: string;
  public streak: number;
  public lastOpened?: Date;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(email: string, name: string) {
    this.id = uuid();
    this.email = email;
    this.name = name;
    this.streak = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  incrementStreak(): void {
    this.streak += 1;
    this.lastOpened = new Date();
    this.updatedAt = new Date();
  }
}
