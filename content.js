// content.js

// Function to modify the problem set page
function modifyProblemSet() {
    var questionRows = document.querySelectorAll('div[role="rowgroup"]')[2]?.childNodes;
    if (questionRows) {
      questionRows.forEach((row) => {
        const attemptStatus = row.childNodes[0];
        const difficulty = row.childNodes[4];
        if (attemptStatus?.childElementCount === 0 && difficulty) {
          difficulty.textContent = "";
        }
      });
    }
  }
  
  // Function to modify the problem description page
  function modifyProblemDescription() {
    var element = document.querySelector(
      ".flex.w-full.flex-1.flex-col.gap-4.overflow-y-auto.px-4.py-5"
    );
    if (element) {
      const solved =
        element.childNodes[0]?.childNodes.length > 1
          ? element.childNodes[0].childNodes[1].textContent == "Solved"
          : false;
      if (!solved && element.childNodes[1]?.childNodes[0]) {
        element.childNodes[1].childNodes[0].classList.add("hidden");
      }
    }
  }
  
  // Main function to run the script
  function runScript() {
    var url = window.location.href;
  
    if (url.includes("problemset")) {
      modifyProblemSet();
    } else if (url.includes("description")) {
      modifyProblemDescription();
    }
  }
  
  // Run the script 2 seconds after the page has fully loaded
  window.addEventListener('load', () => {
    setTimeout(runScript, 4500);
  });