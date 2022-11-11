const flashcards = document.getElementsByClassName('flashcards')[0]
const createBox = document.getElementsByClassName('create-box')[0]
const question = document.getElementById('question')
const answer = document.getElementById('answer')
let contentArray = localStorage.getItem('items') ?
    JSON.parse(localStorage.getItem('items')) :
    []

contentArray.forEach(divMaker)

function deleteFlashcards() {
    localStorage.clear()
    flashcards.innerHTML = ''
    contentArray = []
}

function showCreateCardBox() {
    createBox.style.display = 'block'
}

function hideCreateBox() {
    createBox.style.display = 'none'
}

function clearText() {
    question.value = ''
    answer.value = ''
}


function divMaker(text) {
    const front = document.createElement('div')
    const back = document.createElement('div')
    const card_wrapper = document.createElement('div')
    const h2_question = document.createElement('h2')
    const h2_answer = document.createElement('h2')
    const card = document.createElement('div')


    card.className = "flashcard"
    front.className = "flashcard-front"
    back.className = "flashcard-back"
    card_wrapper.className = "flashcard-inner"
    card_wrapper.setAttribute('style', 'transform: none;')

    //   div.className = 'flashcard'
    //   h2_question.setAttribute('style', 'border-top: 1px solid red; padding: 15px; margin-top: 30px;')
    h2_question.innerHTML = text.my_question

    //   h2_answer.setAttribute('style', 'text-align: center; color: red;')
    h2_answer.innerHTML = text.my_answer

    front.appendChild(h2_question)
    back.appendChild(h2_answer)



    card.addEventListener('click', function () {
        if (card_wrapper.style.transform == "none") {
            card_wrapper.style.transform = "rotateY(180deg)"
        } else {
            card_wrapper.style.transform = "none"
        }

    })

    back.addEventListener('click', function () {
        card_wrapper.style.transform = "rotateY(180deg)"
    })
   
    card_wrapper.appendChild(front)
    card_wrapper.appendChild(back)
    card.appendChild(card_wrapper)
    flashcards.appendChild(card)
    clearText();
}







function addFlashcard() {
    const flashcard_info = {
        my_question: question.value,
        my_answer: answer.value
    }

    contentArray.push(flashcard_info)
    localStorage.setItem('items', JSON.stringify(contentArray))
    divMaker(contentArray[contentArray.length - 1])
}








// test