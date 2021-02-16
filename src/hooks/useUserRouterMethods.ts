import { useRouter } from 'vue-router';
import { UserRouteName } from 'src/enums/routes';

export default () => {
  const $router = useRouter();
  const goToEditUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.Update,
      params: {
        id,
      },
    });
  };
  const goToViewUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.View,
      params: {
        id,
      },
    });
  };
  const goToRemoveUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.Remove,
      params: {
        id,
      },
    });
  };
  const goToCreateUser = async () => {
    await $router.push({
      name: UserRouteName.Create,
    });
  };
  const goToListUser = async () => {
    await $router.push({
      name: UserRouteName.List,
    });
  };

  return {
    goToEditUser,
    goToViewUser,
    goToRemoveUser,
    goToCreateUser,
    goToListUser,
  };
};
