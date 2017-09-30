// ------------------------------------------------------- //
// =================| Query Selectors |=================== //
// ------------------------------------------------------- //
const secondHand = document.querySelector('.sec-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hr-hand')

// -------------------------------------------------------- //
// ====================| Set Time |======================== //
// -------------------------------------------------------- //
function setDate() {
  const now = new Date()

  // handle seconds hand
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  // handle minutes hand
  const minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  // handle hours hand
  const hours = now.getHours()
  const hoursDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

// ------------------------------------------------------- //
// ====================| Set Interval |=================== //
// ------------------------------------------------------- //
setInterval(setDate, 1000);
