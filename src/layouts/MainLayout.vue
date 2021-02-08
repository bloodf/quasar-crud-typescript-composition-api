<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar CRUD - TypeScript
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Main Menu
        </q-item-label>
        <sidebar-internal-menu-item
          v-for="link in internalLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-separator />
        <q-item-label
          header
          class="text-grey-8"
        >
          Documentation and Languages
        </q-item-label>
        <sidebar-menu-item
          v-for="link in extraLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-separator />
        <q-item-label
          header
          class="text-grey-8"
        >
          Quasar
        </q-item-label>
        <sidebar-menu-item
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import SidebarMenuItem from 'components/SidebarMenuItem.vue';
import SidebarInternalMenuItem from 'components/SidebarInternalMenuItem.vue';
import { UserRouteName } from 'src/enums/routes';
import { defineComponent, ref } from 'vue';

const userMenu = [
  {
    title: 'User',
    caption: 'Manage users',
    icon: 'supervised_user_circle',
    to: {
      name: UserRouteName.List,
    },
  },
];
const extraData = [
  {
    title: 'Quasar Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'TypeScript',
    caption: 'Community Quasar projects',
    icon: 'devices',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: '@vue/composition-api',
    caption: 'Vue Composition API',
    icon: 'clear_all',
    link: 'https://github.com/vuejs/composition-api',
  },
];
const linksData = [
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',
  components: {
    SidebarMenuItem,
    SidebarInternalMenuItem,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);
    const extraLinks = ref(extraData);
    const internalLinks = ref(userMenu);

    return {
      leftDrawerOpen,
      essentialLinks,
      extraLinks,
      internalLinks,
    };
  },
});
</script>
