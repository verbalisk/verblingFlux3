import React from 'react';
import {FluxComponent} from 'flummox/addons/react';
import classnames from 'classnames'; 

export default class GifPanel extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="css-video-panel">
        <div className="css-video-square-container">
          <div className="css-video-square-title">Chewy Spaceship Video</div>
          <img className="css-gif-panel-gif" src="/submissions/verbling/gifs/chewy.gif" />
        </div>
        <div className="css-video-square-container">
          <div className="css-video-square-title">Yoda Spaceship Video</div>
          <img className="css-gif-panel-gif" src="/submissions/verbling/gifs/yoda.gif" />
        </div>
        <div className="css-video-square-container">
          <div className="css-video-square-title">Leia Spaceship Video</div>
          <img className="css-gif-panel-gif" src="/submissions/verbling/gifs/leia.gif" />
        </div>
        <div className="css-video-square-container">
          <div className="css-video-square-title">Luke Spaceship Video</div>
          <img className="css-gif-panel-gif" src="/submissions/verbling/gifs/luke.gif" />
        </div>
      </div>
    );
  }
}