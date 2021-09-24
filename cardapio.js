import itens from './dataset.js';

//Exibindo todos os itens cadastros ao recarregar a página inicio

function initFoodsCard () {
  
  for (let item of itens) {
    // o for ele ira carregar os itens que estão sendo armazenados que estão nos cards.
    
    const view = createFoodCardItem(item);

  //let itensCardapio = document.querySelector('.itens-cardapio');
  let itensCardapio = document.getElementById("itens-cardapio");
  itensCardapio.insertAdjacentHTML('beforeend', view);
}
}
// item é a vaeiavel que vai conter todas as informações
function createFoodCardItem(item){
  
  // está adisionando um item ao cardapio 
  const view = `<div class="col card mx-1 py-1">
                  <img src="${item.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">${item.preparo}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>`;
  
  return view;              
}

initFoodsCard();
