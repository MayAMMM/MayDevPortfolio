// $(window).on("scroll", function() 
//     {
//         var scrollTop = $(window).scrollTop();
//         if(scrollTop >= 80)
//             {
//                 $('body').addClass('fixed-header');
//             }
//         else
//             {
//                 $('body').removeClass('fixed-header')
//             }
//     });

// owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.testimonial-image');

let currentIndex = 0;

function updateTestimonial(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('.testimonial-nav.left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateTestimonial(currentIndex);
});

document.querySelector('.testimonial-nav.right').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateTestimonial(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateTestimonial(index);
        currentIndex = index;
    });
});

// Initialize the first testimonial
updateTestimonial(currentIndex);
