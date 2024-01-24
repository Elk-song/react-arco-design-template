import {
  Avatar,
  Dropdown,
  Menu
} from '@arco-design/web-react';
import { IconPoweroff, IconUser } from '@arco-design/web-react/icon';

import { accessTokenActions } from '@/store/reducers/user-slice'
import store from '@/store/index';

const AvatarComponent = () => {
  const iconStyle = {
    marginRight: 8,
    fontSize: 16,
    transform: 'translateY(1px)'
  };

  const handleClickMenuItem = (key: string) => {
    if (key === 'logout') {
      store.dispatch(accessTokenActions.removeAccessToken());
    };
  }
  return (
    <Dropdown
      position="br"
      droplist={
        <Menu onClickMenuItem={handleClickMenuItem}>
          <Menu.Item key="admin">
            <IconUser style={iconStyle} />
            个人信息
          </Menu.Item>
          <Menu.Item key="logout">
            <IconPoweroff style={iconStyle} />
            退出登录
          </Menu.Item>
        </Menu>
      }
    >
      <Avatar
        style={{
          backgroundColor: '#165DFF'
        }}
      >
        H
      </Avatar>
    </Dropdown>
  );
}
export default AvatarComponent;