import "./style.css";

const selectRandom = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

const selectRandomAnimation = () => {
  const animations = [
    "animate-bounce-gravity-1",
    "animate-bounce-gravity-2",
    "animate-bounce-gravity-3",
  ];
  return selectRandom(animations);
};

const createFigureTrail = (x: number, y: number, emojis: string[]) => {
  const div = document.createElement("div");
  div.classList.add(
    "text-2xl",
    "absolute",
    "z-10",
    "opacity-0",
    selectRandomAnimation()
  );
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.innerText = selectRandom(emojis);
  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 1000);
};

const createBlurryTrail = (x: number, y: number, color: string) => {
  const div = document.createElement("div");
  div.classList.add(
    "size-6",
    "absolute",
    "full-rounded",
    "blur-lg",
    "z-0",
    "animate-fade-out",
    color
  );
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 1900);
};

type Props = {
  thresholdDistance?: number;
  emojis?: string[];
  trailColor?: `bg-${string}-${string}`;
};

const init = (props: Props = {}) => {
  const defaultOptions = {
    thresholdDistance: 100,
    emojis: ["🎉", "💜", "💙", "🥳", "🎊", "⭐️"],
    trailColor: "bg-purple-500",
  };
  const options = { ...defaultOptions, ...props };

  let previousPosition = {
    x: 0,
    y: 0,
  };

  window.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;

    if (
      Math.abs(previousPosition.x - clientX) > options.thresholdDistance ||
      Math.abs(previousPosition.y - clientY) > options.thresholdDistance
    ) {
      createFigureTrail(clientX, clientY, options.emojis);
      previousPosition = { x: clientX, y: clientY };
    }
  });

  window.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;

    createBlurryTrail(clientX, clientY, options.trailColor);
  });
};

init();
