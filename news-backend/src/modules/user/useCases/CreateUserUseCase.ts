import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { IUser } from '../entities/IUser';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute(data: CreateUserDTO): Promise<void> {
    // Verificar se usuário já existe
    const existing = await this.userRepository.findByEmail(data.email);
    if (existing) {
      throw new Error('User already exists');
    }

    // Criar novo usuário
    const newUser = new User(data.email, data.name);
    const savedUser = await this.userRepository.create(newUser);
    return savedUser;;
  }
}
