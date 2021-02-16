<template>
  <q-page padding>
    <user-list-table
      :users="users"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onBeforeMount } from 'vue';
import useUsersService from 'src/hooks/useUsersService';
import useCatchError from 'src/hooks/useCatchError';

export default defineComponent({
  name: 'UserList',
  components: {
    UserListTable: defineAsyncComponent(() => import('components/UserListTable.vue')),
  },

  setup() {
    const { getAllUsers, users } = useUsersService();
    const { errorNotify } = useCatchError();

    onBeforeMount(async () => {
      try {
        await getAllUsers();
      } catch (e) {
        errorNotify(e);
      }
    });

    return {
      users,
    };
  },
});
</script>
