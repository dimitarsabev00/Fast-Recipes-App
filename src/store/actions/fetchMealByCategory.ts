import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export const fetchMealByCategory = createAsyncThunk(
'categories/fetchMealByCategory',
async (category: string) => {
    try {
    const response = await axios.get(`filter.php?c=${category}`);
    return response.data.meals;
    } catch (error) {
    console.error('Error fetching meal by category:', error);
    throw error;
    }
}
);