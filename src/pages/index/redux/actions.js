import types from './action-type';
import {createAction} from 'redux-actions'

export const fGetArticleDetailStart = createAction(types['getArticleDetail.start']);

export const fGetArticleDetailOk = createAction(types['getArticleDetail.ok']);

export const fGetCateListStart = createAction(types['getCateList.start']);

export const fGetCateListOk = createAction(types['getCateList.ok']);

export const fGetArticleListStart = createAction(types['getArticleList.start']);

export const fGetArticleListOk = createAction(types['getArticleList.ok']);

export const fSearchArticlesStart = createAction(types['searchArticles.start']);

export const fSearchArticlesOk = createAction(types['searchArticles.ok']);

