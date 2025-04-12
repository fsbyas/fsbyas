const lessons = [
  { id: 1, title: "Lição 1 - To be (I am, You are)", completed: true, icon: "assets/lesson-icons/1.png" },
  { id: 2, title: "Lição 2 - He is / She is", completed: false, icon: "assets/lesson-icons/2.png" },
  { id: 3, title: "Lição 3 - Verb to have", completed: false, icon: "assets/lesson-icons/3.png" },
];

function loadLessons() {
  const grid = document.getElementById("lessons-grid");
  grid.innerHTML = "";

  let completedCount = 0;

  lessons.forEach((lesson) => {
    const card = document.createElement("div");
    card.className = "lesson-card";
    if (lesson.completed) {
      card.classList.add("lesson-complete");
      completedCount++;
    }

    const icon = document.createElement("img");
    icon.src = lesson.icon;
    icon.alt = "Ícone da lição";
    icon.className = "lesson-icon";

    const title = document.createElement("p");
    title.textContent = lesson.title;

    card.appendChild(icon);
    card.appendChild(title);

    card.onclick = () => {
      window.location.href = `lessons/lesson${lesson.id}.html`;
    };

    grid.appendChild(card);
  });

  const percent = Math.round((completedCount / lessons.length) * 100);
  const fill = document.getElementById("progress-fill");
  fill.style.width = `${percent}%`;
  fill.textContent = `${percent}%`;
}

document.addEventListener("DOMContentLoaded", loadLessons);
