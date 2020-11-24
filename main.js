window.addEventListener('load', e => {
    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log('ServiceWorker registrado.');
        } catch (error){
            console.log('ServideWorker falhou.');
        }
    }
});

function hidediv(){
	var xamil = document.getElementById("amilportifolio");
	var yamil = document.getElementById("amilimg");
	var xbradesco = document.getElementById("bradescoportifolio");
	var ybradesco = document.getElementById("bradescoimg");
	var xhapvida = document.getElementById("hapvidaportifolio");
	var yhapvida = document.getElementById("hapvidaimg");
	var xlifeday = document.getElementById("lifedayportifolio");
	var ylifeday = document.getElementById("lifedayimg");
	var xmedvida = document.getElementById("medvidaportifolio");
	var ymedvida = document.getElementById("medvidaimg");
	var xsulamerica = document.getElementById("sulamericaportifolio");
	var ysulamerica = document.getElementById("sulamericaimg");
	var xunimed = document.getElementById("unimedportifolio");
	var yunimed = document.getElementById("unimedimg");
	var xinformativo = document.getElementById('informativoportifolio');
	var yinformativo = document.getElementById('informativoimg');
	var titulo = document.getElementById('titulo');

	xamil.style.display = "none";
	yamil.style.border = "none";
	xbradesco.style.display = "none";
	ybradesco.style.border = "none";
	xhapvida.style.display = "none";
	yhapvida.style.border = "none";
	xlifeday.style.display = "none";
    ylifeday.style.border = "none"
	xmedvida.style.display = "none";
	ymedvida.style.border = "none";
	xsulamerica.style.display = "none";
	ysulamerica.style.border = "none";
	xunimed.style.display = "none";
	yunimed.style.border = "none";
	xinformativo.style.display = "none";
	yinformativo.style.border = "none";
}

function amildiv(){
	var xamil = document.getElementById("amilportifolio");
	var yamil = document.getElementById("amilimg");
	
	titulo.innerHTML = "Amil";
	xamil.style.display = "block";
	yamil.style.border = "1px solid white";

}

function bradescodiv(){
	var xbradesco = document.getElementById("bradescoportifolio");
	var ybradesco = document.getElementById("bradescoimg");

	titulo.innerHTML = "Bradesco";
	xbradesco.style.display = "block";
	ybradesco.style.border = "1px solid white";
}

function hapvidadiv(){
	var xhapvida = document.getElementById("hapvidaportifolio");
	var yhapvida = document.getElementById("hapvidaimg");
	
	titulo.innerHTML = "Hapvida";
	xhapvida.style.display = "block";
	yhapvida.style.border = "1px solid white";
}

function lifedaydiv(){
	var xlifeday = document.getElementById("lifedayportifolio");
	var ylifeday = document.getElementById("lifedayimg");

	titulo.innerHTML = "Lifeday";
	xlifeday.style.display = "block";
	ylifeday.style.border = "1px solid white";
}

function medvidadiv(){
	var xmedvida = document.getElementById("medvidaportifolio");
	var ymedvida = document.getElementById("medvidaimg");

	titulo.innerHTML = "Medvida";
	xmedvida.style.display = "block";
	ymedvida.style.border = "1px solid white";
}

function sulamericadiv(){
	var xsulamerica = document.getElementById("sulamericaportifolio");
	var ysulamerica = document.getElementById("sulamericaimg");

	titulo.innerHTML = "SulAmérica";
	xsulamerica.style.display = "block";
	ysulamerica.style.border = "1px solid white";
}

function unimeddiv(){
	var xunimed = document.getElementById("unimedportifolio");
	var yunimed = document.getElementById("unimedimg");

	titulo.innerHTML = "Unimed";
	xunimed.style.display = "block";
	yunimed.style.border = "1px solid white";
}

function informativodiv(){
	var xinformativo = document.getElementById('informativoportifolio');
	var yinformativo = document.getElementById('informativoimg');

	titulo.innerHTML = "Informativos";
	xinformativo.style.display = "block";
	yinformativo.style.border = "1px solid white";
}