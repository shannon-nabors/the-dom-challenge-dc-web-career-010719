
// Increment the timer automatically
let counter = document.querySelector('#counter')
let number = parseInt(counter.innerText)

function timer() {
  number++
  counter.innerText = number
}

let setTimer = setInterval(timer, 1000)


// Allow user to increment the timer manually
let decrease = document.querySelector('button:nth-child(3)')
let increase = document.querySelector('button:nth-child(4)')

decrease.addEventListener('click', function(event) {
  number--
  counter.innerText = number
})

increase.addEventListener('click', function(event) {
  number++
  counter.innerText = number
})

// Allow user to like a number
let likeButton = document.querySelector('button:nth-child(5)')
let likeList = document.querySelector('ul.likes')
let likeAmounts = {}

function createLike() {
  let LikeID = 0
  return class {
    constructor(num) {
      this.num = num
      this.id = ++LikeID
      likeAmounts[num] = (likeAmounts[num]+1) || 1
    }
  }
}

const Like = createLike()

likeButton.addEventListener('click', function(event) {
  new Like(number)
  if (likeAmounts[number] === 1) {
    let li = document.createElement('li')
    li.innerHTML = (`${number} has been liked <span id="Likes${number}">1 time</span>`)
    likeList.appendChild(li)
  } else {
    numberLikes = document.querySelector(`span#Likes${number}`)
    numberLikes.innerText = `${likeAmounts[number]} times`
  }
})

// Allow user to pause "game"
let pause = document.querySelector('button:nth-child(6)')
let submit = document.querySelector('button#submit')
let buttonsToggle = [decrease, increase, likeButton, submit]

pause.addEventListener('click', function(event) {
  if (decrease.disabled === false) {
    buttonsToggle.forEach(button => button.disabled = true)
    clearInterval(setTimer)
  } else {
    buttonsToggle.forEach(button => button.disabled = false)
    setTimer = setInterval(timer, 1000)
  }
})


// Allow user to leave comments
let formElement = document.querySelector('form')
let input = document.querySelector('input')
let commentList = document.querySelector('ul.comments')

formElement.addEventListener('submit', function(event) {
  event.preventDefault()
  let p = document.createElement('p')
  p.innerText = input.value
  commentList.appendChild(p)
  formElement.reset()
})
