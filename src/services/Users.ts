import { User } from 'src/services/models';
import axios, { AxiosInstance } from 'axios';

export class Users {
  private repository: AxiosInstance;

  constructor({
                httpRepository = axios.create({
                  baseURL: 'https://jsonplaceholder.typicode.com/',
                }),
              }) {
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

  async delete(id: string): Promise<{}> {
    const { data } = await this.repository.delete<User>(`users/${id}`);

    return data;
  }
}


