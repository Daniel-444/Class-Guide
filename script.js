var questions = {
  "text": "¿tu personaje lucha utilizando armas, lanzando magia o apoyando al equipo con un poco de ambos?",
  "choices": [{
      "label": "Armas! quiero ser un guerrero!",
      "path": 1,
      "question": {
        "text": "Que tipo de armas favorece tu personaje", //1 a
        "choices": [{
            "label": "Espada y escudo",
            "path": 11,
            "question": {
              "text": "Con algo de magia divina?", //1 a
              "choices": [{
                  "label": "Si, un caballero sagrado suena bien",
                  "path": 111
                },
                {
                  "label": "No, mi propia fuerza es mas suficiente",
                  "path": 112
                },
              ]
            }
          },
          {
            "label": "Mis propios puños bastan",
            "path": 12,
          },
          {
            "label": "!GRAN HACHA!",
            "path": 13,
          },
        ]
      }
    },
    {
      "label": "Magia! estoy jugando un juego de fantasia",
      "path": 2,
      "question": {
        "text": "Que tipo de magia?", //1 b
        "choices": [{
            "label": "Bolas de fuego!,Pilar de hielo!Relampago destructor!",
            "path": 21,
            "question": {
              "text": "Como obtuviste esta magia?", //1 a
              "choices": [{
                  "label": "Estudie mucho",
                  "path": 211
                },
                {
                  "label": "Naci con ella",
                  "path": 212
                },
                {
                  "label": "Pacto con un ser magico",
                  "path": 213
                },
              ]
            }
          },
          {
            "label": "Magia de sanacion para mantener a mis aliados en la pelea",
            "path": 22,
          },
          {
            "label": "Quiero poder transformarme en un oso y hacer trizas a mis oponentes",
            "path": 23,
          },
        ]
      }
    },
    {
      "label": "Prefiero apoyar a mi equipo especializandome en otros campos",
      "path": 3,
      "question": {
        "text": "Como apoyarias a tu equipo?", //1 a
        "choices": [{
            "label": "Buscando por trampas, exploracion sigilosa y atacando aprovechando puntos debiles",
            "path": 31,
          },
          {
            "label": "Cantando canciones que inspiren a mis aliados, haciendolos mas fuertes",
            "path": 32,  
          },
          {
            "label": "Guiandolos atravez de ambientes hostiles, rastreando las pistas de nuestro objetivo",
            "path": 33,
          },
        ]
      }
    },
  ]
};

var comienzo = document.getElementById('comienzo');
var repetir = document.getElementById('repetir');
var class_exo = document.getElementById('class_explanation')
var class_title = document.getElementById('class_title')

EsconderObjetos()

function MostrarBotonrepetir(){
  document.getElementById('repetir').style.display="block"
  document.getElementById('quest').style.display="none"
  document.getElementById('choi').style.display="none"
   document.getElementById('imgid_div').style.display="block"
  document.getElementById('titleid_div').style.display="block"
  document.getElementById('expid_div').style.display="block"  
}

function EsconderObjetos() {
	document.getElementById('quest').style.display="none"
	document.getElementById('choi').style.display="none"
	document.getElementById('repetir').style.display="none"
  document.getElementById('imgid_div').style.display="none"
  document.getElementById('titleid_div').style.display="none"
  document.getElementById('expid_div').style.display="none"
}

function changeclassimg_Bar() {
 document.getElementById("class_image").src="barbclass.png";
 class_title.innerHTML = "Barbaro"
 class_exo.innerHTML = "Para algunos, su rabia brota de la comunión con espíritus de animales salvajes. Otros recurren a su hirviente reserva de ira frente a un mundo lleno de dolor. Para los bárbaros, la furia es un poder que no sólo les proporciona un frenesí ciego en la batalla, sino también extraordinarios reflejos, resistencia y proezas de fuerza";
}

function changeclassimg_Monk() {
 document.getElementById("class_image").src="monk.png";
 class_title.innerHTML = "Monje"
 class_exo.innerHTML = "Cualquiera que sea su disciplina, los monjes están unidos por su habilidad para utilizar mágicamente la energía que corre por sus cuerpos. Ya sea canalizada en una impactante demostración de proeza marcial o en el sutil enfoque en la habilidad defensiva y la velocidad, esta energía impulsa todo lo que el monje hace.";
}

