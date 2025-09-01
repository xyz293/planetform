import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Login from './Login/login'
import Register from './Login/regiser'
import {Modal} from 'antd'
import {useState,useEffect} from 'react'
import {getUserInfo} from '../../api/user'
import ShowProduct from '../../page/user/product/show-product'
const { Header, Content, Sider } = Layout;

const User = () => {
  const navigate = useNavigate()
   const userStr = localStorage.getItem('user')
    const use = JSON.parse(userStr)
    const name = use.state.name
  const items1 = [
  { key: '1', label: '首页' 
    ,onClick:()=>{
    navigate('firstpage')
    }
  },
  { key: '2', label: '商品详情'
    ,onClick:()=>{
    navigate('product')
    }
   },
  { key: '3', label: '登录',onClick:()=>{
    setOpen(true)
   } },
];
const showinfo = async () => {
  const res = await getUserInfo({name})
  console.log(res)

}
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [open,setOpen] = useState(false)
  const [registerOpen,setRegisterOpen] = useState(false)
  const show =()=>{
    switch(registerOpen){
      case true:
        return <Register setRegisterOpen={setRegisterOpen}/>
      case false:
        return <Login setRegisterOpen={setRegisterOpen} setOpen={setOpen}/>
    }
  }
  useEffect(()=>{
    showinfo()
  },[])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', height: 64 }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[1]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      <Layout>
        <div>
        
        </div>
        <Sider width={220} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderInlineEnd: 0 }}
          />
        </Sider>

        <Layout style={{ padding: '16px 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 400,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Modal
           open={open}
           onCancel={()=>{
            setOpen(false)
            setRegisterOpen(false)
           }}
           footer={null}
           >
          {show()}
           </Modal>
           <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default User;
