import { Notify } from 'quasar';

export default () => {
  const successNotify = (message: string) => {
    Notify.create({
      type: 'positive',
      message,
    });
  };

  return {
    successNotify,
  };
};
