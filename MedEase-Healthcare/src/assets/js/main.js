import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const swiper = new Swiper(".doctorSwiper", {
loop:true,
spaceBetween:30,
slidesPerView:1,
// autoplay:{
// delay:3000,
// disableOnInteraction:false,
// },

  navigation: {
        nextEl: ".right-arrow",
        prevEl: ".left-arrow",
    },


pagination:{
el:".swiper-pagination",
clickable:true,
},


breakpoints:{

576:{
slidesPerView:1,
},

768:{
slidesPerView:2,
},

992:{
slidesPerView:3,
},

1200:{
slidesPerView:3,
}

}

});