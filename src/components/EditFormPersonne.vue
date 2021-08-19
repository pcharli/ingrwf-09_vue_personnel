<template>
  <div class="new-personne">
    <!-- bulma card -->
    <div class="card section">
      <h1>Editer une personne</h1>
                 <input type="text" class="input" placeholder="url de l'image" v-model="newDataPersonne.picture">
                        <input class="input" type="text" placeholder="url vignette" v-model="newDataPersonne.vignette">
                   
                    <div class="media-content">
                      <p class="title is-4">
                          <input class="input" type="text" placeholder="firstname" v-model="newDataPersonne.firstname">
                          <input class="input" type="text" placeholder="lastname" v-model="newDataPersonne.lastname"></p>
                      <p class="subtitle is-6">
                          <input class="input" type="text" placeholder="company" v-model="newDataPersonne.company">
                        </p>
                    </div>
              
                  <div class="content">
                    <textarea class="textarea" name="" id="" cols="30" rows="10" placeholder="description" v-model="newDataPersonne.description"></textarea>
                    <br>
                    <label for="" class="label">Keywords (séparé par une virgule)</label><textarea name="" id="" cols="30" rows="10" v-model="newDataPersonne.tags"></textarea>
                  </div>
                  <label for="" class="checkbox">
                  <input type="checkbox" v-model="newDataPersonne.directeur"> Directeur</label>
                  <br><button class="button is-primary" @click.prevent="editPersonne()">Editer</button>
                </div>
    <!-- end bulma card -->
  </div>
</template>

<script>
export default {
  name: 'EditFormPersonne',
  data() {
      return {
          newDataPersonne: this.personne
      }
  },
  props: ["personne"],
  methods: {
   editPersonne() {
       /*if(this.newDataPersonne.tags.length > 0) {
           console.log(this.newDataPersonne.tags)
           this.newDataPersonne.tags = this.newDataPersonne.tags.split(',')
        }*/
        this.$emit("EditPersonne",this.newDataPersonne)
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.personne {
  width: 30%;
  margin-top: 1rem;
}
</style>
