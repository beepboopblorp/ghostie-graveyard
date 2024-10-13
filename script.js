if(screen.width > screen.height) {
    document.getElementById("fancygate1").style.height = "100%";
    document.getElementById("fancygate2").style.height = "100%";
} else {
    document.getElementById("fancygate1").style.width = "50%";
    document.getElementById("fancygate2").style.width = "50%";
}

if(document.getElementById("fancygate1") && document.getElementById("fancygate2")) {
    document.getElementById("fancygate1").addEventListener("click", opengate)
    document.getElementById("fancygate2").addEventListener("click", opengate)
}

for (let i = 1; i < 15; i++) {
    let element = document.getElementById("hs" + i);
    let elementaudio = document.getElementById("hs" + i + "a");
    if (element) {
        element.addEventListener("mouseover", () => {
            element.setAttribute("src", "ghosts/ghost" + i + ".png");
            element.style.animation = "ghostie 4s";
            element.style.animationIterationCount = "infinite";
            if (6 <= i <= 9) {
               element.style.animationDelay = "1s"; 
            } else if (i <= 5) {
                element.style.animationDelay = "2s";
            }
            elementaudio.play();
        });
        element.addEventListener("click", () => {
            element.setAttribute("src", "headstone1.png");
            element.style.animation = "none";
            elementaudio.pause();
        })
    }
};

function opengate() {
    document.getElementById("gateinstruct").style.display = "none";
    document.getElementById("fancygate1").style.animation = "gm1 2s";
    document.getElementById("fancygate1").style.animationFillMode = "forwards";
    document.getElementById("fancygate2").style.animation = "gm2 2s";
    document.getElementById("fancygate2").style.animationFillMode = "forwards";
    setTimeout(() => {for (let i = 1; i < 15; i++) {
        let element = document.getElementById("hs" + i);
        element.style.display = "inline";
    }}, 2000);
    setTimeout(() => {
        document.getElementById("nextroom").style.display = "block";
    }, 10000);
}