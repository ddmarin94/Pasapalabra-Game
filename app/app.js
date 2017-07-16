
  var questions = [
      { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
      { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
      { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
      { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
      { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
      { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
      { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
      { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
      { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
      { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
      { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
      { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
      { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
      { letter: "ñ", answer: "señal", status:0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.")},
      { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
      { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
      { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
      { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
      { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
      { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
      { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
      { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
      { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
      { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
      { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},

  //  The first var has been created for save the user names.
  var names = []
  var correct = 0;
  var error = 0;
  var counter = 0;

//We are hiding the buttons at the begining after press the start button.
//Before of press start button we will show the pasapalabra and enter button and we will hide the start button.
  function hideButton(){

      var add = document.getElementById('play');
      add.className += "hidden";

      var add = document.getElementById('pass');
      add.className += "nohidden";

      var add = document.getElementById('check');
      add.className += "nohidden";

      var add = document.getElementById('introduceAnswer');
      add.className += "nohidden";

      var add = document.getElementById('name');
      add.className += "hidden";

      showQuestion()
      console.log("1")
  }

  function showRestartButton(){



    var add = document.getElementById('pass');
    add.className += "hidden";
    add.classList.add("hidden");

    var add = document.getElementById('check');
    add.className += "hidden";
    add.classList.add("hidden");

    var add = document.getElementById('introduceAnswer');
    add.className += "hidden";
    add.classList.add("hidden");

    var add = document.getElementById('restart');
    add.classList.remove("hidden")

    var add = document.getElementById('restart');
    add.className += "nohidden"

    console.log("2")
  }

  function playAgain(){
    // Set the clock at 130 secs again when we start a new game.
    var number = document.getElementById('countdownSecs');
    var counterTime = 130;
    number.innerHTML = counterTime;

    // Counter = 0 allow us to start in the first letter, "A".
    counter = 0;
    // Set counter of correct and error at 0 to start a new game.
    correct = 0;
    error = 0;

    //I did a loop to set the background color of the letters at blue and also to equal all question status at 0.
    for(var i = 0; i < 25; i++){
      var letter = document.getElementById("letter");
      letter.getElementsByTagName("div")[i].style.background = "#4e7fff";
      questions[i].status = 0
    }
    //Show the corrects answers = 0 at start a new game.
    document.getElementById('counterCorrect').innerHTML = 0;

    document.getElementById("showMe").style.textAlign = "center";
    document.getElementById('showMe').innerHTML = "Introduce tu nombre para jugar.";

// This is a second play button, different at first for start again the round.
      var add = document.getElementById('play2');
      add.className += "nohidden";

      var add = document.getElementById('name');
      add.className += "nohidden";

      var add = document.getElementById('pass');
      add.className += "hidden";
      add.classList.add("hidden");

      var add = document.getElementById('check');
      add.className += "hidden";
      add.classList.add("hidden");

      var add = document.getElementById('introduceAnswer');
      add.className += "hidden";
      add.classList.add("hidden");

      var add = document.getElementById('restart');
      add.classList.remove("nohidden")

      var add = document.getElementById('restart');
      add.classList.add("hidden");

      console.log("3")
  }

  function beginAgain(){

        var add = document.getElementById('introduceAnswer');
        add.classList.remove("hidden");

        var add = document.getElementById('check');
        add.classList.remove("hidden");

        var add = document.getElementById('pass');
        add.classList.remove("hidden");

        var add = document.getElementById('play2');
        add.classList.remove("nohidden");

        var add = document.getElementById('play2');
        add.classList.add("hidden");

        var add = document.getElementById('name');
        add.classList.add("hidden");

        var add = document.getElementById('restart');
        add.classList.add("hidden");

        showQuestion()
        console.log("4")
  }

//We show the next question, also we are leaving empty the input anytime that we answer a questions.
//Finally we callback the function getFlicker for set flicker in the questions that we are asking at the user.
  function showQuestion() {
      document.getElementById("showMe").style.textAlign = "justify";
      document.getElementById("showMe").innerHTML = questions[counter].question;
      document.getElementById('introduceAnswer').value = ""
      getFlicker()
  }

// We are adding a none assigned class in our css document throught javascript
  function getFlicker(){
    document.getElementById("letter").getElementsByTagName("div")[counter].classList.add("flicker");
  }

// We are going to the next word
  function pasapalabra() {
      if (counter < questions.length-1){
          letter.getElementsByTagName("div")[counter].classList.remove("flicker");
          counter++;
          console.log(counter)
          startFunction();
      }
      else {
          letter.getElementsByTagName("div")[counter].classList.remove("flicker");
          restart();
      }
  }

//We start to ask if the letter status is equal at 0 or we end the game if we answered all the questions
  function startFunction() {
      if (questions[counter].status === 0){
          showQuestion();
          console.log("First if")

      }
      else if (counter === questions.length-1 && error + correct === questions.length){
          gameOver();
          classificationTable();
          showRestartButton();
          console.log("Second if")
      }
      else if (counter === questions.length-1){
          restart();
          console.log("Third if")
      }
      else {
          counter++
          startFunction();
          console.log("Else status0")
      }
  }

//We are checking if the answer is correct or not and giving red or green style at background of the letters.
//Also if the answer is correct we add one at our counter in the below of the left in the pasapalabra interface.
  function check() {
      var check = document.getElementById('introduceAnswer').value.toLowerCase();
          if(check === questions[counter].answer){
              letter.getElementsByTagName("div")[counter].classList.remove("flicker")
              correct++;
              changeToGreen();
              counterCorrect();
              questions[counter].status = 1;
              startFunction();

          }
          else if(check !== questions[counter].answer){
              letter.getElementsByTagName("div")[counter].classList.remove("flicker")
              error++;
              changeToRed();
              questions[counter].status = 2;
              startFunction();

          }
  }

//When we have finished will appears this message in the screen
  function gameOver() {
      document.getElementById('showMe').innerHTML = "Has acertado " + correct + " palabras y has cometido " + error + " errores.";
  }

//When we do pasapalabra of all the words we start another round, at the counter is = 0 because we begin again.
  function restart(){
      counter = 0;
      startFunction();
  }

// This funcion add + 1 if the answer is correct at our counter in the below of the left in the pasapalabra interface.
function counterCorrect(){
  document.getElementById('counterCorrect').innerHTML = correct;
}
counterCorrect()

//We are doing our countdown of seconds here, we set 130 secs for complete all the questions.
    function countdown() {
      var counterTime = 131;
      var number = document.getElementById('countdownSecs');
      var interval = setInterval(function(){
      counterTime--;
      number.innerHTML = counterTime;
      if(counterTime == 0){
      clearInterval(interval);
      document.getElementById('showMe').innerHTML = "Se ha acabado el tiempo!!!" + '<br>' + "Has acertado " + correct + " palabras y has cometido " + error + " errores.";
      classificationTable();
      showRestartButton();
      document.getElementById("letter").getElementsByTagName("div")[counter].classList.remove("flicker");


      }else if(questions.length === correct + error){
        clearInterval(interval)
        console.log('working')
      }
        }, 1000);
      }

//We set the background of the letter that we are asking on green if the answer is correct.
//Also we will callback the function in the check function.
  function changeToGreen(){
      var letter = document.getElementById("letter");
      letter.getElementsByTagName("div")[counter].style.background = "#7fcf69";
    }

//We set the background of the letter that we are asking on red if the answer is wrong.
//Also we will callback the function in the check function.
  function changeToRed(){
      var letter = document.getElementById("letter");
      letter.getElementsByTagName("div")[counter].style.background = "red";
    }

//We are setting at our "enviar" button from the interface the enter key of our keyboard for improve the user expirience.
  function intro(e) {
      tecla = (document.all) ? e.keyCode : e.which;
      if (tecla==13)  check()
    }

//Log in
  function classificationTable(){
    if(document.getElementById('name').value === ""){
      var newName = "Player";
      names.push(newName + " ha conseguido un total de " + correct + " puntos.")
      document.getElementById('classification')
      var node = document.createElement("li");
      var textnode = document.createTextNode(names[names.length -1])
      node.appendChild(textnode);
      document.getElementById("classification").appendChild(node).innerHTML
    }else{
      var newName = document.getElementById('name').value;
      names.push(newName[0].toUpperCase() + newName.substr("1").toLowerCase()  + " ha conseguido un total de " + correct + " puntos.")
      document.getElementById('classification')
      var node = document.createElement("li");
      var textnode = document.createTextNode(names[names.length -1])
      node.appendChild(textnode);
      document.getElementById("classification").appendChild(node).innerHTML
  }
}
