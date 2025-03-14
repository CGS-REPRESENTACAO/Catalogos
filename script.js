const HomeButton = document.querySelector('#HomeButton');
const i = document.querySelector('#i-Home-Button');
const ul_Home_Button = document.querySelector('#ul-Home-Button');


function HomeButtonClick() {
  if (HomeButton.classList.contains('active')) {
    HomeButton.classList.remove('active');
    HomeButton.style.width = '50px';
    HomeButton.style.height = '50px';
    HomeButton.style.borderRadius = '50%';
    i.style.display = 'block';
    i.style.position = 'relative';
    i.style.left = '0px';
    i.style.top = '0px';
    ul_Home_Button.style.display = 'none';
  } else {
    HomeButton.classList.add('active');
    HomeButton.style.width = '300px';
    HomeButton.style.height = '300px';
    HomeButton.style.borderRadius = '5px';
    i.style.display = 'none';
    ul_Home_Button.style.display = 'block';
  }
}

document.addEventListener("click", function (event) {
  if (!HomeButton.contains(event.target) && !ul_Home_Button.contains(event.target)) {
    HomeButton.classList.remove('active');
    HomeButton.style.width = '50px';
    HomeButton.style.height = '50px';
    HomeButton.style.borderRadius = '50%';
    i.style.display = 'block';
    i.style.position = 'relative';
    i.style.left = '0px';
    i.style.top = '0px';
    ul_Home_Button.style.display = 'none';
  }
});