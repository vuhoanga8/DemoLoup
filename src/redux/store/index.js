import { createStore, applyMiddleware, compose } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { rootEpic } from "../epic"
import { rootReducer } from "../reducer"
import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
  const middlewares = [];
  middlewares.push(epicMiddleware);

  if (process.env.NODE_ENV === `development`) {

    middlewares.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  )

  epicMiddleware.run(rootEpic)

  return store
}
