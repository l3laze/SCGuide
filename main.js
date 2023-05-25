function collapsible (a) {
  const el = document.getElementById(a.attributes.name.nodeValue)

  if (el.style.display === 'none') {
    el.style.display = 'block'
    a.classList.toggle('collapsible')
    a.classList.toggle('expanded')
  } else {
    el.style.display = 'none'
    a.classList.toggle('collapsible')
    a.classList.toggle('expanded')
  }
}

function updateFontFace (f) {
  document.body.style.fontFamily = f;
}

function updateFontSize (s) {
  document.body.style.fontSize = s + 'px'
}

function updateFontBold (b) {
  if (b) {
    document.body.style.fontWeight = 600
  } else {
    document.body.style.fontWeight = 100
  }
}

function updateTheme (t) {
  if (t === 'light') {
    document.body.style.background = 'linear-gradient(white, rgb(238, 238, 238), white)'
    document.body.style.color = 'rgb(10, 10, 10)'

    Array.from(document.getElementsByTagName('hr')).forEach(function (hr) {
      hr.className = 'light'
    })
  } else {
    document.body.style.background = 'linear-gradient(black, rgb(10, 10, 10), black)'
    document.body.style.color = 'white'

    Array.from(document.getElementsByTagName('hr')).forEach(function (hr) {
      hr.className = 'dark'
    })
  }
}

window.addEventListener('DOMContentLoaded', function collapseOnLoad (ev) {
  const arr = Array.from(document.querySelectorAll('a.collapsible'))

  for (a of arr) {
    // collapsible(a)
  }
})