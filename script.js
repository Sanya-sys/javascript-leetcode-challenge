// script.js

const problems = [
  {
    day: 1,
    title: "Create Hello World Function [Closures]",
    link: "problems/day1/solution.js",
  },
  { day: 2, title: "Counter", link: "problems/day2/solution.js" },
  { day: 3, title: "To Be Or Not To Be", link: "problems/day3/solution.js" },
  { day: 4, title: "Counter II", link: "problems/day4/solution.js" },
  { day: 2, title: "Counter", link: "problems/day2/solution.js" },
  { day: 2, title: "Counter", link: "problems/day2/solution.js" },
  { day: 2, title: "Counter", link: "problems/day2/solution.js" },
  { day: 2, title: "Counter", link: "problems/day2/solution.js" },
  { day: 2, title: "Counter", link: "problems/day2/solution.js" },
];

document.addEventListener("DOMContentLoaded", () => {
  const problemsList = document.getElementById("problems-list");

  problems.forEach((problem) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = `Day ${problem.day}: ${problem.title}`;

    link.addEventListener("click", (event) => {
      event.preventDefault();

      loadScript(problem.link);
    });

    listItem.appendChild(link);
    problemsList.appendChild(listItem);
  });
});

function loadScript(scriptSrc) {
  const script = document.createElement("script");
  script.src = scriptSrc;

  document.body.appendChild(script);

  script.onload = function () {
    if (typeof printOutput === "function") {
      printOutput();
    } else {
      console.error(`Function printOutput not defined in ${scriptSrc}`);
    }
  };
}
