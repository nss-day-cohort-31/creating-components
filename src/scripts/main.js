console.log("Main.js");

const students = [
  {
      name: "Chris Miller",
      subject: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      subject: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      subject: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      subject: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      subject: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      subject: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      subject: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      subject: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      subject: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      subject: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      subject: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      subject: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

// const container = document.querySelector("#container");

// container.innerHTML = "<div class='student'><h1>Alejandro Font</h1><section>Day cohort 27</section><aside>Wore pants that were too short for his legs.Routinely showed up late. Was an incredible friend to his teammates.</aside></div>";


// Refactored the above code so that we have a function that can be called as many times as needed. 
// const createStudentComponent = () => {
//   return `
//       <div class="student">
//           <h1>Alejandro Font</h1>
//           <section>Day cohort 27</section>
//           <aside>
//               Wore pants that were too short for his legs.
//               Was an incredible friend to his teammates.
//           </aside>
//       </div>
//   `
// }

// Refactoring the function so that the name in the string can be passed in as an argument.
// const createStudentComponent = (name) => {
//   return `
//       <div class="student">
//           <h1>${name}</h1>
//           <section>Day cohort 27</section>
//           <aside>
//               Wore pants that were too short for his legs.
//               Was an incredible friend to his teammates.
//           </aside>
//       </div>
//   `
// }

// Refactoring again so that now the function returns a string with HTML with the values for name, subject, info and className that is specified as arguments.
const createStudentComponent = (name, subject, info, className) => {
  console.log("function args", name, subject, info, className)
  return `
      <div class="student ${className}">
          <h1>${name}</h1>
          <section>${subject}</section>
          <aside>${info}</aside>
      </div>
  `
}

// container.innerHTML = createStudentComponent("Chris Miller", "History", "Failed last exam")
// debugger
// container.innerHTML = container.innerHTML + createStudentComponent("Alejandro Font")
// container.innerHTML += createStudentComponent("Alejandro Font", "Science", "Wore pants that were too short for his legs.Was an incredible friend to his teammates.")

const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    // const student = students[i]

    if (students[i].score >= 70) {
      studentContainer.innerHTML += createStudentComponent(
        students[i].name,
        students[i].subject,
        students[i].info,
        "passing"
    )
    } else {
      studentContainer.innerHTML += createStudentComponent(
        students[i].name,
        students[i].subject,
        students[i].info,
        "failing"
    )
    }
    
}
  