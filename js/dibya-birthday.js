
let logo_wrapper = document.querySelector('.dibya-logo-wrapper');
let what_special_today = document.querySelector('.what-special-today');

let nav_observer = new IntersectionObserver((logo_wrapper_entry) => {
	logo_wrapper_entry.forEach((item) => {
		if (!item.isIntersecting && item.target.classList.contains('what-special-today')){
			logo_wrapper.style.background = 'rgba(0, 0, 0, 0.79)'
		}else{
			logo_wrapper.style.background = 'rgba(0, 0, 0, 0.2)'
		}
	});
}, {
	rootMargin: '-42px'
});
nav_observer.observe(what_special_today);

// Birthday Intersection observer	
let happy_birthday_text = document.querySelector('.birthday-text-heading-wrapper');
let dibya_my_friend = document.querySelector('.birthday-text-extra-wrapper');
let dibya_img = document.querySelector('.birthday-dibya-image');
let dibya_name_char = document.querySelector('.dibya-name-wrapper');

let all_item_to_observe = [happy_birthday_text,dibya_my_friend,dibya_img,dibya_name_char];

let birthday_observer = new IntersectionObserver( (items) => {
	items.forEach((item) => {
		if (item.isIntersecting) {
			item.target.classList.add('sushant_intersecting');
		}
	});
},{
	rootMargin: '-100px'
});

all_item_to_observe.forEach((item) =>{
	birthday_observer.observe(item);
})

// playing birthday audio on dbclick
let birthday_text_container = document.querySelector('.birthday-text-heading-wrapper');
let birthday_audio = document.querySelector('.birthday-song-audio');
let times_click_on_birthday_text = 1

birthday_text_container.addEventListener('dblclick', () => {
	if (birthday_audio.paused){
		if (times_click_on_birthday_text === 2){
			birthday_audio.play();
			times_click_on_birthday_text = 1;
		}
		else{
			times_click_on_birthday_text ++
		}
		console.log(times_click_on_birthday_text)		
	}
});


// Dibya name full form observer
let dibya_name_full_form = document.querySelector('.dibya-meaning-question-para');
let dibya_name_letter = document.querySelectorAll('.dibya-name-chr');
let dibya_name_explanation = document.querySelectorAll('.db-name-meaning-expalanation-container');
let best_thing_happen = document.querySelector('.best-thing-para');

let dibya_name_full_form_observer = new IntersectionObserver( (items) => {
	items.forEach((item) => {
		if (item.isIntersecting) {
			item.target.classList.add('sushant_intersecting');
		}
	});
},{
	rootMargin: '-100px'
});

dibya_name_full_form_observer.observe(dibya_name_full_form);
dibya_name_full_form_observer.observe(best_thing_happen);
dibya_name_letter.forEach((char) => {
	dibya_name_full_form_observer.observe(char);
});
dibya_name_explanation.forEach((letter) => {
	dibya_name_full_form_observer.observe(letter);
});