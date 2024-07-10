const problems = [
    { day: 1, title: "Problem 1 Title", link: "problems/day1/problem.md" },
    { day: 2, title: "Problem 2 Title", link: "problems/day2/problem.md" },
    { day: 30, title: "Problem 30 Title", link: "problems/day30/problem.md" },
];

document.addEventListener("DOMContentLoaded", () => {
    const problemsList = document.getElementById("problems-list");
    problems.forEach(problem => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = problem.link;
        link.textContent = `Day ${problem.day}: ${problem.title}`;
        listItem.appendChild(link);
        problemsList.appendChild(listItem);
    });
});