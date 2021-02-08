import { defineComponent } from 'vue';
import { UserRouteName } from 'src/enums/routes';

export default defineComponent({
  methods: {
    async goToEditUser(id: string): Promise<void> {
      await this.$router.push({
        name: UserRouteName.Update,
        params: {
          id,
        },
      });
    },
    async goToViewUser(id: string): Promise<void> {
      await this.$router.push({
        name: UserRouteName.View,
        params: {
          id,
        },
      });
    },
    async goToRemoveUser(id: string): Promise<void> {
      await this.$router.push({
        name: UserRouteName.Remove,
        params: {
          id,
        },
      });
    },
    async goToCreateUser(): Promise<void> {
      await this.$router.push({
        name: UserRouteName.Create,
      });
    },
    async goToListUser(): Promise<void> {
      await this.$router.push({
        name: UserRouteName.List,
      });
    },
  },
});
