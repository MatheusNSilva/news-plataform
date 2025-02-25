import { IUser } from '../entities/IUser';

export class UserService {
  static incrementUserStreak(user: IUser): IUser {
    user.streak += 1;
    user.lastOpened = new Date();
    user.updatedAt = new Date();
    return user;
  }

}
