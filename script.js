
const myVideo = document.querySelector("#my-video")
console.log(myVideo)

const playPauseButton = document.querySelector("#play-pause-btn")
console.log(playPauseButton)



const playPauseImg = document.querySelector("#play-pause-img")
console.log(playPauseImg)

// This first button function will play and pause the video. While this is required in the context of a music video, it is also a basic function of any video content and is required as such

playPauseButton.addEventListener("click", toggleVideo)

function toggleVideo()
{
    if(myVideo.paused || myVideo.ended)
        {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png"
        myVideo.play();
        } else {
            playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png"
            myVideo.pause();
        }
}
// -------------------------------------------


// This function will mute and unmute video. While the context of a music video centres around the music as the core element, it's other lead function is the actual visuals of the video itself.
// An audience may want to enjoy the visuals without having the audio playing, as such a mute button is a key function. With button changing color on a click to visualise it being muted/unmuted.

const muteUnmuteButton = document.querySelector("#mute-unmute-button")
console.log(muteUnmuteButton)

muteUnmuteButton.addEventListener("click", toggleSound)

function toggleSound()
{
    if(myVideo.muted) {
        muteUnmuteButton.style.backgroundColor = "#a14695"
        myVideo.muted=false;
    }
    else
    {
        muteUnmuteButton.style.backgroundColor = "#492444"
        myVideo.muted=true;
    }
}

// -------------------------------------------

// This function will increase and decrease volume. The audience may be viewing the music video in different context's that may require hearing the video at different levels. 
// Such as on a big speaker system or quietly in headphones. Allowing the user to adjust volume level with this function is highly beneficial in this context.

const volumeUpButton = document.querySelector("#volume-up-button")
console.log(volumeUpButton)

volumeUpButton.addEventListener("click", increaseVolume)

function increaseVolume() 
{
     myVideo.volume += 0.2; 
    } 




const volumeDownButton = document.querySelector("#volume-down-button")
console.log(volumeDownButton)

volumeDownButton.addEventListener("click", decreaseVolume)

function decreaseVolume() 
{
     myVideo.volume -= 0.2; 
    } 


// -------------------------------------------

// This function will set the video to repeat/loop when it ends. As the video is quite short, the user many want to be able to easily set the music video to repeat. So they can listen to the song and enjoy the visuals multiple times.
// Having a dedicated button to loop the video automatically allows for this, with the button changing colour on click to visualise it being set to loop.

const repeatButton = document.querySelector("#repeat")
console.log(repeatButton)

repeatButton.addEventListener("click", toggleRepeat)

function toggleRepeat()
{
    if(myVideo.loop) {
        repeatButton.style.backgroundColor = "#a14695"
        myVideo.loop=false;
    }
    else
    {
        repeatButton.style.backgroundColor = "#ed13d0"
        myVideo.loop=true;
    }
}

// -------------------------------------------



// This is the function for the progress bar, showing how much has played and how much is remaining. With any media player it is important to have a method of informing the viewer of how far into the video they are and how much time remains.
// A coloured progress bar is highly effective in this context, espically with the repeat/loop button being utilized.

const progressBar = document.querySelector("#progress-bar-fill")
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar()
{
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBar.style.width = progress + "%";
}

// ------------------------------------------

// This function is to make the video go full sceen. Both through the use of a button and on double click.
// The veiwer may be enjoying the music video on an array of different screens and technologies, and may want to set it to take up the entire screen to enjoy the visuals.

myVideo.addEventListener("dblclick", goFullScreen)

const fullscreenButton = document.querySelector("#fullscreen-button")

fullscreenButton.addEventListener("click", goFullScreen)

function goFullScreen()
    {
        if(!document.fullscreenElement)
            {
                myVideo.requestFullscreen();
            }
            else {
                document.exitFullscreen
            }
    }

// ------------------------------------------


// This function will add timestamps for easy navigation. The viewer may want to quickly jump towards a favourite part of the song or the visuals.
// Labeled timestamps allow for this quick and easy method to jump between 1 minute intervals on the timeline.

const part1Button = document.querySelector("#part-1")
console.log(part1Button)

part1Button.addEventListener("click", gotoStep1);

function gotoStep1()
    {
        myVideo.currentTime =0.0
    }


const part2Button = document.querySelector("#part-2")
console.log(part2Button)

part2Button.addEventListener("click", gotoStep2);

function gotoStep2()
{
    myVideo.currentTime = 60.0
}

const part3Button = document.querySelector("#part-3")
console.log(part3Button)

part3Button.addEventListener("click", gotoStep3);

function gotoStep3()
{
    myVideo.currentTime = 120.0
}

const part4Button = document.querySelector("#part-4")
console.log(part4Button)

part4Button.addEventListener("click", gotoStep4);

function gotoStep4()
{
    myVideo.currentTime = 180.0
}

