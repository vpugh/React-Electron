import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import './sidebar.css';

class SidebarU extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: true
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {

    return (
      <Sidebar open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
               <div className="Sidebar-Container">
                <b>Main content</b>
                <ul>
                    <li>Step1</li>
                </ul>
                </div>
      </Sidebar>
    );
  }
};

export default SidebarU;