import React,{Component} from 'react';
import Footer from 'footer/footer';
import List from '../list/list';
import Search from '../search/search';
import Category from '../category/category';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import acts from 'index/redux/actions';
import './trend.scss';

class Trend extends Component{
    componentWillReceiveProps(nextProps,nextState) {
        if(nextProps.params.type != this.props.params.type || 
           nextProps.params.cate != this.props.params.cate){
            //nextProps为新的值，props为当前值，赋值应该使用nextProps
            this.fAction(nextProps)
        }
    }
    componentDidMount(){
        console.log('trend mount');
       	this.fAction(this.props);	
    }
    fAction(props){
        const {type,cate} = props.params;
        const actions = props.actions;
        actions.getCateListStart({type,cate});
        actions.getArticleListStart({type,cate});	
    }
    fSearchArticles(keyword){
        this.props.actions.searchArticlesStart({keyword});
    }
    render() {
        const {type,cate} = this.props.params;
        const {fGetCateListStart,fGetArticleListStart} = this.props.actions;
        return (
            <div>
                <div className="recommended">
                    {/*分类切换*/}
                    <div className="page-title">
                        <ul className="recommened-nav navigation clearfix">
                            {/*用户未订阅专题或人，或者未完成订阅 or 用户订阅列表已准备就绪*/}
                            <li data-name="trending_notes" className={type=='hot' ? 'active' : ''}>
                                <a data-pjax="true" href="/#hot/now">
                                    <i className="fa fa-bars">
                                    </i>
                                    热门文章
                                </a>
                            </li>
                            <li data-name="recommended_notes" className={type=='notes' ? 'active' : ''}>
                                <a data-pjax="true" href="/#notes/all">
                                    <i className="fa fa-bars">
                                    </i>
                                    今日看点
                                </a>
                            </li>
                            <li data-name="subscription_notes" className={type=='subscribe' ? 'active' : ''}>
                                <a data-pjax="true" href="/#subscribe/all">
                                    <i className="fa fa-bars">
                                    </i>
                                    我的订阅
                                </a>
                            </li>
                            <img className="hide loader-tiny" src={require('./img/tiny.gif')}
                            alt="Tiny" />
                            <li className="search">  
                                <Search fSearchArticles={this.fSearchArticles}/>             
                            </li>
                        </ul>
                    </div>
                    {/*文章分类*/}
                    <Category type={type} aCate={this.props.oCate.data} />
                    {/*文章列表*/}
                    <List type={type} cate={cate} oArticle={this.props.oArticle} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(
    state => {return {oArticle : state.trend.oArticle,oCate:state.trend.oCate}},
    dispatch => {return { actions: bindActionCreators(acts,dispatch) } }
)(Trend);
    