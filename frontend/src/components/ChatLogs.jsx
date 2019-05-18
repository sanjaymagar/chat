// import React, { Component } from 'react';

// import lafa from '../assets/images/lafa.jpg';
// import nisan from '../assets/images/nisan.jpg';

// class ChatLogs extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="messages">
// 					<ul id="chat-log">
// 						<li className="sent">
// 							<img src={lafa} className="sent-image" alt="receiver" />
// 							<p>
// 								How the hell am I supposed to get a jury to believe you when I am not even sure that I
// 								do?!
// 							</p>
// 						</li>
// 						<li className="replies">
// 							<img src={nisan} className="replies-image" alt="receiver" />
// 							<p>
// 								When you're backed against the wall, break the god damn thing down.How the hell am I
// 								supposed to get a jury to believe you when I am not even sure that I do?!
// 							</p>
// 						</li>
// 						<li className="sent">
// 							<img src={lafa} className="sent-image" alt="receiver" />
// 							<p>
// 								How the hell am I supposed to get a jury to believe you when I am not even sure that I
// 								do?!
// 							</p>
// 						</li>
// 						<li className="replies">
// 							<img src={nisan} className="replies-image" alt="receiver" />
// 							<p>
// 								When you're backed against the wall, break the god damn thing down.How the hell am I
// 								supposed to get a jury to believe you when I am not even sure that I do?!
// 							</p>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default ChatLogs;

import React, { Component } from 'react';
import { List, Avatar } from 'antd';

import lafa from '../assets/images/lafa.jpg';
import nisan from '../assets/images/nisan.jpg';

class ChatLogs extends Component {
	render() {
		const data = [
			{
				user: 'sender',
				username: 'Sanjay Magar',
				message: 'Life is just a chance to grow a soul. - A.Powell Davies',
			},
			{
				user: 'receiver',
				username: 'Nisan Chhetri',
				message: 'Only a life lived for others is a life worthwhile. - Albert Einstein',
			},
			{
				user: 'sender',
				username: 'Sanjay Magar',
				message: 'Expect nothing, live frugally on surprise. - Alice Walker ',
			},
			{
				user: 'receiver',
				username: 'Nisan Chhetri',
				message: 'Because I have loved life, I shall have no sorrow to die. - Amelia Burr',
			},
		];

		return (
			<div className="mt-4">
				<List
					itemLayout="horizontal"
					dataSource={data}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								className="chat-box"
								avatar={
									<Avatar
										src={item.user == 'sender' ? lafa : nisan}
										className={`${item.user}-image`}
									/>
								}
								description={<p className={item.user}>{item.message}</p>}
							/>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

export default ChatLogs;
