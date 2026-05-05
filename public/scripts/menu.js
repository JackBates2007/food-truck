
const tacosList = document.querySelector(".tacos-list")
const sidesList = document.querySelector(".sides-list")
const drinksList = document.querySelector(".drinks-list")
const eventsList = document.querySelector(".event-card")
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
                <h3>${name}</h3>
                <p>${description}</p>
            </div>
            <span>$${price}</span>
        `
        list.appendChild(menuItem)
    })
}

    ; (async () => {
        const menu = await getMenuItems()
        showMenuList(menu)

    })()