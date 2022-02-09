<template>
  <MDBCard>
    <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://mdbootstrap.com/img/new/standard/nature/184.webp" top alt="..." />
    </a>
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </MDBCardText>
      <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</template>
<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardImg,
      MDBBtn
    },
    directives: {
      mdbRipple
    }
  };
</script>
<style>
  
</style>