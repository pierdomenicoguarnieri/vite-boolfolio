<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}">Progetti</router-link>
        </li>
        <li>
          <router-link :to="{name: 'types'}">Tipi</router-link>
        </li>
        <li>
          <router-link :to="{name: 'technologies'}">Tecnologie</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  header{
    height: 70px;
    background-color: lighten($color: #000000, $amount: 14%);
    border-bottom: 1px solid lighten($color: #000000, $amount: 12%);
    color: white;
    nav{
      height: 100%;
      ul{
        list-style: none;
        height: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        li{
          margin: 0 10px;
          a{
            text-decoration: none;
            color: white;
            transition: all .3s;
            &:hover{
              text-shadow: 0 0 10px white;
            }
            &.active{
              color: darken($color: white, $amount: 15%);
            }
          }
        }
      }
    }
  }
</style>