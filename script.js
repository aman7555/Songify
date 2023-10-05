
let songindex = 0;
let audioelement = new Audio('songs/1.mp3')
let masterplay= document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar")
let gif = document.getElementById("gif")
let mastersongname= document.getElementById("mastersongname")
let songitem= Array.from(document.getElementsByClassName("songitem"))
// let timestamp = document.getElementsByClassName("timestamp") 





let songs= [
    {songname: "Besharam Rang Song", filepath: "songs/1.mp3", coverpath:"covers/1.jfif"},
    {songname: "Maan Meri Jaan", filepath: "songs/2.mp3", coverpath:"covers/2.jfif"},
    {songname: "Psycho Saiyaan", filepath: "songs/3.mp3", coverpath:"covers/3.jfif"},
    {songname: "Apna Bana Le  Bhediya  ", filepath: "songs/4.mp3", coverpath:"covers/4.jfif"},
    {songname: "Behti Hawa Sa Tha Woh ", filepath: "songs/5.mp3", coverpath:"covers/5.jfif"},
    {songname: "Give Me Some Sunshine  ", filepath: "songs/6.mp3", coverpath:"covers/6.jfif"},
    {songname: "O Re Piya  Rahat Fateh ", filepath: "songs/7.mp3", coverpath:"covers/7.jfif"},
    {songname: " Rabba Mehar Kari", filepath: "songs/8.mp3", coverpath:"covers/8.jfif"},
    {songname: "Haara Hoon Baba ", filepath: "songs/9.mp3", coverpath:"covers/9.jfif"},
    {songname: "Saiyyan", filepath: "songs/10.mp3", coverpath:"covers/10.jfif"}
]

songitem.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src= songs[i].coverpath
    element.getElementsByClassName("songname")[0].innerHTML= songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
        mastersongname.innerText = songs[songindex].songname;
        counter='0';
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-circle-play')
        masterplay.classList.remove('fa-circle-pause')
        gif.style.opacity=0;
    }
})








audioelement.addEventListener('timeupdate',()=>{
  
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100)
   
    myprogressbar.value= progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime= myprogressbar.value* audioelement.duration/100;
})


const makeallplay = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from( document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{

    makeallplay();

    if(audioelement.paused || audioelement.currentTime<=0) {
    
    songindex= parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    mastersongname.innerText = songs[songindex].songname;
    audioelement.src = `songs/${songindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    }
    else{

        songindex= parseInt(e.target.id)
    e.target.classList.remove('fa-circle-pause')
    e.target.classList.add('fa-circle-play')
    mastersongname.innerText = songs[songindex].songname;
    audioelement.src = `songs/${songindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.pause();
    gif.style.opacity=0;
    masterplay.classList.remove('fa-circle-pause')
    masterplay.classList.add('fa-circle-play')
    }
        
    

    

    })
})



// music in sequence
audioelement.addEventListener('ended', ()=>{
    songindex++;

    if(songindex < songs.length){
     
        audioelement.src= `songs/${songindex+1}.mp3`

        audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    mastersongname.innerText = songs[songindex].songname;
    }
})

document.getElementById("next").addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;

    }
    else{
        songindex+=1;
    }
    mastersongname.innerText = songs[songindex].songname;
    audioelement.src = `songs/${songindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
})

// counter of music
counter.innerText= "00:00";
songlength.innerText= "00:00"




document.getElementById("previous").addEventListener('click',()=>{
    if(songindex<=9){
        songindex=0;

    }
    else{
        songindex-=1;
    }
    mastersongname.innerText = songs[songindex].songname;
    audioelement.src = `songs/${songindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
})