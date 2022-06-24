var songs=[
    {
        id: 1,
        imageSrc:"./img/believer.jpg",
        audioSrc:"./audio/Imagine Dragons - Believer.mp3",
        title: "Believer - Imagine Dragons"
    },

    {
        id: 2,
        imageSrc:"./img/rideit.jpg",
        audioSrc:"./audio/07-Jay Sean  Ride it  (  official video   ) - YouTube.mp3",
        title: "Ride it - Jay sean"
    },

    {
        id: 3,
        imageSrc:"./img/rightnow.jpg",
        audioSrc: "./audio/Akon - Right Now (Na Na Na) with lyrics.mp3",
        title: "Right Now - Akon"
    },

    {
        id: 4,
        imageSrc:"./img/empty.jpg",
        audioSrc:"./audio/Juice WRLD - Empty (Official Audio).mp3",
        title: "Empty - Juice Wrld"
    },

    {
        id: 5,
        imageSrc:"./img/graveyard.jpg",
        audioSrc:"./audio/NEFFEX - Graveyard [Copyright Free].mp3",
        title: "Graveyard - NEFFEX"
    },

    {
        id: 6,
        imageSrc:"./img/infexted.jpg",
        audioSrc:"./audio/Sickick - Infected.mp3",
        title: "Infected - Sickick"
    },

    {
        id: 7,
        imageSrc:"./img/moana.jpg",
        audioSrc:"./audio/G-Eazy &amp Jack Harlow - Moana (Lyrics).mp3",
        title: "Moana - G-Eazy"
    }, 

    {
        id: 8,
        imageSrc:"./img/rockstar.jpg",
        audioSrc:"./audio/Post Malone - rockstar ft. 21 Savage.mp3",
        title: "RockStar - Post Malone"
    },

    {
        id: 9,
        imageSrc:"./img/Usedtoyou.jpg",
        audioSrc:"./audio/Ali Gatie - Used to You (Official Music Video with Lyrics).mp3",
        title: "Used to you - Ali Gatie"
    },

    {
        id: 10,
        imageSrc:"./img/withoutme.jpg",
        audioSrc:"./Halsey - Without Me (Lyrics).mp3",
        title: "Without Me - Halsey"
    },

    {
        id: 11,
        imageSrc:"./img/woah.jpg",
        audioSrc:"./audio/NEFFEX - Woah[Copyright Free].mp3",
        title: "Woah - NEFFEX"
    },
]


function playAudio(songid)
{
    var song = songs.find(function(song,index){
        return song.id === songid
    });


    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();


}
