const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resetButton = document.getElementById('reset')



score = 0;
question = 0;

let shuffledQuestions, currentQuestionIndex



resetButton.addEventListener('click', reset)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}



function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      console.log("Time Off: Auto selected correct answer.");
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  resetButton.classList.add('hide')
  nextButton.classList.add('hide')
  
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  question = question + 1;
    var element = document.getElementById('answer-buttons');
    var children = element.children;
   for(var i=0; i<children.length; i++){
               var child = children[i];
               if(correct && (child.getAttribute('data-correct') == true || child.getAttribute('data-correct') == 'true' )) {
               score = score+1;
               child.classList.add('correct')
               document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
               } else if (child.getAttribute('data-correct') == true || child.getAttribute('data-correct') == 'true' ) {
                 child.classList.add('correct')
                 document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
               } else {
                 child.classList.add('wrong')
                 document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
                }
                if (shuffledQuestions.length > currentQuestionIndex + 1) {
                  nextButton.classList.remove('hide');
                } else {
                  resetButton.classList.remove('hide');
                  //if (score < 6){
                    
                  //} else if (score > 6){
                    
                 // } else if (score > 9){
                    
                  //}
                } 
              }
            }


function reset (){
  resetButton.classList.remove('hide');
  score = 0;
  question = 0; 
  document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
  timeValue = 30; 
  startGame();
}



