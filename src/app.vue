<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <md-list>
  <md-list-item v-on:click="greet">
      <md-icon>people</md-icon> <span>Cloud</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>Bluemix</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>GBS</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>S & S Renewals</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>Digital Development</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>Infrastructure</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>Sales Execution</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>TSS</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>SSG</span>
  </md-list-item>
  <md-list-item>
      <md-icon>people</md-icon> <span>Acquisitions</span>
 </md-list-item>
  </md-list>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>