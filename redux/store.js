import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { firstCountReducer } from "./reducers/firstCountReducer";
import storage from "redux-persist/lib/storage";
// import storage from "./sync_storage";
import { persistStore, persistReducer } from "redux-persist";
import { secondCountReducer } from "./reducers/secondCountReducer";

const secondCountReducerPersistConfig = {
  key: "reduxTry2_secondCountReducer",
  blacklist: ["server", "client", "inc_click", "dec_click"],
  storage: storage,
};

const combinedReducer = combineReducers({
  firstCountReducer,
  secondCountReducer: persistReducer(
    secondCountReducerPersistConfig,
    secondCountReducer
  ),
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const persistConfig = {
      key: "reduxTry2",
      blacklist: ["secondCountReducer"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