function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: '??Verdadero o falso? Una divisi??n entera es aquella en la que el resto es cero?',
    answers: [
      { text: 'Verdadero', correct: false },
      { text: 'Falso', correct: true }
    ]
  },
  {
    question: 'Un perro pesa 20 kilos y un cachorro pesa 10 kilos menos que ??l, ??cu??nto pesa la cr??a?',
    answers: [
      { text: '30 Kilos', correct: false },
      { text: '10 Kilos', correct: true },
      
    ]
  },
  {
    question: '??C??mo se llama el pol??gono de siete lados?',
    answers: [
      { text: 'Hept??gono', correct: true },
      { text: 'Hex??gono', correct: false },
      { text: 'Sept??gono', correct: false },
      
    ]
  },
  {
    question: '??Cu??l es el nombre del tri??ngulo que tiene dos lados iguales y uno desigual?',
    answers: [
      { text: 'is??sceles', correct: true },
      { text: 'escaleno', correct: false },
      { text: 'equil??tero', correct: false }
    ]
  },
  {
    question: '??Cu??ntos metros es un hect??metro.?',
    answers: [
      { text: '10 metros', correct: false },
      { text: '1 metro', correct: false },
      { text: '100 metros', correct: true }
    ]
  },
  {
    question: 'Hoy han tra??do a la librer??a una caja con 125 libros y otra con 50 libros. Ya se han colocado 45 libros, ??para saber cu??ntos faltan por colocar, qu?? operaciones hay que realizar?',
    answers: [
      { text: 'Sumar los libros que han llegado (125 + 50) y restarle los 45 que se han colocado.', correct: true },
      { text: 'Restar 125 a los 45 que se han colocado', correct: false },
      
      
    ]
  },
  {
    question: '??C??mo puedes comprobar si has hecho bien una divisi??n?',
    answers: [
      { text: 'Volvi??ndola a hacer.', correct: false },
      { text: 'Multiplicando el cociente por el divisor y sumando el resto si lo hay.', correct: true },
      { text: 'Sumando el cociente por el divisor y el resto.', correct: false },
      
    ]
  },
  {
    question: '??Qu?? n??mero es mayor 37.4 o 37.09?',
    answers: [
      { text: '37.4', correct: true },
      { text: '37.09', correct: false },
      { text: 'Ni idea', correct: false }
    ]
  },
  {
    question: 'Si tienes un billete de 100???, dos billetes de 20??? y cuatro monedas de 1 ???, ??cu??nto dinero tienes en total?',
    answers: [
      { text: '140 euros', correct: false },
      { text: '144 euros', correct: true },
      { text: '154 euros', correct: false },
      
    ]
  },
  {
    question: '??Cu??nto es un lustro?',
    answers: [
      { text: '1 a??o', correct: false },
      { text: '10 a??os', correct: false },
      { text: '5 a??os', correct: true }
    ]
  },
  {
    question: '??A cu??ntas unidades equivale 10 decenas de millar?',
    answers: [
      { text: '10000 unidades', correct: false },
      { text: '100000 unidades', correct: true }
    ]
  },
  {
    question: '??Qu?? cantidad expresa el n??mero romano V?',
    answers: [
      { text: 'diez', correct: false },
      { text: ' cinco', correct: true },
      
    ]
  },
  {
    question: '??Qu?? n??mero resulta si divides 56 entre 7?',
    answers: [
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '7', correct: false },
      
    ]
  },
  {
    question: '??Qu?? es una recta secante?',
    answers: [
      { text: 'Es una recta que corta una curva en dos puntos.', correct: true },
      { text: 'Es una recta exterior a una circunferencia.', correct: false },
      { text: 'Es una recta que corta en un punto a una curva.', correct: false }
    ]
  },
  {
    question: 'C??lculo mental r??pido: ??Cu??nto es 6x8 menos cuatro?',
    answers: [
      { text: '54', correct: false },
      { text: '50', correct: false },
      { text: '44', correct: true }
    ]
  },
  {
    question: '??Cu??ntos meses tiene un trimestre.?',
    answers: [
      { text: '3 meses', correct: true },
      { text: '13 meses', correct: false },
      
      
    ]
  },
  {
    question: 'C??lculo mental r??pido: ??Cu??nto es 100x49?',
    answers: [
      { text: '490', correct: false },
      { text: '4900', correct: true },
      { text: 'Ambas respuestas', correct: false },
      
    ]
  },
  {
    question: '??Qu?? es un pol??gono regular?',
    answers: [
      { text: ' El que tiene todos sus lados y sus ??ngulos iguales', correct: true },
      { text: 'El que tiene sus lagos y ??ngulos desiguales', correct: false },
      { text: 'Ni idea', correct: false }
    ]
  },
  {
    question: 'Cu??ntos minutos tiene una hora?',
    answers: [
      { text: '20 minutos', correct: false },
      { text: '60 minutos', correct: true },
      { text: '90 minutos', correct: false },
      
    ]
  },
  {
    question: 'PREGUNTA IMPOSIBLE ??C??al es la respuesta?',
    answers: [
      { text: 'La respuesta es lo de abajo', correct: false },
      { text: 'Esta no es la respuesta', correct: false },
      { text: 'La respesta es la de ariba derecha', correct: true }
    ]
  },
  {
    question: '??Cu??l es el n??mero que vale menos si lo pones al rev??s?',
    answers: [
      { text: '19', correct: false },
      { text: '9', correct: true }
    ]
  },
  {
    question: '??Qu?? cantidad expresa el n??mero romano V?',
    answers: [
      { text: 'diez', correct: false },
      { text: ' cinco', correct: true },
      
    ]
  },
  {
    question: 'En un ??rbol hay 3 p??jaros, un cazador les dispara y mata a 1, ??cu??ntos quedan?',
    answers: [
      { text: '2', correct: true },
      { text: '3', correct: false },
      { text: 'ninguno', correct: false },
      
    ]
  },
  {
    question: '??C??mo podr?? repartir una madre tres patatas entre sus cuatro hijos?',
    answers: [
      { text: '1.3', correct: true },
      { text: 'No se', correct: false },
      { text: '3.90', correct: false }
    ]
  },
  {
    question: ' Qu?? n??mero vale 0 si le quitas la mitad.',
    answers: [
      { text: '0', correct: false },
      { text: '520', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'Dos padres y dos hijos entran a una estaci??n de metro. Compran s??lo 3 tickets y pasan sin problema, ??c??mo lo hicieron?',
    answers: [
      { text: 'Entran al metro el abuelo, el padre y el hijo, en total dos padres y dos hijos.', correct: true },
      { text: 'Robaron una ', correct: false },
      
      
    ]
  },
  {
    question: 'Qu?? n??mero tiene el mismo n??mero de letras que el valor que expresa.',
    answers: [
      { text: '7', correct: false },
      { text: '5', correct: true },
      { text: 'Ambas respuestas', correct: false },
      
    ]
  },
  {
    question: '??Qu?? pesa m??s un kilo de hierro o un kilo de paja?',
    answers: [
      { text: 'pesan lo mismo', correct: true },
      { text: 'paja', correct: false },
      { text: 'hierro', correct: false }
    ]
  }
]

