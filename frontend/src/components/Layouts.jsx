import React from 'react';

import { Layout, Input } from 'antd';
const { Sider } = Layout;
const Search = Input.Search;

import lafa from '../assets/images/lafa.jpg';
import ContactList from './ContactList.jsx';
import NavHeader from './NavHeader.jsx';
import ChatMessage from './ChatMessage.jsx';

class Layouts extends React.Component {
	state = {
		collapsed: false,
	};

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	render() {
		let image = {
			marginLeft: '20px',
			marginTop: '20px',
		};

		let textLabel = {
			marginLeft: '80px',
		};

		return (
			<Layout style={{ height: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="">
						<div className="">
							<img src={lafa} style={image} className="rounded-circle online-status image" alt="" />
							<div className="user-label" style={textLabel}>
								lafasanjmgr
							</div>
						</div>
						<Search
							placeholder="Search contacts..."
							onSearch={value => console.log(value)}
							style={{ marginTop: '50px' }}
						/>
						<ContactList />
					</div>
				</Sider>

				<Layout>
					<NavHeader />
					<ChatMessage />
				</Layout>
			</Layout>
		);
	}
}

export default Layouts;
