<template>
  <img class="picture" src="https://i.postimg.cc/zDcSzmRp/b-w.jpg " />
  <h1>Hi, I am Tursha Arendse</h1>
  <div class="description-inner">
    <div class="left">
      <p>
        The only rose amongst the torns in my family. With being the only girl
        amongst your siblings I always stood out. Whether it was intentional or
        not. But as years went by I realised that it was okay to be different
        and I started embracing the fact that i was. Therefore I decided to do
        coding. For me it was just a means of challenging myself and thinking
        outside of the box. But the more I learnt ,the more i fell inlove with
        it. And I don't regret making the decision to start my journey off in
        this industry.
      </p>
      <div v-if="ShowModal">
    <Modal @close="toggleModal" />
  </div>
  <button class="btn btn-danger" @click="toggleModal">My Skills</button>
    </div>
    <div class="right">
      <div class="justify-content-center align-items-center">
        <span class="text-danger info">
          <h6>Date of Birth:</h6>
          <p class="text-light">28 October 2002</p></span
        >
        <span class="text-danger info">
          <h6>Located:</h6>
          <p class="me_details text-light">Cape Town, South Africa</p></span
        >
        <span class="text-danger info"
          ><h6>Email:</h6>
          <p class="me_details text-light">turshaarendse@gmail.com</p></span
        >
        <span class="text-danger info"
          ><h6>Contact Number:</h6>
          <p class="me_details text-light">+27 67 668 5517</p></span
        >
      </div>
    </div>
  </div>
  
</template>
<script>
import Modal from "../components/Modal.vue";
export default {
  data() {
    return {
      ShowModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.ShowModal = !this.ShowModal;
      console.log(this.ShowModal);
    },
  },
  components: {
    Modal,
  },
};
</script>
<style>
.picture {
  width: 100vh;
  height: 500px;

}
.description-inner {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.left,
.right {
  width: 50%;
}
.left {
  padding-left: 50px;
}
</style>