function changeclassimg_Pal() {
 document.getElementById("class_image").src="paladin.png";
 class_title.innerHTML = "Paladin"
 class_exo.innerHTML = "Sean cuales sean sus orígenes y sus misiones, los paladines están unidos por sus juramentos para luchar en contra de las fuerzas del mal. El juramento de un paladín es un lazo muy poderoso. Es una fuente de poder que convierte a un devoto guerrero en un campeón bendecido.";
}

function changeclassimg_Fighter() {
 document.getElementById("class_image").src="figclass.png";
 class_title.innerHTML = "Luchador"
 class_exo.innerHTML = "Todos los guerreros comparten un dominio magistral de las armas y armaduras, y un exhaustivo conocimiento de las habilidades del combate. Además, están muy relacionados con la muerte, tanto repartiéndola como mirándola fijamente, desafiantes.";
}

function changeclassimg_ranger() {
 document.getElementById("class_image").src="ranger.png";
 class_title.innerHTML = "Explorador"
 class_exo.innerHTML = "Lejos del bullicio de las ciudades y pueblos, más allá de las defensas que mantienen a las granjas más lejanas protegidas de los terrores de la naturaleza, en medio de tupidos bosques sin caminos y a través de enormes y vacías llanuras, los exploradores mantienen su interminable guardia.";
}

function changeclassimg_wizard() {
 document.getElementById("class_image").src="wizard.png";
 class_title.innerHTML = "Mago"
 class_exo.innerHTML = "Los magos son los practicantes supremos de la magia, definidos y unidos como una clase por los hechizos que conjuran. A partir de la sutil onda de la magia que impregna el cosmos, los magos lanzan explosivos hechizos de fuego, arcos voltaicos, sutiles engaños y brutales formas de control mental.";
}

function changeclassimg_warlock() {
 document.getElementById("class_image").src="warlock.png";
 class_title.innerHTML = "Brujo"
 class_exo.innerHTML = "Los brujos son buscadores del conocimiento que se encuentra escondido en el multiverso. A través de pactos hechos con seres poderosos de poder sobrenatural, los brujos desatan efectos mágicos tanto sutiles como espectaculares y recolectan secretos arcanos para potenciar su propio poder.";
}

function changeclassimg_cleric() {
 document.getElementById("class_image").src="cleric.png";
 class_title.innerHTML = "Clerigo"
 class_exo.innerHTML = "Los clérigos son intermediarios entre el mundo mortal y los distantes planos divinos. Tan diferentes entre ellos como los dioses a los que sirven, los clérigos se esfuerzan por personificar las obras de sus deidades. No son sacerdotes ordinarios, un clérigo se encuentra imbuido de magia divina.";
}

function changeclassimg_rogue() {
 document.getElementById("class_image").src="rogue.png";
 class_title.innerHTML = "Picaro"
 class_exo.innerHTML = "Los pícaros confían sus habilidades, el sigilo y las vulnerabilidades de sus oponentes para lograr sacar ventaja en cualquier situación. Tienen un don para encontrar la solución a prácticamente cualquier problema, demostrando un ingenio y versatilidad, que es la piedra angular de cualquier buen grupo de aventureros.";
}

function changeclassimg_sorcerer() {
 document.getElementById("class_image").src="sorcerer.png";
 class_title.innerHTML = "Hechizero"
 class_exo.innerHTML = "Los hechiceros tienen una magia innata, conferida por una línea de sangre exótica, una influencia de otro mundo o la exposición a fuerzas cósmicas desconocidas. Uno no puede estudiar hechicería como quien estudia un lenguaje, más de lo que uno puede aprender a vivir una vida legendaria. Nadie elige la hechicería, el poder elige al hechicero.";
}

function changeclassimg_bard() {
 document.getElementById("class_image").src="bard.png";
 class_title.innerHTML = "Bardo"
 class_exo.innerHTML = "Ya sea un erudito, un poeta o un canalla, un bardo teje su magia a través de sus palabras y su música para inspirar a los aliados, desmoralizar a los enemigos, manipular mentes, crear ilusiones e incluso sanar heridas.";
}

