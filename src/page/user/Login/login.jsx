import { Form, Input, Button, Radio, Card, Typography } from 'antd';
import { useState } from 'react';
import { login} from '../../../api/user';
import './login.scss'; 
import useUserStore from '../../../store/index'
const { Title } = Typography;
const Login = ({setRegisterOpen,setOpen}) => {
  const {setToken,setTime,setName,setUnit} = useUserStore()
  const [user, setUser] = useState({
    name: '',
    password: '',
    role: '',
    email: ''
    ,unit: ''
  });

  const getLogin = async () => {
    try {
      const res = await login(user);
      console.log(res);
      setToken(res.data.token)
      setTime(res.data.date)
      setName(res.data.data.name)
      setUnit(res.data.data.unit)
      setOpen(false)
      setUser({
        name: '',
        password: '',
        role: '',
        email: '',
        unit: ''
      })
    } catch (err) {
      console.error(err);
    }
  };

  return (
        <Form layout="vertical">
             <Title level={2} className="login-title">用户登录</Title>
          <Form.Item label="用户名">
            <Input
              placeholder="请输入用户名"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Form.Item>

          <Form.Item label="密码">
            <Input.Password
              placeholder="请输入密码"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="单位">
            <Input
              placeholder="请输入单位"
              value={user.unit}
              onChange={(e) => setUser({ ...user, unit: e.target.value })}
            />
          </Form.Item>

          <Form.Item label="角色">
            <Radio.Group
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <Radio value="学生">学生</Radio>
              <Radio value="企业">企业</Radio>
              <Radio value="学校">学校</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="邮箱">
            <Input
              placeholder="请输入邮箱"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <a href="#" onClick={(e) => {e.preventDefault();setRegisterOpen(true)}}>
              注册？快来注册吧
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              onClick={getLogin}
              className="login-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>

  );
};

export default Login;
