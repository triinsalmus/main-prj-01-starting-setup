<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { ref } from 'vue';
import { ROUTES } from '@/router/constants';

const props = defineProps(['id', 'firstName', 'lastName', 'areas', 'rate']);
const fullName = ref(props.firstName + ' ' + props.lastName);
const coachesUrls = computed(() => ({
  details: ({ path: ROUTES.COACH_DETAILS.path, params: { id: props.id } }),
  contact: ({ path: ROUTES.CONTACT.path })
}));
</script>

<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <ul>
        <li v-for="area in areas" :key="area">{{ area }}</li>
      </ul>
    </div>
    <div class="actions">
      <router-link :to="coachesUrls.contact">Contact</router-link>
      <router-link :to="coachesUrls.details">View details</router-link>
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