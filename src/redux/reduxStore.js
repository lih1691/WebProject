import { applyMiddleware, compose } from 'redux';
import penderMiddleware from "redux-pender";
import modules from './modules';
import authReducer from 'redux/features/authSlice';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const ReduxStore = (initialState) => {
    const store = createStore(modules, initialState, composeEnhancers(
        applyMiddleware(penderMiddleware())
    ));

    return store;
}

export const store = configureStore({
    reducer: authReducer,
})

export default ReduxStore;
