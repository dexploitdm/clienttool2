<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Добавление категории</h4>
                    </div>
                    <div class="card-body">
                        <el-input placeholder="Введите категорию" v-model="title"></el-input>
                        <button class="backend-btn" @click="saveCat">Сохранить</button>
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
        name: "categoryCreate",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            saveCat(){
                let uri = process.env.baseUrl + `services/categories/create`;
                axios.post(uri, {
                    title: this.title
                }).then((response) => {
                    this.$store.dispatch('data/category/GET_CATEGORIES')
                    this.$router.push({path: '/admin/services/сategories'});
                });
            },
            // formSubmit(e) {
            //     console.log('sdfs')
            //     e.preventDefault();
            //     let currentObj = this;
            //     const config = {
            //         headers: { 'content-type': 'multipart/form-data' }
            //     }
            //     let formData = new FormData();
            //
            //     formData.append('title', this.title);
            //
            //     let uri = process.env.baseUrl + `services/categories/create`;
            //     axios.post(uri,[{title: this.title}], config)
            //         .then(function (response) {
            //             //currentObj.success = response.data.success;
            //
            //         })
            //         .catch(function (error) {
            //
            //         });
            // },
        }
    }
</script>

<style scoped>

</style>
