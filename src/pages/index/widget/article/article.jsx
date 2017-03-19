import React,{Component} from 'react';
import marked from 'marked';
import Footer from 'footer/footer';
import {observer,inject} from 'mobx-react';
import {getArticleDetail} from 'index/mobx/apis';
import './article.scss';

@inject('articleStore') @observer
class Article extends Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps,nextState) {
        if(nextProps.params.id && nextProps.params.id != this.props.params.id){
            console.log('article receive');
       	    this.fAction(nextProps);	   
        }
    }
    componentWillMount(){
        console.log('article mount');
       	this.fAction(this.props);	
    }
    fAction(props){
		const id = props.params.id;	
        getArticleDetail(id).then((data) => {
            this.props.articleStore.data = data;
        });
    }
    render() {
        const article = this.props.articleStore.data || {};
        const sArtContent = marked(article.content || '');
        return (
            <div>
                <div className="container reader-font1">
                <div className="article">
                    <h5 className="title article-title">{this.props.currentCate}</h5>
                    <div className="preview">
                        <div className="author-info">
                            <a className="avatar" href="#">
                                <img data-thumbnail="90x90" data-quality="100" src={article.avatar} />
                            </a>
                            <span className="label">
                                作者
                            </span>
                            <a className="author-name blue-link" href="#">
                                <span>
                                    {article.author}
                                </span>
                            </a>
                            <span data-toggle="tooltip" data-original-title="最后编辑于 2015.06.21 18:49">
                                {article.timestamp}
                            </span>
                            <div>
                                <span>
                                    写了85799字
                                </span>
                                ，
                                <span>
                                    被{article.read}人关注
                                </span>
                                ，
                                <span>
                                    获得了{article.like}个喜欢
                                </span>
                            </div>
                        </div>
                        <h1 className="title">
                            {article.title}
                        </h1>
                        <div className="meta-top">
                            <span className="wordage">
                                字数5669
                            </span>
                            <span className="views-count">
                                阅读{article.read}
                            </span>
                            <span className="comments-count">
                                评论{article.comment}
                            </span>
                            <span className="likes-count">
                                喜欢{article.like}
                            </span>
                        </div>
                        <div className="show-content" dangerouslySetInnerHTML={{__html: sArtContent}}>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div> 
        );
    }
}

export default Article;


