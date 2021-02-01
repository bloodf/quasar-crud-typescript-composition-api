import { User } from 'src/services/models';
import axios, { AxiosInstance } from 'axios';

export class Users {
  private axios: AxiosInstance;

  constructor({
                $axios = axios.create({
                  baseURL: 'https://jsonplaceholder.typicode.com/',
                }),
              }) {
    this.axios = $axios;
  }

  async getAll(): Promise<User[]> {
    const { data } = await this.axios.get<User[]>('users');

    return data;
  }

  async get(id: string): Promise<User> {
    const { data } = await this.axios.get<User>(`users/${id}`);

    return data;
  }

  async create(user: User): Promise<User> {
    const { data } = await this.axios.post<User>('users', {
      ...user,
    });

    return data;
  }

  async update(id: string, user: User): Promise<User> {
    const { data } = await this.axios.patch<User>(`users/${id}`, {
      ...user,
    });

    return data;
  }

  async delete(id: string): Promise<User> {
    const { data } = await this.axios.delete<User>(`users/${id}`);

    return data;
  }
}


