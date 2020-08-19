import React, { Component } from 'react';

export default class Timer extends Component {

  componentDidMount(){
    setInterval(this.ticker,1000);
  }

  ticker(){
    this.timer=this.setState({secs: new Date() - this.props.start});
  }

  constructor(props){
    super(props);

    this.state = {
      secs:0
    };
    this.ticker=this.ticker.bind(this);
  }

  render(){
    var secs = Math.round(this.state.secs / 1000);

    return(
      <div>
        <p>You have been on the site since :</p> <br />
        <span>{secs}</span><br />
        <b><p>Seconds</p></b>
      </div>
    );
  }
}
