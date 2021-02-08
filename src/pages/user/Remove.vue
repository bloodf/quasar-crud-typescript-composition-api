<template>
  <q-page padding>
    Removing User ID {{ $route.params.id }}
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { deleteUser } from 'src/mixins/useUsersService';
import useCatchError from 'src/mixins/useCatchError';
import { UserRouteName } from 'src/enums/routes';

export default defineComponent({
  name: 'RemoveUser',
  setup() {
    const { errorNotify } = useCatchError();

    return {
      errorNotify,
    };
  },
  async beforeMount() {
    await this.removeUser();
    await this.$router.push({
      name: UserRouteName.List,
    });
  },
  methods: {
    async removeUser() {
      try {
        await deleteUser(this.$route.params.id as string);
      } catch (e) {
        this.errorNotify(e);
      }
    },
  },
});
</script>
