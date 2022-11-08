export const pendingCallback = store => {
  store.loading = true;
};
export const errorCallback = (store, { payload }) => {
  store.items = payload;
  store.loading = false;
};
