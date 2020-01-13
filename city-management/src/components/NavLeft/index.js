import React, { Component } from 'react';
import MenuConfig from '../../resources/menuConfig';
import './index.less';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Menu } from 'antd';

class NavLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode: menuTreeNode      
        }, function() {
            // console.log('state', this.state.menuTreeNode);
        });
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        });
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;