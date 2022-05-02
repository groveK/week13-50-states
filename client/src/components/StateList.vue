<template>

  <div>
    <state-summary v-bind:states="states"></state-summary>


    <div class="state-list-container">
      <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail
            v-bind:state="state"
            v-on:update-visited="updateVisited"></state-detail>
      </div>
    </div>
  </div>
</template>

<script>
import StateDetail from "@/components/StateDetail.vue";
import StateSummary from "@/components/StateSummary";

export default {
  name: "StateList",
  components: {
    StateDetail,
    StateSummary
  },
  data() {
    return {
      states: []
    }
  },
  mounted() {
    this.fetchAllStates()

  },
  methods: {
    fetchAllStates(){
      this.$stateService.getAllStates().then(states => {
        this.states = states
      }).catch(err => {
        alert('Unable to fetch state list')
        console.error(err)
      })
    },
    updateVisited(stateName, visited){
      this.$stateService.setVisited(stateName, visited).then( response => {
        this.fetchAllStates()
      }).catch(err => {
        alert('Unable to update this state')
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>

.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.state-container {
  margin: 1rem;
}

</style>