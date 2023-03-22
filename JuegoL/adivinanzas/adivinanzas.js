const adivinanzas = [
  {
    pregunta: 'Agua pasa por mi casa cate de mi corazon, si no adivinanzas que es eres un bobolon',
    opciones: ['Aguacate', 'Un gato', 'Un rio'],
    respuestaCorrecta: 'Aguacate'
  },
  {
    pregunta: '¿Qué tiene manos pero no puede aplaudir?',
    opciones: ['Un fantasma', 'Un reloj', 'Una marioneta'],
    respuestaCorrecta: 'Un reloj'
  },
  {
    pregunta: '¿Qué se vuelve más pequeño cuando más se seca?',
    opciones: ['Un charco', 'Una toalla', 'Un hielo'],
    respuestaCorrecta: 'Una toalla'
  },
  {
    pregunta: '¿Qué puedes atrapar pero no lanzar?',
    opciones: ['Una pelota', 'Un resfriado', 'Un guante'],
    respuestaCorrecta: 'Un resfriado'
  },
  {
    pregunta: '¿Qué tiene un corazón que no late?',
    opciones: ['Una alcachofa', 'Un reloj', 'Un árbol'],
    respuestaCorrecta: 'Una alcachofa'
  },
  {
    pregunta: '¿Qué palabra se escribe incorrectamente en todos los diccionarios?',
    opciones: ['Incorrectamente', 'Diccionario', 'Palabra'],
    respuestaCorrecta: 'Incorrectamente'
  },
  {
    pregunta: '¿Qué llega antes, el día o la noche?',
    opciones: ['El día', 'La noche', 'Depende del lugar'],
    respuestaCorrecta: 'La noche'
  },
  {
    pregunta: 'Si un avión se estrella en la frontera entre Estados Unidos y Canadá, ¿dónde entierran a los sobrevivientes?',
    opciones: ['En Estados Unidos', 'En Canadá', 'No se entierran a los sobrevivientes'],
    respuestaCorrecta: 'No se entierran a los sobrevivientes'
  },
  {
    pregunta: 'Cuanto más lo quitas, más grande se vuelve. ¿Qué es?',
    opciones: ['Un agujero', 'Una montaña', 'Un árbol'],
    respuestaCorrecta: 'Un agujero'
  },
  {
    pregunta: '¿Qué pesa más, un kilo de plumas o un kilo de piedras?',
    opciones: ['Un kilo de plumas', 'Un kilo de piedras', 'Ambos pesan lo mismo'],
    respuestaCorrecta: 'Ambos pesan lo mismo'
  },
  {
    pregunta: '¿Qué tiene dientes pero no puede morder?',
    opciones: ['Un peine', 'Una serpiente', 'Un engranaje'],
    respuestaCorrecta: 'Un peine'
  },
  {
    pregunta: '¿Cuál es la única llave que no puede abrir ninguna cerradura?',
    opciones: ['Una llave maestra', 'Una llave falsa', 'Una llave de sol'],
    respuestaCorrecta: 'Una llave de sol'
  },
  {
    pregunta: '¿Qué puedes ver en un cuarto oscuro?',
    opciones: ['Nada', 'La oscuridad', 'Sombras'],
    respuestaCorrecta: 'La oscuridad'
  },
   {
    pregunta: '¿Qué tiene un cuello pero no cabeza?',
    opciones: ['Una botella', 'Una jirafa', 'Un cuello de camisa'],
    respuestaCorrecta: 'Una botella'
  },
  {
    pregunta: '¿Qué va de ciudad en ciudad pero nunca se mueve?',
    opciones: ['Un coche', 'Un avión', 'Una carretera'],
    respuestaCorrecta: 'Una carretera'
  },
  {
    pregunta: '¿Qué tiene oídos pero no puede oír?',
    opciones: ['Una mazorca de maíz', 'Un elefante', 'Un teléfono'],
    respuestaCorrecta: 'Una mazorca de maíz'
  },
  {
    pregunta: '¿Qué tiene un ojo pero no puede ver?',
    opciones: ['Un pirata', 'Una aguja', 'Una tormenta'],
    respuestaCorrecta: 'Una aguja'
  },
  {
    pregunta: '¿Cuál es la única cosa que todos pueden tomar?',
    opciones: ['Una foto', 'Un vaso de agua', 'Un respiro'],
    respuestaCorrecta: 'Un respiro'
  },
  {
    pregunta: '¿Qué es tan frágil que decir su nombre lo rompe?',
    opciones: ['Cristal', 'Hielo', 'Silencio'],
    respuestaCorrecta: 'Silencio'
  },
  {
    pregunta: '¿Qué puede correr pero no puede caminar?',
    opciones: ['Un río', 'Una persona', 'Un reloj'],
    respuestaCorrecta: 'Un río'
  },
  {
    pregunta: '¿Qué tiene cuatro patas pero no puede caminar?',
    opciones: ['Un perro', 'Una mesa', 'Un caballo'],
    respuestaCorrecta: 'Una mesa'
  },
  {
    pregunta: '¿Qué es más alto cuando se sienta que cuando se para?',
    opciones: ['Una persona', 'Una jirafa', 'Un perro'],
    respuestaCorrecta: 'Una persona'
  },
  {
    pregunta: '¿Qué se rompe sin ser tocado?',
    opciones: ['Un cristal', 'Una promesa', 'Un plato'],
    respuestaCorrecta: 'Una promesa'
  },
 {
    pregunta: '¿Cual es la persona a la que mas quiero?',
    opciones: ['Shakira', 'tu en miniscula', 'TU'],
    respuestaCorrecta: 'Shakira'
  },
{
    pregunta: 'naaa como crees, te re quiero mucho',
    opciones: ['gracias', 'por', 'todo'],
    respuestaCorrecta: 'todo'
  },
{
    pregunta: 'espero te hayas divertido',
    opciones: ['felicidades', 'por llegar', 'hasta aqui'],
    respuestaCorrecta: 'hasta aqui'
  },

  {
    pregunta: 'para no perder la constumbre lo preguntare',
    opciones: ['te', 'quiero', 'mucho'],
    respuestaCorrecta: 'mucho'
  },
];





