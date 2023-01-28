import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const newsSlice = createSlice({
		name: 'new',
    initialState: [],
    reducers: {
        setNews : (state, action) => {
          return action.payload
        }
    }
})
export const getNewsThunk = () => dispatch => {
    setIsLoading ( setIsLoading( true ) )
    axios.get('https://news-app-api.academlo.tech/news/')
    .then( resp => dispatch( setNews( resp.data ) ) )
    .catch( error => console.error( error ) )
    .finally( () => dispatch( setIsLoading( false )) )
}

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;