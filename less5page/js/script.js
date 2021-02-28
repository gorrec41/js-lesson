/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
    promoAdv = document.querySelector('.promo__adv'),
    imgPromo = promoAdv.querySelectorAll('img'),
    imgBg = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    filmList = document.querySelector('.promo__interactive-list'),
    itemList = filmList.querySelectorAll('.promo__interactive-item');
    


function remuveImg() {
    for (let i = 0; i < imgPromo.length; i++) {
        imgPromo[i].remove();
    }
}

function promoGenre() {
    genre.innerHTML = 'драма';
}

function newImgBgPromo() {
    imgBg.style.backgroundImage= "url('./img/bg.jpg')";
}
function filmListSort() {
    let movieDBList=movieDB.movies.sort()
    console.log(movieDBList);
    for (let j = 0; j < itemList.length; j++){
        itemList[j].remove();
    }
    for (let k = 0; k < movieDBList.length; k++){
        filmList.innerHTML = '<li><a class="promo__menu-item promo__menu-item_active" href="#">' + movieDBList[k] +'</a></li>';
    }
    
}
remuveImg();
promoGenre();
newImgBgPromo();
// console.log(itemList);
filmListSort();
console.log(itemList);