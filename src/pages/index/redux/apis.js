import {fGetArticleDetail,fGetArticleList,fSearchArticles,fGetCateList} from 'index/mock/service.js';
import Promise from 'es6-promise';

export function getArticleList (type,cate) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fGetArticleList(type,cate));
        },200);
    });
}

export function searchArticles(keyword){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fSearchArticles(keyword));
        },200);
    });
}

export function getArticleDetail(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fGetArticleDetail(id));
        },200);
    });
}

export function getCateList(type,cate){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fGetCateList(type,cate));
        },200);
    });
}