<template>
    <div class="content home">
        <slider/>
        <for-whom/>
<!--        <popular-cat/>-->

        <div class="popular-category">
            <div class="container">
                <div class="popular-category--content">
                    <h2>
                        Популярные категории
                    </h2>
                    <div class="select-container">
                        <el-select v-model="value" placeholder="Маркетинг в социальных сетях">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Арбитраж трафика">
                            <el-option
                                v-for="item in options2"
                                :key="item.value2"
                                :label="item.label2"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Управление проектом">
                            <el-option
                                v-for="item in options3"
                                :key="item.value3"
                                :label="item.label3"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Системы совместной работы">
                            <el-option
                                v-for="item in options4"
                                :key="item.value4"
                                :label="item.label4"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Автоматизация продаж">
                            <el-option
                                v-for="item in options5"
                                :key="item.value5"
                                :label="item.label5"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="CRM системы">
                            <el-option
                                v-for="item in options6"
                                :key="item.value6"
                                :label="item.label6"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Веб-сайт">
                            <el-option
                                v-for="item in options7"
                                :key="item.valu7"
                                :label="item.label7"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder=" Веб-аналитика ">
                            <el-option
                                v-for="item in options8"
                                :key="item.value8"
                                :label="item.label8"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Торговля и склад ">
                            <el-option
                                v-for="item in options9"
                                :key="item.value9"
                                :label="item.label9"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Коммуникации">
                            <el-option
                                v-for="item in options10"
                                :key="item.value10"
                                :label="item.label10"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Извлечение данных">
                            <el-option
                                v-for="item in options11"
                                :key="item.value11"
                                :label="item.label11"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Бизнес-аналитика">
                            <el-option
                                v-for="item in options12"
                                :key="item.value12"
                                :label="item.label12"
                                :value="item.value12">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Разработка ПО">
                            <el-option
                                v-for="item in options13"
                                :key="item.value13"
                                :label="item.label13"
                                :value="item.value13">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="Схемы и диаграммы">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <a href="#">Смотреть все категории</a>
                </div>
            </div>
        </div>
        <div class="collections-container">
            <div class="container">
                <div class="collections-container--content">
                    <h2>Подборки</h2>
                    <div class="collections-elements">
                        <div class="collections--el">
                            <div class="top-box">
                                <img src="images/whom/award.png" alt="img">
                                <p>топ 50</p>
                            </div>
                            <div class="bottom-box">
                                <div class="img-box">
                                    <img src="images/whom/lb1.png" alt="img">
                                    <img src="images/whom/lb2.png" alt="img">
                                    <img src="images/whom/lb3.png" alt="img">
                                    <img src="images/whom/lb4.png" alt="img">
                                </div>
                                <p>+ еще 46 сервисов</p>
                            </div>

                        </div>
                        <div class="collections--el">
                            <div class="top-box">
                            <img src="images/whom/gift.png" alt="img">
                            <p>Бесплатные</p>
                            </div>
                            <div class="bottom-box">
                                <div class="img-box">
                                    <img src="images/whom/lb1.png" alt="img">
                                    <img src="images/whom/lb2.png" alt="img">
                                    <img src="images/whom/lb3.png" alt="img">
                                    <img src="images/whom/lb4.png" alt="img">
                                </div>
                                <p>+ еще 46 сервисов</p>
                            </div>
                        </div>
                        <div class="collections--el">
                            <div class="top-box">
                            <img src="images/whom/coding.png" alt="img">
                            <p>Сервисы для <br>
                                ИТ-стартапов</p>
                            </div>
                            <div class="bottom-box">
                                <div class="img-box">
                                    <img src="images/whom/lb1.png" alt="img">
                                    <img src="images/whom/lb2.png" alt="img">
                                    <img src="images/whom/lb3.png" alt="img">
                                    <img src="images/whom/lb4.png" alt="img">
                                </div>
                                <p>+ еще 46 сервисов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <card-service title="Рекомендуем" class="desktop"/>
