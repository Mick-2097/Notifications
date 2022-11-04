//  Page content
const catagories = [
  "Test",
  "Documents",
  "Engagements",
  "Events",
  "Offers",
  "Prospects",
  "Scouting",
  "Task",
]
const test = [
  {
    key: "oooooo",
    value: "All 6 inputs included",
  },
  {
    key: "oxxxxx",
    value: "First hidden input included",
  },
  {
    key: "xxoxxx",
    value: "Third input included",
  },
  {
    key: "oxoxoo",
    value: "You get the point",
  },
]
const documents = [
  {
    key: "",
    value: "Document Rejected Signature Notification",
  },
  {
    key: "oooooo",
    value: "Document Rejected Signature Sms Notification",
  },
  {
    key: "",
    value: "Document Signed Notification",
  },
  {
    key: "",
    value: "Document Signed Sms Notification",
  },
  {
    key: "",
    value: "Signature Required Notification",
  },
  {
    key: "",
    value: "Signature Required Sms Notification",
  },
]
const engagements = [
  {
    key: "",
    value: "Agents New Engagement Notification",
  },
  {
    key: "",
    value: "Agents Signed E R S Notification",
  },
  {
    key: "",
    value: "Client Dashboard Access Notification",
  },
  {
    key: "",
    value: "Client Dashboard Access Sms Notification",
  },
  {
    key: "",
    value: "Critical Deadline Update Notification",
  },
  {
    key: "",
    value: "Critical Deadline Update Status Notification",
  },
  {
    key: "",
    value: "Engagement Assigned Agent Notification",
  },
  {
    key: "",
    value: "Engagement Assigned Agent S M S Notification",
  },
  {
    key: "",
    value: "New Engagement Comment Notification",
  },
]
const events = [
  {
    key: "",
    value: "Added As Notifiers Notification",
  },
  {
    key: "",
    value: "Event Attachment Created Notification",
  },
  {
    key: "",
    value: "Event Comment Created Notification",
  },
  {
    key: "",
    value: "Event Dashboard Reminder Notification",
  },
  {
    key: "",
    value: "Event Date Updated Notification",
  },
  {
    key: "",
    value: "Event Date Updated Sms Notification",
  },
  {
    key: "",
    value: "Event Reminder Notification",
  },
  {
    key: "",
    value: "Event Type Update Notification",
  },
  {
    key: "",
    value: "Event Type Update Sms Notification",
  },
  {
    key: "",
    value: "Event Video Call Url Updated Notification",
  },
  {
    key: "",
    value: "Event Video Call Url Updated Sms Notification",
  },
  {
    key: "",
    value: "User Added As Attendee Notification",
  },
]
const offers = [
  {
    key: "",
    value: "Offer Accepted Notification",
  },
  {
    key: "",
    value: "Offer Created Notification",
  },
  {
    key: "",
    value: "Offer Status Updated Notification",
  },
]
const prospects = [
  {
    key: "",
    value: "New Prospect Notification",
  },
  {
    key: "",
    value: "New Prospect S M S Notification",
  },
  {
    key: "",
    value: "Prospect Assignment Notification",
  },
  {
    key: "",
    value: "Prospect Assignment S M S Notification",
  },
  {
    key: "",
    value: "Prospect Welcome Notification",
  },
]
const scouting = [
  {
    key: "",
    value: "Scouting Send Notification",
  },
]
const task = [
  {
    key: "",
    value: "New Task Comment Created Notification",
  },
  {
    key: "",
    value: "Task Assigned To User Notification",
  },
  {
    key: "",
    value: "Task Attachment Notification",
  },
  {
    key: "",
    value: "Task Completed Notification",
  },
  {
    key: "",
    value: "User Mentioned Notification",
  },
  {
    key: "",
    value: "Verify Email Notification",
  },
]

//  Dom elements
const sidebar = document.querySelector("#sidebar")
const listArea = document.querySelector("#list")
const formArea = document.querySelector("#form")

