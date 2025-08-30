import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Student from './student/index'
import Login from './Login/login'
import Register from './Login/regiser'
import {Modal} from 'antd'
import Mainnew from './inform/new/index'
import {useState,useEffect} from 'react'
import {getUserInfo} from '../../api/user'
import ShowProduct from '../../page/user/product/show-product'
const { Header, Content, Sider } = Layout;

const User = () => {
  const [informid,setinformid] = useState(1)
  const [stid,setStid] = useState('2')
  const [vari,setVari] = useState(1)
  const showinform =(informid)=>{
    switch(informid){
      case 1:
        return <Mainnew/>
    }
  }
  const showStudent =()=>{
    switch(stid){
      case '1':
        return <Student/>
    }
  }
   const items2 = [
  { key: 'sub1', label: '信息模块' ,
    onClick:()=>{
      setVari(1)
    },
    children: [
      { key: 'sub-1', label: '新闻' ,onClick:()=>{
        setinformid(1)
      }},
      { key: 'sub-2', label: '岗位' },
      { key: 'sub-3', label: '政策' },
    ]
  },
  { key: 'sub2', label: '个人中心',
    onClick:()=>{
      setVari(2)
    },
    children: [
      { key: 'su1-1', label: '个人信息'

       },
      { key: 'su1-2', label: '关于学校' },
      { key: 'su1-3', label: '我的课程' },
      { key: 'su1-4', label: '选取课程' },
    ]
   },
  { key: 'sub3', label: '用户管理' },
]
   const userStr = localStorage.getItem('user')
    const use = JSON.parse(userStr)
    const name = use.state.name
  const items1 = [
  { key: '1', label: '首页' 
    ,onClick:()=>{
      setId('1')
    }
  },
  { key: '2', label: '商品详情'
    ,onClick:()=>{
      setId('2')
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
  const [id,setId] = useState('1')
  const [registerOpen,setRegisterOpen] = useState(false)
  const show =()=>{
    switch(registerOpen){
      case true:
        return <Register setRegisterOpen={setRegisterOpen}/>
      case false:
        return <Login setRegisterOpen={setRegisterOpen} setOpen={setOpen}/>
    }
  }
  const showvair=()=>{
    switch(id){
      case '2':
        return <ShowProduct/>
      case '1':{
        switch(vari){
          case 1:
            return showinform(informid)
          case 2:
            return showStudent()

        }
      }
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
            items={items2}
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
           {showvair()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default User;
