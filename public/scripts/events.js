
const eventsList = document.querySelector(".event-card")

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
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Location:</strong> ${location}</p>
        `
        eventsList.appendChild(eventItem)
    })
}
    ; (async () => {
        const events = await getEvents()
        showEventList(events)
    })()