//admin elements
const menuForm = document.querySelector("#menuForm")
const eventForm = document.querySelector("#eventForm")

menuForm.addEventListener("submit", async event => {
    event.preventDefault()
    const formData = new FormData(menuForm)
    const data = Object.fromEntries(formData.entries())
    try {
        const response = await fetch('/api/v1/menu/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            alert('Menu item added successfully!')
            menuForm.reset()
        } else {
            alert('Failed to add menu item.')
        }
    } catch (error) {
        alert('Error: ' + error.message)
    }
})
eventForm.addEventListener("submit", async event => {
    event.preventDefault()
    const formData = new FormData(eventForm)
    const data = Object.fromEntries(formData.entries())
    try {
        const response = await fetch('/api/v1/events/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            alert('Event added successfully!')
            eventForm.reset()
        } else {
            alert('Failed to add event.')
        }
    } catch (error) {
        alert('Error: ' + error.message)
    }
})