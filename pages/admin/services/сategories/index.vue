<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Категории</h4>
                        <p class="card-category">Created using Montserrat Font Family</p>
                    </div>
                    <div class="card-body">
                        <el-button type="primary"
                                   icon="el-icon-plus"
                                   circle
                                    @click="add"/>
                        <div class="cat-lists">
                            <div class="cat-lists-item" v-for="cat in categories">
                                {{cat.title}}
                                <nuxt-link :to="{ path: '/admin/services/сategories/' + cat.id, params: { idF: 123 }}">
                                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                                </nuxt-link>
                                <el-button type="danger"
                                           icon="el-icon-delete"
                                           circle
                                            @click="removeCat(cat.id, cat.title)"
                                ></el-button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        layout: 'admin',
        name: "serviceCat",
        data(){
            return {
                //categories: [],
            }
        },
        mounted() {

        },
        methods: {
            add(){
                this.$router.push({path: '/admin/services/сategories/create'});
            },
            removeCat(id, title){
                let uri = process.env.baseUrl + `services/categories/${id}`;
                axios.delete(uri).then((response) => {
                    this.$notify({
                        title: 'Успех',
                        message: 'Категория' + title + 'удалена',
                        type: 'success'
                    });
                    this.$store.dispatch('data/category/GET_CATEGORIES')
                });
            }
        },
        computed: {
            categories() {
                return this.$store.state.data.category.categories;
            }
        }
    }
</script>

<style scoped>

</style>
