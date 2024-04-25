//Declaring needed variables
const menuButton = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const login = document.querySelector(".admin-login");
const dialog = document.querySelector(".login");
const mainDashboard = window.document.querySelector(".main-dashboard");
const paymentPage = document.querySelector(".payments");
const threeDots = document.querySelectorAll(".bi-three-dots-vertical");
const popUp = document.querySelector(".pop-up");
const soloProjects = document.querySelector(".solo-projects");
const soloprojectSidebar = document.querySelector("#solo-project");

// variables for sidebar panel
const dashboard = document.querySelector("#dashboard");
const paymentSidebar = document.querySelector("#payment");

// //Logic starts here

// displays the sidebar
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-display");
});

//Display the Admin login in form
// login.addEventListener("click", () => {
//   dialog.show();
// });

// //change the pages
//click the Dashboard
dashboard.addEventListener("click", () => {
  paymentSidebar.classList.remove("side-highlight");
  soloprojectSidebar.classList.remove('side-highlight');
  dashboard.classList.add("side-highlight");
  mainDashboard.style.display = "block";

  //switch off other dashboard
  paymentPage.style.display = "none";
  soloProjects.style.display = 'none';
  
});


// Click the payment section
paymentSidebar.addEventListener("click", () => {
  dashboard.classList.remove("side-highlight");
  paymentSidebar.classList.add("side-highlight");
  soloprojectSidebar.classList.remove('side-highlight');
  // switch on payment dashboard
  paymentPage.style.display = "block";

  // switch off other dashboard
  mainDashboard.style.display = "none";
  soloProjects.style.display = 'none';
  
});


//Solo project bar clicked
soloprojectSidebar.addEventListener("click", () => {
  dashboard.classList.remove("side-highlight");
  paymentSidebar.classList.remove("side-highlight");
  soloprojectSidebar.classList.add('side-highlight');

  // switch off other dashboard
  mainDashboard.style.display = "none";
  paymentPage.style.display = "none";
  // switch on the solo project
  soloProjects.style.display = 'block';

});
// three dots been clicked
/*
threeDots.forEach((e) => {
  e.addEventListener("click", () => {
    popUp.style.display = "block";
  });
});*/