// Form element variables
//--------------[_token]-------------------------//
const tokenInput = document.createElement("input")
tokenInput.classList.add("input")
tokenInput.setAttribute("type", "hidden")
tokenInput.setAttribute("name", "_token")
tokenInput.setAttribute("value", "rRx7seuyKmxn0BUW7OjfcyPqkz1FFIg3UYjQJxS2")
//-----------------------------------------------//
//--------------[document ID]--------------------//
const docIdInput = document.createElement("input")
docIdInput.classList.add(
  "input",
  "clear",
  "w-full",
  "text-center",
  "bg-slate-400"
)
docIdInput.setAttribute("name", "document")
docIdInput.setAttribute("id", "document")
docIdInput.setAttribute("type", "text")
const docIdLabel = document.createElement("label")
docIdLabel.setAttribute("for", "document")
docIdLabel.innerText = " document ID "
docIdLabel.append(docIdInput)
//-----------------------------------------------//
//--------------[signer ID]----------------------//
const signerIdInput = document.createElement("input")
signerIdInput.classList.add(
  "input",
  "clear",
  "w-full",
  "text-center",
  "bg-slate-400"
)
signerIdInput.setAttribute("name", "signer")
signerIdInput.setAttribute("id", "signer")
signerIdInput.setAttribute("type", "text")
const signerIdLabel = document.createElement("label")
signerIdLabel.setAttribute("for", "signer")
signerIdLabel.innerText = " signer ID "
signerIdLabel.append(signerIdInput)
//-----------------------------------------------//
//---------------[signer_type]-------------------//
const signerSelect = document.createElement("select")
signerSelect.classList.add(
  "input",
  "clear",
  "text-slate-900",
  "text-center",
  "w-1/2",
  "self-center",
  "mt-2",
  "bg-slate-400"
)
signerSelect.setAttribute("name", "signer_type")
const option1 = document.createElement("option")
option1.setAttribute("value", "App\\Models\\Contact")
option1.innerText = "Contact"
const option2 = document.createElement("option")
option2.setAttribute("value", "App\\Models\\User")
option2.innerText = "User"
signerSelect.append(option1, option2)
//-----------------------------------------------//
//-----------[notifiable (user ID)]--------------//
const userIdInput = document.createElement("input")
userIdInput.classList.add(
  "input",
  "clear",
  "w-full",
  "text-slate-900",
  "text-center",
  "bg-slate-400"
)
userIdInput.setAttribute("name", "user_id")
userIdInput.setAttribute("id", "user_id")
userIdInput.setAttribute("type", "number")
const userIdLabel = document.createElement("label")
userIdLabel.setAttribute("for", "user_id")
userIdLabel.innerText = " notifiable (user ID) "
userIdLabel.append(userIdInput)
//-----------------------------------------------//
//---------------[render]------------------------//
const renderInput = document.createElement("input")
renderInput.classList.add("input")
renderInput.setAttribute("name", "render")
renderInput.setAttribute("type", "hidden")
renderInput.setAttribute("value", "1")
//-----------------------------------------------//
//--------------[button]-------------------------//
const subButton = document.createElement("button")
subButton.classList.add(
  "border",
  "border-slate-300",
  "rounded",
  "py-1",
  "px-4",
  "w-1/2",
  "self-center",
  "hover:bg-slate-500",
  "hover:text-slate-50",
  "hover:border-slate-50"
)
subButton.setAttribute("type", "button")
subButton.setAttribute("id", "submit")
subButton.setAttribute("onclick", "setURL()")
subButton.innerText = "I'm a button, ladi da"
//-----------------------------------------------//

//  Render sidebar buttons
catagories.forEach((x) => {
  let newButton = document.createElement("button")
  newButton.classList.add(
    "border",
    "border-slate-300",
    "rounded",
    "py-1",
    "px-4",
    "hover:bg-slate-500",
    "hover:text-slate-50",
    "hover:border-slate-50",
    "focus:text-slate-800",
    "focus:border-slate-800"
  )
  newButton.setAttribute("onclick", `showlist(${x.toLowerCase()})`)
  newButton.innerText = x
  sidebar.append(newButton)
})

//  Render list items
const showlist = (catagory) => {
  listArea.textContent = ""
  catagory.forEach((x) => {
    let newListItem = document.createElement("li")
    let newLink = document.createElement("a")
    newLink.setAttribute("href", `#`)
    // newLink.setAttribute(
    //   "href",
    //   `http://localhost/test/notifications/show?class=\\App\\Notifications\\Documents\\${x.value.replace(
    //     / /g,
    //     ""
    //   )}`
    // )
    newLink.innerText = x.value
    newLink.classList.add("link")
    newLink.setAttribute("id", x.key)
    newLink.setAttribute("onclick", `buildForm( '${x.key}', '${x.value}' )`)
    newListItem.append(newLink)
    listArea.append(newListItem)
  })
}

//  Render form
const buildForm = (key, value) => {
  formArea.classList.remove("border")
  formArea.innerText = ""
  formArea.classList.add("border")
  const formName = document.createElement("h1")
  formName.classList.add("text-xl", "my-8")
  formName.innerText = value
  formArea.append(formName)
  if (key.slice(0, 1) === "o") formArea.append(tokenInput)
  if (key.slice(1, 2) === "o") formArea.append(docIdLabel)
  if (key.slice(2, 3) === "o") formArea.append(signerIdLabel)
  if (key.slice(3, 4) === "o") formArea.append(signerSelect)
  if (key.slice(4, 5) === "o") formArea.append(userIdLabel)
  if (key.slice(5, 6) === "o") formArea.append(renderInput)
  formArea.append(subButton)
}

document.querySelectorAll(".input").forEach((x) => {
  x.addEventListener("change", (updateValue) => {
    x.style.outline = "none"
    setURL()
  })
})

const newURL = new URL("https://thisisyourbit.com")

let setURL = () => {
  let count = 0

  document.querySelectorAll(".input").forEach((x) => {
    if (!x.value) {
      document.querySelector("#submit").setAttribute("href", null)
      return
    } else {
      count++
    }
    if (count === document.querySelectorAll(".input").length) {
      document.querySelectorAll(".input").forEach((input) => {
        newURL.searchParams.set(input.name, input.value)
        document
          .querySelector("#submit")
          .setAttribute("href", newURL.toString())
      })
    }
  })

  document.querySelectorAll(".input").forEach((x) => {
    newURL.searchParams.delete(x.name)
  })

  console.log(document.querySelector("#submit").getAttribute("href"))
}
