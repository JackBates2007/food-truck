
const tacosList = document.querySelector(".tacos-list")
const sidesList = document.querySelector(".sides-list")
const drinksList = document.querySelector(".drinks-list")
const modal = document.getElementById("menuModal")
const closeButton = document.querySelector(".close-button")

const modalElements = {
    name: document.getElementById('menumodalName'),
    description: document.getElementById('menumodalDescription'),
    price: document.getElementById('menumodalPrice'),
    image: document.getElementById('menumodalImage')
}
const getMenuItems = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}
const getMenu = async id => {
    const response = await fetch(`/api/v1/menu/${id}`)
    return await response.json()
}

const showMenuList = menu => {
    const categories = {
        'Entree': tacosList,
        'Side': sidesList,
        'Drink': drinksList
    }
    menu?.forEach(({ _id, name, description, price, image, category }) => {
        const list = categories[category]
        if (!list) return
        const menuItem = document.createElement("div")
        const imageUrl = image
        menuItem.className = "menu-item"

        menuItem.innerHTML = `
            <img src="${imageUrl}" alt="${name}" crossorigin="anonymous" style="width: 175px; height: 175px; object-fit: cover;">
            <div>
                </br>
                </br>
                </br>
                <h3>${name}</h3>
                
            </div>
            <span>$${price}</span>
        `
        menuItem.onclick = () => showMenuDetails(_id)
        list.appendChild(menuItem)
    })
}
const showMenuDetails = async id => {

    const { name, image, description, price } = await getMenu(id)

    modalElements.name.textContent = name
    modalElements.description.textContent = description
    modalElements.price.textContent = `$${price}`
    modalElements.image.src = image



    modal.style.display = 'flex'
}

closeButton.onclick = () => modal.style.display = 'none'

window.onclick = event => {
    if (event.target === modal) modal.style.display = 'none'
}

    ; (async () => {
        const menu = await getMenuItems()
        showMenuList(menu)

    })()