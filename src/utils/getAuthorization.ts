import storage from '@/core/storage.ts';

const getAuthorization = () => {
  return {
    Authorization: 'Bearer ' + storage.local.get('user_token'),
  };
};

export default getAuthorization;
