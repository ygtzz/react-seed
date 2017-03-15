import types from '../action-type';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import {fGetArticleList,fGetCateList,fSearchArticles} from 'index/mock/service';

const oState = {
    oCate: {
        bFetching:false,
        bError: false,
        data: []
    },
    oArticle:{
        bFetching:false,
        bError: false,
        data: []
    }
}

const fTrendReducer = handleActions({
    [types['getCateList.start']]:(state,action) => {
        const s = _.merge({},state,{
            oCate:{
                bFetching:true
            }
        });
        return s;
    },
    [types['getCateList.ok']]:(state,action) => {
        const s = _.assign({},state,{
            oCate:{
                bFetching:false,
                data:fGetCateList(action.payload.sType,action.payload.sCate),
                bError:false
            }
        });
        return s;
    },
    [types['getCateList.error']]:(state,action) => {
       const s = _.merge({},state,{
           oCate:{
               bError:true
           }
       });
       return s;
    },
    [types['getArticleList.start']]:(state,action) => {
        const s = _.merge({},state,{
            bFetching:true
        });
        return s;
    },
    [types['getArticleList.ok']]:(state,action) => {
        const s = _.assign({},state,{
            oArticle:{
                bFetching:false,
                data:fGetArticleList(action.payload.sType,action.payload.sCate),
                bError:false
            }
        });
        return s;
    },
    [types['getArticleList.error']]:(state,action) => {
       const s = _.merge({},state,{
           oArticle:{
               bError:true
           }
       })
       return s;
    },
    [types['searchArticles.start']]:(state,action) => {
        const s = _.merge({},state,{
            oArticle:{
                bFetching:true
            }
        })
        return s;
    },
    [types['searchArticles.ok']]:(state,action) => {
        const s = _.assign({},state,{
            oArticle:{
                bFetching:false,
                data:fSearchArticles(action.payload.sKeyword),
                bError:false
            }
        })
        return s;
    },
    [types['searchArticles.error']]:(state,action) => {
       const s = _.merge({},state,{
            oArticle:{
                bError:true
            }
       });
       return s;
    }                                       
},oState);

export default fTrendReducer;
