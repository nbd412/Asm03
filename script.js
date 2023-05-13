'use strict'

const viewMore = document.querySelectorAll('.view-more-btn');

for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener('click', function() {
    viewMore[i].parentElement.classList.toggle('active');
  })
}

const email = document.querySelector('#email');
email.addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
}});

function submitEmail() {
  const showPersonalInfo = document.querySelector('.show-personal-info');
  const form = document.querySelector('#form');
  const emailValue = document.querySelector('#email').value;
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValue.match(regex)) {
    showPersonalInfo.classList.remove('hidden-info');
    form.classList.add('hidden-info');
    console.log(emailValue);
  } else {
    document.getElementById('text').innerHTML = 'Email không đúng định dạng vui lòng nhập lại';
  }
}