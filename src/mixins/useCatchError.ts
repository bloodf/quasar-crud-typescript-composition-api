import { Notify } from 'quasar';

export default () => {
  const errorNotify = (error: Error) => {
    Notify.create({
      type: 'negative',
      message: error.message,
    });
  };

  return {
    errorNotify,
  }
}
