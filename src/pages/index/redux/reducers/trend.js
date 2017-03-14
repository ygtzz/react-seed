import types from '../action-type';
import service from '../../mock/service';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import _ from 'lodash';

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
        const s = _.merge({},state,{
            oCate:{
                bFetching:false,
                data:fGetCateList(action.payload.sType,action.payload.sCate)
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
        const s = _.merge({},state,{
            oArticle:{
                bFetching:false,
                data:fGetArticleList(action.payload.sType,action.payload.sCate)
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
        const s = _.merge({},state,{
            oArticle:{
                bFetching:false,
                data:fSearchArticles(action.payload.sKeyword)
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

function fGetCateList(type,cate){
    var cateList = {
        'hot' : [{
            'id' : 'now',
            'name' : '当前热门'
        },
        {
            'id' : 'weekly',
            'name' : '七日热门'
        },
        {
            'id' : 'mouthly',
            'name' : '三十日热门'
        }],

        'notes' : [{
            'id' : 'all',
            'name' : '全部'
        },
        {
            'id' : '13',
            'name' : '市集'
        },
        {
            'id' : '14',
            'name' : '生活家'
        },
        {
            'id' : '15',
            'name' : '世间事'
        }]
    };
    var list  = cateList[type] || [];
    for (var i = 0; i < list.length; i++) {
        list[i]['active'] = list[i]['id'] == cate;
    };      
    return list;
}

function fGetArticleList (type,cate) {
    var aArticle;
    service.getArticleList(type,cate,function(articles){
        aArticle = articles;
    });
    return aArticle;
}

function fSearchArticles(keyword){
    var aArticle;
    service.searchArticles(keyword,function(articles){
        aArticle = articles;
    })
    return aArticle;
}

export default fTrendReducer;
