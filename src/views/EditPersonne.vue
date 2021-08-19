<template>
    <div>
        <h1>Edit personne n° {{ $route.params.id }}</h1>
        <edit-form-personne v-if="personne.index" @EditPersonne="EditPersonne" :personne="personne"></edit-form-personne>
        <p v-else>Loading</p>
    </div>
</template>

<script>
import service from '@/services/personnel'
import EditFormPersonne from '@/components/EditFormPersonne'

    export default {
        name: 'editPersonne',
        created() {
            service.onePersonne(this.$route.params.id)
            .then(response => {
                console.log(response)
                this.personne = response
            })
            .catch(error => console.log(error))
        },
        data() {
            return {
                personne: {}
            }
        },
        methods: {
            EditPersonne(newDataPersonne) {
                //console.log(newDataPersonne)
                service.edit(newDataPersonne)
                .then(
                    response => {
                        console.log(response)
                        this.$router.push('/')
                        })
                .catch(error => console.log(error))
            }
        },
        components: {
            EditFormPersonne
        },
    }
</script>

<style scoped>
    
</style>