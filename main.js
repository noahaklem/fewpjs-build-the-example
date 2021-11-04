// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyphs = document.querySelectorAll('.like-glyph');

for (const like of likeGlyphs) {
  like.addEventListener("click", (e) => {
    const heart = e.target;
    mimicServerCall('url')
    .then(function(serverMessage) {
      heart.innerText = FULL_HEART
    })
    .catch(function(error) {
      const modal = document.getElementById('modal');
      modal.className = "";
      setTimeout(() => modal.className = "hidden", 1000)
    })
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
