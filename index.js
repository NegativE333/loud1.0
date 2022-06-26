// ANIMATION JAVASCRIPT
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});




// function([string1, string2],target id,[color1,color2])    
consoleText(['listening','on','loud'], 'text',['tomato','rebeccapurple','black']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}




let songIndex = 0;
let audioElement1 = new Audio("Hamare_sath_shree_raghunath.mp3");
let audioElement2 = new Audio("Aye_Mere_Humsafar.mp3");
let audioElement3 = new Audio("Aankhein_Khuli_Song_Mohabbatein.mp3");
let audioElement4 = new Audio("Saaton_Janam_Main_Tere.mp3");
let audioElement5 = new Audio("Chand_se_parda_keejiye.mp3");
let audioElement6 = new Audio("Meri_Mehbooba.mp3");
let audioElement7 = new Audio("Ghalat_Fehmi.mp3");
let audioElement8 = new Audio("Soch_Liya.mp3");
let audioElement9 = new Audio("KHAIRIYAT.mp3");
let audioElement10 = new Audio("Jaan_Hai_Meri.mp3");
let audioElement11 = new Audio("Aashiqui_Aa_Gayi.mp3");
let audioElement12 = new Audio("Luka_Chuppi_Duniyaa.mp3");
let audioElement13 = new Audio("Excuses.mp3");
let audioElement14 = new Audio("Bavni.mp3")
let masterplay = document.getElementById("masterplay");
let progressBar = document.getElementById("progressBar");


document.addEventListener("keydown", function(event){
  stopSound(event.code);
  console.log(event.code);
});

function stopSound(key){
  if (key==="MediaPlayPause"){
    player.paused ? player.play() : player.pause()
    audio1p();
    audio2p();
    audio3p();
    audio4p();
    audio5p();
    audio6p();
    audio7p();
    audio8p();
    audio9p();
    audio10p();
    audio11p();
    audio12p();
    audio13p();
  }
}

function audio1(){
  audioElement1.play();
  audio14p();
  audio13p();
  audio12p();
    audioElement1.addEventListener("timeupdate", function(){
      progress = parseInt((audioElement1.currentTime/audioElement1.duration)* 100);
      var time = audioElement1.currentTime;
      var duration = audioElement1.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement1.duration-audioElement1.currentTime)===0){
        audio14();
        audio1p();
      }
      progressBar.value = progress;
    });
    progressBar.addEventListener("change", function(){
      audioElement1.currentTime = (progressBar.value * audioElement1.duration) / 100;
    });
    document.querySelector(".next").addEventListener("click", function(){
      audio14();
    });
    document.querySelector(".previous").addEventListener("click",function(){
      audio13();
    });
    document.querySelector(".status-humare_sath_shri_raghunath").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Humare Sath Shri Raghunath<p>";
    document.getElementById("display").src = "humare_sath_shri_raghunath.png";
}

function audio1p(){
  audioElement1.pause();
    document.querySelector(".status-humare_sath_shri_raghunath").innerHTML = "";
}

function audio14(){
  audioElement14.play();
  audio1p();
  audio13p();
  audio2p();
    audioElement14.addEventListener("timeupdate", function(){
      progress = parseInt((audioElement14.currentTime/audioElement14.duration)* 100);
      var time = audioElement14.currentTime;
      var duration = audioElement14.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement14.duration-audioElement14.currentTime)===0){
        audio2();
        audio14p();
      }
      progressBar.value = progress;
    });
    progressBar.addEventListener("change", function(){
      audioElement14.currentTime = (progressBar.value * audioElement14.duration) / 100;
    });
    document.querySelector(".next").addEventListener("click", function(){
      audio2();
    });
    document.querySelector(".previous").addEventListener("click",function(){
      audio1();
    });
    document.querySelector(".status-bavni").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Gajana Maharaj Bavni<p>";
    document.getElementById("display").src = "bavni.jpg";
}

function audio14p(){
  audioElement14.pause();
  document.querySelector(".status-bavni").innerHTML = "";
}

function audio2(){
  audioElement2.play();
  audio14p();
  audio3p();
  audio1p();
  audioElement2.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement2.currentTime/audioElement2.duration)* 100);
      var time = audioElement2.currentTime;
      var duration = audioElement2.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement2.duration-audioElement2.currentTime)===0){
        audio3();
        audio2p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement2.currentTime = (progressBar.value * audioElement2.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio3();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio14();
  });
    document.querySelector(".status-aye_mare_humsafar").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Aye Mare Humsafar<p>";
    document.getElementById("display").src = "aye_mare_humsafar.png";
}

