import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    removeStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload);
    },
  },
});

// Named exports for actions
export const { addStudent, removeStudent } = studentSlice.actions;

// Named export for selector
export const selectAllStudents = (state) => state.students;

// Default export for reducer
export default studentSlice.reducer;
