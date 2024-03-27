    import { createAsyncThunk } from '@reduxjs/toolkit';
    import axios from '../../api/axios';

    export const fetchSingleMeal = createAsyncThunk(
    'categories/fetchSingleMeal',
    async (id: string) => {
        try {
            const response = await axios.get(`lookup.php?i=${id}`);
        return response.data.meals;
        } catch (error) {
        console.error('Error fetching single meal:', error);
        throw error;
        }
    }
    );