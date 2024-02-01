import { configureStore } from '@reduxjs/toolkit'
import storiesSlices from './slices/stories.slices'

export const store = configureStore({
  reducer: {
    stories: storiesSlices
  }
})
