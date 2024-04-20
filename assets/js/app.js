


$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 688,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
  ]
});

$('.responsive_2').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 688,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
  ]
});



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});


$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".nav-bg").css("background", "#252552");
    }

    else {
      $(".nav-bg").css("background", "transparent");
    }
  })
})


// ==============chng date and month

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const shownDate = document.querySelector("#data");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

const currentDate = new Date(2024, 5, 29);
function updateData() {
  const newDate = currentDate.getDate()
  const month = currentDate.getMonth();
  shownDate.innerHTML = `${monthNames[month]} ${newDate}`
}
updateData()

increment.addEventListener("click", function () {
  currentDate.setDate(currentDate.getDate() + 1);
  updateData()
})
decrement.addEventListener("click", function () {
  currentDate.setDate(currentDate.getDate() - 1);
  updateData()
})


const Monthname = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = document.getElementById("Data");
const increment2 = document.getElementById("increment2");
const decrement2 = document.getElementById("decrement2");

const date = new Date(2024, 5, 29);
function mydata() {
  const newdate = date.getDate()
  const months = date.getMonth();
  data.innerHTML = `${Monthname[months]} ${newdate}`
}
mydata()

increment2.addEventListener("click", function () {
  date.setDate(date.getDate() + 1);
  mydata()
})
decrement2.addEventListener("click", function () {
  date.setDate(date.getDate() - 1);
  mydata()
})

