<template>
  <div class="personne">
    <!-- bulma card -->
    <div class="card" :class="{chef:qui.directeur}">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img :src="qui.picture" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="qui.vignette" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ qui.firstname | cap }} {{ qui.lastname |cap}}</p>
                      <p class="subtitle is-6">{{ qui.company | cap }}</p>
                    </div>
                  </div>
              
                  <div class="content">
                    {{ qui.description }}
                    <a href="#" v-for="(tag, tagIndex) in qui.tags" :key="tagIndex">#{{ tag }} </a>
                    <br>
                    <time :datetime="qui.registered">{{ qui.registered | date }}</time>
                  </div>
                  <p class="link" v-if="!qui.directeur"><a href="" @click.prevent.stop="changeStatut">Make directeur</a></p>
                  <p class="link" v-else><a href="" @click.prevent.stop="changeStatut">Delete directeur</a></p>
                </div>
              </div>
    <!-- end bulma card -->
  </div>
</template>

<script>
import dateAff from '@/filters/dates'
import cap from '@/filters/cap' 
export default {
  name: 'Personne',
  props: {
    qui: Object
  },
  filters: {
    date: dateAff,
    cap
  },
  methods: {
    changeStatut() {
      this.$emit("changeStatut")
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
.card.chef {
  background-color: silver;
}
</style>
