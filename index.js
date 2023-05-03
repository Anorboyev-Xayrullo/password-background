let inp = document.querySelectorAll(".inp")
let body = document.querySelector("body")


inp[1].addEventListener(`input`, e=>{
    body.style.backdropFilter = `blur(${e.target.value.length}px)`
})


