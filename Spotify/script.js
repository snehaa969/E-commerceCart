console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('materPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.fromdocument.getElementById('songItem');

let song = [
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]

songItem.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementByClassName("songName")[0].innerText = song[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement /100;
})

const makeAllPlays = ()=>{
    e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) =>{
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
    })
}
array.from(document.getElementsByClassName('song ItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex +1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex>=9){
        songIndex = 0
    }else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex +1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0
    }else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex +1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})