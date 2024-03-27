    import { createAsyncThunk } from '@reduxjs/toolkit';
    import axios from '../../api/axios';

    export const fetchMealBySearch = createAsyncThunk(
    'categories/fetchMealBySearch',
    async (searchTerm: string) => {
        try {
        const response = await axios.get(`search.php?s=${searchTerm}`);
        return response.data.meals;
        } catch (error) {
        console.error('Error fetching meal by search:', error);
        throw error;
        }
    }
    );