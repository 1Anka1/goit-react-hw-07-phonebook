// import axios from 'axios';
// //
// import { fetchingInProgress, fetchingError, fetchingSuccess } from './slice';

// axios.defaults.baseURL = 'https://63626f9a66f75177ea2f79a4.mockapi.io/';

// const fetchContacts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/contacts');
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };
