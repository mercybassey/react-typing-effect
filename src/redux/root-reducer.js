import { combineReducers } from 'redux';
import shareReducer from './share/share.reducer';

const rootReducer = combineReducers({
    share: shareReducer
});

export default rootReducer;