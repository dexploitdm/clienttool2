<template>
    <div class="t-instagram">
        <div class="c-header-box">
            <h2 class="title-h2">Инстаграм</h2>
        </div>
        instagram

        <instagram-list v-for="list in instaList"
            :logo="list.logo"
            :title="list.title"
            :content="list.content"
            :link="list.link"
            :description="list.description"
        />

        <div class="instagram-all">
            <button type="button" class="t-button t-all">Смотреть все</button>
        </div>
    </div>
</template>

<script>
    import instagramList from "~/components/home/instagram/List.vue";
    export default {
        name: "indexInstagram",
        components: {
            instagramList
        },
        data(){
            return {
                instaList: [{
                    logo: 'inst-logo.png',
                    title: 'Worksection',
                    content: 'Системы совместной работы',
                    link: '',
                    description: 'Описание'
                },{
                    logo: 'inst-logo.png',
                    title: 'Worksection',
                    content: 'Системы совместной работы',
                    link: '#',
                    description: ''
                },{
                    logo: 'inst-logo.png',
                    title: 'Worksection',
                    content: 'Системы совместной работы',
                    link: 'Описание',
                    description: ''
                },{
                    logo: 'inst-logo.png',
                    title: 'Worksection',
                    content: 'Системы совместной работы',
                    link: '#',
                    description: ''
                },{
                    logo: 'inst-logo.png',
                    title: 'Worksection',
                    content: 'Системы совместной работы',
                    link: '#',
                    description: ''
                },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
