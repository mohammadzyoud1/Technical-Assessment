import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ChartState {
  lineData: { labels: string[]; data: number[] } | null;
  barData: { labels: string[]; data: number[] } | null;
  pieData: { labels: string[]; data: number[] } | null;
  loading: boolean;
  error: string | null;
}

const initialState: ChartState = {
  lineData: null,
  barData: null,
  pieData: null,
  loading: false,
  error: null,
};

export const fetchLineData = createAsyncThunk('charts/fetchLineData', async () => {
  const response = await axios.get('http://localhost:8000/api/line-chart-data/');
  return response.data;
});

export const fetchBarData = createAsyncThunk('charts/fetchBarData', async () => {
  const response = await axios.get('http://localhost:8000/api/bar-chart-data/');
  return response.data;
});

export const fetchPieData = createAsyncThunk('charts/fetchPieData', async () => {
  const response = await axios.get('http://localhost:8000/api/pie-chart-data/');
  return response.data;
});

const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLineData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLineData.fulfilled, (state, action) => {
      state.lineData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchLineData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to load line chart data';
    });

    builder.addCase(fetchBarData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBarData.fulfilled, (state, action) => {
      state.barData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBarData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to load bar chart data';
    });

    builder.addCase(fetchPieData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPieData.fulfilled, (state, action) => {
      state.pieData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPieData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to load pie chart data';
    });
  },
});

export default chartSlice.reducer;
