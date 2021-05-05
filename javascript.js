const keys = document.querySelectorAll(".octave > div")

function markoff(key){
  if(key.classList.contains("white")){
    key.classList.remove("selected-white")
  } else {
    key.classList.remove("selected-black")
  }
}

keys.forEach(function(key) {
  key.onmousedown = function(){
    if(key.classList.contains("white")){
      key.classList.add("selected-white")
    } else {
      key.classList.add("selected-black")
    }
    
    const octave = key.classList.item(1)
    const note = key.classList.item(2)
    const directory = './' + 'keys/' + octave + '/' + note + '.mp3'
    const keyaudio = new Audio(directory)

    keyaudio.play()
  }

  key.onmouseleave = () => markoff(key)

  key.onmouseup = () => markoff(key)
})