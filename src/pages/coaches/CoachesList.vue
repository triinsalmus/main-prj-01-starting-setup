<script setup lang="ts">
import { useCoachesStore } from '@/store/CoachesStore';
import CoachItem from '@/components/coaches/CoachItem.vue';
// import { computed } from 'vue';

const coachesStore = useCoachesStore();

// const filteredCoaches = computed(() => {
//   return coachesStore.getCoaches;
// });
</script>

<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="coachesStore.hasCoaches">
      <!--      <li v-for="coach in coachesStore.getCoaches" :key="coach.id">{{ coach.firstName }}</li>-->
      <CoachItem
        v-for="coach in coachesStore.getCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      />
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>