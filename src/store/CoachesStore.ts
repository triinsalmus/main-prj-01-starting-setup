import { defineStore } from 'pinia';

export const useCoachesStore = defineStore('CoachesStore', {
  state: () => ({
    coaches: [
      {
        id: 'id1',
        firstName: 'Maximilian',
        lastName: 'Schwarzmüller',
        areas: ['frontend', 'backend', 'career'],
        description:
          'I\'m Maximilian and I\'ve worked as a freelance web developer for years. Let me help you become a developer as well!',
        hourlyRate: 30
      },
      {
        id: 'id2',
        firstName: 'Julie',
        lastName: 'Jones',
        areas: ['frontend', 'career'],
        description:
          'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        hourlyRate: 20
      },
      {
        id: 'id3',
        firstName: 'Triin',
        lastName: 'Salmus',
        areas: ['frontend', 'backend', 'junior'],
        description:
          'I am Triin and I am a junior software engineer on front- and backend.',
        hourlyRate: 10
      }
    ]
  }),
  // actions: {},
  getters: {
    getCoaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    // isCoach(_, getters, _2, rootGetters) {
    //   const coaches = getters.coaches;
    //   const userId = rootGetters.userId;
    //   return coaches.some(coach => coach.id === userId);
    // }
  }
});