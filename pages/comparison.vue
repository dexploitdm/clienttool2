<template>
    <div class="comparison-page">
        <div class="comparison-title">
            <div class="container">
                <h1>Microsoft vs Тинькофф vs Google диск</h1>
            </div>
        </div>
        <div class="container">
            <div class="comparison-slider--content">
                <div class="comparison-slider--left">
                    <div class="price left-box--el">
                        <p>Цена</p>
                    </div>
                    <div class="for-whom left-box--el">
                        <p>Для кого?</p>
                    </div>
                    <div class="rating left-box--el">
                        <p>Рейтинг</p>
                    </div>
                    <div class="convenience left-box--el">
                        <p>Удобство</p>
                    </div>
                    <div class="opportunities left-box--el" :class="{ 'is-active': listBox1 }">
                        <p>Возможности</p>
                    </div>
                    <div class="platforms left-box--el">
                        <p>Платформы</p>
                    </div>
                    <div class="interface left-box--el">
                        <p>Интерфейс</p>
                    </div>
                </div>
                <div class="comparison-slider--right">
                    <div class="comparison-slider--scroll">
                        <div class="comparison-slider-el">
                            <div class="top-box">
                                <div class="img-box">
                                    <img src="images/mslogo.jpg" alt="">
                                </div>
                                <p>Microsoft</p>
                                <a href="#">Сайт</a>
                            </div>
                            <div class="price">
                                <h5>Цена</h5>
                                <p>1.250 руб.</p>
                            </div>
                            <div class="for-whom--content">
                                <h5>Для кого?</h5>
                                <p> Менеджер</p>
                                <p> Маркетолог</p>
                                <p> Веб разработчик</p>
                            </div>
                            <div class="star-box">
                                <h5>Рейтинг</h5>
                                <div  class="el-rate">
                                        <span class="el-rate__item"  style="cursor: pointer;">
                                        <i class="el-rate__icon el-icon-star-on"  style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"  style="cursor: pointer;">
                                        <i class="el-rate__icon el-icon-star-on"  style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-on"
                                        style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-on"
                                        style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-off"
                                        style="color: rgb(198, 209, 222);"><!----></i></span>
                                </div>
                            </div>
                            <div class="rating">
                                <h5>Удобство</h5>
                                <p>4.0/5</p>
                            </div>
                            <div class="opportunities-list">
                                <h5>Возможности</h5>
                                <div class="list-container">
                                    <h4 @click="listBox1 = !listBox1" :class="{ 'is-active': listBox1 }">Отслеживание заявителя</h4>
                                    <ul :class="{ 'is-active': listBox1 }">
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 @click="listBox2 = !listBox2" :class="{ 'is-active': listBox2 }">Администрация
                                        преимуществ </h4>
                                    <ul :class="{ 'is-active': listBox2 }">
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 @click="listBox3 = !listBox3" :class="{ 'is-active': listBox3 }">Администрация
                                        преимуществ </h4>
                                    <ul :class="{ 'is-active': listBox3 }">
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 @click="listBox4 = !listBox4" :class="{ 'is-active': listBox4 }">Человеческие ресурсы</h4>
                                    <ul :class="{ 'is-active': listBox4 }">
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4>Оценка производительности</h4>
                                    <ul>
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="platform-box">
                                <h5>Платформы</h5>
                                <ul>
                                    <li class="approved-el"> Windows</li>
                                    <li class="close-el">Mac</li>
                                    <li class="approved-el">Linux</li>
                                    <li class="close-el">Web</li>
                                </ul>
                            </div>
                            <div class="interface-img">
                                <h5>Интерфейс</h5>
                                <div class="img-box">
                                    <img src="images/img-sliders.jpg" alt="img">
                                </div>
                            </div>
                        </div>
                        <div class="comparison-slider-el">
                            <div class="top-box">
                                <div class="img-box">
                                    <img src="images/mslogo.jpg" alt="">
                                </div>
                                <p>Microsoft</p>
                                <a href="#">Сайт</a>
                            </div>
                            <div class="price">
                                <h5>Цена</h5>
                                <p>1.250 руб.</p>
                            </div>
                            <div class="for-whom--content">
                                <h5>Для кого?</h5>
                                <p> Менеджер</p>
                                <p> Маркетолог</p>
                                <p> Веб разработчик</p>
                            </div>
                            <div class="star-box">
                                <h5>Рейтинг</h5>
                                <div  class="el-rate">
                                        <span class="el-rate__item"  style="cursor: pointer;">
                                        <i class="el-rate__icon el-icon-star-on"  style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"  style="cursor: pointer;">
                                        <i class="el-rate__icon el-icon-star-on"  style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-on"
                                        style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-on"
                                        style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-off"
                                        style="color: rgb(198, 209, 222);"><!----></i></span>
                                </div>
                            </div>
                            <div class="rating">
                                <h5>Удобство</h5>
                                <p>4.0/5</p>
                            </div>
                            <div class="opportunities-list">
                                <h5>Возможности</h5>
                                <div class="list-container">
                                    <h4 >Отслеживание заявителя</h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 >Администрация
                                        преимуществ </h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 >Администрация
                                        преимуществ </h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 >Человеческие ресурсы</h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4>Оценка производительности</h4>
                                    <ul>
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="platform-box">
                                <h5>Платформы</h5>
                                <ul>
                                    <li class="approved-el"> Windows</li>
                                    <li class="close-el">Mac</li>
                                    <li class="approved-el">Linux</li>
                                    <li class="close-el">Web</li>
                                </ul>
                            </div>
                            <div class="interface-img">
                                <h5>Интерфейс</h5>
                                <div class="img-box">
                                    <img src="images/img-sliders.jpg" alt="img">
                                </div>
                            </div>
                        </div>
                        <div class="comparison-slider-el">
                            <div class="top-box">
                                <div class="img-box">
                                    <img src="images/mslogo.jpg" alt="">
                                </div>
                                <p>Microsoft</p>
                                <a href="#">Сайт</a>
                            </div>
                            <div class="price">
                                <h5>Цена</h5>
                                <p>1.250 руб.</p>
                            </div>
                            <div class="for-whom--content">
                                <h5>Для кого?</h5>
                                <p> Менеджер</p>
                                <p> Маркетолог</p>
                                <p> Веб разработчик</p>
                            </div>
                            <div class="star-box">
                                <h5>Рейтинг</h5>
                                <div  class="el-rate">
                                        <span class="el-rate__item"  style="cursor: pointer;">
                                        <i class="el-rate__icon el-icon-star-on"  style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"  style="cursor: pointer;">
                                        <i class="el-rate__icon el-icon-star-on"  style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-on"
                                        style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-on"
                                        style="color: rgb(255, 153, 0);"><!----></i></span>
                                    <span class="el-rate__item"
                                          style="cursor: pointer;"><i
                                        class="el-rate__icon el-icon-star-off"
                                        style="color: rgb(198, 209, 222);"><!----></i></span>
                                </div>
                            </div>
                            <div class="rating">
                                <h5>Удобство</h5>
                                <p>4.0/5</p>
                            </div>
                            <div class="opportunities-list">
                                <h5>Возможности</h5>
                                <div class="list-container">
                                    <h4 >Отслеживание заявителя</h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 >Администрация
                                        преимуществ </h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 >Администрация
                                        преимуществ </h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4 >Человеческие ресурсы</h4>
                                    <ul >
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                                <div class="list-container">
                                    <h4>Оценка производительности</h4>
                                    <ul>
                                        <li class="question approved-el">Объявление о вакансии</li>
                                        <li class="close-el">Требуемая работа</li>
                                        <li class="approved-el">Вводный</li>
                                        <li class="close-el">Рекрутинговые Фирмы</li>
                                        <li class="approved-el">Проверка ссылок</li>
                                        <li class="approved-el">Возобновить анализ</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="platform-box">
                                <h5>Платформы</h5>
                                <ul>
                                    <li class="approved-el"> Windows</li>
                                    <li class="close-el">Mac</li>
                                    <li class="approved-el">Linux</li>
                                    <li class="close-el">Web</li>
                                </ul>
                            </div>
                            <div class="interface-img">
                                <h5>Интерфейс</h5>
                                <div class="img-box">
                                    <img src="images/img-sliders.jpg" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
name: "comparison",
    data(){
        return{
            listBox1:false,
            listBox2:false,
            listBox3:false,
            listBox4:false,
        }
    }
}
</script>

<style scoped>

</style>
