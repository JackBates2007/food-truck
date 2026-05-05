
const eventsList = document.querySelector(".event-card")
const modal = document.getElementById("eventModal")
const closeButton = document.querySelector(".close-button")

const modalElements = {
    name: document.getElementById('eventmodalName'),
    description: document.getElementById('eventmodalDate'),
    price: document.getElementById('eventmodalLocation')
}

const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}
const getEvent = async id => {
    const response = await fetch(`/api/v1/events/${id}`)
    return await response.json()
}
const showEventList = events => {
    events?.forEach(({ _id, name, date, location }) => {
        const eventItem = document.createElement("div")
        eventItem.className = "event-item"
        eventItem.innerHTML = `
            <h3>${name}</h3>
        `
        eventItem.onclick = () => showEventDetails(_id)
        eventsList.appendChild(eventItem)
    })
}
const showEventDetails = async id => {

    const { name, date, location } = await getEvent(id)

    modalElements.name.textContent = name
    modalElements.description.textContent = date
    modalElements.price.textContent = location



    modal.style.display = 'flex'
}

closeButton.onclick = () => modal.style.display = 'none'

window.onclick = event => {
    if (event.target === modal) modal.style.display = 'none'
}
    ; (async () => {
        const events = await getEvents()
        showEventList(events)
    })()