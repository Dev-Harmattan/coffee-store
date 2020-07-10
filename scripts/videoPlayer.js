function initializeVideoPlayerControls() {
    var video = document.getElementById("videoPlayer");

    function playVideo(event) {
        var button = event.target;
        if(video.paused){
            video.play();
            button.textContent = "pause";
        }else{
            video.pause();
            button.textContent = "play"
        }
    }

    function seek(numberOfSeconds) {
        try{
            if(numberOfSeconds == 0){
                video.currentTime = numberOfSeconds;
            }else{
                video.currentTime += numberOfSeconds;
            }
        } catch(error) {
            displayError("Something went wrong");
        }
    }

    document.getElementById("playButton").addEventListener("click", playVideo, false);
    document.getElementById("backButton").addEventListener("click", function() {
        seek(-5);
    }, false);
    document.getElementById("slowerButton").addEventListener("click", function() {
        video.playbackRate -= .25;
    });
    document.getElementById("fastButton").addEventListener("click", function() {
        video.playbackRate += .25;
    });
    document.getElementById("muteButton").addEventListener("click", function(s) {
        if(video.muted){
            video.muted = false;
        }else{
            video.muted = true;
        }
    }, false);
}