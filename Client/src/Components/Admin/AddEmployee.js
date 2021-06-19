import React from "react";
import { Drawer } from "antd";
import { Button } from "@material-ui/core";
import { PlusOutlined } from "@ant-design/icons";
import SignUpUser from "./Auth";

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button
          className="ml-5"
          variant="outlined"
          color="primary"
          onClick={this.showDrawer}
        >
          <PlusOutlined /> New account
        </Button>
        <Drawer
          title="Add New Account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <SignUpUser />
        </Drawer>
      </>
    );
  }
}

export default DrawerForm;
