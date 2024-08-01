import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_BASE_URL, useLocalStorage } from "../../utils"

const initialState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo') || null),
  error: ''
}

const handleErrorState = (error) => {
  if (error.response) {
    throw new Error(
      error.response.data.error ||
        error.response.data.message ||
        error.message
    )
  } else {
    throw new Error(
      error.message == 'Network error' ? 'Please check your Internet!' : error.message
    )
  }
}

export const register = createAsyncThunk(
  'auth/register',
  async ({ formData }) => {
    console.log(formData)
    try {
      const { data } = await axios.post(`${SERVER_BASE_URL}/api/register`, formData);
      return data
    } catch (err) {
      handleErrorState(err);
    }
  }
)

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ credentials }) => {
    console.log(credentials)
    try {
      const { data } = await axios.post(`${SERVER_BASE_URL}/api/login`, credentials);
      return data;
    } catch (err) {
      handleErrorState(err);
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async (route) => {
  const token = JSON.parse(localStorage.getItem('userInfo') || null)?.token;
  try {
    await axios.post(`${SERVER_BASE_URL}/api/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (err) {
    handleErrorState(err);
  }
})


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = '';
        useLocalStorage({ key: 'userInfo', value: action.payload });
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = '';
        useLocalStorage({ key: 'userInfo', value: action.payload });
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.userInfo = null;
        state.error = '';
        useLocalStorage({ key: 'userInfo', value: null });
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'logout request failed';
      })
  }
})

export default authSlice.reducer;
export const { setUserInfo } = authSlice.actions;
