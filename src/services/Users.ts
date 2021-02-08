import { User } from 'src/services/models';
import axios, { AxiosInstance } from 'axios';

const baseConfig = { baseURL: 'https://jsonplaceholder.typicode.com/' };

export class Users {
  private repository: AxiosInstance;

  constructor({ httpRepository = axios.create(baseConfig) }) {
    this.repository = httpRepository;
  }

  async getAll(): Promise<User[]> {
    const { data } = await this.repository.get<User[]>('users');

    return data;
  }

  async get(id: string): Promise<User> {
    const { data } = await this.repository.get<User>(`users/${id}`);

    return data;
  }

  async create(user: User): Promise<User> {
    const { data } = await this.repository.post<User>('users', {
      ...user,
    });

    return data;
  }

  async update(id: string, user: User): Promise<User> {
    const { data } = await this.repository.patch<User>(`users/${id}`, {
      ...user,
    });

    return data;
  }

  async delete(id: string): Promise<Record<string, unknown>> {
    const { data } = await this.repository.delete<Record<string, unknown>>(`users/${id}`);

    return data;
  }
}
