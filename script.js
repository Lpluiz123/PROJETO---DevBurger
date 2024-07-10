const ul = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")

const formatCurrency = (value) => {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency : 'BRL'
    })
    return newValue
}

const showAllItems = (productsArray)=> {
    let list = ""
    productsArray.forEach((item) => {
         list += `
                 <li>
                    <img src="${item.src}">
                    <p>${item.name}</p>
                    <p class="item-price">${formatCurrency(item.price)}</p>
                  </li>
        
        `
    })
    ul.innerHTML = list
}


const giveDiscountItem = () => {
    const newPrice = menuOptions.map ((item) => ({
        ...item,
        price: item.price - ((item.price * 10) / 100),
    }))
    showAllItems(newPrice)
}
const reduceValue = () => {
    const totalValue = menuOptions.reduce((acc,value)=> {
        return acc + value.price
    },0)
    ul.innerHTML = `
        <li>
            <p>O valor total dos itens é <br/><span style="color:#79CB15;">${formatCurrency(totalValue)}</span>
        </li></p>
            
    `
}


const filterValue = () => {
    const filterItem = menuOptions.filter((item)=> {
        return item.vegan === true
    })
    showAllItems(filterItem)
}

buttonShowAll.addEventListener("click", () => showAllItems(menuOptions))
