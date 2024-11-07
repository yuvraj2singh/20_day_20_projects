const add_btn = document.querySelector(".heading-input span button");
const Heading_entered_manually = document.querySelector(".heading-input input");
const notes_container = document.querySelector(".notes-container");
const new_note=document.querySelector('.new-note');
const del_note=document.querySelector(".del-note");

function toggleEdit(editBtn, heading) {
    const textarea = heading.closest(".notes").querySelector("textarea");
    if (heading.isContentEditable) {
        if (heading.textContent.trim() === "") {
            alert("Heading cannot be empty!");
            heading.focus();
        } else {
            heading.contentEditable = "false";
            heading.style.padding = "0";
            editBtn.innerHTML = `<img src="/images/icons8-edit-50.png" style="filter: invert(1); background-color: transparent; width:20px;">`;
            SaveData();
        }
    } else {
        heading.contentEditable = "true";
        heading.focus();
        heading.style.padding = "8px";
        editBtn.innerHTML = "Save";
    }
}

add_btn.addEventListener("click", () => {
    if (Heading_entered_manually.value === "") {
        alert("Cannot give empty Heading");
    } else {
        notes_container.insertAdjacentHTML("beforeend", `<div class="notes">
            <h2>
                <span style="background-color:transparent;">${Heading_entered_manually.value}</span>
                <button class="edit-btn"><img src="/images/icons8-edit-50.png" style="filter: invert(1); background-color: transparent; width:20px;" alt="Edit"></button>
            </h2>
            <textarea name="notesarea" style="resize: none;" placeholder="Your notes go here..."></textarea>
            <div class="xd">
                <button class="delete">Delete</button>
                <button class="save">Save</button> <!-- Save button for each note -->
            </div>
        </div>`);
        Heading_entered_manually.value = "";
        new_note.style.visibility="visible";
        setTimeout(() => {
        new_note.style.visibility="hidden";
        }, 2000);
        SaveData();

    }
});

notes_container.addEventListener("click", (event) => {
    if (event.target.closest(".edit-btn")) {
        const editBtn = event.target.closest(".edit-btn");
        const heading = editBtn.previousElementSibling;
        toggleEdit(editBtn, heading); 
    }

    if (event.target.closest(".delete")) {
        const noteToDelete = event.target.closest(".notes");
        notes_container.removeChild(noteToDelete);
        del_note.style.visibility="visible";
        setTimeout(() => {
        del_note.style.visibility="hidden";
        }, 2000);
        SaveData();
    }
    if (event.target.closest(".save")) {
        const note = event.target.closest(".notes");
        const heading = note.querySelector("h2 span");
        const textarea = note.querySelector("textarea");
        const save_btn=event.target.closest(".save");
        save_btn.addEventListener("click",()=>{
            save_btn.innerHTML="Saved";
            
        })
        setTimeout(() => {
            save_btn.innerHTML="Save";
        }, 1500);
        SaveNote(heading, textarea);
    }
});

function SaveNote(heading, textarea) {
    const updatedNote = {
        heading: heading.textContent,
        content: textarea.value
    };
    let savedNotes = JSON.parse(localStorage.getItem("data")) || [];
    const index = savedNotes.findIndex(note => note.heading === heading.textContent);

    if (index !== -1) {
        savedNotes[index] = updatedNote; 
    } else {
        savedNotes.push(updatedNote);
    }
    localStorage.setItem("data", JSON.stringify(savedNotes));
}

function SaveData() {
    const notesData = Array.from(notes_container.children).map(note => {
        return {
            heading: note.querySelector("h2 span").textContent,
            content: note.querySelector("textarea").value
        };
    });
    localStorage.setItem("data", JSON.stringify(notesData)); 
}

function ShowData() {
    const savedNotes = JSON.parse(localStorage.getItem("data")) || [];
    notes_container.innerHTML = "";

    savedNotes.forEach(note => {
        notes_container.insertAdjacentHTML("beforeend", `<div class="notes">
            <h2>
                <span style="background-color:transparent;">${note.heading}</span>
                <button class="edit-btn"><img src="/images/icons8-edit-50.png" style="filter: invert(1); background-color: transparent; width:20px;" alt="Edit"></button>
            </h2>
            <textarea name="notesarea" style="resize: none;" placeholder="Your notes go here...">${note.content}</textarea>
            <div class="xd">
                <button class="delete">Delete</button>
                <button class="save">Save</button> <!-- Save button for each note -->
            </div>
        </div>`);
    });
}

ShowData(); 