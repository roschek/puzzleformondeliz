const images = document.querySelectorAll('.puzzle-image')
const cells = document.querySelectorAll('.grid-item')

const puzzleTrigger = function(){
  let filled = document.querySelectorAll('.filled__card')
  if(filled.length === 6){
    const puzzleItems = document.querySelectorAll('.puzzle-image')
    const contentItems = document.querySelectorAll('.content__block')
    puzzleItems.forEach(elem=> elem.style.visibility="hidden")
    contentItems.forEach(elem=> elem.classList.add('content__block-visible'))
    document.querySelector('.video-block').style.display = "block"
    setTimeout(()=>{
      document.querySelector('.video-block').classList.add('video-block-visible')
    },30)
  }
}
const dragStart = function (evt) {
  evt.dataTransfer.setData("text", evt.target.id)
}

const dragOver = function (evt) {

  evt.preventDefault()

}
const drop = function (evt) {
  evt.preventDefault()
  let imageId = evt.dataTransfer.getData("text")
  let transferCard = document.getElementById(imageId)
  let numberTransferCard = imageId.replace(/[a-zа-яё]/gi, '')
  if (evt.target.id === numberTransferCard && evt.target.id === "1") {

    evt.target.insertAdjacentHTML('afterbegin', `<img src="./images/rot${numberTransferCard}.png"alt="картинка с  собранным пазлом" class=" filled__card fill__first-card">`)
  puzzleTrigger()
  } else if (evt.target.id === numberTransferCard && evt.target.id === "2") {

    evt.target.insertAdjacentHTML('afterbegin', `<img src="./images/rot${numberTransferCard}.png"alt="картинка с  собранным пазлом" class="filled__card fill__second-card">`)
    puzzleTrigger()
  } else if (evt.target.id === numberTransferCard && evt.target.id === "3") {

    evt.target.insertAdjacentHTML('afterbegin', `<img src="./images/rot${numberTransferCard}.png"alt="картинка с  собранным пазлом" class="filled__card fill__third-card">`)
    puzzleTrigger()
  }
  else if (evt.target.id === numberTransferCard && evt.target.id === "4") {
    evt.target.insertAdjacentHTML('afterbegin', `<img src="./images/rot${numberTransferCard}.png"alt="картинка с  собранным пазлом" class="filled__card fill__fourth-card">`)
    puzzleTrigger()
  }
  else if (evt.target.id === numberTransferCard && evt.target.id === "5") {

    evt.target.insertAdjacentHTML('afterbegin', `<img src="./images/rot${numberTransferCard}.png"alt="картинка с  собранным пазлом" class="filled__card fill__fifth-card">`)
    puzzleTrigger()
  }
  else if (evt.target.id === numberTransferCard && evt.target.id === "6") {

    evt.target.insertAdjacentHTML('afterbegin', `<img src="./images/rot${numberTransferCard}.png"alt="картинка с  собранным пазлом" class="filled__card fill__six-card">`)
    puzzleTrigger()
  }

}

Array.from(cells).forEach(element => {
  element.addEventListener('dragover', dragOver)
  element.addEventListener('drop', drop)
})

Array.from(images).forEach(element => {
  element.addEventListener('dragstart', dragStart)
})
