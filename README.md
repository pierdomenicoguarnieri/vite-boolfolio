# **Laravel Boolfolio - API**

## **Consegna**

### **Milestone 1**

*nome repo 1: laravel-api*

Aggiungiamo al nostro progetto Laravel una nuovo **Api/ProjectController**. Questo controller risponderà a delle richieste via API e si occuperà di restituire la lista dei progetti presenti nel database in formato json.

### **Milestone 2**

Testiamo la chiamata API tramite Postman o Tunder Client e assicuriamoci di ricevere i dati correttamente.

### **Milestone 3**

*nome repo 2: vite-boolfolio*

Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.

Colleghiamo questo progetto ad una repo separata.

### **Milestone 4**

Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

### **Milestone 5**

Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

### **Bonus:**

1. Gestire la paginazione dei risultati

2. ‘Innestare’ vue all’interno del progetto Laravel e da lì fare la chiamata API

Recap pe rinstalare Vue nel progetto Laravel:

```bash
npm i vue@next

npm i @vitejs/plugin-vue --force
```

```php
// in vite config
import vue from '@vitejs/plugin-vue';
```

```javascript
// aggiungere nei plugins
vue({
  template:{
    transformAssetUrls:{
      base: null,
      includeAbsolute: false
    }
  }
})
```

```php
// home.blade.php
@extends('layouts.guest')

@section('content')
  <div id="app"></div>
@endsection
```

```javascript
// appGuest.js
import { createApp } from "vue";
import App from './App.vue';


createApp(App).mount('#app');
```
