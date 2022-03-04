import Glide from '@glidejs/glide'

const mobileScreen = window.matchMedia("screen and (min-width: 300px) and (max-width: 660px)")

if (mobileScreen.matches) {
  // const glideOne = new Glide('.glide-1', {
  //   perView: 1,
  // })
  
  const glideTwo = new Glide('.glide-2', {
    perView: 1,
  })

  const glideThree = new Glide('.glide-3', {
    perView: 1,
  })

  glideOne.mount()
  glideTwo.mount() 
  glideThree.mount()

} else {

  // Glide Publications & Collabs
  // const glideOneInput = document.querySelector('.glide-1');
  // const glideOne = new Glide('.glide-1', {
  //   autoplay: 15000,
  //   hoverpause: true,
  //   perView: 1,
  //   animationDuration: 500,
  //   rewindDuration: 1000,
  // })
  // glideOneInput.addEventListener('glideOneInput', function (event) {
  //   glideOne.update({
  //     autoplay: (event.target.value != 0) ? event.target.value : false,
  //     animationDuration: event.target.value,
  //     rewindDuration: event.target.value
  //   })
  // })

  // Glide Awards & Events
  // const glideTwoInput = document.querySelector('.glide-2');
  // const glideTwo = new Glide('.glide-2', {
  //   autoplay: 15000,
  //   hoverpause: true,
  //   perView: 1,
  //   animationDuration: 500,
  //   rewindDuration: 1000,
  // })
  // glideTwoInput.addEventListener('glideTwoInput', function (event) {
  //   glideTwo.update({
  //     autoplay: (event.target.value != 0) ? event.target.value : false,
  //     animationDuration: event.target.value,
  //     rewindDuration: event.target.value
  //   })
  // })

  // Glide Science&Design Projects
  const glideThreeInput = document.querySelector('.glide-3');
  const glideThree = new Glide('.glide-3', {
    autoplay: 15000,
    hoverpause: true,
    perView: 1,
    animationDuration: 500,
    rewindDuration: 1000,
  })
  glideThreeInput.addEventListener('glideThreeInput', function (event) {
    glideThree.update({
      autoplay: (event.target.value != 0) ? event.target.value : false,
      animationDuration: event.target.value,
      rewindDuration: event.target.value
    })
  })

  // glideOne.mount()
  // glideTwo.mount()
  glideThree.mount()

}

// Awards Certificate Modals
// document.getElementById("modal_BRMASSAward").addEventListener("click", openBrmass => {
//   const modal = document.querySelector('.brmass_modal');
//   modal.classList.add('open_modal')
// })

// document.getElementById("modal_JICAward").addEventListener("click", openJic => {
//   const modal = document.querySelector('.jic_modal');
//   modal.classList.add('open_modal')
// })

// document.getElementById("close_modal_brmass").addEventListener("click", closeModal => {
//   const modal = document.querySelector('.brmass_modal');
//   modal.classList.remove('open_modal')
// })

// document.getElementById("close_modal_jic").addEventListener("click", closeModal => {
//   const modal = document.querySelector('.jic_modal');
//   modal.classList.remove('open_modal')
// })

// ScrollUp Button
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});