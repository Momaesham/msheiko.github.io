<template>
  <div class="home">
    <div class="container mt-5">
    <div v-html="html"></div>
    </div>
  </div>
</template>

<script>

import md from './CustomMdParser';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  props: ['md'],
  data(){
    return {
      html : 'No content',
    }
  },
  name: 'Home',
  beforeMount() {
    const filePath = `https://raw.githubusercontent.com/msheiko/msheiko.github.io/main/${this.md}`
    axios.get(filePath)
    .then(res=>{
      if(res.status === 200){
        this.html = md.render(res.data)
      }
    })
  }
}
</script>
