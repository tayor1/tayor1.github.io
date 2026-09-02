(() => {
  const scroller = document.querySelector(".home-scroll");
  if (!scroller) return;

  const panels = [...scroller.querySelectorAll(".home-panel")];

  document.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "PageDown", "ArrowUp", "PageUp", "Home", "End"].includes(event.key)) return;

    const current = panels.reduce((nearest, panel, index) => {
      const distance = Math.abs(panel.offsetTop - scroller.scrollTop);
      return distance < nearest.distance ? { index, distance } : nearest;
    }, { index: 0, distance: Infinity }).index;

    let target = current;
    if (["ArrowDown", "PageDown", "End"].includes(event.key)) target = panels.length - 1;
    if (["ArrowUp", "PageUp", "Home"].includes(event.key)) target = 0;

    if (target !== current) {
      event.preventDefault();
      panels[target].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
})();
