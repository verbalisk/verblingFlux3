import { Store } from 'flummox';

export default class VideoStore extends Store {
  constructor(flux) {
    super(); 

    const videoActionIds = flux.getActionIds('videoactions');
    this.register(videoActionIds.registerPeer, this.handleRegisterPeer);
    this.register(videoActionIds.unregisterPeer, this.handleUnregisterPeer);

    this.state = {
        peers: null
    };
  }


  handleRegisterPeer(peerObj) {
    let peers = this.state.peers;
    if (!peers) {
      peers = [peerObj];
    }
    else {
     peers.push(peerObj);  
    }
    this.setState({peers: peers});
  }

  handleUnregisterPeer(peerObj) {
    let peers = this.state.peers;
    if (peers) {
      let index = (-1);
      for (let g = 0; g < peers.length; g++) {
        if(peers[g].peerUsername === peerObj.peerUsername) {
          index = g;
          break;
        }
      }
      if (index > (-1)) {
        peers.splice(index, 1);
      }
    }
    this.setState({peers: peers});
  }
}

