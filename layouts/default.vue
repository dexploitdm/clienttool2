<template>
    <div v-bind:class="{'modal-win': stateModalLayout}"
        class="wrapper">
        <top-nav/>
        <mobile-menu/>
        <main>
            <nuxt/>
        </main>
        <footer-box/>
    </div>
</template>

<script>
    import TopNav from "./partials/TopNav";
    import MobileMenu from "~/components/base/header/mobileMenu.vue";
    import FooterBox from "./partials/FooterBox";

    export default {
        components: {
            TopNav,
            MobileMenu,
            FooterBox
        },
        data(){
            return {
                servicesData: [],
                catalogsData: [],
            }
        },
        created() {
            this.$store.dispatch('data/users/GET_USER')
            this.$store.dispatch('data/category/GET_CATEGORIES')
            this.$store.dispatch('data/services/GET_SERVICES')
        },
        methods: {
            // formatData(servicesData, catalogsData){
            //
            //     let arrData = []
            //
            //     for (let i = 0; i < catalogsData.length; i++) {
            //         let currentID = catalogsData[i].id;
            //         let catCurrentTitle = catalogsData[i].title;
            //
            //         let catCurrentServices = [];
            //
            //         //Перебор сервисов
            //         for (let i = 0; i < servicesData.length; i++) {
            //             let catID = servicesData[i].category_id;
            //             let arrIDS = []
            //             if(catID){
            //                 let mas = [],
            //                     j = 0;
            //                 for (let i = 0; i < catID.length; i++) {
            //                     if (catID[i] == ",") { j++; continue; }
            //                     else {
            //                         mas[j] ? mas[j] += catID[i] : mas[j] = catID[i];
            //                     }
            //                 }
            //                 arrIDS = mas;
            //             }
            //             let isFind = false;
            //             for(let y=0; y<arrIDS.length; y++) {
            //                 if(Number(currentID) === Number(arrIDS[y])) {
            //                     isFind = true
            //                 }
            //             }
            //             if(isFind){
            //                 let servicesItem = servicesData[i];
            //                 catCurrentServices.push(servicesItem)
            //             }
            //             isFind = false
            //         }
            //         //Если есть сервису в данной категории
            //         if(catCurrentServices.length){
            //             arrData.push({currentID, catCurrentTitle, catCurrentServices})
            //         }
            //     }
            //     this.$store.dispatch('data/services/SET_CATEGORIES_SERVICES', arrData);
            // },
            getData() {
                // if(this.catalogsData && this.servicesData){
                //     this.formatData(this.servicesData, this.catalogsData)
                // }
            },
        },
        watch: {
            services () {
                this.servicesData = this.services;
                this.getData()
            },
            // categories () {
            //     this.catalogsData = this.categories;
            //     this.getData()
            // }
        },
        computed: {
            // categories() {
            //     return this.$store.state.data.category.categories;
            // },
            services() {
                return this.$store.state.data.services.services;
            },
            stateModalLayout() {
                return this.$store.state.others.modals.modalLayout;
            },
        }
    };
</script>

<style lang="scss">
    @import "~assets/scss/site.scss";
</style>
