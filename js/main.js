
const questionsList = document.body.getElementsByClassName('swiper')[0];
console.log('questions', questionsList);
questionsList.insertAdjacentHTML("afterEnd", "<ul class='questions__style'><li className='question__style'></li><li className='question__style'></li><li className='question__style'></li><li className='question__style'></li></ul>")

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    direction: getDirection(),
    navigation: {
        nextEl: '.question__button_next',
        prevEl: '.question__button_prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
    allowTouchMove: false,
});

function getDirection() {
    const windowWidth = window.innerWidth;
    const direction = window.innerWidth <= 900 ? 'vertical' : 'horizontal';

    return direction;
}
