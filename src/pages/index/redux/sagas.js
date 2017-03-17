import {put,call} from 'redux-saga';
import {fGetArticleDetailstart,fGetArticleDetailOk} from './actions';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* fGetArticleDetailAsync(articleId) {
    // return function(dispatch) {
    //     dispatch(fGetArticleDetailstart(articleId));
    //     setTimeout(function() {
    //         dispatch(fGetArticleDetailOk(articleId));
    //     },200);
    // }
    yield put(fGetArticleDetailstart);
    const article = yield call()
}

const fGetCateListstart = createAction(types['getCateList.start'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});

const fGetCateListOk = createAction(types['getCateList.ok'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});

function fGetCateListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetCateListstart(sType,sCate));
        setTimeout(function() {
            dispatch(fGetCateListOk(sType,sCate));
        },200);
    }
}

const fGetArticleListstart = createAction(types['getArticleList.start'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});

const fGetArticleListOk = createAction(types['getArticleList.ok'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});
function fGetArticleListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetArticleListstart(sType,sCate));
        setTimeout(function() {
            dispatch(fGetArticleListOk(sType,sCate));
        },200);
    }
}

const fSearchArticlesstart = createAction(types['searchArticles.start'],(sKeyword) => {
    return ({
        sKeyword: sKeyword
    })
});

const fSearchArticlesOk = createAction(types['searchArticles.ok'],(sKeyword) => {
    return ({
        sKeyword: sKeyword
    })
});
function fSearchArticlesAsync(sKeyword) {
    return function(dispatch) {
        dispatch(fSearchArticlesstart(sKeyword));
        setTimeout(function() {
            dispatch(fSearchArticlesOk(sKeyword));
        },200);
    }
}

export default {
    fGetArticleDetail: fGetArticleDetailAsync,
    fGetCateList: fGetCateListAsync,
    fGetArticleList: fGetArticleListAsync,
    fSearchArticles: fSearchArticlesAsync
}