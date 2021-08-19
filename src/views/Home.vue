<template>
  <div class="home section">
    <Personne @delPersonne="delPersonne(personne.index, index)" @changeStatut="changeStatut(index)" v-for="(personne, index) in personnel" :key="index" :qui="personne"></Personne>
    <hr>
    <new-personne @addNewPersonne="addPersonne" :index="personnel.length"></new-personne>
  </div>
</template>

<script>
// @ is an alias to /src
import Personne from '@/components/Personne'
import NewPersonne from '@/components/NewPersonne'
import service from '@/services/personnel'

export default {
  name: 'Home',
  data() {
    return {
      personnel: [],
    }
  },
  methods: {
    changeStatut(index) {
      let statut = !this.personnel[index].directeur
      this.personnel[index].directeur = statut
      service.changeStatut(index, statut)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
     addPersonne(newPersonne) {
       service.add(newPersonne)
       .then(response => {
         //add id from firebase
         console.log(response)
         newPersonne.index = response.name
         this.personnel.push(newPersonne) 
         })
       .catch(error => console.log(error))
   },
   delPersonne(index, arrayIndex) {
     service.del(index)
     .then(response => {
       console.log(response)
       this.personnel.splice(arrayIndex,1)
     })
     .catch(error => console.log(error))
   }
  },
  created() {
    service.listing()
    .then(response => this.personnel = response)
    .catch( error => console.log(error))
  },
  components: {
    Personne, NewPersonne
  }
}
</script>

<style>
  .home {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
  }
</style>