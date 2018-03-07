'use strict'

import 'semantic-ui/semantic.min.css!' // 样式后面加感叹号 ！
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import CommentBox from './comment/CommentBox'

/*var comments =[
	{"author": "Fiume", "date": "5分钟前", "text": "今天公司来了心理辅导师"},
	{"author": "Ray", "date": "3分钟前", "text": "哇"}
]*/

// const TV = ({match}) => (
// 	<div>
// 		<div className="ui info message">电视节目列表</div>
// 		<Link to={`${match.url}/shows/1`}>节目1</Link>
// 		<Route path={`${match.url}/shows/:id`} component={Show} />
// 	</div>
// )

class TV extends React.Component {
	render() {
		return (
			<div>
				<div className="ui info message">电视节目列表</div>
				<Link to="/tv/shows/1">节目1</Link>
	  		<Route path="/tv/shows/:id" component={Show} />
				{this.props.children}
			</div>
		)
	}
}

class Show extends React.Component {
	constructor(props) {
		super(props)

		console.log(this.props.params)
	}
	render() {
		return (
			<h3>节目 {this.props.params.id}</h3>
		)
	}
}

class Home extends React.Component {
	render() {
		return (
			<div className="ui info message">首页内容</div>
		)
	}
}

ReactDOM.render((
	<Router>
		<div>
			<div className="ui secondary pointing menu">
				<Link to="/" className="item">首页</Link>
				<Link to="/tv" className="item">电视</Link>
			</div>

			<Route exact path="/" component={Home} />
			<Route path="/tv" component={TV} />
		</div>
	</Router>
), document.getElementById('app'))


// ReactDOM.render(
// 	// <CommentBox data={comments} />, // 使用本地变量为数据值时，使用data属性
// 	<CommentBox url="app/comments.json" />, // url 后面跟服务端数据接口
// 	document.getElementById('app')
// )
