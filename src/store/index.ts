import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import userReducer from "./reducers/userReducer";

const LOCAL_STORAGE_LOCATION = "demo-store";

const loadFromLocalStorage = (): RootState | undefined => {
  try {
    const stateStr = localStorage.getItem(LOCAL_STORAGE_LOCATION);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    let middleware = getDefaultMiddleware();

    if (process.env.NODE_ENV !== "production") {
      return middleware.concat(logger);
    }

    return middleware;
  },
  preloadedState,
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

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
