let shop = document.getElementById('shop');


let shopItemsData = [{
    id:1,
    name: "casual shirt",
    price: 65,
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img:"./nimble-made-BKYeLLB1OxI-unsplash.jpg"

},{ id:2,
    name: "official shirt",
    price: 95,
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img:"./benjamin-rascoe-KF-q_SGqswg-unsplash.jpg"
},{ id:3,
    name: "cool shirt",
    price: 200,
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img:"./faith-yarn-Wr0TpKqf26s-unsplash.jpg"
},{ id:4,
    name: "brown shirt",
    price: 210,
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img:"./jonathon-dorofy-Qne1wCsWfUA-unsplash.jpg"
}];



let generateShop = () => {
return (shop.innerHTML = shopItemsData
    .map( (x) =>{
        let {id,name,price,desc,img} = x
    return `
    <div id = product-id-${id} class="item">
    <img  width="220" src=${img} alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>  
            <div class="button">
                <i class="bi bi-dash-lg"></i>
                <div class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>
            </div>
        </div> 
    </div>
</div>
`
}).join (""))
}
generateShop();