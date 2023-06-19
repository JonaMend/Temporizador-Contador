const btn_plus = document.getElementById('btn-count-plus');
const btn_minus = document.getElementById('btn-count-minus');
const p = document.getElementById('contador');

let counter = 0;

p.textContent = counter;
btn_minus.addEventListener('click', async () => {
    await setTimeout(() =>{
        counter--;
        p.textContent = counter;
    }, 100);
})


btn_plus.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 100);
});

const input = document.getElementById("timer-input");
//Se obtiene una referencia al elemento del DOM con el id "timer-input" y se almacena en la variable input. Este elemento es un campo de entrada <input> donde el usuario puede ingresar el tiempo en segundos.
const btnStart = document.getElementById("btn-start");
// const btnStart = document.getElementById("btn-start"); Se obtiene una referencia al elemento del DOM con el id "btn-start" y se almacena en la variable btnStart. Este elemento es un botón <button> que se utilizará para iniciar el temporizador
const countdownDisplay = document.getElementById("countdown-display");
btnStart.addEventListener("click", () => {
//btnStart.addEventListener("click", () => { ... }); Se agrega un event listener al botón btnStart que escucha el evento de clic. Cuando se hace clic en el botón, se ejecuta la función de flecha (arrow function) proporcionada
  const timeInSeconds = parseInt(input.value);
//Se obtiene el valor ingresado en el campo de entrada input y se convierte en un número entero utilizando parseInt(). El tiempo ingresado representa la duración del temporizador en segundos.

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("Ingresa un tiempo válido en segundos.");
    return;
  }
//if (isNaN(timeInSeconds) || timeInSeconds <= 0) { ... } Se verifica si el valor timeInSeconds no es un número válido (NaN) o si es menor o igual a cero. Si alguna de estas condiciones es verdadera, se muestra una alerta de error indicando que se debe ingresar un tiempo válido en segundos, y se retorna para detener la ejecución del resto del código.
  let countdown = timeInSeconds;
//let countdown = timeInSeconds;Se declara una variable countdown e inicializa con el valor de timeInSeconds. Esta variable se utilizará para realizar la cuenta regresiva.
countdownDisplay.textContent = countdown + " segundos";
  const timer = setInterval(() => {
//const timer = setInterval(() => { ... }, 1000);se utiliza setInterval para ejecutar una función de flecha cada 1000 milisegundos (1 segundo). Esta función se encargará de actualizar la cuenta regresiva.
    countdown--;
//countdown--;En cada ejecución de la función de intervalo, se decrementa el valor de countdown en 1.

    if (countdown <= 0) {
//if (countdown <= 0) { ... }Se verifica si el contador countdown ha llegado o ha pasado de cero. Si es así, se detiene el temporizador utilizando clearInterval(timer) y se muestra una alerta indicando que el tiempo ha finalizado.
      clearInterval(timer);
      alert("¡Tiempo finalizado!");
    }

    countdownDisplay.textContent = countdown + " segundos";
  }, 1000);
});

