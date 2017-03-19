import React,{Component} from 'react';
import DebounceInput from 'react-debounce-input';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'index/redux/actions';
import './search.css';

class Search extends Component{
	propTypes:{
		fSearchArticles:React.propTypes.func.isRequired
	}
	fSearch(evt){
		this.props.fSearchArticles(evt.target.value);
	}
	render() {
		return (
			<div>
				<input name="utf8" type="hidden" value="✓" />
				{/*todo search*/}
				<DebounceInput
          			minLength={1}
          			debounceTimeout={300}
          			onChange={this.fSearch.bind(this)} 
          			className="input-medium search-query" 
          			name="q" id="q" placeholder="搜索" />
			</div>
		);
	}
}

export default Search;