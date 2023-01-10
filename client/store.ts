import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import type { ThunkAction as BaseThunkAction } from 'redux-thunk'
import type { AnyAction } from 'redux'

import reducers from './reducers'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type ThunkAction<T = void> = BaseThunkAction<
  Promise<T>,
  RootState,
  void,
  AnyAction
  >