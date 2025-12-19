import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="header" class="py-[25%] opacity-0 transition-opacity duration-1000 w-full"> 
      <h1 class="text-6xl text-center">Shreyaz Ray</h1>
      <p class="text-xl p-4 text-center">Aspiring ML Engineer</p>
      <a href="resume.pdf"><button class="border hover:bg-gray-400 py-1 px-4 rounded mx-auto block">Resume</button></a>
</div>
      
    </div>
    <div id="about" class="mt-15 opacity-0 transition-opacity duration-1000">
      <h1 class="text-5xl text-center">About Me</h1>
      <div class="flex pl-60 py-15">
      <div>
        <img class="h-52 w-52 object-cover flex-none" src="image.png"></img>
        <ul>
        <li><a href="mailto:shr.dpsb@gmail.com" class="hover:text-indigo-600 font-bold">SHR.DPSB@GMAIL.COM</a></li>
        <li>
          <div class="flex">
            <a href="https://www.linkedin.com/in/shreyaz-ray-66b32a2a4/"><img src="linkedin.webp" class="h-6 w-6 mr-1"></img></a>
            <a href="https://github.com/clayaaz"><img src="github.webp" class="h-6 w-6 mx-1"></img></a>
          </div>
        </li>
      </ul>
      </div>
        <div class="flex-1 px-20">
        <p class="text-xl">Recent A-Level graduate and aspiring Full Stack Developer with experience in game development, Python automation, and multiple hackathon awards. Passionate about building creative solutions and currently expanding my skills in machine learning.</p>
        <p class="pt-10 text-xl">After completing my CBSE 10th Grade from Delhi Public School, Biratnagar and my A-Levels from Trinity International SS & College, Kathmandu. I am looking for universities to continue my education while simultaneously looking for job or internship opportunities!</p>
        </div>
        </div>
      </div>
    </div>
    <div class="pl-[25%] py-25">
      <h1 id="ex" class="text-5xl pt-50 pb-10 opacity-0 transition-opacity duration-1000">Experiences </h1>
      
      <ol class="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 ">
        <li id="ex-1" class="relative -ms-1.5 flex items-start gap-4 opacity-0 transition-opacity duration-1000">
          <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div class="mt-2 w-[67%]">
            <div class="flex justify-between">
              <h3 class="text-3xl font-bold text-gray-900">Nobel Navigators</h3>

              <time class="text-lg/none font-medium text-gray-700">Nov 2025 - Present</time>
            </div>
            
            <p class="mt-1.5 text-xl text-gray-700">
              Intern Enrolled in Machine Learning Course Web-Design Leadership Pitch and Presentation
              
            </p>
          </div>
        </li>

        <li id="ex-2" class="relative -ms-1.5 flex items-start gap-4 opacity-0 transition-opacity duration-1000">
          <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div class="mt-2 w-[67%]">
            <div class="flex justify-between">
              <h3 class="text-3xl font-bold text-gray-900">Angler Studios</h3>

              <time class="text-lg/none font-medium text-gray-700">Aug 2025 - Present</time>
            </div>
            
            <p class="mt-1.5 text-xl text-gray-700">
              Worked on a Social Hub game in the theme of our country on Roblox
              
            </p>
          </div>
        </li>
      </ol> 
    </div>
    <div>

    </div>
    <div class="pt-80 pb-10 px-25">
      <h1 id="prj" class="text-5xl text-center opacity-0 transition-opacity duration-1000">Projects </h1>
      <div class="flex pt-10">
        <div id="prj-1" class="px-5 opacity-0 transition-opacity duration-1000">
          <div class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 w-100 h-45">
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
            <div class="sm:order-last sm:shrink-0">
              <img alt="" src="vallyride.webp" class="size-16 rounded-full object-cover sm:size-[72px]">
            </div>
              <div class="mt-4 sm:mt-0">
                <h3 class="text-lg font-medium text-pretty text-gray-900">
                  ValleyRide.
                </h3>
                <p class="my-4 line-clamp-2 text-sm text-pretty text-gray-700">
                  A vehicle rental app where you can rent a vehicle to ride or provide your vehicle for rent. This project landed me and my team 3rd place at the Intra College Trinity A-Level Hackathon.
                </p>
              </div>
            </div>
            <a class="inline-block rounded-sm border border-gray-600 px-1 py-1 text-xm font-medium text-black bg-transparent hover:text-indigo-600" href="https://github.com/clayaaz/ti-hackathon-2024">Learn More</a>
          </div>
        </div>
        <div id="prj-2" class="px-5 opacity-0 transition-opacity duration-1000">
          <dev class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 w-100 h-45">
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
            <div class="sm:order-last sm:shrink-0">
              <img alt="nepal-flag.jpg  " src="" class="size-16 rounded-full object-cover sm:size-[72px]">
            </div>
              <div class="mt-4 sm:mt-0">
                <h3 class="text-lg font-medium text-pretty text-gray-900">
                  Khop Kendra
                </h3>
                <p class="my-4 line-clamp-2 text-sm text-pretty text-gray-700">
                  A government app where you get notified about the latest vaccination program near you. Additionally you can search up any vaccine program or vaccination center near you. This project won me and my team "Heighest Social Impact" award at the Cambridge Code League.
                </p>
              </div>
            </div>
            <a class="inline-block rounded-sm border border-gray-600 px-1 py-1 text-xm font-medium text-black bg-transparent hover:text-indigo-600" href="https://github.com/clayaaz/ARCS/tree/main">Learn More</a>
          </dev>
        </dev>

      </div>
    </div>
  </div>
`
// Select the element to observe
const head = document.getElementById("header");
const about = document.getElementById("about");
const ex = document.getElementById("ex");
const ex1 = document.getElementById("ex-1");
const ex2 = document.getElementById("ex-2");
const prj = document.getElementById("prj");
const prj1 = document.getElementById("prj-1");
const prj2 = document.getElementById("prj-2");

// Define the observer options (e.g., a threshold of 0.5 means 50% of the element
// must be visible to trigger the callback)
const options = {
  root: null, // observe against the viewport
  rootMargin: '0px',
  threshold: 0.5
};

// Create the observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the visible class when in view
      entry.target.classList.add("opacity-100");
    }
    // Optional: Remove the class when scrolling out of view to re-trigger
    else {
       entry.target.classList.remove("opacity-100");
     }
  });
}, options);

// Start observing the target element
observer.observe(head);
observer.observe(about);
observer.observe(ex);
observer.observe(ex1);
observer.observe(ex2);
observer.observe(prj);
observer.observe(prj1);
observer.observe(prj2);