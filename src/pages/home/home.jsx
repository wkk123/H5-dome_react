import React, { Component } from 'react'
import { Footer } from '@/components';
import './home.scss';
import store from '@/store';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...store.getState()
    };
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div className="home_container">
        <div className="home_content">

        </div>
        <Footer />
      </div>
    );
  }
}

export default home