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
  { day: 5, title: "Apply Transform Over Each Element in Array", link: "problems/day5/solution.js" },
  { day: 6, title: "Filter Elements from Array", link: "problems/day6/solution.js" },
  { day: 7, title: "Array Reduce Transformation", link: "problems/day7/solution.js" },
  { day: 8, title: "Function Composition", link: "problems/day8/solution.js" },
  { day: 9, title: "Return Length of Arguments Passed", link: "problems/day9/solution.js" },
  { day: 10, title: " Allow One Function Call", link: "problems/day10/solution.js" },
  { day: 11, title: "Memoize", link: "problems/day11/solution.js" },
  { day: 12, title: "Add two promises", link: "problems/day12/solution.js" },
  { day: 13, title: "Sleep", link: "problems/day13/solution.js" },
  { day: 14, title: "Timeout Cancellation", link: "problems/day14/solution.js" },
  { day: 15, title: "Interval Cancellation", link: "problems/day15/solution.js" },
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
