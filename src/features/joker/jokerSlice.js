import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchJoke } from './jokeAPI';

const initialState = {
  joke: "Insert joke here"
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const updateJoke = createAsyncThunk(
  'joker/fetchJoke',
  async (flag) => {
    const response = await(
      fetchJoke(flag).then(
        data => {
          if (data.type === "single") {
            const content = data.joke
            
            return content
          }
    
          else if (data.type === "twopart") {
            const content = [
              data.setup,
              data.delivery
            ]
    
            return `${content[0]}\n\n${content[1]}`
        }
        })
    );

    return response;
  }
);

export const jokerSlice = createSlice({
  name: 'joker/fetchJoke',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateToCustomJoke: (state, action) => {
      state.joke = action.payload;
    }
  },

    extraReducers: (builder) => {
      builder
        .addCase(updateJoke.pending, (state) => {
          state.joke = "loading funni";
        })
        .addCase(updateJoke.fulfilled, (state, action) => {
          state.joke = action.payload;
        })
    },
});

export const { updateToCustomJoke } = jokerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectJoke = (state) => state.joker.joke;

export default jokerSlice.reducer;
