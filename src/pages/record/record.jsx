import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller'
import { Footer } from '@/components';
import store from '@/store';
import './record.scss';

class record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordList:[],//充电记录
      page: 1,//页数
      hasMore: true,
      isRemote: false,
      parameter:{//远程续充参数
        Id:'', 
        DeviceNumber:'', 
        DeviceWay:''
      },
      ...store.getState()
    };
  }
  componentDidMount(){

  }
  // 滚动加载
  nextPageFun =()=>{

  }
  render () {
    const {  hasMore } = this.state;
    return (
      <div className='record_container'>
        <div className='record_list'>
          <InfiniteScroll
            initialLoad={false} // 不让它进入直接加载
            pageStart={1} // 设置初始化请求的页数
            loadMore={this.nextPageFun}  // 监听数据请求
            hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
            useWindow={false} // 不监听 window 滚动条
          >
            {'列表'}
          </InfiniteScroll>
        </div>
        <Footer />
      </div>
    )
  }
}

export default record