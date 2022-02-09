<template>
  <div class="home">
   <div class="right-side">
      <div class="title">TURSHA ARENDSE</div>
    
   </div>
    <div class="left-side">
     <div class="portfolio-image" data-aos="fade-left"></div>  
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.body {
  color: #242526;
}
.title {
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 100px !important;
  padding-top: 300px;
  margin-left: 600px;
  height: 10px;
}
p {
  text-align: center;
  color: white;
}

.portfolio-image {
  width: 37%;
  height: 50vh;
  margin-left: 2%;
  object-fit: contain;
  background-size: cover;
  background-position: center;
  transition: all 0.3s linear;
  animation: changeBG 5s linear infinite;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
}

@keyframes changeBG {
  0%,
  100% {
    background-image: url("https://i.postimg.cc/qv3dNJc4/rsz-2image2.jpg");
    border-radius: 81% 19% 70% 30% / 38% 60% 40% 62%;
  }
  50% {
    background-image: url("https://i.postimg.cc/qv3dNJc4/rsz-2image2.jpg");
    border-radius: 43% 57% 65% 35% / 80% 18% 82% 20%;
  }
  /* 60% {
      background-image: url(../images/helderberg1.jpg);
      border-radius: 60% 40% 38% 62% / 57% 74% 26% 43%;
    } */
}

@media screen and (max-width: 720px) {
  .portfolio-image {
    display: none;
  }
}
.title{
  margin-top: 10px;
}
</style>
