/* ===================================
   BIRTHDAY SURPRISE
   Core Engine
=================================== */

const scenes = document.querySelectorAll(".scene");

function showScene(id){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

/* ===================================
   Loading Screen
=================================== */

setTimeout(()=>{

showScene("welcomeScene");

},4200);

/* ===================================
   Floating Stars
=================================== */

const stars=document.getElementById("stars");

for(let i=0;i<70;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}

/* ===================================
   Floating Hearts
=================================== */

const heartBox=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*10)+"px";

heart.style.animationDuration=(7+Math.random()*3)+"s";

heartBox.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

/* Only a few hearts */

setInterval(createHeart,2500);

/* ===================================
   Sparkles
=================================== */

const sparkleBox=document.getElementById("sparkles");

function createSpark(){

const spark=document.createElement("div");

spark.className="spark";

spark.innerHTML="✨";

spark.style.left=Math.random()*100+"vw";

spark.style.top=(70+Math.random()*30)+"vh";

spark.style.animationDuration=(4+Math.random()*2)+"s";

sparkleBox.appendChild(spark);

setTimeout(()=>{

spark.remove();

},6000);

}

setInterval(createSpark,1800);

/* ===================================
   Shooting Star
=================================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.top=Math.random()*40+"vh";

star.style.right="-150px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1800);

}

setInterval(shootingStar,12000);

/* ===================================
   Start Button
=================================== */

const startBtn=document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

if(navigator.vibrate){

navigator.vibrate(80);

}

showScene("prankScene");

});
/* ===================================
   PRANK SCENE
=================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const prankText = document.getElementById("prankText");

let prankCount = 0;

const prankMessages = [

"😂 Nice try!",

"Catch me if you can!",

"Too slow 😜",

"You almost got me!",

"Still trying? 🤭",

"Okay okay... you win! ❤️"

];

// Move the button when touched
function moveNoButton(){

prankCount++;

let area = document.querySelector(".buttonBox");

let maxX = area.offsetWidth - noBtn.offsetWidth;
let maxY = area.offsetHeight - noBtn.offsetHeight;

let x = Math.random() * maxX;
let y = Math.random() * maxY;

noBtn.style.position = "absolute";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

if(prankCount <= prankMessages.length){

prankText.innerHTML = prankMessages[prankCount-1];

}

// After 6 tries
if(prankCount >= 6){

noBtn.style.display = "none";

prankText.innerHTML =
"🎉 Haha! Now click <b>I Promise 😇</b> to continue.";

yesBtn.classList.add("glow");

}

}

noBtn.addEventListener("click",moveNoButton);

// Continue Button

yesBtn.addEventListener("click",()=>{

if(navigator.vibrate){

navigator.vibrate([80,50,80]);

}

// Gift Scene will open in Part 4

showScene("giftScene");

});
/* ===================================
   GIFT SCENE
=================================== */


/* ===================================
   GALLERY
=================================== */

const galleryImage=document.getElementById("galleryImage");

const galleryCaption=document.getElementById("galleryCaption");

const dots=document.querySelectorAll(".dot");

const photos=[

"photo1.jpg",

"photo2.jpg",

"photo3.jpg",

"photo2.jpg",

"photo3.jpg"

];

const captions=[

"A smile that brightens every moment ❤️",

"Some memories deserve to last forever 🌸",

"Happiness looks beautiful on you ✨",

"Keep smiling, today is your day 🎉",

"The best surprise is still waiting... 🎁"

];

let photoIndex=0;

function nextPhoto(){

photoIndex++;

if(photoIndex>=photos.length){

setTimeout(()=>{

showScene("letterScene");

},1500);

return;

}

galleryImage.style.opacity="0";

setTimeout(()=>{

galleryImage.src=photos[photoIndex];

galleryCaption.innerHTML=captions[photoIndex];

galleryImage.style.opacity="1";

dots.forEach(dot=>dot.classList.remove("activeDot"));

dots[photoIndex].classList.add("activeDot");

},500);

}

setInterval(()=>{

if(document.getElementById("galleryScene").classList.contains("active")){

nextPhoto();

}

},4000);
/*===================================
        MAGIC GIFT
===================================*/

const giftBox=document.getElementById("giftBox");
const giftEmoji=document.getElementById("giftEmoji");
const giftCount=document.getElementById("giftCount");
const giftHint=document.getElementById("giftHint");

let giftTap=0;

giftBox.addEventListener("click",()=>{

giftTap++;

giftCount.innerHTML=giftTap;

if(navigator.vibrate){

navigator.vibrate(50);

}

// Bounce

giftEmoji.style.transform="scale(1.15)";

setTimeout(()=>{

giftEmoji.style.transform="scale(1)";

},150);

// Sparkles

for(let i=0;i<10;i++){

const s=document.createElement("div");

s.className="spark";

s.innerHTML="✨";

s.style.left=(giftBox.offsetLeft+60+Math.random()*60)+"px";

s.style.top=(giftBox.offsetTop+60+Math.random()*60)+"px";

s.style.animationDuration=".8s";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},900);

}

if(giftTap==1){

giftHint.innerHTML="✨ Ooo... Something magical!";

}

if(giftTap==2){

giftHint.innerHTML="🎀 One more tap...";

}

if(giftTap>=3){

giftEmoji.classList.add("giftOpen");

giftHint.innerHTML="🎉 Surprise unlocked!";

setTimeout(()=>{

showScene("galleryScene");

},1200);

}

});

/*===================================
        SECRET LETTER
===================================*/

const envelope=document.getElementById("envelope");
const letterCard=document.getElementById("letterCard");
const letterNext=document.getElementById("letterNext");

envelope.addEventListener("click",()=>{

envelope.style.transform="scale(.8) rotateY(180deg)";
envelope.style.opacity="0";

setTimeout(()=>{

envelope.style.display="none";
letterCard.style.display="block";

},600);

});

letterNext.addEventListener("click",()=>{

showScene("cakeScene");

});
/*===================================
        BIRTHDAY CAKE
===================================*/

const blowBtn=document.getElementById("blowBtn");
const flames=document.getElementById("flames");
const cakeText=document.getElementById("cakeText");

blowBtn.addEventListener("click",()=>{

if(navigator.vibrate){

navigator.vibrate([100,50,100]);

}

cakeText.innerHTML=
"🎉 Yay! Your wish is on its way...";

flames.style.transition=".8s";

flames.style.opacity="0";

blowBtn.disabled=true;

setTimeout(()=>{

showScene("finalScene");

},1800);

});
/*===================================
        GRAND FINALE
===================================*/

const restartBtn=document.getElementById("restartBtn");

function launchConfetti(){

const colors=[
"#ff4d6d",
"#ffd93d",
"#6bcBff",
"#95e06c",
"#ffffff",
"#ff9ec4"
];

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=
(3+Math.random()*3)+"s";

piece.style.animationDelay=
Math.random()*1.5+"s";

document.getElementById("confettiContainer").appendChild(piece);

setTimeout(()=>{

piece.remove();

},7000);

}

}

const oldShowScene=showScene;

showScene=function(id){

oldShowScene(id);

if(id==="finalScene"){

launchConfetti();

}

}

restartBtn.addEventListener("click",()=>{

location.reload();

});