# Streamify
A tool for Streamers which allows you to show what Song is currently playing on your Spotify Accunt.

## Setup
### Webserver
Using Streamify is really easy - Even LoL streamers should be abled to use this :*  
> This Application has to run on a webserver! You can use xampp to do this. If you install xampp using the default settings, you have to put the Streamify files into the directory 'C:\xampp\htdocs\'  
 
After you've managed to run the webserver and Streamify can be accessed by navigating to http://127.0.0.1, you just have to add a web source in OBS and put http://127.0.0.1 into the web address field.  

### Spotify credentials
In order to give Streamify the ability to talk to spotify, you have to set your Spotify credentials in <code>/js/credentials.js</code>
You have to get Spotify Developer access. More info on that here: https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app  
 
 
## Customizing
If you feel like you want to adjust the styling you can do this by adjusting the settings in <code>/css/customize.css</code>.  
Basic settings can be adjusted using the <code>:root{}</code> variables.  
The Positioning can be adjusted by overriding the <code>div.text_container</code>.  
All details are described in the mentioned CSS file. 