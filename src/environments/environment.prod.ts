const url = "http://localhost:3000";
export const environment = {
  production: true,
  http: {
    get: url + 'data',
    create_user: url + 'users'
  }
};