function audio2p(){
  audioElement2.pause();
  document.querySelector(".status-aye_mare_humsafar").innerHTML = "";
 }


function audio3(){
  audioElement3.play();
  audio4p();
  audio2p();
  audio14p();
  audioElement3.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement3.currentTime/audioElement3.duration)* 100);
      var time = audioElement3.currentTime;
      var duration = audioElement3.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement3.duration-audioElement3.currentTime)===0){
        audio4();
        audio3p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement3.currentTime = (progressBar.value * audioElement3.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio4();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio2();
  });
    document.querySelector(".status-aankhein_khuli").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Aankhein Khuli<p>";
    document.getElementById("display").src = "aankhein_khuli.png";
}

function audio3p(){
    audioElement3.pause();
    document.querySelector(".status-aankhein_khuli").innerHTML = "";
}

function audio4(){
  audioElement4.play();
  audio3p();
  audio5p();
  audio2p();
  audioElement4.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement4.currentTime/audioElement4.duration)* 100);
      var time = audioElement4.currentTime;
      var duration = audioElement4.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement4.duration-audioElement4.currentTime)===0){
        audio5();
        audio4p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement4.currentTime = (progressBar.value * audioElement4.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio5();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio3();
  });
    document.querySelector(".status-saaton_janam").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Saaton Janam<p>";
    document.getElementById("display").src = "saaton_janam.png";
}

function audio4p(){
  audioElement4.pause();
  document.querySelector(".status-saaton_janam").innerHTML = "";
}


function audio5(){
  audioElement5.play();
  audio4p();
  audio3p();
  audio6p();
  audioElement5.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement5.currentTime/audioElement5.duration)* 100);
      var time = audioElement5.currentTime;
      var duration = audioElement5.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement5.duration-audioElement5.currentTime)===0){
        audio6();
        audio5p();
      }
    progressBar.value = progress
  });
  progressBar.addEventListener("change", function(){
    audioElement5.currentTime = (progressBar.value * audioElement5.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio6();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio4();
  });
    document.querySelector(".status-chand_se_parda").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Chand Se Parda<p>";
    document.getElementById("display").src = "chand_se_parda.png";
}

function audio5p(){
  audioElement5.pause();
  document.querySelector(".status-chand_se_parda").innerHTML = "";
}

function audio6(){
  audioElement6.play();
  audio5p();
  audio4p();
  audio7p();
  audioElement6.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement6.currentTime/audioElement6.duration)* 100);
      var time = audioElement6.currentTime;
      var duration = audioElement6.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement6.duration-audioElement6.currentTime)===0){
        audio7();
        audio6p();
      }
    progressBar.value = progress
  });
  progressBar.addEventListener("change", function(){
    audioElement6.currentTime = (progressBar.value * audioElement6.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio7();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio5();
  });
    document.querySelector(".status-meri_mehbooba").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Meri Mehbooba<p>";
    document.getElementById("display").src = "meri_mehbooba.png";
}

function audio6p(){
  audioElement6.pause();
   document.querySelector(".status-meri_mehbooba").innerHTML = "";
}

function audio7(){
  audioElement7.play();
  audio6p();
  audio5p();
  audio8p();
  audioElement7.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement7.currentTime/audioElement7.duration)* 100);
      var time = audioElement7.currentTime;
      var duration = audioElement7.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement7.duration-audioElement7.currentTime)===0){
        audio8();
        audio7p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement7.currentTime = (progressBar.value * audioElement7.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio8();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio6();
  });
    document.querySelector(".status-ghalat_fehmi").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Ghalat Fehmi<p>";
    document.getElementById("display").src = "ghalat_fehmi.png";
}

function audio7p(){
    audioElement7.pause();
    document.querySelector(".status-ghalat_fehmi").innerHTML = "";
}

function audio8(){
  audioElement8.play();
  audio7p();
  audio6p();
  audio11p();
  audioElement8.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement8.currentTime/audioElement8.duration)* 100);
      var time = audioElement8.currentTime;
      var duration = audioElement8.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement8.duration-audioElement8.currentTime)===0){
        audio11();
        audio8p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement8.currentTime = (progressBar.value * audioElement8.duration) / 100;
  });
   document.querySelector(".next").addEventListener("click", function(){
    audio11();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio7();
  });
    document.querySelector(".status-soch_liya").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Soch Liya<p>";
    document.getElementById("display").src = "soch_liya.png";
}

