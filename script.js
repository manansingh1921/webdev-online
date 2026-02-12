const addEventBtn = document.getElementById("addEventBtn");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");
const eventList = document.getElementById("eventList");
const keyPressed = document.getElementById("keyPressed");

function createEvent(title, date, category, description) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">x</button>
        <h3>${title}</h3>
        <p><strong>📅</strong> ${date}</p>
        <span class="badge">${category}</span>
        <p>${description}</p>
    `;

    card.querySelector(".delete-btn").addEventListener("click", () => {
        card.remove();
        checkEmpty();
    });

    eventList.appendChild(card);
}

function checkEmpty() {
    if (eventList.children.length === 0) {
        eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
    }
}

addEventBtn.addEventListener("click", () => {

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!title || !date) {
        alert("Please fill required fields!");
        return;
    }

    if (eventList.querySelector(".empty")) {
        eventList.innerHTML = "";
    }

    createEvent(title, date, category, description);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
});

clearBtn.addEventListener("click", () => {
    eventList.innerHTML = "";
    checkEmpty();
});

sampleBtn.addEventListener("click", () => {

    eventList.innerHTML = "";

    createEvent(
        "Web Development Conference",
        "2026-02-15",
        "Conference",
        "Annual conference on modern web technologies."
    );

    createEvent(
        "JavaScript Workshop",
        "2026-02-20",
        "Workshop",
        "Hands-on JavaScript learning session."
    );

    createEvent(
        "CSS Styling Classes",
        "2026-02-20",
        "Classes",
        "Daily CSS Styling classes."

    );
});