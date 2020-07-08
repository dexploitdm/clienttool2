<template>
 <main class="personal-component">
     <section class="personal-content">
         <div class="container">
             <div class="personal-content--column">
                <div class="column-left">
                    <div class="anchor-menu">
                        <ul>
                            <li class="is-active">
                                <a href="#">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-3x"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                                    <span>о себе</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>закладки</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                 <div class="column-right">
                        <div class="about-box">
                            <h2>О себе</h2>
                            <form action="">
                                <div class="img-box">
                                    <div class="img-el">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-3x"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                                    </div>
                                    <input type="file" id="userfile" name="userfile" />
                                    <input type="submit" name="upload" id="upload" value="Загрузить" />
                                </div>
                                <div class="input-container">
                                    <div class="input-row">
                                        <div class="input-row--el">
                                            <p>Имя</p>
                                            <input type="text">
                                        </div>
                                        <div class="input-row--el">
                                            <p>Фамилия</p>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="input-row">
                                        <div class="input-row--el">
                                            <p>Профессия</p>
                                            <input type="text">
                                        </div>
                                        <div class="input-row--el">
                                            <p>Отрасль</p>
                                            <el-select v-model="value" placeholder="Выбрать">
                                                <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="input-row">
                                        <div class="input-row--el">
                                            <p>Название компании <sppan>(опционально)</sppan></p>
                                            <input type="text">
                                        </div>
                                        <div class="input-row--el">
                                            <p>Email</p>
                                            <input type="email">
                                        </div>
                                    </div>
                                    <button type="submit">Сохранить</button>
                                </div>
                            </form>
                        </div>
                        <div class="bookmarks-box">
                            <h2>Закладки</h2>
                            <div class="description-box--content_elements">

                                <div class="description-el" v-for="des in descriptionElement" >
                                    <div class="description-el--top-content">
                                        <div class="close">
                                        </div>
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
                                            <a :href="des.link">
                                                {{ des.nameEl }}
                                            </a>
                                            <p> {{ des.desc }}</p>
                                        </div>
                                        <div class="controls-box">
                                            <a :href="des.link" data-text="Сайт" ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
             </div>
         </div>
     </section>
 </main>
</template>

<script>
export default {
name: "PersonalСomponent",
    data() {
        return {
            options: [{
                value: 'Option1',
                label: 'Option1'
            }, {
                value: 'Option2',
                label: 'Option2'
            }, {
                value: 'Option3',
                label: 'Option3'
            }, {
                value: 'Option4',
                label: 'Option4'
            }, {
                value: 'Option5',
                label: 'Option5'
            }],
            value: '',
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

                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
