import React, { Component } from 'react';
import { Layout, Affix, Avatar } from 'antd';
const { Header } = Layout;

import nisan from '../assets/images/nisan.jpg';

class NavHeader extends Component {
	render() {
		let imageSize = {
			height: '50',
			width: '50',
		};
		let headerLabel = {
			marginTop: '-63px',
			marginLeft: '140px',
			fontSize: '16px',
		};
		return (
			<div>
				<Affix>
					<Header
						style={{
							background: 'steelblue',
							padding: 0,
						}}
					>
						<div className="text-center">
							<Avatar src={nisan} style={imageSize} className="online-status" />
							<p style={headerLabel}> Nisan Chhetri </p>
						</div>
					</Header>
				</Affix>
			</div>
		);
	}
}

export default NavHeader;
