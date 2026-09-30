var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!", "Temos árvores com rodinha!"];
var banner = 1;

function trocaBanner(){
    banner = (banner + 1) % 3;
    document.querySelector("h2#mensagem").textContent = banners[banner];
}
setInterval(trocaBanner, 750);