import "./style.css";
import fl from "figlet";
import AnsiShadow from "figlet/fonts/ANSI Shadow";

/**
 * TODO: Recreate the front page
 * TODO: SPA functionality (probably hell)
 * TODO: Nav element + Animations
 * TODO: Logo animation?
 * TODO: Think about disabling transformations on mobile and safari...?
 * */

// Setting up figlet
fl.parseFont("AnsiShadow", AnsiShadow); // load font

const BU = fl.textSync("BU", { font: "AnsiShadow" }).trim();
const ILDS = fl.textSync("ILDS", { font: "AnsiShadow" }).trim();

/* HTML SECTION */

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header id="logo-container">
  <pre style='color:red;'>${BU}</pre>
  <pre>${ILDS}</pre>
</header>
<main class="inner">
  <section class="hero-section">
    <h1><span>BU</span> INFORMATION LAB AND DESIGN SPACE</h1>
    <p>BUILDS is an inclusive group of students, artists, hackers, and organizers who believe in the do-it-yourself attitude and hacker ethic.
    </p>
    <div class='loc'>@ 665 Commonwealth Ave | Room 220</div>
    <div class='btn-container'>
      <Button>EVENTS</Button>
      <Button>JOIN MAILING LIST</Button>
    </div>
  </section>
  <section class="builds-activities">
    <h2>WHAT CAN YOU DO AT BUILDS?</h2>
    <p class='builds-desc'>Come join our community, hang out, and be in good company! We'll welcome you with open arms regardless of what you know and who you are! Our hackerspace is open at all hours of the day, but we have formal meetings on Wednesday at 7:00 PM during the fall and spring semesters. We are dedicated to providing every member with the tools and resources they need to pursue their passions.</p>
    <div class="activity-card-containers">
      <div class="activity-card">
        <img src="/card-1.webp"/>
        <div class="activity-card-info">
          <p class="card-title">ENJOY OUR HACKERSPACE</p>
          <p>Our hackerspace is open 24/7. Come in and work on your projects, or just hang out and chat with other members. Our amazing community is incredibly knowledgeable!</p>
        </div>
      </div>
      <div class="activity-card">
        <img src="/card-2.webp"/>
        <div class="activity-card-info">
          <p class='card-title'>
           PERSONAL PROJECTS 
          </p>
          <p>
            We provide everything you need to bring your ideas to life. Variety of tools and equipment available for use, including a 3D printer, soldering irons, power tools, computers, and more.
          </p>
        </div>
      </div>
      <div class="activity-card">
        <img src="/card-3.webp"/>
        <div class="activity-card-info">
          <p class='card-title'>
          ATTEND EVENTS 
          </p>
          <p>
We regularly host events on Wednesdays at 7PM. Learn some new techologies during our workshop events, gain academic and professional knowledge during our speaker events, etc.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="hacking-section">
    <h2>WHAT IS HACKING?</h2>
    <p>The idea of hacking is learning and building upon existing ideas and reinventing systems.
    </p>
    <p>Think of hacking as the opportunity to take things apart, fix, or improve upon those ideas or systems to learn and understand how they work.
    </p>
    <p>
    No matter who you are, you can create art and something inspiring on a computer, electronics, and anything that you put your mind to.</p>
    <p>
    If you feel strongly about an idea or want to learn about something, show your enthusiasm, be bold, and you’ll find people who share your passion of discovery and learning here at BUILDS!</p>

    <h3>THE PHILOSOPHY OF THE HACKER ETHIC</h3>
    <ul>
      <li>Figure things out</li>
      <li>Improve what already exists</li>
      <li>Share your knowledge</li>
      <li>Mistrust authority</li>
      <li>Promote decentralization</li>
    </ul>
  </section>
  <div class="contact-cards-container">
    <div class="contact-mailing-list">
      <h2>JOIN OUR MAILING LIST</h2>
      <p>We never send spam. Sign up to stay updated on things happening in the space!</p>
      <div class="mailing-list-input">
<input type="email"  pattern=".+@example\.com" size="30" required />
        <button>Submit</button>
      </div>
    </div>
    <div class="contact-us-card">
      <h2>CONTACT US</h2>
      <p>665 Commonwealth Ave</p>
      <p>Room 220</p>
      <p>Boston, MA 02215</p>
      <p>builds@bu.edu</p>
    </div>
  </div>
</main>
`;

// Grabbing necessary HTML elements;
const appDiv = document.querySelector<HTMLDivElement>("#app");
const appContainerDiv =
  document.querySelector<HTMLDivElement>("#app-container");
const innerDiv = document.querySelector<HTMLDivElement>("#app > .inner");
if (!appDiv || !innerDiv || !appContainerDiv)
  throw new Error("Critical elements missing from DOM");

// Single function that handles page element transformations
const transformDiv = (e: MouseEvent) => {
  let { top, height, left, width } = appDiv.getBoundingClientRect();
  const mouseX = (e.clientX - left) / width;
  const mouseY = (e.clientY - top) / height;
  const rotateY = (0.5 - mouseX) * 18;
  const rotateX = (mouseY - 0.5) * 18;
  const shiftX = (0.5 - mouseX) * 10;
  const shiftY = (0.5 - mouseY) * 10;

  //appDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${(0.5 - mouseY) * 10}px) translateX(${(0.5 - mouseX) * 10}px)`;

  innerDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${shiftY}px) translateX(${shiftX}px) translateZ(10px)`;

  //appContainerDiv.style.transform = `translateY(${shiftY}px) translateX(${shiftX}px)`;

  // Debug Data
  //console.log(`rotateY:${rotateY}\nrotateX:${rotateX}`);
  //console.log(`x:${mouseX} \nY:${mouseY}`);
};

// To reset transformations when user cursors leave main content
const resetDiv = () => {
  appDiv.style.transform = "rotateX(0deg) rotateY(0deg)";
  innerDiv.style.transform = `translateY(0px) translateX(0px)`;
  appContainerDiv.style.transform = `translateY(0px) translateX(0px)`;
};

appContainerDiv.addEventListener("mousemove", transformDiv);
//appContainerDiv.addEventListener("mouseenter", transformDiv);
appContainerDiv.addEventListener("mouseleave", resetDiv);
addEventListener("resize", resetDiv);
