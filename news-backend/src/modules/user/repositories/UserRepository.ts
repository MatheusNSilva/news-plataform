import { IUser } from '../entities/IUser';
import { IUserRepository } from './IUserRepository';
import { query } from '../../../infra/database';

const inMemoryDB: IUser[] = []; // Exemplo didático

export class UserRepository implements IUserRepository {
  async create(user: IUser): Promise<void> {
    await query(
      "INSERT INTO Is (id, name, email, streak) VALUES ($1, $2, $3, $4)",
      [user.id, user.name, user.email, user.streak]
    );
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const result = await query("SELECT * FROM users WHERE email = $1", [email]);
    return result.length ? (result[0] as IUser) : null;
  }

  async findById(id: string): Promise<IUser | null> {
    const user = inMemoryDB.find(u => u.id === id);
    return user || null;
  }

  async update(user: IUser): Promise<IUser> {
    const index = inMemoryDB.findIndex(u => u.id === user.id);
    if (index !== -1) {
      inMemoryDB[index] = user;
    }
    return user;
  }
}
