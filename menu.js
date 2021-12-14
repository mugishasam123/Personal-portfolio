/* eslint-disable no-unused-expressions */
const hamb = document.querySelector('.hamburger');
const closebt = document.querySelector('.close');
const first = document.querySelector('#intro');
const menu = document.querySelector('.nav-menu');
const link1 = document.querySelector('.nav1');
const link2 = document.querySelector('.nav2');
const link3 = document.querySelector('.nav3');
const popupBtns = document.querySelectorAll('.popup-btn');
const closePopup = document.getElementById('close-popup');
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const popupDescription = document.querySelector('.description');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const technologiesList = document.querySelector('.popup-skills');
const popupDetails = document.querySelector('.popup-details');
const liveUrl = document.getElementById('live-url');
const sourceUrl = document.getElementById('source-url');
const fomur = document.getElementById('fomu');
const error = document.querySelector('.error-message');
const email = document.getElementById('masu');



const projects = [{
  name: 'Tonic',
  details: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
  smallDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'images/popup_big.png',
  technologies: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  linkLive: '',
  linkSource: '',
},
{
  name: 'Multi-Post Stories',
  details: ['FACEBOOK', '•', 'Back End Dev', '•', '2015'],
  smallDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'images/popup_big.png',
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  linkLive: '',
  linkSource: '',
},
{
  name: 'Facebook 360',
  details: ['FACEBOOK', '•', 'Back End Dev', '•', '2015'],
  smallDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'images/popup_big.png',
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  linkLive: '',
  linkSource: '',
},
{
  name: 'Uber navigation',
  details: ['Uber', '•', 'Lead developer', '•', '2018'],
  smallDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'images/popup_big.png',
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  linkLive: '',
  linkSource: '',
}];
popupBtns.forEach((projectButton) => {
  projectButton.addEventListener('click', () => {
    const projectNumber = projectButton.value;
    popupTitle.innerText = projects[projectNumber - 1].name;
    technologiesList.innerHTML = '';
    popupDetails.innerHTML = '';
    for (let i = 0; i < projects[projectNumber - 1].technologies.length; i += 1) {
      const tech = document.createElement('li');
      tech.innerText = projects[projectNumber - 1].technologies[i];
      technologiesList.appendChild(tech);
      tech.classList.add('popup-skill');
    }
    popupText.innerText = projects[projectNumber - 1].bigDescription;

    const imageTag = document.createElement('img');
    imageTag.classList.add('popup-image');
    imageTag.setAttribute('alt', 'Project image');
    imageTag.setAttribute('src', projects[projectNumber - 1].imageUrl);
    popup.childNodes.forEach((node) => {
      if (node.nodeName === 'IMG') node.remove();
    });
    popup.insertBefore(imageTag, popupDescription);

    popupContainer.style.display = 'flex';
    for (let i = 0; i < projects[projectNumber - 1].details.length; i += 1) {
      const det = document.createElement('span');
      if (i > 0) {
        const str = '';
        det.innerText = str + projects[projectNumber - 1].details[i];
        det.classList.add('grey-color');
      } else {
        det.innerText = projects[projectNumber - 1].details[i];
      }
      det.classList.add('item');
      popupDetails.appendChild(det);
    }
    liveUrl.href = projects[projectNumber - 1].linkLive;
    sourceUrl.href = projects[projectNumber - 1].linkSource;
  });
});

closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});
hamb.addEventListener('click', () => {
  first.style.display = 'none';
  menu.style.display = 'flex';
});
closebt.addEventListener('click', () => {
  first.style.display = 'flex';
  menu.style.display = 'none';
});
link1.addEventListener('click', () => {
  first.style.display = 'flex';
  menu.style.display = 'none';
});
link2.addEventListener('click', () => {
  first.style.display = 'flex';
  menu.style.display = 'none';
});
link3.addEventListener('click', () => {
  first.style.display = 'flex';
  menu.style.display = 'none';
});