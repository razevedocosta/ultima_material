// https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-pt
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('promotions');
const url = 'http://www.mocky.io/v2/5bc3b9cc30000012007586b7';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
  let promotions = data;
  return promotions.map(function(promo) {
    let image = createNode('div');
    let details = createNode('div');
    let img = createNode('img');
    let title = createNode('h1');
    let span = createNode('span');
    let divBtn = createNode('div');
    let btnTerms = createNode('button');
    let btnJoin = createNode('button');

    img.src = promo.heroImageUrl;
    title.innerHTML = `${promo.name}`;
    span.innerHTML = `${promo.description}`;

    btnTerms.textContent = 'Terms & Conditions';
    btnJoin.textContent = 'Join Now';

    ul.appendChild(image);
    image.appendChild(img);
    ul.appendChild(details);
    details.appendChild(title);
    details.appendChild(span);
    details.appendChild(divBtn);
    divBtn.appendChild(btnTerms);
    divBtn.appendChild(btnJoin);

    img.classList.add('promotions-image');
    title.classList.add('promotions-title');
    details.classList.add('promotions-description');
    divBtn.classList.add('promotions-options');
    btnTerms.classList.add('promotions-button');
    btnJoin.classList.add('promotions-button');
    btnJoin.classList.add('btn-checked');
  })
})
.catch(function(error) {
  console.log(error);
});