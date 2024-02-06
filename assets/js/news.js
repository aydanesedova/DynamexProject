
let bestSeller = document.getElementById("best_seller");
let seeMore = document.getElementById("see-more");


let page = 1;
let limit = 3;

const renderData = async () => {
  
  const res = await fetch(
    `http://localhost:3000/posts`
  );
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    let miniDiv = document.createElement("div");
    miniDiv.className = "miniDiv";
    miniDiv.innerHTML = `
                        <a href="${item.link}" target="_blank">
                         <img src="${item.image}" alt="${item.name}">
                         <div class="markaName">
                         </a>


    `;
    bestSeller.append(miniDiv);
  });
  // page++;
};

seeMore.addEventListener("click", renderData);

window.onload = () => {
  renderData();
};



