<template>
  <q-page padding>
    Removing User ID {{ $route.params.id }}
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import useUsersService from 'src/hooks/useUsersService';
import useCatchError from 'src/hooks/useCatchError';
import { UserRouteName } from 'src/enums/routes';
import { useRoute, useRouter } from 'vue-router';
import useSuccessNotify from 'src/hooks/useSuccessNotify';

export default defineComponent({
  name: 'RemoveUser',
  setup() {
    const $route = useRoute();
    const $router = useRouter();
    const { errorNotify } = useCatchError();
    const { successNotify } = useSuccessNotify();
    const { deleteUser } = useUsersService();

    onBeforeMount(async () => {
      try {
        await deleteUser($route.params.id as string);
        successNotify('User removed successfully!');
      } catch (e) {
        errorNotify(e);
      } finally {
        await $router.push({
          name: UserRouteName.List,
        });
      }
    });
  },
});
</script>
