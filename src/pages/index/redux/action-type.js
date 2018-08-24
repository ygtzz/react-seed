export const asynctypes = [
    'getCateList', 
    'getArticleList',  
    'searchArticles',       
    'getArticleDetail', 
]

export const synctypes = [
    '@@router/LOCATION_CHANGE'
]

export const types = {};

asynctypes.forEach(item => {
    types[item + '.start'] = item + '.start';
    types[item + '.ok'] = item + '.ok';
    types[item + '.error'] = item + '.error';
});

synctypes.forEach(item => {
    types[item] = item;
});
