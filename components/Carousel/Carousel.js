/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


let images = [
  "./assets/carousel/mountains.jpeg", 
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

let cyclingImage = 0

function Carousel(){
  // Element creation
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const rightBtn = document.createElement('div')
  const img = document.createElement('img')
  
  // Adding class
  carousel.classList.add('carousel')
  leftBtn.classList.add('left-button')
  rightBtn.classList.add('right-button')


  // Adding content
  leftBtn.textContent = '<'
  rightBtn.textContent = '>'
  img.src = images[cyclingImage]

  // elements content to carousel
  carousel.append(leftBtn)
  carousel.appendChild(img)
  carousel.append(rightBtn)

  // Event handlers

  leftBtn.addEventListener('click', (e)=>{
    if (cyclingImage > 0){
      img.classList.toggle('left-go')
      cyclingImage--
      setTimeout(()=>{
        img.classList.toggle('left-go')
        img.src = images[cyclingImage]

      }, 500)
      
    } else {
      img.classList.toggle('left-go')
      cyclingImage = images.length - 1
      setTimeout(()=>{
        img.classList.toggle('left-go')
        img.src = images[cyclingImage]

      }, 500)

    }
  })

  rightBtn.addEventListener('click', ()=>{
    if (cyclingImage < images.length -1){
      img.classList.toggle('right-go')
      cyclingImage++
      setTimeout(()=>{
        img.classList.toggle('right-go')
        img.src = images[cyclingImage]

      }, 500)
    } else{
      img.classList.toggle('right-go')
      cyclingImage = 0
      setTimeout(()=>{
        img.classList.toggle('right-go')
        img.src = images[cyclingImage]

      }, 500)
    }
  })

  // Return complete component
  return carousel
}

let carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(Carousel())