function audio8p(){
  audioElement8.pause();
    document.querySelector(".status-soch_liya").innerHTML = "";
}

function audio9(){
  audioElement9.play();
  audio10p();
  audio11p();
  audio12p();
  audioElement9.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement9.currentTime/audioElement9.duration)* 100);
      var time = audioElement9.currentTime;
      var duration = audioElement9.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement9.duration-audioElement9.currentTime)===0){
        audio12();
        audio9p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement9.currentTime = (progressBar.value * audioElement9.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio12();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio10();
  });
    document.querySelector(".status-khairiyat").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Khairiyat<p>";
    document.getElementById("display").src = "khairiyat.png";
}

function audio9p(){
  audioElement9.pause();
    document.querySelector(".status-khairiyat").innerHTML = "";
}

function audio10(){
  audioElement10.play();
  audio9p();
  audio8p;
  audio11p();
  audioElement10.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement10.currentTime/audioElement10.duration)* 100);
      var time = audioElement10.currentTime;
      var duration = audioElement10.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement10.duration-audioElement10.currentTime)===0){
        audio9();
        audio10p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement10.currentTime = (progressBar.value * audioElement10.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio9();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio11();
  });
    document.querySelector(".status-jaan_hai_meri").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Jaan Hai Meri<p>";
    document.getElementById("display").src = "jaan_hai_meri.png";
}

function audio10p(){
  audioElement10.pause();
  document.querySelector(".status-jaan_hai_meri").innerHTML = "";
}

function audio11(){
  audioElement11.play();
  audio8p();
  audio7p();
  audio10p();
  audioElement11.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement11.currentTime/audioElement11.duration)* 100);
      var time = audioElement11.currentTime;
      var duration = audioElement11.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement11.duration-audioElement11.currentTime)===0){
        audio10();
        audio11p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement11.currentTime = (progressBar.value * audioElement11.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio10();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio8();
  });
    document.querySelector(".status-aashiqui_aa_gayi").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Aashiqui Aa Gayi<p>";
    document.getElementById("display").src = "aashiqui_aa_gayi.png";
}

function audio11p(){
  audioElement11.pause();
    document.querySelector(".status-aashiqui_aa_gayi").innerHTML = "";
}

function audio12(){
  audioElement12.play();
  audio9p();
  audio10p();
  audio13p();  
  audioElement12.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement12.currentTime/audioElement12.duration)* 100);
      var time = audioElement12.currentTime;
      var duration = audioElement12.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement12.duration-audioElement12.currentTime)===0){
        audio13();
        audio12p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement12.currentTime = (progressBar.value * audioElement12.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio13();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio9();
  });
    document.querySelector(".status-duniyaa").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Duniyaa<p>";
    document.getElementById("display").src = "duniyaa.png";
}

function audio12p(){
  audioElement12.pause();
    document.querySelector(".status-duniyaa").innerHTML = "";
}

function audio13(){
  audioElement13.play();
  audio12p();
  audio9p();
  audio1p();
  audioElement13.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement13.currentTime/audioElement13.duration)* 100);
      var time = audioElement13.currentTime;
      var duration = audioElement13.duration;
      var min1 = Math.floor((time % 3600)/60);
      var sec1 = Math.floor(time % 60);
      var min2 = Math.floor((duration % 3600)/60);
      var sec2 = Math.floor(duration % 60);
      document.querySelector(".time").innerHTML = min1+":"+sec1;
      document.querySelector(".duration").innerHTML = min2+":"+sec2;
      if((audioElement13.duration-audioElement13.currentTime)===0){
        audio1();
        audio13p();
      }
    progressBar.value = progress;
  });
  progressBar.addEventListener("change", function(){
    audioElement13.currentTime = (progressBar.value * audioElement13.duration) / 100;
  });
  document.querySelector(".next").addEventListener("click", function(){
    audio1();
  });
  document.querySelector(".previous").addEventListener("click",function(){
    audio12();
  });
    document.querySelector(".status-excuses").innerHTML = "<strong>(Playing)</strong>";
    document.querySelector(".display").innerHTML = "<p>Excuses<p>";
    document.getElementById("display").src = "excuses.png";
}

function audio13p(){
  audioElement13.pause();
    document.querySelector(".status-excuses").innerHTML = "";
}






