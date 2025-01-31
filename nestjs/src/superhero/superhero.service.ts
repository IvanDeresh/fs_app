import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/superhero.entity';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(name: string): Promise<User> {
    const user = this.userRepository.create({ name });
    return this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
