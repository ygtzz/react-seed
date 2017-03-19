import {observable} from 'mobx';

class TrendStore{
    @observable oCate = {
        bFetching:false,
        bError:false,
        data:[]
    };
    @observable oArticle = {
        bFetching:false,
        bError:false,
        data:[]
    };
    
}