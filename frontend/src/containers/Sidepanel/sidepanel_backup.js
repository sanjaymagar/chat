import React, { Component } from 'react';
import lafa from '../../assets/images/lafa.jpg';

class Sidepanel extends Component {
	render() {
		return (
			<div className="sidepanel fixed-left">
				<div className="profile">
					<img src={lafa} className="rounded-circle online-status image" alt="" />
					<div className="user-label"> lafasanjmgr </div>{' '}
				</div>{' '}
				<div className="form-group has-search">
					<span className="fa fa-search form-control-feedback" />
					<input type="text" className="form-control" placeholder="Search Contacts..." />
				</div>{' '}
				<div className="message-lists list-group">
					<div className="message-list">
						<img src={lafa} className="rounded-circle online-status image" alt="" />
						<div className="message-user-label"> Nisan Chhetri </div>{' '}
						<p className="message-content"> Life is just a chance to grow a soul. - A.Powell Davies </p>{' '}
					</div>{' '}
					<div className="message-list">
						<img src={lafa} className="rounded-circle online-status image" alt="" />
						<div className="message-user-label"> Pranil Chhetri </div>{' '}
						<p className="message-content">
							Only a life lived for others is a life worthwhile. - Albert Einstein{' '}
						</p>{' '}
					</div>{' '}
					<div className="message-list">
						<img src={lafa} className="rounded-circle online-status image" alt="" />
						<div className="message-user-label"> Shailesh Kandel </div>{' '}
						<p className="message-content"> Expect nothing, live frugally on surprise. - Alice Walker </p>{' '}
					</div>{' '}
					<div className="message-list">
						<img src={lafa} className="rounded-circle online-status image" alt="" />
						<div className="message-user-label"> Pratima Magar </div>{' '}
						<p className="message-content">
							Because I have loved life, I shall have no sorrow to die. - Amelia Burr{' '}
						</p>{' '}
					</div>{' '}
					<div className="message-list">
						<img src={lafa} className="rounded-circle online-status image" alt="" />
						<div className="message-user-label"> Arya Shah </div>{' '}
						<p className="message-content"> People living deeply have no fear of death. - Anais Nin </p>{' '}
					</div>{' '}
					<div className="message-list">
						<img src={lafa} className="rounded-circle online-status image" alt="" />
						<div className="message-user-label"> Bhupal Rai </div>{' '}
						<p className="message-content">
							{' '}
							Everything has beauty, but not everyone sees it. - Confucius{' '}
						</p>{' '}
					</div>{' '}
				</div>{' '}
			</div>
		);
	}
}

export default Sidepanel;
