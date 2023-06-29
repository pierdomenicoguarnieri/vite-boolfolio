import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/projects/',
  apiUrlTypes: 'http://127.0.0.1:8000/api/projects/types/',
  apiUrlTechnologies: 'http://127.0.0.1:8000/api/projects/technologies/',
  apiUrlPost: 'http://127.0.0.1:8000/api'
})