// targeting the respective div
const studentContent = document.querySelector('.student-content-info');
const soloProject = document.querySelector('.solo-project');
const certificateTab = document.querySelector('.certificate-tab');


// targeting the cards
const studentCard = document.querySelector('.card-one');
const projectCard = document.querySelector('.card-two');
const certificateCard = document.querySelector('.card-three');

projectCard.addEventListener('click', () => {
soloProject.style.display = 'block';
studentContent.style.display = 'none';
certificateTab.style.display = "none";

});

certificateCard.addEventListener('click', () => {
certificateTab.style.display = 'block';
studentContent.style.display = 'none';
soloProject.style.display = 'none';

});

studentCard.addEventListener('click', () => {
  certificateTab.style.display = "none";
  studentContent.style.display = "block";
  soloProject.style.display = "none";
})
