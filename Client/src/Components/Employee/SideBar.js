import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Avatar, Typography, Button } from "@material-ui/core";
import { Drawer, Space } from "antd";

const SideBar = () => {
  const [state, setState] = useState({ visible: false });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const Location = useLocation();

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const Logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    //JWT
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) Logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [Location]);

  const { visible } = state;
  return (
    <>
      <Space>
        <Button variant="outlined" color="primary" onClick={showDrawer}>
          <b className="Icons"> Menu </b>
        </Button>
      </Space>
      <Drawer
        className="Icons"
        width={360}
        title={user?.result?.name}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {user ? (
          <div className="profile">
            <Avatar
              className="User Avatar"
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <div className="mt-5">
              <Typography className="Icons" variant="h6">
                {user.result.name}
              </Typography>
            </div>
            <div className="mt-5">
              <Button
                variant="outlined"
                className="Logaut"
                color="primary"
                onClick={Logout}
              >
                <b className="Icons">Logout</b>
              </Button>
            </div>
          </div>
        ) : (
          <Button component={Link} to="/" variant="outlined" color="primary">
            <b className="Icons">Sign In</b>
          </Button>
        )}
      </Drawer>
    </>
  );
};
export default SideBar;
