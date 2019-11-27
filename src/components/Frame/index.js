import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
const { Header, Sider, Content } = Layout;

class Frame extends Component {
  selectedMenu = ({key}) => {
    this.props.history.push(key);
  }
  render() {
    return (
      <Layout style={{minHeight: '100%'}}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[this.props.location.pathname]} onClick={this.selectedMenu}>
            {
              this.props.menus.map(item => {
                return (
                  <Menu.Item key={item.pathname}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type="user"
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default withRouter(Frame);