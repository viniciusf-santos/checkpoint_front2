botaoCadastrar.onclick = function () {
  const titulo = document.getElementById("titulo").value;
  const url = document.getElementById("url").value;
  const descricao = document.getElementById("descricao").value;

  let itemCard = `<img src="${url}">
                <h2>${titulo}</h2>
                <p>${descricao}</p>
                `;

  let novoCard = document.createElement("div");
  novoCard.classList.add("cards");
  novoCard.innerHTML = itemCard;
  containerCards.appendChild(novoCard);
};
