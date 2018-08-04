import { createAction } from 'redux-actions'

import makeAsyncAction from '../../utils/makeAsyncAction'
import API from './api'

// Actions
const GET_IMAGES = makeAsyncAction('GET_IMAGES')
const TOGGLE_IMAGE = 'TOGGLE_IMAGE'

// Selectors
export const selectImagesCollection = state => state.images.collection
export const selectSelectedImages = state => state.images.selected
export const selectLoadingImages = state => state.images.loading
export const selectLoadingRejected = state => state.images.rejected

// Initial state
const initialState = {
  collection: {},
  selected: [],
  loading: false,
  rejected: false
}

// Reducer
const reducer = (
  state = initialState, {
    type,
    payload
  }
) => {
  switch (type) {
    case GET_IMAGES.pending: {
      return {
        ...state,
        loading: true,
        rejected: false
      }
    }
    case GET_IMAGES.rejected: {
      return {
        ...state,
        loading: false,
        rejected: true
      }
    }
    case GET_IMAGES.fulfilled: {
      return {
        ...state,
        collection: payload,
        loading: false,
        rejected: false
      }
    }
    case TOGGLE_IMAGE: {
      const id = payload
      return {
        ...state,
        collection: {
          ...state.collection,
          [id]: {
            ...state.collection[id],
            selected: !state.collection[id].selected // Toggling the selected flag
          }
        },
        selected: !state.collection[id].selected ? (
          // Adding the image to selected list
          [
            ...state.selected,
            state.collection[id]
          ]
        ) : (
          // Returning a filtered list without deselected element
          state.selected.filter(({ id: imageId }) => imageId !== id)
        )
      }
    }
    default: {
      return state
    }
  }
}

// Action creators
export const getImages = () => dispatch => dispatch({
  type: GET_IMAGES.base,
  payload: API.loadImages()
})

export const toggleImage = createAction(TOGGLE_IMAGE)

export default reducer
