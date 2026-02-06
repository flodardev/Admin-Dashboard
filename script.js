const createFloatingPage = () => {
  const floatPage = document.createElement("div");
  floatPage.classList.add("floating-page");

  floatPage.innerHTML = `
    <div class="floating-content">
      <h2>Floating Page</h2>
      <p>This sits on top of your grid!</p>
      <form id="appointment-form" class="site-form">
        <!-- Group inputs for better styling -->
        <div class="form-group">
          <label for="time">Time:</label>
          <input type="text" id="time" name="time" required>
        </div>

        <div class="form-group">
          <label for="name">Appointment:</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
          <label for="detail">Details:</label>
          <textarea id="detail" name="detail"></textarea>
        </div>

        <!-- Use a <button type="submit"> to trigger the submit event -->
        <button type="submit" class="submit-btn">Send Data</button>
      </form>

      <button id="close-float">Close</button>
    </div>
  `;

  document.body.appendChild(floatPage);

  // Form values
  const appointmentForm = document.querySelector("#appointment-form");
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent refreshing of page

    const data = new FormData(appointmentForm);

    const formValues = Object.fromEntries(data.entries());

    // APPOINTMENTS
    const appointmentsContainer = document.querySelector(".appt-container");

    // Make appointment cards
    const newCard = document.createElement("div");
    newCard.classList.add("appointment-card");
    let cardTime = document.createElement("h3");
    cardTime.textContent = formValues.time;
    let cardName = document.createElement("h3");
    cardName.textContent = formValues.name;
    let cardDetails = document.createElement("p");
    cardDetails.textContent = formValues.detail;
    let cardIcons = document.createElement("div");
    cardIcons.classList.add("card-icons");
    cardIcons.innerHTML = `
                    <ul class="list">
                <li>
                  <a class="card-check-icon" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>check</title>
                      <path
                        d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="card-open-icon" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>open-in-new</title>
                      <path
                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="card-cancel-icon" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>cancel</title>
                      <path
                        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
    `;

    newCard.append(cardTime, cardName, cardDetails, cardIcons);

    // Append to appointmentsArea
    appointmentsContainer.appendChild(newCard);

    console.log(newCard);
    floatPage.remove();
  });

  document.querySelector("#close-float").addEventListener("click", (event) => {
    floatPage.remove();
  });
};

// HEADER CREATE BUTTONS
const buttonNew = document.querySelector("#new-appointment");
buttonNew.addEventListener("click", (event) => {
  createFloatingPage();
});

// Card buttons functions
const cardCancel = document.querySelectorAll(".card-cancel-icon");
cardCancel.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.closest(".appointment-card").remove();
  });
});
// cardCancel.addEventListener("click", (event) => {
//   event.preventDefault(); // Prevent page refreshing
//   cardCancel.closest(".appointment-card").remove();
// });
