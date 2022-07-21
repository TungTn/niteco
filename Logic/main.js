// function loadJSON(path, success, error)
// {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function()
//     {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 if (success)
//                     success(JSON.parse(xhr.responseText));
//             } else {
//                 if (error)
//                     error(xhr);
//             }
//         }
//     };
//     xhr.open("GET", path, true);
//     xhr.send();
// }
// loadJSON('https://62ae296eb735b6d16a3f9527.mockapi.io/products/users',
//          function(data) { console.log(data); },
//          function(xhr) { console.error(xhr); }
// );
let products = [
    {
        name: "Gayle",
        gender: "Transexual Man",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/794.jpg",
        date: 1655624591,
        id: "1",
    },
    {
        name: "Shayne",
        gender: "T* man",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/215.jpg",
        date: 1655624531,
        id: "2",
    },
    {
        name: "Sonia",
        gender: "Transexual Man",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/262.jpg",
        date: 1655624471,
        id: "3",
    },
];

var productsList = document.getElementById("productsList")
let searchBar = document.getElementById("searchbar")
let typingTimer;               
let typeInterval = 3000;  


const displayProducts = (products) => {
	console.log(products)
    const htmlString = products.map((product) => {return `<li>${product.name}</li>`; }).join("");
    productsList.innerHTML = htmlString;
}
function wordSearch() {
	let searchString = searchBar.value;
    const produitsFiltres = products.filter(item => {
        return (
            item.name.toLowerCase().includes(searchString)
        )
    });
    displayProducts(produitsFiltres)
}

searchBar.addEventListener('keyup', () => {
	clearTimeout(typingTimer);
    typingTimer = setTimeout(wordSearch, typeInterval); 
})