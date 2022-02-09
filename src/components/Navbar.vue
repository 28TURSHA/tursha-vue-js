<template>
  <div id="mySidenav" class="sidenav">
 
    <div class="logo">
      <img src="https://i.postimg.cc/8zYy2Mxb/logo.jpg" 
     alt="" />
    </div>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Projects' }">Projects</router-link>
    <router-link :to="{ name: 'Testimonials' }">Testimonials</router-link>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
    
  </div>
</template>

<script></script>

<style>
.body {
  font-family: "Oswald", sans-serif;
}
.logo{
  width: 120px;
  height: 120px;
  border-radius: 360%;
  margin-top: 40px;

}
.sidenav {
  height: 100%;
  width: 220px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 100px !important;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav /
  font-size: 28px; / Increased text to enable scrolling */
  padding: 0px 10px;
}
</style>
