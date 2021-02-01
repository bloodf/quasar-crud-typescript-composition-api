import { Users } from 'src/services/Users';
import { ref } from '@vue/composition-api';
import { User } from 'src/services/models';

const UserService = new Users({})

const users = ref<User[]>([]);

export const deleteUser = async (id: string) => {
  return UserService.delete(id);
};

export const getAllUsers = async () => {
  return UserService.getAll();
};

export default () => {
  return {
    users,
    getAllUsers: async () => {
      const tmpUsers = await getAllUsers();

      users.value = [...tmpUsers];

      return tmpUsers;
    },
  };
};

