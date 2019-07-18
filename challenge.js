document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  const time = setTimeout(start, 1000);
  const int = setInterval(increase, 1000); 

let i = 0;
var num = document.getElementById('counter');

function start() {
    int
}

function increase() {
    if (i < 1000) {
      i = i+1;
      num.innerText = i;
    }
}


const minus = document.getElementById("-");
 minus.addEventListener('click', function(event) {
    if (i > 0) {
        i-=1;
        num.innerText = i;
      }
});

const plus = document.getElementById("+");
 plus.addEventListener('click', function(event) {
    if (i < 1000) {
        i+=1;
        num.innerText = i;
      }
});

let likes = 0

const like = document.getElementById("<3");
 like.addEventListener('click', function(event) {
    var likesnum = document.getElementsByTagName("li")[0]
        likes+=1;
        likesnum.innerText = likes;
});

const pause = document.getElementById("pause");
    pause.addEventListener('click', function(event) {
        clearInterval(int)
        let start = document.querySelector("#pause").innerText = "Resume"  
    }

    )

const comment = document.getElementById("comment-form");
    comment.addEventListener("submit", function(e) {
      e.preventDefault()
      let com = event.target.querySelector("#input").value
      debugger
      let listItem = `<li> ${com} </li>`
      a = document.querySelector("#unordered-list")
      a.innerHTML = listItem
    })