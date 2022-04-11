let do_you_like_this_or_not = document.querySelector('.do-you-like-this-or-not-wrapper');
let yes_btn = document.querySelector('.do-you-like-this-yes-button');
let dibya_like_it = document.querySelector('.like-this-yes-wrapper');

if(localStorage.getItem('dibya-like-it') === 'yes'){
    dibya_like_it.classList.add('sushant-and-dibya-are-awesome');
    do_you_like_this_or_not.classList.add('sushant-and-dibya-are-awesome');
}

// else{
    yes_btn.addEventListener('click', () => {
        do_you_like_this_or_not.classList.toggle('sushant-and-dibya-are-awesome');
        dibya_like_it.classList.toggle('sushant-and-dibya-are-awesome');
        localStorage.setItem('dibya-like-it','yes');
    });
// }