let adivinanzaActual = 0;
let elementos = {
  adivinanza: document.getElementById('adivinanza'),
  respuesta1: document.getElementById('respuesta1'),
  respuesta2: document.getElementById('respuesta2'),
  respuesta3: document.getElementById('respuesta3'),
  contador: document.getElementById('contador')
};

function actualizarAdivinanza() {
  if (adivinanzaActual < adivinanzas.length) {
    elementos.adivinanza.textContent = adivinanzas[adivinanzaActual].pregunta;
    elementos.respuesta1.textContent = adivinanzas[adivinanzaActual].opciones[0];
    elementos.respuesta2.textContent = adivinanzas[adivinanzaActual].opciones[1];
    elementos.respuesta3.textContent = adivinanzas[adivinanzaActual].opciones[2];
    elementos.contador.textContent = `Adivinanza: ${adivinanzaActual + 1} / ${adivinanzas.length}`;

    // Reiniciar animaciones
    elementos.adivinanza.classList.remove('animated');
    elementos.respuesta1.classList.remove('animated');
    elementos.respuesta2.classList.remove('animated');
    elementos.respuesta3.classList.remove('animated');
    void elementos.adivinanza.offsetWidth;
    void elementos.respuesta1.offsetWidth;
    void elementos.respuesta2.offsetWidth;
    void elementos.respuesta3.offsetWidth;
    elementos.adivinanza.classList.add('animated');
    elementos.respuesta1.classList.add('animated');
    elementos.respuesta2.classList.add('animated');
    elementos.respuesta3.classList.add('animated');
  } else {
    window.location.href = 'Si-no.html';
  }
}

function verificarRespuesta(respuesta, elemento) {
  if (respuesta === adivinanzas[adivinanzaActual].respuestaCorrecta) {
    adivinanzaActual++;
    actualizarAdivinanza();
  } else {
    elemento.classList.add('shake');
    setTimeout(() => {
      elemento.classList.remove('shake');
    }, 820); // La duración de la animación en milisegundos (0.82s en este caso)
  }
}

elementos.respuesta1.addEventListener('click', () => verificarRespuesta(elementos.respuesta1.textContent, elementos.respuesta1));
elementos.respuesta2.addEventListener('click', () => verificarRespuesta(elementos.respuesta2.textContent, elementos.respuesta2));
elementos.respuesta3.addEventListener('click', () => verificarRespuesta(elementos.respuesta3.textContent, elementos.respuesta3));

actualizarAdivinanza();
