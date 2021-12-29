import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice.js';

export default configureStore({
    reducer: {
        // counter – имя внутри объекта состояния state.counter
        counter: counterReducer,
    },
});

import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // пример с данными
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен редьюсеров
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default counterSlice.reducer;
