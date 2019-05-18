import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<h1 className="display-6 text-center">Log In</h1>
				<Form.Item>
					{getFieldDecorator('username', {
						rules: [
							{
								required: true,
								message: 'Username is required.',
							},
						],
					})(
						<Input
							prefix={
								<Icon
									type="user"
									style={{
										color: 'rgba(0,0,0,.25)',
									}}
								/>
							}
							placeholder="Username"
						/>
					)}
				</Form.Item>
				<Form.Item hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: 'Password is required.',
							},
						],
					})(
						<Input
							prefix={
								<Icon
									type="lock"
									style={{
										color: 'rgba(0,0,0,.25)',
									}}
								/>
							}
							type="password"
							placeholder="Password"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(<Checkbox> Remember me </Checkbox>)}
					<a className="login-form-forgot" href="">
						Forgot password
					</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					Or
					<Link to="/register"> register now!</Link>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create({
	name: 'normal_login',
})(LoginForm);

export default WrappedNormalLoginForm;
