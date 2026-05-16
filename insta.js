//SIDEBAR
const meanuItems=document.querySelectorAll('.menu-item');

//MESSAGES
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

// select elements
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');





const changeActiveItem=()=>{
meanuItems.forEach(item => {
    item.classList.remove('active');
})
}

meanuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');

if(item.id != 'notifications'){
    document.querySelector('.notification-popup').style.display='none'; 
}
    else{
 document.querySelector('.notification-popup').style.display='block'; 

  document.querySelector('#notifications .notification-count').style.display = 'none';
}
    
    })
})


// =============================== MESSAGE =================================

// SEARCH FUNCTION

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();

    message.forEach(user => {
        let name= user.querySelector('h5').textContent.toLowerCase();

        if(name.indexOf(val)!=-1){
            user.style.display='flex';
        }
        else{
            user.style.display='none';
        }
    })
}


// EVENT FOR SEARCH
messageSearch.addEventListener('keyup',searchMessage);


//NOTIFICATION COUNT
messageNotification.addEventListener('click',()=>{
    messageNotification.querySelector('.notification-count').style.display = 'none';
})


// THEME CUSTOMIZATION

//OPEN MODAL
const openThemeModal = ()=>{
    themeModal.style.display='grid';
}

//CLOSE MODAL
const closeThemeModal = (e)=>{
if(e.target.classList.contains('customize-theme'))
    themeModal.style.display='none';
}

//CLOSE MODAL (EVENT)
themeModal.addEventListener('click',closeThemeModal);

//OPEN MODAL (EVENT)
theme.addEventListener('click',openThemeModal);







// REMOVE ACTIVE CLASS FROM ALL BUTTONS
const removeSizeSelector = () => {
  fontSizes.forEach(size => size.classList.remove('active'));
};

// CLICK EVENT FOR EACH FONT SIZE
fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    // REMOVE ACTIVE FROM ALL
    removeSizeSelector();

    // ADD ACTIVE TO CLICKED
    size.classList.add('active');

    let fontSize = '';

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
     

    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
    
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
     
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
     
    }

    // APPLY FONT SIZE TO WHOLE PAGE
    document.documentElement.style.fontSize = fontSize;
  });
});



// handle color click
colorPalette.forEach(color => {
  color.addEventListener('click', () => {

    let primaryHue;

    // determine selected color
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } 
    else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } 
    else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } 
    else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } 
    else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }

    // remove active class from all
    colorPalette.forEach(c => c.classList.remove('active'));

    // add active class to clicked one
    color.classList.add('active');

    // update CSS variable
    root.style.setProperty('--primary-color-hue', primaryHue);

  });
});


// variables
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

// change background colors

Bg1.addEventListener('click', () => {
  // add active class
  Bg1.classList.add('active');

  // remove active class from the others
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');

  // remove customized changes from local storage
  window.location.reload();
});

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  // add active class
  Bg2.classList.add('active');

  // remove active class from the others
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  
  changeBG();

});


Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  // add active class
  Bg3.classList.add('active');

  // remove active class from others
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');

  changeBG();
});