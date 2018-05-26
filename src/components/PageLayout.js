import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import App from './App';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const PageLayout = () => (
    <Router>
        <div>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">About</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />subnav 1
                                    </span>
                                }
                            >
                                <Menu.Item key="1">
                                    <Link to="/home">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/about">ABout</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/">APP</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="laptop" />subnav 2
                                    </span>
                                }
                            >
                                <Menu.Item key="5">
                                    <Link to="/home">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/about">ABout</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App1</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280
                            }}
                        >
                            <Switch>
                                <Route exact path="/" component={App} />
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>©2018</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    </Router>
);

export default PageLayout;
