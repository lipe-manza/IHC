const phaseColorById = Object.fromEntries(
	PHASES.map((phase) => [phase.id, phase.color]),
);

const TYPE_ICONS = {
	portable: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>`,
	hybrid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="7" cy="12" r="1.6"/><circle cx="17" cy="12" r="1.6"/></svg>`,
	home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="2" y="7" width="20" height="10" rx="2"/><line x1="6" y1="12" x2="10" y2="12"/><circle cx="17" cy="12" r="1.6"/></svg>`,
};

function getTypeIcon(type) {
	return TYPE_ICONS[type] || TYPE_ICONS.home;
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

function renderPhaseDivider(phase) {
	return `
    <div class="phase-divider" style="--phase-color:${phase.color}">
      <span class="phase-divider-label">${phase.label}</span>
      <span class="phase-divider-range">[${phase.range}]</span>
    </div>
  `;
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

	const phaseById = Object.fromEntries(
		PHASES.map((phase) => [phase.id, phase]),
	);
	const seenPhases = new Set();

	timelineItems.innerHTML = CONSOLES.map((item, index) => {
		let divider = "";
		if (!seenPhases.has(item.phase)) {
			seenPhases.add(item.phase);
			divider = renderPhaseDivider(phaseById[item.phase]);
		}
		return divider + renderTimelineItem(item, index);
	}).join("");
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
	// renderPhases();
	renderTimeline();
	setupRevealAnimation();
});