function changeclassimg_druid() {
 document.getElementById("class_image").src="druid.png";
 class_title.innerHTML = "Druida"
 class_exo.innerHTML = "Ya sea invocando a las fuerzas elementales o emulando a las criaturas del mundo animal, los druidas son la personificación de la resistencia, astucia y furia de la naturaleza. Dicen no tener un dominio sobre la naturaleza. En lugar de eso, se ven como una extensión de la voluntad indomable de la misma.";s
}

comienzo.addEventListener('click',function (){
 document.getElementById('quest').style.display="block"
 document.getElementById('choi').style.display="block"
 document.getElementById('comienzo').style.display="none" 
})

var quizComplete = false,
  answers = [],
  ansA = [];
  ansB = [];
  currentObj = questions;

 $(document).ready(function() {

  updateQuestion();

  if (!quizComplete) {

    $('.choices').on('click', '.choice', function() {

      value = $(this).attr('value');
      answers.push($(this).html());
      //currentQuestion++;

      if (currentObj.choices[value].question) {
        currentObj = currentObj.choices[value].question;
      } else {

        quizComplete = true;
        ansA = answers[0];
        ansB = answers[1];
        ansC = answers[2];
        MostrarBotonrepetir();
        document.getElementById("class_image").style.border = "2px solid goldenrod";

       switch(true) {

       case (ansA === "Armas! quiero ser un guerrero!"  && ansB === "!GRAN HACHA!") :
        changeclassimg_Bar()
        break

        case (ansA === "Armas! quiero ser un guerrero!"  && ansB === "Mis propios puños bastan"):
          changeclassimg_Monk()
         break

        case (ansA === "Armas! quiero ser un guerrero!"  && ansB === "Espada y escudo" && ansC === "Si, un caballero sagrado suena bien" ):
          changeclassimg_Pal()
        break


        case (ansA === "Armas! quiero ser un guerrero!"  && ansB === "Espada y escudo" && ansC === "No, mi propia fuerza es mas suficiente" ):
          changeclassimg_Fighter()
        break
        
        case (ansA === "Magia! estoy jugando un juego de fantasia"  && ansB === "Magia de sanacion para mantener a mis aliados en la pelea") :
        changeclassimg_cleric()
        break

        case (ansA === "Magia! estoy jugando un juego de fantasia" && ansB === "Quiero poder transformarme en un oso y hacer trizas a mis oponentes") :
        changeclassimg_druid()
        break

        case (ansA === "Magia! estoy jugando un juego de fantasia"  && ansB === "Bolas de fuego!,Pilar de hielo!Relampago destructor!" && ansC === "Estudie mucho") :
        changeclassimg_wizard()
        break

        case (ansA === "Magia! estoy jugando un juego de fantasia"  && ansB === "Bolas de fuego!,Pilar de hielo!Relampago destructor!" && ansC === "Naci con ella") :
        changeclassimg_sorcerer()
        break

        case (ansA === "Magia! estoy jugando un juego de fantasia"  && ansB === "Bolas de fuego!,Pilar de hielo!Relampago destructor!" && ansC === "Pacto con un ser magico") :
        changeclassimg_warlock()
        break

        case (ansA === "Prefiero apoyar a mi equipo especializandome en otros campos"  && ansB === "Buscando por trampas, exploracion sigilosa y atacando aprovechando puntos debiles") :
        changeclassimg_rogue()
        break

         case (ansA === "Prefiero apoyar a mi equipo especializandome en otros campos"  && ansB === "Cantando canciones que inspiren a mis aliados, haciendolos mas fuertes") :
        changeclassimg_bard()
        break

        case (ansA === "Prefiero apoyar a mi equipo especializandome en otros campos"  && ansB === "Guiandolos atravez de ambientes hostiles, rastreando las pistas de nuestro objetivo") :

        changeclassimg_ranger()

        break
       }
      }
      updateQuestion();
    });
  }
});

function updateQuestion() {
  var question = currentObj.text;
  var questionText = $(document).find(".container > .question");
  var choiceList = $(document).find(".container > .choices");
  var numChoices = currentObj.choices.length;
  $(questionText).text(question);
  $(".choice").remove();
  var choice, path;

  for (i = 0; i < numChoices; i++) {
    choice = currentObj.choices[i].label;
    path = currentObj.choices[i].path;
    $('<div class="choice" value=' + i + '>' + choice + '</div>').appendTo(choiceList);
  }
}


