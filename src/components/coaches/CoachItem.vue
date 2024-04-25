<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { ref } from 'vue';
import { ROUTES } from '@/router/constants';
import BaseButton from '@/components/ui/BaseButton.vue';

const props = defineProps(['id', 'firstName', 'lastName', 'areas', 'rate']);
const fullName = ref(props.firstName + ' ' + props.lastName);
const coachesUrls = computed(() => ({
  contact: ({ path: ROUTES.CONTACT.path }),
  details: ({ path: ROUTES.COACH_DETAILS.path, params: { id: props.id } }),
}));
</script>

<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <ul>
        <li v-for="area in areas" :key="area.id">{{ area }}</li>
      </ul>
    </div>
    <div class="actions">
      <BaseButton mode="outline" :to="coachesUrls.contact.path">Contact</BaseButton>
      <BaseButton link :to="coachesUrls.details.path">View details</BaseButton>
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>