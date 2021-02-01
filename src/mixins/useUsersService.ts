import { Users } from 'src/services/Users';
import { ref } from '@vue/composition-api';
import { User } from 'src/services/models';

const UserService = new Users({})

const users = ref<User[]>([]);

export const getAllUsers = async () => {
  const tmpUsers = await UserService.getAll();

  users.value = [...tmpUsers];

  return tmpUsers;
};

export const useUsersService = () => {
  return {
    users,
    getAllUsers,
  };
};

