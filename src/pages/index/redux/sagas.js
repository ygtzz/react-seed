import {put,call,fork,take,takeEvery} from 'redux-saga/effects';
import actions from './actions';
import {getArticleDetail,getCateList,getArticleList,searchArticles} from './apis';
import Promise from 'es6-promise';

function* fGetArticleDetailAsync(action) {
    try{
        const articleId = action.payload.articleId;
        const article = yield call(getArticleDetail,articleId);
        yield put(actions.getArticleDetailOk(article));
    }
    catch(err){
        yield put(actions.getArticleDetailError(err))
    }
}
function* wacthArticleDetail(){
    yield takeEvery(actions.getArticleDetailStart,fGetArticleDetailAsync);
}

function* fGetCateListAsync(action) {
    try{
        const {type,cate} = action.payload;
        const aCate = yield call(getCateList,type,cate);
        yield put(actions.getCateListOk(aCate));
    }
    catch(err){
        yield put(actions.getCateListError(err))
    }
   
}
function* watchCateList(){
    let action = '';
    while(action = yield take(actions.getCateListStart)){
        yield fork(fGetCateListAsync,action);
    }
}

function* fGetArticleListAsync(action) {
    try{
        const {type,cate} = action.payload;
        const aArticle = yield call(getArticleList,type,cate);
        yield put(actions.getArticleListOk(aArticle));
    }
    catch(err){
        yield put(actions.getArtilceListError(err))
    }
    
}
function* watchActicleList(){
    yield takeEvery(actions.getArticleListStart,fGetArticleListAsync)
}

function* fSearchArticlesAsync(action) {
    try{
        const keyword = action.payload.keyword
        const aArticle = yield call(searchArticles,keyword);
        yield put(actions.searchArticlesOk(aArticle));
    }
    catch(err){
        yield put(actions.searchArticlesError(err))
    }
    
}
function* watchSearchAtricles(){
    yield takeEvery(actions.searchArticlesStart,fSearchArticlesAsync)
}

export default function* rootSaga(){
    yield [
        fork(wacthArticleDetail),
        fork(watchCateList),
        fork(watchActicleList),
        fork(watchSearchAtricles)
    ]
}