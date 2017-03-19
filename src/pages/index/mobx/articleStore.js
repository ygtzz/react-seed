import {observable} from 'mobx';

class ArticleStore{
    @observable bFetching = false;
    @observable content = '';
    @observable bError = false;
}