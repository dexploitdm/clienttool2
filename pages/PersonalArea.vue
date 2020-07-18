<template>
    <main class="personal-area">
        <section class="title-pages">
            <div class="container">
                <div class="top-title">
                    <h1>
                        Программное обеспечение для управления строительством
                    </h1>
                    <p>
                        Сервисы, похожие на Яндекс.Почта относятся к сфере электронная почта. Список отсортирован в
                        порядке уместности.
                        Чтобы найти подходящий аналог, сравните сервисы, прочтите описание и отзывы.
                    </p>
                </div>
            </div>
        </section>
        <section class="description-box">
            <div class="container">
                <div class="description-box--content">
                    <div class="description-box--content_elements">

                        <div class="description-el" v-for="(des,index) in descriptionElement"
                             >
                            <div class="description-el--top-content">
                                <div class="logo-box">
                                    <a :href="des.link" class="img-box">
                                        <img :src="'/images/rec/' + des.logo">
                                    </a>
                                    <div class="rating-box">
                                        <div class="star-box">
                                           <span>
                                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                           </span>
                                            <span>
                                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                           </span>
                                            <span>
                                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                           </span>
                                            <span>
                                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                           </span>
                                            <span>
                                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                           </span>
                                        </div>
                                        <p> ({{ des.reviews }} отзыв)</p>
                                    </div>
                                </div>
                                <div class="text-box">
                                    <div class="advertising" :class="{ 'is-active': des.advertising }">
                                        Реклама
                                    </div>
                                    <a :href="des.link">
                                        {{ des.nameEl }}
                                    </a>
                                    <p> {{ des.desc }}</p>
                                </div>
                                <div class="controls-box">
                                    <a :href="des.link" data-text="Сайт" ></a>
                                    <div class="controls-box--input bookmarks-el">
                                        <input id="control1.0" type="checkbox">
                                        <label for="control1.0">
                                            В закладки
                                        </label>
                                    </div>
                                    <div class="controls-box--input">
                                        <input id="control1.1" type="checkbox">
                                        <label for="control1.1">
                                            менеджер
                                        </label>
                                    </div>
                                    <div class="controls-box--input">
                                        <input id="control1.2" type="checkbox">
                                        <label for="control1.2">
                                            менеджер
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="description-el--bottom-content" :class="{'is-active':mobile_list == index}" >
                                <div class="will-do--category">
                                    <div class="top-box">
                                        <p>м <span>Малый бизнес</span></p>
                                        <p>с <span>Средний бизнес</span></p>
                                        <p>к <span>Крупный бизнес</span></p>
                                    </div>
                                    <div class="bottom-box">
                                        <span>B2B</span>
                                        <span>B2C</span>
                                    </div>

                                </div>
                                <div class="show-bottom--content">
                                    <p>Подойдёт для:</p>
                                    <div class="will-do">
                                        <div class="will-row">
                                            <input id="el1.1" type="checkbox">
                                            <label for="el1.1">
                                                менеджер
                                            </label>
                                        </div>
                                        <div class="will-row">
                                            <input id="el1.2" type="checkbox">
                                            <label for="el1.2">
                                                маркетолог
                                            </label>
                                        </div>
                                        <div class="will-row">
                                            <input id="el1.3" type="checkbox">
                                            <label for="el1.3">
                                                блогер
                                            </label>
                                        </div>
                                        <div class="will-row">
                                            <input id="el1.4" type="checkbox">
                                            <label for="el1.4">
                                                бизнес
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="arrow-show" :class="{'is-active':mobile_list == index}" @click="show_list_mobile(index)">
                                    <span v-if="mobile_list == index">
                                       Скрыть
                                    </span>
                                    <span v-else>
                                        Показать
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <aside>
                        <div class="button-filter--visible" @click="filterVisible = !filterVisible">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-filter fa-w-16 fa-3x"><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" class=""></path></svg>
                        </div>
                        <div :class="{ 'is-active': filterVisible }" class="filters-content-box">
                            <form action="">
                                <div class="filters-box"  :class="{ 'is-active': inputEl }">
                                    <h4 @click="inputEl = !inputEl" :class="{ 'is-active': inputEl }">Коллаборации</h4>
                                    <div  class="input-container">
                                        <div class="input-box">
                                            <input type="checkbox" id="1.1">
                                            <label for="1.1">Финансы </label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="1.2">
                                            <label for="1.2">Финансы </label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="1.3">
                                            <label for="1.3">Финансы </label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="1.4">
                                            <label for="1.4">Финансы </label>
                                        </div>
                                    </div>

                                </div>
                                <div class="filters-box"  :class="{ 'is-active': inputEl1 }">
                                    <h4 @click="inputEl1 = !inputEl1" :class="{ 'is-active': inputEl1 }">Collaboration1</h4>
                                    <div class="input-container">
                                        <div class="input-box">
                                            <input type="checkbox" id="2.1">
                                            <label for="2.1">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="2.2">
                                            <label for="2.2">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="2.3">
                                            <label for="2.3">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="2.4">
                                            <label for="2.4">Collaboration</label>
                                        </div>
                                    </div>

                                </div>
                                <div class="filters-box"  :class="{ 'is-active': inputEl2 }">
                                    <h4 @click="inputEl2 = !inputEl2" :class="{ 'is-active': inputEl2 }">Collaboration2</h4>
                                    <div class="input-container">
                                        <div class="input-box">
                                            <input type="checkbox" id="3.1">
                                            <label for="3.1">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="3.2">
                                            <label for="3.2">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="3.3">
                                            <label for="3.3">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="3.4">
                                            <label for="3.4">Collaboration</label>
                                        </div>
                                    </div>

                                </div>
                                <div class="filters-box"  :class="{ 'is-active': inputEl3 }">
                                    <h4 @click="inputEl3 = !inputEl3" :class="{ 'is-active': inputEl3 }">Collaboration3</h4>
                                    <div class="input-container">
                                        <div class="input-box">
                                            <input type="checkbox" id="4.1">
                                            <label for="4.1">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="4.2">
                                            <label for="4.2">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="4.3">
                                            <label for="4.3">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="4.4">
                                            <label for="4.4">Collaboration</label>
                                        </div>
                                    </div>

                                </div>
                                <div class="filters-box"  :class="{ 'is-active': inputEl4}">
                                    <h4 @click="inputEl4 = !inputEl4" :class="{ 'is-active': inputEl4 }">Collaboration4</h4>
                                    <div class="input-container">
                                        <div class="input-box">
                                            <input type="checkbox" id="5.1">
                                            <label for="5.1">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="5.2">
                                            <label for="5.2">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="5.3">
                                            <label for="5.3">Collaboration</label>
                                        </div>
                                        <div class="input-box">
                                            <input type="checkbox" id="5.4">
                                            <label for="5.4">Collaboration</label>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div class="aside-content">
                            <h2>
                                Похожие категории
                            </h2>
                            <ul>
                                  <li class="is-active"><a href="#">Маркетинг</a></li>
                                  <li><a href="#"> Маркетинг в социальных сетях</a></li>
                                  <li><a href="#"> Веб-аналитика</a></li>
                                  <li><a href="#"> Анализ конкурентов</a></li>
                                  <li><a href="#"> Email-маркетинг</a></li>
                                  <li><a href="#"> Таргетированная реклама и продвижение в социальных сетях</a></li>
                                  <li><a href="#"> SEO-продвижение</a></li>
                                  <li><a href="#"> Онлайн-опросы</a></li>
                                  <li><a href="#"> Обратный звонок</a></li>
                                  <li><a href="#"> Контент-маркетинг</a></li>
                                  <li><a href="#"> Landing Page</a></li>
                                  <li><a href="#"> СМС-рассылки</a></li>
                                  <li><a href="#"> Колл-трекинг</a></li>
                                  <li><a href="#"> Мониторинг цен</a></li>
                                  <li><a href="#"> Контекстная реклама</a></li>
                                  <li><a href="#"> Управление рекламой</a></li>
                                  <li><a href="#"> Push-уведомления</a></li>
                                  <li><a href="#"> Реферальный маркетинг</a></li>
                                  <li><a href="#"> ASO-продвижение</a></li>
                                  <li><a href="#"> Все категории</a></li>
                            </ul>
                            <span data-text="Все категории">
                            </span>
                        </div>
                    </aside>
                </div>
            </div>
            <div class="compare">
                <div class="container">
                    <h6>Сравнить (<span>2</span>) Программные продукты для управления строительством</h6>
                    <div class="compare-content--box">
                        <div class="compare-content">
                            <div class="compare-box img-el" >
                                <img src="/images/rec/1.png" alt="img">
                                <span></span>
                            </div>
                            <div class="compare-box img-el" >
                                <img src="/images/rec/1.png" alt="img">
                                <span></span>
                            </div>
                            <div class="compare-box">
                                <span></span>
                            </div>
                            <div class="compare-box">
                                <span></span>
                            </div>
                        </div>
                        <div class="button-box">
                            <span class="compare-button" data-compare="Сравнить сейчас">

                            </span>
                            <span class="reset-compare" >
                                Очистить список
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </main>
</template>

