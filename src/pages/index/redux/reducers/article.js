import {types} from '../action-type';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import _ from 'lodash';

const oState = { 
    bFetching:false,
    data:'',
    bError:false
}

const fArticleReducer = handleActions({
    [types['getArticleDetail.start']]:(state,action) => {
        const s = _.assign({},state,{
            bFetching:true
        })
        return s;
    },
    [types['getArticleDetail.ok']]:(state,action) => {
        const s = _.assign({},state,{
            data:action.payload
        })
        return s;
    },
    [types['getArticleDetail.error']]:(state,action) => {
        const s = _.merge({},state,{
            bError:true
        });
       return s;
    }             
},oState);

export default fArticleReducer;
