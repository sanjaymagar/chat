import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import ChatLogs from './ChatLogs.jsx';
const { Content } = Layout;

class ChatMessage extends Component {
	render() {
		let width = {
			width: '95%',
		};
		return (
			<div>
				<Content
					style={{
						margin: '0px',
					}}
				>
					<div
						style={{
							padding: 24,
							background: '#fff',
							minHeight: '90vh',
						}}
					>
						<ChatLogs />
					</div>
					<div className="form-inline">
						<input
							type="text"
							className="form-control"
							id="message"
							placeholder="Type message..."
							style={width}
						/>
						<button type="submit" className="btn btn-default">
							Submit
						</button>
					</div>
				</Content>
			</div>
		);
	}
}
export default ChatMessage;
