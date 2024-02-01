import { createSlice } from '@reduxjs/toolkit'

export const panelSlices = createSlice({
  name: 'panel',
  initialState: {
    showPanel: false
  },
  reducers: {
    setPanel: (state, action) => {
      state.showPanel = action.payload
    }
  }
})

export default panelSlices.reducer
