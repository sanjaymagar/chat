import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Icon, Cascader, Select, Button, AutoComplete } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
	{
		value: 'Nepal',
		label: 'Nepal',
		children: [
			{
				value: 'Butwal',
				label: 'Butwal',
				children: [
					{
						value: 'Murgiya',
						label: 'Murgiya',
					},
					{
						value: 'Sainamaina',
						label: 'Sainamaina',
					},
					{
						value: 'Nayagau',
						label: 'Nayagau',
					},
				],
			},
			{
				value: 'Kathmandu',
				label: 'Kathmandu',
				children: [
					{
						value: 'Swoyambhu',
						label: 'Swoyambhu',
					},
					{
						value: 'New Road',
						label: 'New Road',
					},
					{
						value: 'Thamel',
						label: 'Thamel',
					},
				],
			},
			{
				value: 'Lalitpur',
				label: 'Lalitpur',
				children: [
					{
						value: 'Pulchowk',
						label: 'Pulchowk',
					},
					{
						value: 'Jwagal',
						label: 'Jwagal',
					},
					{
						value: 'Jaulakhel',
						label: 'Jaulakhel',
					},
					{
						value: 'Lagankhel',
						label: 'Lagankhel',
					},
				],
			},
		],
	},
];

class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: [],
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	handleConfirmBlur = e => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	handleWebsiteChange = value => {
		let autoCompleteResult;
		if (!value) {
			autoCompleteResult = [];
		} else {
			autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
		}
		this.setState({ autoCompleteResult });
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;

		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '+977',
		})(
			<Select style={{ width: 80 }}>
				<Option value="977">+977</Option>
				<Option value="87">+87</Option>
			</Select>
		);

		const websiteOptions = autoCompleteResult.map(website => (
			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
		));

		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<h1 className="display-6 text-center">Registration</h1>
				<Form.Item>
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: 'E-mail is invalid.',
							},
							{
								required: true,
								message: 'E-mail field is required.',
							},
						],
					})(
						<Input
							prefix={
								<Icon
									type="email"
									style={{
										color: 'rgba(0,0,0,.25)',
									}}
								/>
							}
							placeholder="Email"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{' '}
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
					)}{' '}
				</Form.Item>{' '}
				<Form.Item hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: 'Password field is required',
							},
							{
								validator: this.validateToNextPassword,
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
				<Form.Item hasFeedback>
					{getFieldDecorator('confirm', {
						rules: [
							{
								required: true,
								message: `Password doesn't match`,
							},
							{
								validator: this.compareToFirstPassword,
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
							placeholder="Confirm Password"
							onBlur={this.handleConfirmBlur}
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('residence', {
						initialValue: ['Nepal', 'Lalitpur', 'Jwagal'],
						rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
					})(<Cascader options={residences} />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('phone', {
						rules: [{ required: true, message: 'Phone number is required' }],
					})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="9843654022" />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('website', {
						rules: [{ required: false, message: 'Please input website!' }],
					})(
						<AutoComplete
							dataSource={websiteOptions}
							onChange={this.handleWebsiteChange}
							prefix={
								<Icon
									type="global"
									style={{
										color: 'rgba(0,0,0,.25)',
									}}
								/>
							}
							placeholder="Website"
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Register
					</Button>
					Or
					<Link to="/login"> already has an account!</Link>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default WrappedRegistrationForm;
