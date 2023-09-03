import { createSlice } from '@reduxjs/toolkit';

export interface IProduct {
  id: number,
  title: string,
  rating: number,
  year: number,
  description?: string,
  price?: number,
  stock?: number,
  category?: string,
  thumbnail?: string,
}

interface IProductsState {
  list: IProduct[],
}

const initialState: IProductsState = {
  list: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state: IProductsState, { payload }: { payload: IProduct }) => {
      state.list = [...state.list, payload];
    },
    remove: (state: IProductsState, { payload }: { payload: number }) => {
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    addMultiple: (state: IProductsState, { payload }: { payload: IProduct[] }) => {
      state.list = [...state.list, ...payload];
    },
    update: (state: IProductsState, { payload }: { payload: IProduct }) => {
      state.list = state.list.map(product => product.id === payload.id ? payload : product);
    },
  },
});

export const { add, remove, addMultiple, update } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;