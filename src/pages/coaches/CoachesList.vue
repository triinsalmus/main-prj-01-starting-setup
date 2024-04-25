<script setup lang="ts">
import { useCoachesStore } from '@/store/CoachesStore';
import CoachItem from '@/components/coaches/CoachItem.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { ROUTES } from '@/router/constants';
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
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton link :to="ROUTES.REGISTER.path">Register as Coach</BaseButton>
      </div>
      <ul v-if="coachesStore.hasCoaches">
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
    </BaseCard>
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