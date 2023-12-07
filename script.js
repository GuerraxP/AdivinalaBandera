import variables from "variables.js";

const {inicio} = variables;

let cont = 0;
let cont2 = 0;

document.addEventListener("DOMContentLoadedDow" 
    //dentro todo el code
    console.log(inicio);
    inicio.addEventListener("click", () => {
        h2.style = "display:none"
        inicio.style = "display: none";
        principal.innerHTML = pintarBandera(band[cont2]);
        //cont2++
        evaluar()
    }) 
)























//comenta lo que no vas a usar aca estabamos reutilizando el codigo que ya tenia


//ahh


// band.sort(function () {
//     return Math.random() - 0.5
// });

// inicio.addEventListener("click", () => {
//     h2.style = "display:none"
//     inicio.style = "display: none";
//     principal.innerHTML = pintarBandera(band[cont2]);
//     //cont2++
//     evaluar()
// });
// //

// //for (let i = 0; i < band.length; i++){

// //};
// function pintarBandera(bandera) {
//     return `
//     <button class="reinicio">Deseas volver a Jugar</button>
//     <figure class="contendor_img">
//         <img src="${bandera.bandera}" alt="banderas">
//     </figure>
//     <div class="respuestas">
//         <ul class="cont_listas">
//             <li><span class="letras">A</span><button class="opcn" id="opc1">${bandera.paises[0]}</button></li>
//             <li><span class="letras">B</span><button class="opcn" id="opc2">${bandera.paises[1]}</button></li>
//             <li><span class="letras">C</span><button class="opcn" id="opc3">${bandera.paises[2]}</button></li>
//         </ul>
//     </div>
//     `
// }
// function evaluar() {
//     btn.forEach(element => {
//         element.addEventListener("click", () => {
//             console.log(element.innerText);
//             if (element.innerText === band[0].correcta) {
//             cont++;
//             }
//             setTimeout(camBandera(i), 1000);
//         });
//     });
// }
// function camBandera(i) {
//     img.src = band[i].bandera;
//     btn1.innerHTML = band[i].paises[0];
//     btn2.innerHTML = band[i].paises[1];
//     btn3.innerHTML = band[i].paises[2];
    
// }
