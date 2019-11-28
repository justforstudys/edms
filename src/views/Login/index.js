import React , { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.scss'
import userApi from '../../api/user/index.js'
import { connect } from 'react-redux'
import { LoginToToken } from '../../actions/user'

const mapState = (state) => {
  return {
    token: state.userInfo.token
  }
}


class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    LoginToToken('123');
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     // console.log('Received values of form: ', values);
    //     let { username, password } = values;
    //     userApi.userLogin({username, password}).then(response => {
    //       console.log(response)
    //     }).catch(error => {
    //       console.error(error);
    //     })
    //   }
    // });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrapper">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a style={{float: 'right'}} href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const LoginWrapper = connect(mapState, {LoginToToken})(WrappedNormalLoginForm);

export default LoginWrapper;