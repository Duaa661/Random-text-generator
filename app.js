const button = document.querySelector("#btn");
const text = document.querySelector("#text1");

const number = ["Hello Boys", "Hello Girls", "Hello Youtubers", "Hello instagram", "Hello twitter", "Hello coders", "Hello child", "Hello whatsapp", "Hello gyan gaming", "Hello gamers", "Hello sporters"];

button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * number.length);
    text.textContent=number[random]
});
