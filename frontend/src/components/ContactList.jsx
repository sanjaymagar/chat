import React, { Component } from 'react';
import { List, Avatar } from 'antd';

import lafa from '../assets/images/lafa.jpg';

class ContactList extends Component {
	render() {
		const data = [
			{
				username: 'Nisan Chhetri',
				message: 'Life is just a chance to grow a soul. - A.Powell Davies',
			},
			{
				username: 'Pranil Chhetri',
				message: 'Only a life lived for others is a life worthwhile. - Albert Einstein',
			},
			{
				username: 'Shailesh Kandel',
				message: 'Expect nothing, live frugally on surprise. - Alice Walker ',
			},
			{
				username: 'Tilak Giri',
				message: 'Because I have loved life, I shall have no sorrow to die. - Amelia Burr',
			},
		];

		let messagelist = {
			color: 'white',
		};
		return (
			<div className="mt-4">
				<List
					itemLayout="horizontal"
					dataSource={data}
					style={messagelist}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								className="ml-3"
								avatar={<Avatar src={lafa} className="online-status" />}
								title={
									<a href="" style={messagelist}>
										{item.username}
									</a>
								}
								description={<p className="message-content">{item.message}</p>}
							/>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

export default ContactList;
