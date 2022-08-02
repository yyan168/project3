var url = new URL(window.location.href);
let mobile = url.searchParams.get("mobile")

let pageNum = 1

let IMAGE_BIGPHONE = null
let IMAGE_NOKIA = null
let IMAGE_FLIPPHONE = null
let IMAGE_IPHONE4 = null
let IMAGE_WAVE = null



function preload() {
  IMAGE_BIGPHONE = loadImage('assets/bigphone.png')
  IMAGE_NOKIA = loadImage('assets/nokia.png')
  IMAGE_FLIPPHONE = loadImage('assets/flipphone.png')
  IMAGE_IPHONE4 = loadImage('assets/iphone4.png')
  IMAGE_WAVE = loadImage('assets/wave.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  textAlign(CENTER, CENTER)
  imageMode(CENTER)
  textWrap(WORD)
  textSize(30)

  if (!mobile) {
    text('please check url param', width / 2, 200)
    text('http://xx/?mobile=bigphone', width / 2, 250)
    return
  }

  playBgAudio()
  drawScene()
}

let ele;
function playBgAudio() {

  if (mobile == 'bigphone') {
    ele = createAudio('assets/bigphone.mp3');
    ele.loop()
  } else if (mobile == 'nokia') {
    ele = createAudio('assets/nokia.mp3');
    ele.loop()
  } else if (mobile == 'flipphone') {
    ele = createAudio('assets/flipphone.mp3');
    ele.loop()
  } else if (mobile == 'iphone4') {
    ele = createAudio('assets/iphone4.mp3');
    ele.loop()
  }
}

function drawScene() {
  background(255)

  if (pageNum == 1) {
    image(IMAGE_WAVE, width / 2, height / 2 - 50)
    text('Turn on your volume', width / 2, height / 2 + 100)
  } else if (pageNum == 2) {
    if (mobile == 'bigphone') {
      image(IMAGE_BIGPHONE, width / 2, height / 2, 1080 / 3, 1920 / 3)
    } else if (mobile == 'nokia') {
      image(IMAGE_NOKIA, width / 2, height / 2)
    } else if (mobile == 'flipphone') {
      image(IMAGE_FLIPPHONE, width / 2, height / 2, 400, 400)
    } else if (mobile == 'iphone4') {
      image(IMAGE_IPHONE4, width / 2, height / 2, 600, 600)
    }
  } else if (pageNum == 3) {
    let t = ''
    if (mobile == 'bigphone') {
      t = 'This is the first mobile phone I met in my life, and also the originator of mobile phones.'
    } else if (mobile == 'nokia') {
      t = 'When I was in elementary school, this is the first mobile phone I ever owned in my life.'
    } else if (mobile == 'flipphone') {
      t = 'I believe every girl in her childhood would definitely love Hello Kitty, this cartoon flip phone was one of my earlier cell phone, and I was super into it !'
    } else if (mobile == 'iphone4') {
      t = 'My first touch screen phone, and also the first iPhone I ever have.'
    }
    text(t, 0, height / 2, width)
  }
  /* else if (pageNum == 4) {
    let t = ''
    if (mobile == 'bigphone') {
      t = 'This brick phone was owned by my father, we still keep it as a collection. He was so proud to own this phone back in the 1980s, having a brick phone is a way to showoff and only the people with status and wealth could own it.'
    } else if (mobile == 'nokia') {
      t = 'Growing up, I was really wanted a cell phone that is only belongs to me. This Nokia is officially my first owned cell phone, it gives me a sense of independence and I felt like I could finally have my own privacy.'
    } else if (mobile == 'flipphone') {
      t = 'When a huge fan of Hello Kitty would definitely have a Hello Kitty cell phone. I was so proud to have such a cool phone, I showed off to my friends, to everyone from the street. I thought I was the coolest and super tech girl at that time.'
    } else if (mobile == 'iphone4') {
      t = 'After iPhone getting mainstream, my dream in junior high school was to become an owner of iPhone. I received the latest Iphone (which was Iphone4 at that time) from my parents as a reward for getting A+ grade on final. Since then, all of my phones after that are from the Apple.'
    }
    text(t, 0, height / 2, width)
  } */
  else if (pageNum == 4) {
    let t = 'Please check out the next memory!'
    text(t, 0, height / 2, width)
  }
}


function mouseClicked() {
  if (!mobile) {
    return
  }

  pageNum++
  if (pageNum == 5) {
    pageNum = 1
  }

  drawScene()
}