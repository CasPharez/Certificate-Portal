const studentLogin = document.getElementById('student-btn');
const verifyStudent = document.getElementById('verify-btn');
const verifyForm = document.getElementById('verify-form');
const studentForm = document.getElementById('student-form');

// verify and student login display
const showStudentForm = () => {
  verifyForm.style.display = 'none';
  studentForm.style.display = 'block';
}

const showVerifyForm = () => {
  verifyForm.style.display = "block";
  studentForm.style.display = "none";
};

studentLogin.addEventListener('click', () => {
  showStudentForm();
});

verifyStudent.addEventListener('click', () => {
  showVerifyForm();
});
// verify and student login display ends


// verification pop up starts
const verifyPop = document.getElementById('verification-popup');
const backdrop = document.getElementById('backdrop');
const verifyBtn = document.querySelector('.verify-btn');

const body = document.body;

// opening of the verification pop up


verifyBtn.addEventListener('click', () => {
  verifyPop.show();
  backdrop.style.display = 'block';
  body.classList.add('modal-open');
  
});

// return back home from the verification pop up
const backHome = document.getElementById('back-home');
backHome.addEventListener('click', () => {
  verifyPop.close()
  backdrop.style.display = "none";
  body.classList.remove("modal-open");
});


// open the student no record pop up
// const noRecord = document.getElementById('no-record');
// verifyBtn.addEventListener("click", () => {
//   noRecord.show();
//   backdrop.style.display = "block";
//   body.classList.add("modal-open");
// });

// return back home from the No record pop up
const backHomeTwo = document.getElementById('back-home-two');

backHomeTwo.addEventListener("click", () => {
  noRecord.close();
  backdrop.style.display = "none";
  body.classList.remove("modal-open");
});
// verification pop up ends




// VALIDATION STARTS - BY MAYOR

// students credential popup starts
const credential = document.getElementById('credential');
const studentInfo = document.getElementById('student-info');

// opening of the student credential form
studentInfo.addEventListener('click', (event) => {

    event.preventDefault(); 

    var formData = {
        username: document.getElementById("username").value.trim(),
        password: document.getElementById("password").value.trim(),
    };

    // Validate the form data
    var errors = validateForm(formData);

    // Display errors, if any
    displayErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
        console.log("Form is valid");
        


      // If no errors in my array FileList, then proceed with below
        credential.show();
        backdrop.style.display = "block";
        body.classList.add("modal-open");
    }
 
});

// return from the student credential pop up
const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
  credential.close();
  backdrop.style.display = "none";
  body.classList.remove("modal-open");
});


// students credential popup ends

// student payment for certificate 

// opening of the student payment popup
const payment = document.getElementById('payment');
const paymentBtn = document.getElementById('payment-popup');
paymentBtn.addEventListener('click', () => {
  payment.show();
  backdrop.style.display = "block";
  body.classList.add("modal-open");
  credential.close();
});

// return home from the student payment popup
const closeBtn2 = document.getElementById("close-btn2");

closeBtn2.addEventListener("click", () => {
  payment.close();
  backdrop.style.display = "none";
  body.classList.remove("modal-open");
});






// VALIDATION FUNCTIONS


// Function to validate the form data
function validateForm(formData) {
    var errors = {};

    // Validate the username or email
    if (!formData.username) {
        errors.username = "Username or email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.username) && formData.username.length < 3) {
        errors.username = "Invalid username or email";
    }

    // Validate the password
    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    return errors;
}

// Function to display errors on the form
function displayErrors(errors) {
    // Clear previous error messages
    document.getElementById("username-error").innerText = '';
    document.getElementById("password-error").innerText = '';

    // Display errors for each field with errors
    if (errors.username) {
        document.getElementById("username-error").innerText = errors.username;
    }
    if (errors.password) {
        document.getElementById("password-error").innerText = errors.password;
    }
}

