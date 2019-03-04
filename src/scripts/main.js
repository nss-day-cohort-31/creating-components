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
// This function returns a string that contains HTML.
// const createStudentComponent = (name, subject, info, className) => {
//   console.log("function args", name, subject, info, className)
//   return `
//       <div class="student ${className}">
//           <h1>${name}</h1>
//           <section>${subject}</section>
//           <aside>${info}</aside>
//       </div>
//   `
// }

const createStudentComponent = (name, subject, info, className) => {
  let studentDiv = document.createElement("div")
  // <div></div>
  studentDiv.classList.add(className)
  // <div class="[the value in the variable className]"></div>

  let studentH1 = document.createElement("h1")
  // <h1></h1>
  studentH1.textContent = name
  // <h1>[value of name]</h1>

  let studentSection = document.createElement("section")
  // <section></section>

  // studentSection.innerHTML = `<p>${subject}</p>`
  let studentP = document.createElement("p")

  // You can use either .textContent or .createTextNode to add text to between the opening and closing tags of an HTML element. With .createTextNode, you will have to append the text node to the html element.
  studentP.textContent= subject
  // OR
  // let pText = document.createTextNode(subject)
  // studentP.appendChild(pText)
  // studentSection.appendChild(studentP)
  // <section>[value of subject]</section>

  let studentAside = document.createElement("aside")
  // <aside></aside>
  studentAside.textContent = info
  // <aside>[value of info]</aside>

  // debugger
  studentDiv.appendChild(studentH1)
//  <div class="[className]">
//    <h1>[name]</h1>
//  </div>

  studentDiv.appendChild(studentSection)
//  <div class="[className]">
//    <h1>[name]</h1>
//    <section>[subject]</section>
//  </div>

  studentDiv.appendChild(studentAside)
//  <div class="[className]">
//    <h1>[name]</h1>
//    <section>[subject]</section>
//    <aside>[info]</aside>
//  </div>

  console.log(studentDiv)
  return studentDiv
}

const studentContainer = document.querySelector("#container")

const domBody = document.querySelector("body")
for (let i = 0; i < students.length; i++) {
    const student = students[i]

    if (students[i].score >= 70) {
      let currentStudentDiv = createStudentComponent(
        student.name,
        student.subject,
        student.info,
        "passing"
    )
      studentContainer.appendChild(currentStudentDiv)
    } else {
      studentContainer.appendChild(createStudentComponent(
        student.name,
        student.subject,
        student.info,
        "failing"
    ))
    }
    
}

// Because the HTML I build is not appended to the DOM until the for loop runs, if I move the following two lines of code anywhere above the for loop, the querySelector will return null because the paragraph does not exist on the DOM until it has been appended.
const paragraphRef = document.querySelector("p")
console.log("paragraph", paragraphRef)
  