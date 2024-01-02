import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Try again');
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', newUser);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Try again');
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unSet();
    } catch (error) {
      toast.error('Something went wrong. Try again');
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
