import {combineReducers} from 'redux';
import articles from './articles';
import authUser from './authUser';
import common from './common';
import {routerReducer} from 'react-router-redux';


export default combineReducers ({
    articles,
    authUser,
    common,
    router: routerReducer
});