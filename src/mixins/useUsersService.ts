import { Users } from 'src/services/Users';
import { ref } from 'vue';
import { User } from 'src/services/models';

const UserService = new Users({});

const users = ref<User[]>([]);

export const deleteUser = async (id: string) => UserService.delete(id);

export const getAllUsers = async () => UserService.getAll();

export default () => ({
  users,
  getAllUsers: async () => {
    const tmpUsers = await getAllUsers();

    users.value = [...tmpUsers];

    return tmpUsers;
  },
});
