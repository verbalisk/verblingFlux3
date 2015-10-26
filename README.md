# Verbling Flux/React Challenge 3

## Version 3 - WebRTC Video Addon

### Background

I have a YouTube Video Demo here: https://youtu.be/MTtejvf_1Gs  . But it's quite easy to run if you'd like to give it a shot with a few friends ^^

[![Alt text for your video](http://img.youtube.com/vi/Vp3I6Wj_7YY/0.jpg)](https://www.youtube.com/watch?v=Vp3I6Wj_7YY)


This version has a WebRTC Video chat addon. Multiple users can open the page on different tabs / computers and have video+audio chat - in addition to the Firebase text chat addon from verblingFlux2 repo.

I noticed the verbling/webrtc-lib repository and saw the Twilio library there. In my previous job, we briefly looked at the Twilio site, as well as OpenTok, and Temasys / Skylink.. We decided not to use a WebRTC BaaS/PaaS and created our own, including SIP, TURN and STUN servers. My responsibility was handling the entire web client portion - working with the JSSIP client library, setting up and connecting the media streams, creating mute audio/video buttons, etc. I also did a little bit of packet debugging with wireshark. 

To keep this Verbling Flux Demo simple to startup and run, I decided not to create all that infrastructure - and used a WebRTC cloud service instead. It seems like Twilio Video WebRTC has something in beta, but it is invite only and I do not have access to it. I decided to look at Skylink. This was my first time looking at Skylink/Temasys code. It was refreshingly simple!

The Skylink API uses CORS and requires me to pick a domain name that will host the client app. I have whitelisted 'localhost' for the API key currently used in this demo. As a result file:// does not work, and a localhost web server was required. I created a very simple express.js server that does nothing but serve the index.html file for me at http://localhost:5000/submissions/verbling/index.html . You can see this in the 8 line webserver.js file ^^

### Features

#### WebRTC Video/Audio Chat



### Run

1) Please check that you have cloned the repo into the proper subfolder of the server. e.g. on Windows 7, c:\verblingserver\submissions\verbling if the server is located at c:\verblingserver\server . This is because I rely on styles.css which is included higher up the folder tree than my submission folder.

2) run 'npm install' in the submissions\verbling folder to install express web server (only needed to server static file from localhost, a SkyLink/Temasys CORS requirement, see tiny webserver.js)

3) run 'npm run webserver' to start webserver

4) Make sure you are properly dressed. The Rebel Alliance #StarChat is broadcast throughout the known universe. 

5) Navigate to http://localhost:5000/submissions/verbling/index.html in Chrome (Chrome on Windows 7 tested, no other WebRTC enabled browsers were tested..).

### Build

install: npm install

build: npm run build

watch: npm run watch

start webserver: npm run webserver

### Usage

After starting the webserver with 'npm run webserver', connect to http://localhost:5000/submissions/verbling/index.html in Chrome. Click 'Allow' if Chrome prompts you for permission to use your camera and microphone. Invite other friends in other spaceships (computers) to also run their own servers (npm run webserver required, the websocket server is optional and only need for Obi-Wan updates) and connect to http://localhost:5000/submissions/verbling/index.html from their machines. Enjoy group video + audio chat together. If you have no friends or they do not have spaceships, you can test using multiple tabs, however, depending on your spaceship configuration, there is likely to be only 1 camera feed.. 

Enjoy video chatting with Chewy, Yoda, Leia and Luke on the left. Note that Jar Jar Binks could not get his spaceship video camera to work so he is text chat only. Han Solo has grown shy in his old age is text chat only as well. 

### Author

Created by Daniel Guillamot - 2015-10-26