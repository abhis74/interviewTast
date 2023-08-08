

<template>
  <div>
  <div class="form">
    <input type="text" placeholder="Name" v-model="$store.state.name" >
    <input type="number" placeholder="Phone" v-model="$store.state.number">
    <input type="email" placeholder="Email" v-model="$store.state.email" >
    <input type="text" placeholder="Address" v-model="$store.state.address">
    <button type="button" @click="submitdata"> <router-link to="/">Save data</router-link></button>
  </div>


 <div class="datashow"  v-if="showtable  &&  $store.state.name != '' && $store.state.number != '' &&  $store.state.email != '' && $store.state.address != '' ">

<h1>Form Details</h1>

<div class="formdetails">


  <div class="name">
    <span class="name"> Name</span>
    <span> {{ this.$store.state.name }}</span>

  </div>
  <div class="email">
    <span class="email"> Email</span>
    <span> {{ this.$store.state.email }}</span>

  </div>
  <div class="number">
    <span class="number"> Phone</span>
    <span> {{ this.$store.state.number }}</span>

  </div>
  <div class="address">
    <span class="address"> Address</span>
    <span> {{ this.$store.state.address }}</span>

  </div>
 </div>
</div>
</div>

</template>


<script>
export default {


  data(){
    return{
      showtable:false
    }
  },
  
  methods: {



    submitdata(){
      if(this.$store.state.name != '' && this.$store.state.number != '' &&  this.$store.state.email != '' && this.$store.state.address != ''){

        this.$store.commit('savedata')
        this.showtable = true
      }
    }
  },


}
</script>

<style scoped>

.form{
  
    padding: 26px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    width: 311px;


}
.formdetails{
  padding: 23px;
    display: flex;
    flex-direction: column;
    gap: 23px;
}
.formdetails div{
  display: flex;
    width: 100%;
    justify-content: space-around;
}
header {
  line-height: 1.5;
}
h1{
  text-align: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
