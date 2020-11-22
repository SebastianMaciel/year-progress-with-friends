// MomentJS: calculamos el día de hoy y seteamos el día de fin de año
let calcularHoy = moment(moment().format('YYYY-MM-DD')),
    hastaFinDeAnio = moment(moment().format('2020-12-31'));

// Con esta función calculamos para el porcentaje de la barra y el texto de adentro
let porcentajeParaFinDeAnio = () => {
  let diasParaFinDeAnio = Number(calcularHoy.diff(hastaFinDeAnio, 'days')), // Esto saca en días, lo que resta para fin de año
      diasDelAnio = 365,                                                    // Seteamos los días del año
      diasQueFaltan = diasDelAnio - Math.abs(diasParaFinDeAnio),            // Los días del año restando los días que faltan

      // Calculamos el porcentaje restante para el progress
      porcentajeRestante = (diasQueFaltan * 100) / diasDelAnio;
      
      // Seteamos la barra de progreso
      $('#barraDeProgreso').attr('style', `width: ${porcentajeRestante}%`)
      // Ponemos el número para el usuario
      $('#porcentajeRestante').text(`${porcentajeRestante.toFixed()}%`)
}

// Esto es lo importante, cuánto vamos a tener que ver de Friends para no aburrirnos...
let capitulosDeFriendsParaFinDeAnio = () => {

  let calcularHoy = moment(moment().format('YYYY-MM-DD'))

  let minutosParaFinDeAnio = Number(calcularHoy.diff(hastaFinDeAnio, 'minutes')), // Calculamos los minutos que faltan para fin de año
      minutosPorCapitulo = 22                                                     // Promedio de duración de capítulos
      capitulosParaFinDeAnio = minutosParaFinDeAnio / minutosPorCapitulo,         // Calculamos cuánto vamos a poder mirar

      // Seteamos la info imprescindible para el usuario...
      $('#capitulosParaFinDeAnio').text(Math.abs(capitulosParaFinDeAnio.toFixed()))
}

// Ejecutamos la función
porcentajeParaFinDeAnio()
// Y la más importante realmente
capitulosDeFriendsParaFinDeAnio()

// Kata
const str = "The greatest victory is that which requires no battle";

const reverseWords = (str) => str.split(" ").reverse().join(" ")

console.log(reverseWords(str));