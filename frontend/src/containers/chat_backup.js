import React from 'react';
import Sidepanel from './Sidepanel/Sidepanel';
import lafa from '../assets/images/lafa.jpg';

import WebSocketInstance from '../websocket';

class Chat extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};

	// 	this.waitForSocketConnection(() => {
	// 		WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this));
	// 		WebSocketInstance.fetchMessages(this.props.currentUser);
	// 	});
	// }

	// waitForSocketConnection(callback) {
	// 	const component = this;
	// 	setTimeout(function() {
	// 		if (WebSocketInstance.state() === 1) {
	// 			console.log('Connection is made');
	// 			callback();
	// 			return;
	// 		} else {
	// 			console.log('wait for connection...');
	// 			component.waitForSocketConnection(callback);
	// 		}
	// 	}, 100);
	// }

	// addMessage(message) {
	// 	this.setState({ messages: [...this.state.messages, message] });
	// }

	// setMessages(messages) {
	// 	this.setState({ messages: messages.reverse() });
	// }

	// messageChangeHandler = event => {
	// 	this.setState({
	// 		message: event.target.value,
	// 	});
	// };

	// sendMessageHandler = e => {
	// 	e.preventDefault();
	// 	const messageObject = {
	// 		from: 'admin',
	// 		content: this.state.message,
	// 	};
	// 	WebSocketInstance.newChatMessage(messageObject);
	// 	this.setState({
	// 		message: '',
	// 	});
	// };

	// renderMessages = messages => {
	// 	const currentUser = 'admin';
	// 	return messages.map((message, i) => (
	// 		<li key={i} className={message.author === currentUser ? 'sent' : 'replies'}>
	// 			<img src="http://emilcarlsson.se/assets/mikeross.png" />
	// 			<p>
	// 				{message.content}
	// 				<br />
	// 				<small className={message.author === currentUser ? 'sent' : 'replies'}>
	// 					{Math.round((new Date().getTime() - new Date(message.timestamp).getTime()) / 60000)} minutes ago
	// 				</small>
	// 			</p>
	// 		</li>
	// 	));
	// };

	render() {
		// const messages = this.state.messages;
		return (
			<div className="">
				<div className="row header">hello</div>
				{/* <div className="fixed-top profile-header">
					<img src={lafa} className="rounded-circle online-status image" alt="" />
					<div className="profile-user-label">Nisan Chhetri</div>
				</div>{' '} */}
			</div>
		);
	}
}

export default Chat;
