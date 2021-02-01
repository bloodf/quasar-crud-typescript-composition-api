import { Notify } from 'quasar';

export default () => {
  const useApiErrorManager = (error: Error) => {
    Notify.create({
      type: 'negative',
      message: error.message,
    });
  };

  return {
    useApiErrorManager,
  }
}
