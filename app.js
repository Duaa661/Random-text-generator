// const red = document.querySelector('#red')
// const blue = document.querySelector('#blue')
// const yellow = document.querySelector('#yellow')
// const black = document.querySelector('#black')


// const orange = document.querySelector('#orange')
const parent=document.querySelector('#parent')
//good syantx
parent.addEventListener('click', (e) => {
    const value = e.target.id;
    document.body.style.backgroundColor= value;
})

// Bad syntax
// red.addEventListener('click', () => {
//     document.body.style.backgroundColor = "red";
//     console.log("clicked")
// })


// blue.addEventListener('click', () => {
//     document.body.style.backgroundColor = "blue";
//     console.log("clicked")
// })


// yellow.addEventListener('click', () => {
//     document.body.style.backgroundColor = "yellow";
//     console.log("clicked")

// })


// black.addEventListener('click', () => {
//     document.body.style.backgroundColor = "black";
//     console.log("clicked")
// })

// orange.addEventListener('click', () => {
//     document.body.style.backgroundColor = "orange";
//     console.log("clicked")
// })
