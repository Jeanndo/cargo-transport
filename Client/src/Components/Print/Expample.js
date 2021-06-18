import React from "react";
import ReactToPrint from "react-to-print";
import {Button } from '@material-ui/core'
import Print from "./Printout/Admin";
import {Link} from 'react-router-dom';
class ComponentToPrint extends React.Component {
  render() {
    return <Print />;
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <Button 
            variant="outlined"
             color="primary" 
             style={{ cursor: "pointer",margin:'3% 0 0 40%'}}
             >
               Print
             </Button>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
