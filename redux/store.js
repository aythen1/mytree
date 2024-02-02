import { configureStore } from '@reduxjs/toolkit'
import storiesSlices from './slices/stories.slices'
import challengersSlices from './slices/challengers.slices'
import panelSlices from './slices/panel.slices'
import memoriesSlices from './slices/memories.slices'

export const store = configureStore({
  reducer: {
    stories: storiesSlices,
    challengers: challengersSlices,
    panel: panelSlices,
    memories: memoriesSlices
  }
})
