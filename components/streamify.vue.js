var bus = {};
bus.eventBus = new Vue();

var app = new Vue({
    el: '#app',
    data: {},
    components: {
        'streamify': {
            data: function () {
                return {
                    currentSongTitle: '',
                    currentSongArtist: ''
                }
            },
            methods: {
                callSpotifyApi: function(route,reqBody,method,callback) {
                    let vue = this;
                    let xhr = new XMLHttpRequest();
                    let url = route;
                    xhr.onreadystatechange = function() {
                        if(xhr.readyState === 4 && this.status === 200) {
                            if(JSON.parse(this.response)['error'] === 'access_denied') {
                                return false;
                            }
                            callback(this.response);
                        } else if(this.status !== 200) {
                            // error case
                        }
                    };
                    xhr.open(method, url, true);
                    xhr.send(reqBody);
                },
                updateCurrentSong: function() {
                    let reqBody = 'grant_type=authorization_code&client_secret=53d0e6dff05c4dadbc56a94393af1020&client_id=b7b1973cad1649519931470e9c7f0e7c';
                    this.callSpotifyApi('https://accounts.spotify.com/api/token',reqBody,'POST',function() {

                    });
                }
            },
            template: ''
        }
    }
});