<script>

export default {
    name: "PersonalArea",
    data() {

        return {
            inputEl:false,
            inputEl1:false,
            inputEl2:false,
            inputEl3:false,
            inputEl4:false,
            mobile_list: null,
            filterVisible:null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            descriptionElement: [
                {
                    logo: '1.png',
                    star: 'star.jpg',
                    assessment: 3,
                    reviews: 169,
                    desc: 'Adaptive Discovery from Adaptive Insights is a cloud-based visualization platform with drag-and-drop design that allows end users to create visualizations without the need for IT resources. The solution can incorporate data from company’s...',
                    link: '#',
                    nameEl: 'Adaptive Discovery',
                    isActive: true,
                    advertising: true,
                },
                {
                    logo: '1.png',
                    star: 'star.jpg',
                    assessment: 3,
                    reviews: 169,
                    desc: 'Adaptive Discovery from Adaptive Insights is a cloud-based visualization platform with drag-and-drop design that allows end users to create visualizations without the need for IT resources. The solution can incorporate data from company’s...',
                    link: '#',
                    nameEl: 'Adaptive Discovery',
                    isActive: true,
                    advertising: true,
                },
                {
                    logo: '1.png',
                    star: 'star.jpg',
                    assessment: 3,
                    reviews: 169,
                    desc: 'Adaptive Discovery from Adaptive Insights is a cloud-based visualization platform with drag-and-drop design that allows end users to create visualizations without the need for IT resources. The solution can incorporate data from company’s...',
                    link: '#',
                    nameEl: 'Adaptive Discovery',
                    isActive: true,
                    advertising: false,
                },
                {
                    logo: '1.png',
                    star: 'star.jpg',
                    assessment: 3,
                    reviews: 169,
                    desc: 'Adaptive Discovery from Adaptive Insights is a cloud-based visualization platform with drag-and-drop design that allows end users to create visualizations without the need for IT resources. The solution can incorporate data from company’s...',
                    link: '#',
                    nameEl: 'Adaptive Discovery',
                    isActive: true,
                    advertising: false,
                },
                {
                    logo: '1.png',
                    star: 'star.jpg',
                    assessment: 3,
                    reviews: 169,
                    desc: 'Adaptive Discovery from Adaptive Insights is a cloud-based visualization platform with drag-and-drop design that allows end users to create visualizations without the need for IT resources. The solution can incorporate data from company’s...',
                    link: '#',
                    nameEl: 'Adaptive Discovery',
                    isActive: true,
                    advertising: false,
                },
                {
                    logo: '1.png',
                    star: 'star.jpg',
                    assessment: 3,
                    reviews: 169,
                    desc: 'Adaptive Discovery from Adaptive Insights is a cloud-based visualization platform with drag-and-drop design that allows end users to create visualizations without the need for IT resources. The solution can incorporate data from company’s...',
                    link: '#',
                    nameEl: 'Adaptive Discovery',
                    isActive: true,
                    advertising: false,
                }
            ]
        }
    },
    methods: {
        show_list_mobile(index) {
            if(index == this.mobile_list){
                this.mobile_list = null
            }else{
                this.mobile_list = index
            }

        },

    }
}
</script>

<style scoped>

</style>
