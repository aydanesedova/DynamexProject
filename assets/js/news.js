let bestSeller = document.getElementById("best_seller")
let seeMore = document.getElementById("see-more")

let page = 1;
let limit = 3;


const renderProducts = (page, limit) => {
    axios.get(`http://localhost:3000/posts?_limit=${limit}_page=${page}`)
        .then((response) => {
            const posts = response.data;
            bestSeller.innerHTML = "";
            posts.forEach((post) => {
                const { id, image, name, price, marka } = post;
                let miniDiv = document.createElement("div");
                miniDiv.className = "miniDiv";
                miniDiv.innerHTML = `
                    <a href="https://www.trendyol.com/?id=${id}">
                        <img src="${image}" alt="${name}">
                   <div class="markaName">  
                   <p>${marka}</p>
                   <h4>${name}</h4>
                   </div>
                   <p class= "lowerPrice"><i class="fa-regular fa-arrow-trend-down"></i> Son 30 Günün En Düşük Fiyatı!</p>
                   <p>${price} TL</p>
                    </a>
                `;
                bestSeller.append(miniDiv);
            });
        })
        .catch((error) => {
            console.error('Bir hata oluştu:', error);
        });
}

window.onload = () => {
    renderProducts(page, limit);
}


seeMore.addEventListener("click",renderProducts)