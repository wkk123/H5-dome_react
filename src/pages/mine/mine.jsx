import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer } from '@/components';
import store from '@/store';
import PropTypes from 'prop-types';
import { saveAcountData } from '@/store/actions';
import './mine.scss';


class mine extends Component {
  static propTypes = {
    acountData: PropTypes.object.isRequired,
    saveAcountData: PropTypes.func.isRequired,
  }
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
      <div className='mine_container'>
        <div className='mine_box'>

        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    acountData: state.acountData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveAcountData: (acountData) => dispatch(saveAcountData(acountData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mine)