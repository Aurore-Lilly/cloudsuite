import "./index.scss";

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas) 

dom.i2svg() 




// add event listener to detect scroll
//target element to apply parallax effect to
//determine amount of pixel to determine the rate at which it will scroll


  const nav = document.querySelector('.nav')
  const target = document.querySelectorAll('.scroll');

  window.addEventListener('scroll', (event) => {
    var top = window.scrollY;
  

    if (top >= 100){
      nav.classList.add('active')
    } else {
      nav.classList.remove('active');
    }

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }



  })






