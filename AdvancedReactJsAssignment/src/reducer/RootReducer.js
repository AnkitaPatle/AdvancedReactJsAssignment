import { combineReducers } from 'redux';
import SignupReducer from '../container/signup/Signup.reducer';

const RootReducer = combineReducers({
    signup: SignupReducer,
});

export default RootReducer;