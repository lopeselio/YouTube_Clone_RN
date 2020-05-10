const initialState = false

export const themeReducer = (state = initialState, action) => {
  if (action.type === 'id') {
    return action.payload
  }
  return state
}
