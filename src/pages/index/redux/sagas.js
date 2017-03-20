import {put,call,fork,take,takeEvery} from 'redux-saga/effects';
import * as actions from './actions';
import {getArticleDetail,getCateList,getArticleList,searchArticles} from './apis';
import Promise from 'es6-promise';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* fGetArticleDetailAsync(action) {
    const articleId = action.payload.articleId;
    const article = yield call(getArticleDetail,articleId);
    yield put(actions.fGetArticleDetailOk(article));
}
function* wacthArticleDetail(){
    yield takeEvery(actions.fGetArticleDetailStart,fGetArticleDetailAsync);
}

function* fGetCateListAsync(action) {
    const {type,cate} = action.payload;
    const aCate = yield call(getCateList,type,cate);
    yield put(actions.fGetCateListOk(aCate));
}
function* watchCateList(){
    let action = '';
    while(action = yield take(actions.fGetCateListStart)){
        yield fork(fGetCateListAsync,action);
    }
}

function* fGetArticleListAsync(action) {
    const {type,cate} = action.payload;
    const aArticle = yield call(getArticleList,type,cate);
    yield put(actions.fGetArticleListOk(aArticle));
}
function* watchActicleList(){
    yield takeEvery(actions.fGetArticleListStart,fGetArticleListAsync)
}

function* fSearchArticlesAsync(action) {
    const keyword = action.payload.keyword
    const aArticle = yield call(searchArticles,keyword);
    yield put(actions.fSearchArticlesOk(aArticle));
}
function* watchSearchAtricles(){
    yield takeEvery(actions.fSearchArticlesStart,fSearchArticlesAsync)
}

export default function* rootSaga(){
    yield [
        fork(wacthArticleDetail),
        fork(watchCateList),
        fork(watchActicleList),
        fork(watchSearchAtricles)
    ]
}