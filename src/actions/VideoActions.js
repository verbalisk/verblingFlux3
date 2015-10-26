import Fireman from '../firebase/Fireman';

var VideoActions = {
  initSkylink: function(flux, myUsername) {
    var skylink = new Skylink();

    skylink.on('peerJoined', function(peerId, peerInfo, isSelf) {
      if(isSelf) return; // We already have a video element for our video and don't need to create a new one.
      var peerUsername = peerInfo.userData.username;

      var vid = document.createElement('video');
      vid.autoplay = true;
//    vid.muted = true; // needed if testing locally with multiple clients and want to avoid echo / feedback
      vid.id = peerId;
      vid.className = "css-video-square-videoelem";
      
      
      var videoSquareTitleDiv = document.createElement('div');
      videoSquareTitleDiv.className = "css-video-square-title";
      videoSquareTitleDiv.innerHTML = peerUsername + ' Spaceship Video';

      var videoSquareContainerDiv = document.createElement('div');
      videoSquareContainerDiv.className = "css-video-square-container";
      videoSquareContainerDiv.id = peerUsername + 'VideoContainer';
      videoSquareContainerDiv.appendChild(videoSquareTitleDiv);
      videoSquareContainerDiv.appendChild(vid);
      document.getElementById('videopanel').appendChild(videoSquareContainerDiv);

      flux.getActions('videoactions').registerPeer(peerId, peerUsername); 
    });

    skylink.on('incomingStream', function(peerId, stream, isSelf) {
      if(isSelf) return;
      var vid = document.getElementById(peerId);
      attachMediaStream(vid, stream);
    });

    skylink.on('peerLeft', function(peerId, peerInfo, isSelf) {
      var peerUsername = peerInfo.userData.username;
      var videoSquareContainerDiv = document.getElementById(peerUsername + 'VideoContainer');
      document.getElementById('videopanel').removeChild(videoSquareContainerDiv);
      flux.getActions('videoactions').unregisterPeer(peerId, peerUsername); 
    });

    skylink.on('mediaAccessSuccess', function(stream) {
      var vid = document.getElementById('myvideo');
      attachMediaStream(vid, stream);
    });

    skylink.init({
      apiKey: 'c9ece827-ba6b-4960-a74c-19df78a55a67',
      defaultRoom: 'oct26jedi'
    }, function() {
      skylink.setUserData({
        username: myUsername
      });
      skylink.joinRoom({
        audio: true,
        video: true
      });
    });
  },



  registerPeer(peerID, peerUsername) {
    return {peerID: peerID, peerUsername: peerUsername};
  },

  unregisterPeer(peerID, peerUsername) {
    return {peerID: peerID, peerUsername: peerUsername};
  }
}

export default VideoActions;