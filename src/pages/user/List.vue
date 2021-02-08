<template>
  <q-page padding>
    <q-table
      title="Users"
      :data="users"
      :columns="columnsData"
      :rows-per-page-options="[10, 20, 30, 40, 50, 0]"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="username" :props="props">
            {{ props.row.username }}
          </q-td>
          <q-td
            class="text-right"
          >
            <q-btn-group
              outline
            >
              <q-btn
                color="info"
                icon="visibility"
                @click="goToViewUser(props.row.id)"
              />
              <q-btn
                color="positive"
                icon="create"
                @click="goToEditUser(props.row.id)"
              />
              <q-btn
                color="negative"
                icon="delete"
                @click="goToRemoveUser(props.row.id)"
              />
            </q-btn-group>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUsersService from 'src/mixins/useUsersService';
import useCatchError from 'src/mixins/useCatchError';
import { UserRouteName } from 'src/enums/routes';
import userRouterMethods from 'src/mixins/userRouterMethods';

const columnsData = [
  {
    align: 'left',
    field: 'name',
    label: 'Name',
    name: 'name',
    required: true,
    sortable: true,
  },
  {
    align: 'left',
    field: 'email',
    label: 'E-mail',
    name: 'email',
    sortable: true,
  },
  {
    align: 'left',
    field: 'username',
    label: 'Username',
    name: 'username',
    sortable: true,
  },
  {
    align: '',
    field: '',
    label: '',
    name: '',
    sortable: false,
  },
];

export default defineComponent({
  name: 'UserList',
  mixins: [
    userRouterMethods,
  ],
  setup() {
    const { getAllUsers, users } = useUsersService();
    const { errorNotify } = useCatchError();

    return {
      columnsData,
      users,
      getAllUsers,
      errorNotify,
    }
  },
  async beforeMount() {
    try {
      await this.getAllUsers();
    } catch (e) {
      this.errorNotify(e);
    }
  },
});
</script>