<!--        <card-service title="Лучшие" class="desktop"/>-->
<!--        <card-service title="Бесплатные" class="desktop"/>-->
<!--        <card-service title="Новинки и обновления" class="desktop"/>-->

        <div class="instagram-container">
            <div class="container">
                <div class="instagram-column-container">
                    <div class="instagram-column">
                        <div class="instagram-column--box">
                            <h3>Инстаграм</h3>
                            <div class="instagram-column--elements">
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Описание</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <a class="show-all" href="#">Смотерть все <span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-column">
                        <div class="instagram-column--box">
                            <h3>Инстаграм</h3>
                            <div class="instagram-column--elements">
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Описание</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <a class="show-all" href="#">Смотерть все <span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="instagram-column">
                        <div class="instagram-column--box">
                            <h3>Инстаграм</h3>
                            <div class="instagram-column--elements">
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Описание</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <div class="instagram-column--box--el">
                                    <div class="img-box">
                                        <img src="images/logo1.jpg" alt="img">
                                    </div>
                                    <div class="text-box">
                                        <h4>Worksection</h4>
                                        <p>Системы совместной
                                            работы</p>
                                    </div>
                                    <div class="last-box">
                                        <a href="#">Сайт</a>
                                        <div class="start-box">
                                            <img src="images/rec/star.jpg" alt="img">
                                        </div>
                                        <span>(161 отзывов)</span>
                                    </div>
                                </div>
                                <a class="show-all" href="#">Смотерть все <span></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

<!--        <sammlungen class="mobile" />-->
<!--        <instagram class="mobile" />-->
    </div>
</template>

<script>
    import Logo from "~/components/Logo.vue";
    import Slider from "~/components/home/Slider.vue";
    import ForWhom from "~/components/home/ForWhom.vue";
    import PopularCat from "~/components/home/PopularCat.vue";
    import CardService from "~/components/base/CardService.vue";
    import Sammlungen from "~/components/home/Sammlungen.vue";
    import instagram from "~/components/home/instagram/index.vue";

    export default {
        components: {
            Logo, Slider, ForWhom, PopularCat, CardService, Sammlungen, instagram
        },
        data() {
            return {
                options: [{
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2'
                }],
                options2: [{
                    value2: 'Option1',
                    label2: 'Option1'
                }, {
                    value2: 'Option2',
                    label2: 'Option2'
                }],
                options3: [{
                    value3: 'Option1',
                    label3: 'Option1'
                }, {
                    value3: 'Option2',
                    label3: 'Option2'
                }],
                options4: [{
                    value4: 'Option1',
                    label4: 'Option1'
                }, {
                    value4: 'Option2',
                    label4: 'Option2'
                }],
                options5: [{
                    value5: 'Option1',
                    label5: 'Option1'
                }, {
                    value5: 'Option2',
                    label5: 'Option2'
                }],
                options6: [{
                    value6: 'Option1',
                    label6: 'Option1'
                }, {
                    value6: 'Option2',
                    label6: 'Option2'
                }],
                options7: [{
                    value7: 'Option1',
                    label7: 'Option1'
                }, {
                    value7: 'Option2',
                    label7: 'Option2'
                }],
                options8: [{
                    value8: 'Option1',
                    label8: 'Option1'
                }, {
                    value8: 'Option2',
                    label8: 'Option2'
                }],
                options9: [{
                    value9: 'Option1',
                    label9: 'Option1'
                }, {
                    value9: 'Option2',
                    label9: 'Option2'
                }],
                options10: [{
                    value10: 'Option1',
                    label10: 'Option1'
                }, {
                    value10: 'Option2',
                    label10: 'Option2'
                }],
                options11: [{
                    value11: 'Option1',
                    label11: 'Option1'
                }, {
                    value11: 'Option2',
                    label11: 'Option2'
                }],
                options12: [{
                    value12: 'Option1',
                    label12: 'Option1'
                }, {
                    value12: 'Option2',
                    label12: 'Option2'
                }],
                options13: [{
                    value13: 'Option1',
                    label13: 'Option1'
                }, {
                    value13: 'Option2',
                    label13: 'Option2'
                }],
                options14: [{
                    value4: 'Option1',
                    label4: 'Option1'
                }, {
                    value4: 'Option2',
                    label4: 'Option2'
                }],

                value: ''
            }
        }
    };
</script>
