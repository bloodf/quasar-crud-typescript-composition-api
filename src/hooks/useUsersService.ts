import { Users } from 'src/services/Users';
import { ref } from 'vue';
import { User } from 'src/services/models';

const UserService = new Users({});

const users = ref<User[]>([]);

const deleteUser = async (id: string) => UserService.delete(id);

const getAllUsers = async () => {
  const tmpUsers = await UserService.getAll();

  users.value = [...tmpUsers];

  return tmpUsers;
};

const getUserById = async (id: string) => UserService.get(id);

const createUser = async (user: User) => UserService.create(user);

const updateUser = async (id:string, user: User) => UserService.update(id, user);

export default () => ({
  users,
  deleteUser,
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
});
