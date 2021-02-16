<template>
  <q-page padding>
    <h1 class="text-h4 q-mt-none q-mb-md">
      {{ getPageTitle }}
    </h1>
    <q-separator
      class="q-my-md"
    />
    <q-form>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-6 q-gutter-md">
          <p class="text-h6">
            User Info
          </p>
          <q-input
            v-model="user.name"
            outlined
            label="Name *"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="user.username"
            outlined
            label="Username *"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="user.email"
            outlined
            hide-bottom-space
            type="email"
            label="E-mail *"
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="user.phone"
            outlined
            hide-bottom-space
            type="tel"
            label="Phone"
            :disable="routeIs.view"
          />
          <q-input
            v-model="user.website"
            outlined
            hide-bottom-space
            label="Website"
            :disable="routeIs.view"
          />
        </div>
        <div class="col-xs-12 col-md-6 q-gutter-md">
          <p class="text-h6">
            Address
          </p>
          <q-input
            v-model="user.address.street"
            outlined
            label="Address Street *"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="user.address.suite"
            outlined
            label="Address Number *"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="user.address.street"
            outlined
            label="City *"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="user.address.zipcode"
            outlined
            label="Zipcode *"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.view"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
        </div>
        <div
          v-if="routeIs.update || routeIs.create"
          class="col-xs-12"
        >
          <q-btn
            :label="routeIs.update ? 'Update' : 'Create'"
            color="primary"
            @click="formSubmit"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
            @click="resetState"
          />
        </div>
        <div
          v-else
          class="col-xs-12"
        >
          <q-btn
            label="Go Back"
            color="primary"
            @click="goToListUser"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  ref,
  computed,
} from 'vue';
import { useRoute } from 'vue-router';
import { User } from 'src/services/models';
import useUsersService from 'src/hooks/useUsersService';
import useCatchError from 'src/hooks/useCatchError';
import useUserRouterMethods from 'src/hooks/useUserRouterMethods';
import useSuccessNotify from 'src/hooks/useSuccessNotify';

const baseState = (): User => ({
  email: '',
  id: 0,
  name: '',
  phone: '',
  username: '',
  website: '',
  company: {
    bs: '',
    catchPhrase: '',
    name: '',
  },
  address: {
    city: '',
    geo: {
      lat: '',
      lng: '',
    },
    street: '',
    suite: '',
    zipcode: '',
  },
});

export default defineComponent({
  name: 'UserForm',
  setup() {
    const $route = useRoute();
    const { getUserById, createUser, updateUser } = useUsersService();
    const { errorNotify } = useCatchError();
    const { successNotify } = useSuccessNotify();
    const {
      goToListUser,
    } = useUserRouterMethods();

    const routeIs = computed(() => ({
      create: !!$route.meta.create,
      update: !!$route.meta.update,
      view: !!$route.meta.view,
    }));

    const userId = $route.params.id as string;
    const user = ref<User>(baseState());

    const getPageTitle = computed(() => {
      if (routeIs.value.view) return user.value.name;
      if (routeIs.value.update) return 'Update User';
      return 'Create User';
    });

    const getUserData = async () => {
      user.value = await getUserById(userId);
    };

    const resetState = async () => {
      if (routeIs.value.create) {
        user.value = baseState();
      }
      if (routeIs.value.update) {
        await getUserData();
      }
    };

    onBeforeMount(async () => {
      try {
        await getUserData();
      } catch (e) {
        errorNotify(e);
      }
    });

    const createNewUser = async () => {
      try {
        await createUser(user.value);
        successNotify('User create successfully!');
        await goToListUser();
      } catch (e) {
        errorNotify(e);
      }
    };

    const updateCurrentUser = async () => {
      try {
        await updateUser(userId, user.value);
        successNotify('User updated successfully!');
        await goToListUser();
      } catch (e) {
        errorNotify(e);
      }
    };

    const formSubmit = async () => {
      if (routeIs.value.create) await createNewUser();
      if (routeIs.value.update) await updateCurrentUser();
    };

    return {
      user,
      routeIs,
      getPageTitle,
      resetState,
      formSubmit,
    };
  },
});
</script>
