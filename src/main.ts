import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<pre id='logo'>
</pre>
    <section class="inner">
    </section>
`;

const appDiv = document.querySelector<HTMLDivElement>("#app");
const appContainerDiv =
  document.querySelector<HTMLDivElement>("#app-container");
const innerDiv = document.querySelector<HTMLDivElement>("#app > .inner");
const logoPre = document.querySelector<HTMLPreElement>("#logo");
if (!appDiv || !innerDiv || !appContainerDiv || !logoPre)
  throw new Error("Critical elements missing from DOM");

const transformDiv = (e: MouseEvent) => {
  let { top, height, left, width } = appDiv.getBoundingClientRect();
  const mouseX = (e.clientX - left) / width;
  const mouseY = (e.clientY - top) / height;
  const rotateY = (0.5 - mouseX) * 10;
  const rotateX = (mouseY - 0.5) * 10;
  const shiftX = (0.5 - mouseX) * 10;
  const shiftY = (0.5 - mouseY) * 10;

  appDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${(0.5 - mouseY) * 10}px) translateX(${(0.5 - mouseX) * 10}px)`;

  innerDiv.style.transform = `translateY(${shiftY}px) translateX(${shiftX}px) translateZ(10px)`;
  appContainerDiv.style.transform = `translateY(${shiftY}px) translateX(${shiftX}px)`;

  // Debug Data
  console.log(`rotateY:${rotateY}\nrotateX:${rotateX}`);
  //console.log(`x:${mouseX} \nY:${mouseY}`);
};

const resetDiv = () => {
  appDiv.style.transform = "rotateX(0deg) rotateY(0deg)";
  innerDiv.style.transform = `translateY(0px) translateX(0px)`;
  appContainerDiv.style.transform = `translateY(0px) translateX(0px)`;
};

appContainerDiv.addEventListener("mousemove", transformDiv);
appContainerDiv.addEventListener("mouseenter", transformDiv);
appContainerDiv.addEventListener("mouseleave", resetDiv);
addEventListener("resize", resetDiv);
