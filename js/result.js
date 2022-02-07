//show email
let paragraph = document.querySelector('.yourEmail');

const parms = new URLSearchParams(window.location.search);

parms.forEach((value, key) => {
  paragraph.append(`${key} = ${value}`)
})