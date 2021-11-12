/* eslint-disable no-undef */
/* eslint-disable no-multi-spaces */
 fullname = document.getElementById('fullname');
const emaila = document.getElementById('masu');
const comment = document.getElementById('comant');
const forminput = {
  names: fullname.value,
  email: emaila.value,
  comments: comment.value,
};
function savedata() {
  localStorage.setItem('forma', JSON.stringify(forminput));
}
fullname.addEventListener('input', () => {
  forminput.names = fullname.value;
  savedata();
});
emaila.addEventListener('input', () => {
  forminput.email = emaila.value;
  savedata();
});
comment.addEventListener('input', () => {
  forminput.comments = comment.value;
});

function updatepage() {
  const getdata =  JSON.parse(localStorage.getItem('forma'));
  fullname.value = getdata.names;
  emaila.value = getdata.email;
  comment.value = getdata.comments;
}
updatepage();
