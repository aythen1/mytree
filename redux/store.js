import { configureStore } from '@reduxjs/toolkit'
import storiesSlices from './slices/stories.slices'
import challengersSlices from './slices/challengers.slices'

export const store = configureStore({
  reducer: {
    stories: storiesSlices,
    challengers: challengersSlices
  }
})
