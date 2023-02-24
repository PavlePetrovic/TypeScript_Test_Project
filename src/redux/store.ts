import { createStore } from "redux";
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

// First, you must install npm install --save @types/react-redux, then:
// type declaration for useSelector(state: RootState => ...)
export type RootState = ReturnType<typeof store.getState>
// type declaration for useDispatch
export type AppDispatch = typeof store.dispatch

const store = createStore(
    reducers,
    {},
    composeWithDevTools()
    )
    
export default store 