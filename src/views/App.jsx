import React from 'react';
import AppFlux from '../AppFlux';
import GifPanel from './GifPanel';
import Dashboard from './Dashboard';
import ChatPanel from './ChatPanel';
import VideoPanel from './VideoPanel';
import {FluxComponent} from 'flummox/addons/react';

export default class App extends React.Component {
  render() {
    const flux = new AppFlux();
    return (
    	     <div className="css-main-row">
             <div className="css-left-col">
               <GifPanel />
             </div>
             <div className="css-middle-col">
    	         <FluxComponent flux={flux} connectToStores={['sithlordstore', 'kenobistore']} >
    	            <Dashboard flux={flux} />
    	         </FluxComponent>
    	         <FluxComponent flux={flux} connectToStores={['chatstore', 'userstore']}>
    	            <ChatPanel flux={flux} /> 
			         </FluxComponent>
             </div>
             <div className="css-right-col">
               <FluxComponent flux={flux} connectToStores={['videostore', 'userstore']}>
                  <VideoPanel flux={flux} /> 
               </FluxComponent>
             </div>
    	     </div>
    	   );
  }
}