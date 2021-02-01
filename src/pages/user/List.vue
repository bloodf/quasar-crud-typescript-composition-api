<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useUsersService } from 'src/mixins/useUsersService';
import useApiErrorManager from 'src/mixins/useApiErrorManager';

export default defineComponent({
  name: 'UserList',
  setup(){
    return {
      ...useUsersService(),
      ...useApiErrorManager(),
    }
  },
  async beforeMount(){
    try{
      await this.getAllUsers();
    } catch (e){
      this.useApiErrorManager(e);
    }

  }
});
</script>
