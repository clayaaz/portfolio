import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="fixed top-4 right-4 z-50">
      <button id="dark-mode-toggle" class="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <svg class="w-6 h-6 hidden dark:block text-gray-100" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
        </svg>
        <svg class="w-6 h-6 block dark:hidden text-gray-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>
    </div>
    <div id="header" class="py-[25%] opacity-0 transition-opacity duration-1000 w-full">
      <h1 class="text-6xl text-center text-gray-900 dark:text-gray-100">Shreyaz Ray</h1>
      <p class="text-xl p-4 text-center text-gray-700 dark:text-gray-300">Aspiring ML Engineer</p>
      <a href="resume.pdf"><button class="border border-gray-300 dark:border-gray-600 hover:bg-gray-400 dark:hover:bg-gray-600 py-1 px-4 rounded mx-auto block text-gray-900 dark:text-gray-100">Resume</button></a>
    </div>
    <div id="about" class="mt-15 opacity-0 transition-opacity duration-1000">
      <h1 class="text-5xl text-center text-gray-900 dark:text-gray-100">About Me</h1>
      <div class="flex pl-60 py-15">
        <div>
          <img class="h-52 w-52 object-cover flex-none" src="image.png"></img>
          <ul>
            <li><a href="mailto:shr.dpsb@gmail.com" class="hover:text-indigo-600 font-bold text-gray-900 dark:text-gray-100">SHR.DPSB@GMAIL.COM</a></li>
            <li>
              <div class="flex">
                <a href="https://www.linkedin.com/in/shreyaz-ray-66b32a2a4/"><img src="linkedin.webp" class="h-6 w-6 mr-1"></img></a>
                <a href="https://github.com/clayaaz"><img src="github.webp" class="h-6 w-6 mx-1"></img></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-1 px-20">
          <p class="text-xl text-gray-700 dark:text-gray-300">Recent A-Level graduate and aspiring Full Stack Developer with experience in game development, Python automation, and multiple hackathon awards. Passionate about building creative solutions and currently expanding my skills in machine learning.</p>
          <p class="pt-10 text-xl text-gray-700 dark:text-gray-300">After completing my CBSE 10th Grade from Delhi Public School, Biratnagar and my A-Levels from Trinity International SS & College, Kathmandu. I am looking for universities to continue my education while simultaneously looking for job or internship opportunities!</p>
        </div>
      </div>
    </div>
    <div class="pl-[25%] py-25">
      <h1 id="ex" class="text-5xl pt-50 pb-10 opacity-0 transition-opacity duration-1000 text-gray-900 dark:text-gray-100">Experiences</h1>

      <ol class="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        <li id="ex-1" class="relative -ms-1.5 flex items-start gap-4 opacity-0 transition-opacity duration-1000">
          <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div class="mt-2 w-[67%]">
            <div class="flex justify-between">
              <h3 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Nobel Navigators</h3>

              <time class="text-lg/none font-medium text-gray-700 dark:text-gray-300">Nov 2025 - Present</time>
            </div>

            <p class="mt-1.5 text-xl text-gray-700 dark:text-gray-300">
              Intern Enrolled in Machine Learning Course Web-Design Leadership Pitch and Presentation
            </p>
          </div>
        </li>

        <li id="ex-2" class="relative -ms-1.5 flex items-start gap-4 opacity-0 transition-opacity duration-1000">
          <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div class="mt-2 w-[67%]">
            <div class="flex justify-between">
              <h3 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Angler Studios</h3>

              <time class="text-lg/none font-medium text-gray-700 dark:text-gray-300">Aug 2025 - Present</time>
            </div>

            <p class="mt-1.5 text-xl text-gray-700 dark:text-gray-300">
              Worked on a Social Hub game in the theme of our country on Roblox
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div class="pt-80 pb-10 px-25">
      <h1 id="prj" class="text-5xl text-center opacity-0 transition-opacity duration-1000 text-gray-900 dark:text-gray-100">Projects</h1>
      <div class="flex pt-10">
        <div id="prj-1" class="px-5 opacity-0 transition-opacity duration-1000">
          <div class="block rounded-md border border-gray-300 dark:border-gray-600 p-4 shadow-sm sm:p-6 w-100 h-45 bg-white dark:bg-gray-800">
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div class="sm:order-last sm:shrink-0">
                <img alt="" src="vallyride.webp" class="size-16 rounded-full object-cover sm:size-[72px]">
              </div>
              <div class="mt-4 sm:mt-0">
                <h3 class="text-lg font-medium text-pretty text-gray-900 dark:text-gray-100">
                  ValleyRide.
                </h3>
                <p class="my-4 line-clamp-2 text-sm text-pretty text-gray-700 dark:text-gray-300">
                  A vehicle rental app where you can rent a vehicle to ride or provide your vehicle for rent. This project landed me and my team 3rd place at the Intra College Trinity A-Level Hackathon.
                </p>
              </div>
            </div>
            <a class="inline-block rounded-sm border border-gray-600 dark:border-gray-500 px-1 py-1 text-xm font-medium text-gray-900 dark:text-gray-100 bg-transparent hover:text-indigo-600 dark:hover:text-indigo-400" href="https://github.com/clayaaz/ti-hackathon-2024">Learn More</a>
          </div>
        </div>
        <div id="prj-2" class="px-5 opacity-0 transition-opacity duration-1000">
          <div class="block rounded-md border border-gray-300 dark:border-gray-600 p-4 shadow-sm sm:p-6 w-100 h-45 bg-white dark:bg-gray-800">
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div class="sm:order-last sm:shrink-0">
                <img alt="Khop Kendra" src="nepal-flag.jpg" class="size-16 rounded-full object-cover sm:size-[72px]">
              </div>
              <div class="mt-4 sm:mt-0">
                <h3 class="text-lg font-medium text-pretty text-gray-900 dark:text-gray-100">
                  Khop Kendra
                </h3>
                <p class="my-4 line-clamp-2 text-sm text-pretty text-gray-700 dark:text-gray-300">
                  A government app where you get notified about the latest vaccination program near you. Additionally you can search up any vaccine program or vaccination center near you. This project won me and my team "Heighest Social Impact" award at the Cambridge Code League.
                </p>
              </div>
            </div>
            <a class="inline-block rounded-sm border border-gray-600 dark:border-gray-500 px-1 py-1 text-xm font-medium text-gray-900 dark:text-gray-100 bg-transparent hover:text-indigo-600 dark:hover:text-indigo-400" href="https://github.com/clayaaz/ARCS/tree/main">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Select the element to observe
const head = document.getElementById("header");
const about = document.getElementById("about");
const ex = document.getElementById("ex");
const ex1 = document.getElementById("ex-1");
const ex2 = document.getElementById("ex-2");
const prj = document.getElementById("prj");
const prj1 = document.getElementById("prj-1");
const prj2 = document.getElementById("prj-2");

// Define the observer options
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Create the observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100");
    } else {
      entry.target.classList.remove("opacity-100");
    }
  });
}, options);

// Start observing the target elements
observer.observe(head);
observer.observe(about);
observer.observe(ex);
observer.observe(ex1);
observer.observe(ex2);
observer.observe(prj);
observer.observe(prj1);
observer.observe(prj2);

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const html = document.documentElement;

const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  html.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const theme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});