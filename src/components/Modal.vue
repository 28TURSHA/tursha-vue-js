<template>
    <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <button class="btn" @click="closeModal"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
     <div class="card">
  <h2>Development Skills</h2>
    <div class="sk-la">
        <p class="skill html">
            <span>HTML</span>
            <span class="level">90%</span>
        </p>
        <p class="skill css">
            <span>CSS</span>
            <span class="level">95%</span>
        </p>
        <p class="skill canvas">
            <span>Bootsrap</span>
            <span class="level">89%</span>
        </p>
        <p class="skill javascript">
            <span>JavaScript</span>
            <span class="level">80%</span>
        </p>
        <p class="skill canvas">
            <span>MYSQL</span>
            <span class="level">87%</span>
        </p>
        <p class="skill svg">
            <span>VUE</span>
            <span class="level">80%</span>
        </p>
        <p class="skill canvas">
            <span>GIT</span>
            <span class="level">88%</span>
        </p>
    </div>

</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.modal {
  width: fit-content;
  height:fit-content;
  padding: 20px;
  margin: 100px auto;
  background: black;
  border-radius: 10px;
  display: block;
  position:relative;
}
.backdrop {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(160, 146, 146, 0.8);
}
h1 {
  color: white;
}
button {
    color: white;
    margin-left: 80%;
    margin-top: 0;

    }
.card {
   width: 22rem;
   margin-top: 0rem;
   background:blue;
}

h2 {
  color: #FFF;
  text-align: center;
  font-family: 'Oswald' , sans-serif;
}

.skill {
  position: relative;
  display: flex;
  color: #FFF;
  margin: 10px;
  margin-bottom: 2rem;
  justify-content: space-between;
  width: 120px;
}

.level::after {
  position: absolute;
  left: 0;
  top: 1.8rem;
  display: block;
  content: '';
  border: 1px solid rgb(114, 116, 114);
  width: 100%;
  height: 1rem;
  padding: .1rem;
  background-clip: content-box;
  box-sizing: border-box;
  border-radius: .2rem;
  background-image: linear-gradient(to right, rgb(146, 145, 145), rgb(146, 145, 145));
  background-repeat: no-repeat;
  background-position: left center;
}

.sk-la .skill.html .level::after {
    background-size: 90% 1em;
}

.sk-la .skill.css .level::after {
    background-size: 95% 1em;
}

.sk-la .skill.javascript .level::after {
    background-size: 80% 1em;
}
.sk-la .skill.svg .level::after {
    background-size: 85% 1em;
}

.sk-la .skill.canvas .level::after {
    background-size: 88% 1em;
}
.sk-la{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>