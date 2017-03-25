import types from './action-type';
import * as actions from './actions';
import {getArticleDetail,getCateList,getArticleList,searchArticles} from './apis';
import Rx from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {combineEpics} from 'redux-observable';

function fGetArticleDetailEpic(action$){
    return action$.ofType(types['getArticleDetail.start'])
                  .mergeMap(action => 
                    Observable.fromPromise(getArticleDetail(action.payload.articleId))
                  )
                  .map(article => actions.fGetArticleDetailOk(article))
}

function fGetCateListEpic(action$){
    return action$.ofType(types['getCateList.start'])
                  .mergeMap(action => {
                        const {type,cate} = action.payload;
                        return Observable.fromPromise(getCateList(type,cate))
                     }
                  )
                  .map(aCate => actions.fGetCateListOk(aCate))
}

function fGetArticleListEpic(action$){
    return action$.ofType(types['getArticleList.start'])
                  .mergeMap(action => {
                      const {type,cate} = action.payload;
                      return Observable.fromPromise(getArticleList(type,cate));
                  })
                  .map(aArticle => actions.fGetArticleListOk(aArticle))
}

function fSearchArticlesEpic(action$){
    return action$.ofType(types['searchArticles.start'])
                  .mergeMap(action => {
                      const {keyword} = action.payload;
                      return Observable.fromPromise(searchArticles(keyword))
                  })
                  .map(aArticle => actions.fSearchArticlesOk(aArticle))
}

const rootEpic = combineEpics(
    fGetArticleDetailEpic,
    fGetCateListEpic,
    fGetArticleListEpic,
    fSearchArticlesEpic
);

export default rootEpic;