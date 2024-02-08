<template>
<div class="gform">

  <div class="form">
    <label for="email" class="text-black" >Email</label>
    <input type="email" required name="email" placeholder="Please Enter Email" v-model="email">
 </div>

 <div class="form">
    <label for="password" class="text-black">Password</label>
    <input type="password" required name="password" placeholder="Please Enter Password" v-model="password">
 </div>

  <button @click="submitForm" class="btn">Submit</button>
 <h1 class="'text-black'">{{email}}</h1>
 <h1>{{ password }}</h1>

</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LogInVue',
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    async submitForm(){
      const response = await axios.post('http://localhost:8000/user', {
        email: this.email,
        password: this.password
      });
      console.log(response);
    }
  }
}
</script>

<style>

.gform{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: aqua;
}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form > input{
  width: 400px;
  border: solid 1px black;
}

.btn{
  border: solid 1px black;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;

}
</style>
