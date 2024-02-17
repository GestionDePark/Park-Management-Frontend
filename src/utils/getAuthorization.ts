import storage from '@/core/storage';

const getAuthorization = () => {
  return {
    Authorization: 'Bearer ' + storage.local.get('user_token'),
  };
};

export default getAuthorization;
