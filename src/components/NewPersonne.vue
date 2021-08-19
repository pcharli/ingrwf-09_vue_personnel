<template>
  <div class="new-personne">
    <!-- bulma card -->
    <div class="card section">
      <h1>Ajouter une personne</h1>
                 <input type="text" class="input" placeholder="url de l'image" v-model="newPersonne.picture">
                        <input class="input" type="text" placeholder="url vignette" v-model="newPersonne.vignette">
                   
                    <div class="media-content">
                      <p class="title is-4">
                          <input class="input" type="text" placeholder="firstname" v-model="newPersonne.firstname">
                          <input class="input" type="text" placeholder="lastname" v-model="newPersonne.lastname"></p>
                      <p class="subtitle is-6">
                          <input class="input" type="text" placeholder="company" v-model="newPersonne.company">
                        </p>
                    </div>
              
                  <div class="content">
                    <textarea class="textarea" name="" id="" cols="30" rows="10" placeholder="description" v-model="newPersonne.description"></textarea>
                    <br>
                    <label for="" class="label">Keywords (séparé par une virgule)</label><textarea name="" id="" cols="30" rows="10" v-model="newPersonne.tags"></textarea>
                  </div>
                  <label for="" class="checkbox">
                  <input type="checkbox" v-model="newPersonne.directeur"> Directeur</label>
                  <br><button class="button is-primary" @click.prevent="addPersonne">Ajouter</button>
                </div>
    <!-- end bulma card -->
  </div>
</template>

<script>
export default {
  name: 'NewPersonne',
  data() {
      return {
          newPersonne: {
            "index": this.index,
            "vignette": "https://picsum.photos/32/32?random=1",
            "picture": "https://picsum.photos/1200/960?random=1",
            "firstname": "",
            "lastname": "",
            "company": "",
            "description": "",
            "tags": "",
            "registered": Date.now(),
            "directeur": false
        }
      }
  },
  props: ["index"],
  methods: {
   addPersonne() {
       if(this.newPersonne.tags.length > 0) {
           this.newPersonne.tags = this.newPersonne.tags.split(',')
        }
        this.$emit("addNewPersonne",this.newPersonne)
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
