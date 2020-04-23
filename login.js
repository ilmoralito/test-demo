const tabs = document.querySelectorAll("li");
const form = document.querySelector("form");

tabs.forEach((tab) => tab.addEventListener("click", changeTabHandler));

form.addEventListener("submit", submitHandler);

function changeTabHandler(event) {
  const target = event.target;

  if (target.classList.contains("active")) {
    return;
  }

  removeActiveTab();

  if (target.textContent === "Sign in") {
    addSignInInputs();
  } else {
    removeSignInInputs();
  }

  if (!target.classList.contains("active")) {
    updateButtonLabel(event.target);
  }

  target.classList.add("active");
}

function removeActiveTab() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function addSignInInputs() {
  const firstNameGroup = document.createElement("div");
  const firstNameLabel = document.createElement("label");
  const firstName = document.createElement("input");

  firstNameLabel.textContent = "First name";
  firstNameLabel.setAttribute("for", "firstName");

  firstName.name = "firstName";
  firstName.id = "firstName";

  firstNameGroup.setAttribute("class", "form-group");

  firstNameGroup.appendChild(firstNameLabel);
  firstNameGroup.appendChild(firstName);

  const lastNameGroup = document.createElement("div");
  const lastNameLabel = document.createElement("label");
  const lastName = document.createElement("input");

  lastNameLabel.textContent = "Last name";
  lastNameLabel.setAttribute("for", "lastName");

  lastName.name = "lastName";
  lastName.id = "lastName";

  lastNameGroup.setAttribute("class", "form-group");


  lastNameGroup.appendChild(lastNameLabel);
  lastNameGroup.appendChild(lastName);

 
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class","form-group");

  const newLabel = document.createElement("label");
  newLabel.setAttribute("type","text");
  newLabel.textContent = "Descripcion"

  const textArea = document.createElement("textarea");
  textArea.setAttribute("name","Descripcion");
  textArea.setAttribute("rows","10");
  textArea.setAttribute("cols","50");
  textArea.setAttribute("id","textArea");
  textArea.textContent = "Descripcion"

  newDiv.appendChild(newLabel);
  newDiv.appendChild(textArea);



  document.querySelector("#username").parentNode.after(firstNameGroup);
  document.querySelector("#firstName").parentNode.after(lastNameGroup);
  document.querySelector("#lastName").parentNode.after(newDiv);
}

function removeSignInInputs() {
  document.querySelector("#firstName").parentNode.remove();
  document.querySelector("#lastName").parentNode.remove();
  document.querySelector("#textArea").parentNode.remove();

}

function updateButtonLabel(target) {
  document.querySelector('button[type="submit"]').textContent =
    target.textContent;
}

function submitHandler(event) {
  event.preventDefault();
}
