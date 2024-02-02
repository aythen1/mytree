import { createSlice } from '@reduxjs/toolkit'

export const panelSlices = createSlice({
  name: 'panel',
  initialState: {
    showPanel: false,
    panelAddFooter: false,
    isFooter: false
  },
  reducers: {
    setPanel: (state, action) => {
      state.showPanel = action.payload
    },

    setPanelAddFooter: (state, action) => {
      state.panelAddFooter = action.payload
    },
    setIsFooterShow: (state, action) => {
      state.isFooter = action.payload
    }
  }
})

export const { setPanelAddFooter, setIsFooterShow } = panelSlices.actions

export default panelSlices.reducer
