import { useDispatch } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const LOCAL_STORAGE_LOCATION = "demo-store";

const rootReducer = combineReducers({
  user: userReducer,
});

const stateObjectsToPersist: Array<keyof RootState> = ["user"];

const saveToLocalStorage = (state: RootState) => {
  try {
    let stateToPersist: any = {};
    let stateProperty: keyof RootState;
    for (stateProperty in state) {
      if (!stateObjectsToPersist.includes(stateProperty)) {
        continue;
      }
      stateToPersist[stateProperty] = state[stateProperty];
    }
    localStorage.setItem(
      LOCAL_STORAGE_LOCATION,
      JSON.stringify(stateToPersist)
    );
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = (): RootState | undefined => {
  try {
    const stateStr = localStorage.getItem(LOCAL_STORAGE_LOCATION);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

let middleware: Array<any> = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, logger];
}

const store = createStore(
  rootReducer,
  persistedStore,
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
