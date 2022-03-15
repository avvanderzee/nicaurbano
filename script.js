//Listado de palabra con su definicion
const palabras = [{palabra: "abajarse", definicion: "Acción de bajarse" ,ejemplo: "Vos chavalo abajate de alli"},
                    {palabra: "abanico", definicion: "ventilador", ejemplo: "Dice mi mama que apagues el abanico"},
                    {palabra: "abierta", definicion: " irse de un lugar",ejemplo: "Ese mae se dio la abierta cuando te vio"},
                    {palabra: "acá", definicion: "lo mismo que aquí",ejemplo: "chavalo veni para acá"},
                    {palabra: "acalambrado", definicion: "tener miedo",ejemplo: "Ese mae te tiene acalambrado a vos"},
                    {palabra: " achantado", definicion: "triste",ejemplo: "Te tiene achantado la jaña mae"},
                    {palabra: "afincar", definicion: "besar (de manera más intensa o de caracter sexual)",ejemplo: "Vos afincaste a la mae"},
                    {palabra: "invivible",definicion: "persona que no vive ni deja vivir", ejemplo: " mae que invivible que sos- Ana"}];
const entrada_busqueda = document.getElementById("busqueda");
entrada_busqueda.addEventListener("input", (e) => {
let valor=e.target.value;
if(valor&& valor.trim().length>0){
   valor=valor.trim().toLowerCase();
    const resultados=palabras.filter(palabra => palabra.palabra.toLowerCase().includes(valor));
   //console.log(resultados);
   renderResults(resultados);
}
else
{
//console.log("no hay resultados");
clearResults();
}

});
/*render a list of results*/
const renderResults = (results) => {
    const html = results.map(result => `
    <li class="tarjeta">
        <h3 class="titulo_palabra">${result.palabra}</h3>
        <p><strong> Definicion:</strong>${result.definicion}</p>
        <p><strong> Ejemplo:</strong>${result.ejemplo}</p>
    </li> 
    `).join('');
    document.getElementById('resultados').innerHTML = html;
}

const clearResults = () => {
    document.getElementById('resultados').innerHTML = '';
}


   