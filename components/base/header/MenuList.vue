<template>
    <div class="header-menu">
        <nuxt-link @click.native="closeDrawer" class="header-link" to="/catalogs">Категории</nuxt-link>
        <nuxt-link @click.native="closeDrawer" class="header-link" to="/promotional">Промокоды</nuxt-link>
        <nuxt-link @click.native="closeDrawer" class="header-link" to="/industries">Отрасли</nuxt-link>
        <nuxt-link @click.native="closeDrawer" class="header-link" to="/create-service">Добавить сервис</nuxt-link>
        <nuxt-link @click.native="closeDrawer" class="header-link" v-if="authenticated && isAdmin"  to="/admin">Dashboard</nuxt-link>
        <nuxt-link @click.native="closeDrawer" class="header-link" v-if="authenticated"  to="/lk">lk</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "MenuList",
        methods: {
            closeDrawer(){
                this.$store.commit('header/SET_DRAWER');
            }
        },
        computed: {
            isAdmin(){
                let isAdmin = this.$auth.user;
                if(isAdmin && isAdmin.is_admin === 1){
                    return true
                } else {
                    return false
                }
            }
        },
        created() {
            // let isAdmin = this.$auth.user;
            // if(isAdmin){
            //     console.log(isAdmin);
            // }

        }
    }
</script>

<style scoped>

</style>
