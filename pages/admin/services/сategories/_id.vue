<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Категории</h4>
                    </div>
                    <div class="card-body">
                        <div v-if="loading">
                            loading
                        </div>
                        <div v-else>
                            <el-input placeholder="Введите категорию" v-model="category.title"></el-input>
                            <div>
                                <el-button type="primary" @click="saveCat">Сохранить</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        layout: 'admin',
        name: "categoryItem",
        data(){
            return {
                category: [],
                loading: true
            }
        },
        methods: {
            saveCat(){
                //this.$store.dispatch('data/category/UPDATE_CATEGORY_ITEM', this.$route.params.id, this.category);
                let uri = process.env.baseUrl + `services/categories/${this.$route.params.id}`;
                axios.post(uri, this.category).then((response) => {
                    this.$notify({
                        title: 'Успех',
                        message: 'Категория изменена',
                        type: 'success'
                    });
                    this.$router.push({path: '/admin/services/сategories'});
                });
            },
        },
        mounted() {
            if(this.$route.params.id){
                let uri = process.env.baseUrl + `services/categories/${this.$route.params.id}`;
                axios.get(uri).then((response) => {
                    this.category = response.data;
                    this.loading = false;
                });
            }
        },
    }
</script>

<style scoped>

</style>
