import types from '../action-type';
import service from '../../mock/service';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import _ from 'lodash';

const oState = { 
    oArticle: {
        bFetching: false,
        bError: false,
        data: { 'content': '' } 
    }
}

const fArticleReducer = handleActions({
    [types['getArticleDetail.start']]:(state,action) => {
        const s = _.merge({},state,{
            oArticle:{
                bFetching:true
            }
        })
        return s;
    },
    [types['getArticleDetail.ok']]:(state,action) => {
        const s = _.assign({},state,{
            oArticle:{
                bFetching:false,
                data:fGetArticleDetail(action.payload.articleId),
                bError:false
            }
        })
        return s;
    },
    [types['getArticleDetail.error']]:(state,action) => {
        const s = _.merge({},state,{
            oArticle:{
                bError:true
            }
        });
       return s;
    }             
},oState);

function fGetArticleDetail(id) {
    var oArticle;
    service.getArticleDetail(id, function(article) {
        oArticle = article;
    })
    return oArticle;
}

export default fArticleReducer;
