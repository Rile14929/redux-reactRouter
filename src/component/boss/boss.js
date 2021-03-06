import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
	state=>state.chatuser,
	{getUserList}
)
class Boss extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		this.props.getUserList('genius')
	}
	render(){
		return <UserCard userlist={this.props.userList}></UserCard>
	}
}
export default Boss