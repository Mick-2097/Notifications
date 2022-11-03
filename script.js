//  Page content
const catagories = [
  "Documents",
  "Engagements",
  "Events",
  "Offers",
  "Prospects",
  "Scouting",
  "Task",
]
const documents = [
  "Document Rejected Signature Notification",
  "Document Rejected Signature Sms Notification",
  "Document Signed Notification",
  "Document Signed Sms Notification",
  "Signature Required Notification",
  "Signature Required Sms Notification",
]
const engagements = [
  "Agents New Engagement Notification",
  "Agents Signed E R S Notification",
  "Client Dashboard Access Notification",
  "Client Dashboard Access Sms Notification",
  "Critical Deadline Update Notification",
  "Critical Deadline Update Status Notification",
  "Engagement Assigned Agent Notification",
  "Engagement Assigned Agent S M S Notification",
  "New Engagement Comment Notification",
]
const events = [
  "Added As Notifiers Notification",
  "Event Attachment Created Notification",
  "Event Comment Created Notification",
  "Event Dashboard Reminder Notification",
  "Event Date Updated Notification",
  "Event Date Updated Sms Notification",
  "Event Reminder Notification",
  "Event Type Update Notification",
  "Event Type Update Sms Notification",
  "Event Video Call Url Updated Notification",
  "Event Video Call Url Updated Sms Notification",
  "User Added As Attendee Notification",
]
const offers = [
  "Offer Accepted Notification",
  "Offer Created Notification",
  "Offer Status Updated Notification",
]
const prospects = [
  "New Prospect Notification",
  "New Prospect S M S Notification",
  "Prospect Assignment Notification",
  "Prospect Assignment S M S Notification",
  "Prospect Welcome Notification",
]
const scouting = ["	Scouting Send Notification"]
const task = [
  "New Task Comment Created Notification",
  "Task Assigned To User Notification",
  "Task Attachment Notification",
  "Task Completed Notification",
  "User Mentioned Notification",
  "Verify Email Notification",
]

//  Dom objects
const sidebar = document.querySelector("#sidebar")
const listArea = document.querySelector("#content")

//  Render buttons
catagories.forEach((x) => {
  let newButton = document.createElement("button")
  newButton.classList.add(
    "text-slate-300",
    "border",
    "border-slate-300",
    "rounded",
    "py-1",
    "px-4",
    "mt-2",
    "hover:bg-slate-500"
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
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    //  Build hrefs here
    newLink.setAttribute("href", "#")
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    newLink.classList.add("text-slate-300", "hover:text-slate-50")
    newLink.innerText = x
    newListItem.append(newLink)
    listArea.append(newListItem)
  })
}
