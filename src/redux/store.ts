import { createStore } from "redux";
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

// type declaration for useSelector(state: RootState => ...)
export type RootState = ReturnType<typeof store.getState>

const store = createStore(
    reducers,
    {},
    composeWithDevTools()
    )
    
export default store 