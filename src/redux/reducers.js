import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    name: "Elia",
    menuSelected: 'home'
};

const changeStateField = (state, action) => {
    return {...state, [action.payload.field]: action.payload.value};
}

const commonsSlice = createSlice({
    name: 'Commons',
    initialState: INITIAL_STATE,
    reducers: {
        changeStateField,
    },
});

const actions = commonsSlice.actions;

export {actions as Actions};

export default commonsSlice.reducer;
