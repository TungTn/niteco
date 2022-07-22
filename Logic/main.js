let productsList = document.getElementById("productsList")
let searchBar = document.getElementById("searchbar")
let typingTimer          
let typeInterval = 3000

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText))
            } else {
                if (error)
                    error(xhr)
            }
        }
    };
    xhr.open("GET", path, true)
    xhr.send()
}
loadJSON('https://62ae296eb735b6d16a3f9527.mockapi.io/products/users',
    function( data ) { 
        const displayProducts = (data) => {
            console.log(data)
            const htmlString = data.map((product) => {return `<li>${product.name}</li>`; }).join("")
            productsList.innerHTML = htmlString
        }
        const wordSearch = () => {
            let searchString = searchBar.value
            const produitsFiltres = data.filter(item => {
                return (
                    item.name.toLowerCase().includes(searchString)
                    )
            })
            displayProducts(produitsFiltres)
        }

        searchBar.addEventListener('keyup', () => {
            clearTimeout(typingTimer)
            typingTimer = setTimeout(wordSearch, typeInterval)
        })
    },

    function(xhr) { 
        console.error(xhr); 
    }
);
