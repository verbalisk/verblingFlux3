import React from 'react';
import {FluxComponent} from 'flummox/addons/react';
import classnames from 'classnames'; 

export default class VideoPanel extends React.Component {
  constructor(props) {
  	super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.myUsername && nextProps.myUsername) {
      this.props.flux.getActions('videoactions').initSkylink(this.props.flux, nextProps.myUsername); 
    }
  }

  render() {
    return (
      <FluxComponent>
        <div className="css-video-panel" id="videopanel">
          <div className="css-video-square-container" id="myvideosquare">
            <div className="css-video-square-title">My Spaceship Video</div>
            <video className="css-video-square-videoelem" id="myvideo" autoPlay muted></video>
          </div>
        </div>
      </FluxComponent>
    );
  }
}