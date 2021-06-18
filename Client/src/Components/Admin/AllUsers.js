import React, { useState } from 'react';
import { Drawer} from 'antd';
import {Button} from "@material-ui/core";
import User from './user'

const AllUsers = ({users}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button className="ml-5"variant="outlined" color="primary" onClick={showDrawer}>
       users
      </Button>
      <Drawer
        title="All Users"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className="Users">

        { users?.map((user,index)=>(
        <div style={{backgroundColor:'rgba(0, 0, 255, 0.541)'}}key={index}>
         <User user={user}/>
        </div>
        ))}
        </div>
      </Drawer>
    </>
  );
};

export default AllUsers;