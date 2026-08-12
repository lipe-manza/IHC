const phaseColorById = Object.fromEntries(
  PHASES.map((phase) => [phase.id, phase.color]),
);

function getTypeIcon(type) {
  if (type === "portable") return "󰋘";
  if (type === "hybrid") return "󰊖";
  return "󰊗";
}

function renderPhases() {
  const phases = document.getElementById("phases");
  if (!phases) return;

  phases.innerHTML = PHASES.map(
    (phase) => `
      <span class="phase">
        <span class="phase-name" style="color:${phase.color}">
          ${phase.label}
        </span>
        <span class="phase-years" style="color:#F6F4EE">
          [${phase.range}]
        </span>
      </span>
    `,
  ).join("");
}

function buildTimelineGradient() {
  const counts = PHASES.map(
    (phase) => CONSOLES.filter((console) => console.phase === phase.id).length,
  );

  const total = counts.reduce((sum, count) => sum + count, 0);

  let position = 0;
  const stops = [];

  PHASES.forEach((phase, index) => {
    const start = (position / total) * 100;
    position += counts[index];
    const end = (position / total) * 100;

    stops.push(`${phase.color} ${start}%`, `${phase.color} ${end}%`);
  });

  return `linear-gradient(to bottom, ${stops.join(", ")})`;
}

function renderTimelineItem(item, index) {
  const color = phaseColorById[item.phase];
  const side = index % 2 === 0 ? "right" : "left";

  const highlights = item.highlights
    .map(
      (highlight) =>
        `<li><span class="bullet" style="background:${color}"></span>${highlight}</li>`,
    )
    .join("");

  return `
    <div class="timeline-item">
      <span class="timeline-dot" style="background:${color}"></span>

      <div class="timeline-row ${side}">
        <div class="timeline-content">
          <article class="card" data-reveal>
            <div class="card-header">
              <div class="card-icon" style="color:${color}">
                ${getTypeIcon(item.type)}
              </div>

              <div class="card-info">
                <div class="meta">
                  <span class="year" style="color:${color}">
                    ${item.year}
                  </span>

                  <span class="separator">·</span>

                  <span
                    class="tag"
                    style="background:${color}1F;color:${color}"
                  >
                    ${item.tag}
                  </span>
                </div>

                <h3>${item.name}</h3>
              </div>
            </div>

            <div class="card-image">
              <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
              />
            </div>

            <p class="description">${item.description}</p>

            <ul class="highlights">
              ${highlights}
            </ul>
          </article>
        </div>

        <div class="timeline-space" aria-hidden="true"></div>
      </div>
    </div>
  `;
}

function renderTimeline() {
  const timelineLine = document.getElementById("timeline-line");
  const timelineItems = document.getElementById("timeline-items");

  if (!timelineLine || !timelineItems) return;

  timelineLine.style.background = buildTimelineGradient();

  timelineItems.innerHTML = CONSOLES.map((item, index) =>
    renderTimelineItem(item, index),
  ).join("");
}

function setupRevealAnimation() {
  const cards = document.querySelectorAll("[data-reveal]");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  cards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", () => {
  renderPhases();
  renderTimeline();
  setupRevealAnimation();
});
