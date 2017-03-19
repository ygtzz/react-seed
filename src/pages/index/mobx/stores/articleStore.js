import {observable} from 'mobx';

class ArticleStore{
    @observable bFetching = false;
    @observable data = {};
    @observable bError = false;
}

export default new ArticleStore();