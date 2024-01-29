<script setup>

</script>

<template>
  <div class="contact_grid">
      <div class="contact__box">
        <i class='bx bx-home contact__icon'></i>
        <h3 class="contact__title">Location</h3>
        <span class="contact__description">1234 Street Name,<br> City Name</span>
      </div>
      <div class="contact__box">
        <i class='bx bx-phone contact__icon'></i>
        <h3 class="contact__title">Phone</h3>
        <span class="contact__description">+1(234)-567-8910</span>
      </div>
      <div class="contact__box">
        <i class='bx bx-envelope contact__icon'></i>
        <h3 class="contact__title">Email</h3>
        <span class="contact__description">dude@guy.com</span>
      </div>
      <div class="contact__box">
        <i class='bx bx-message-rounded-edit contact__icon'></i>
        <h3 class="contact__title">Chat</h3>
        <div class="contact__description">
          <a href="#" class="contact__social"><i class='bx bxl-facebook'></i></a>
          <a href="#" class="contact__social"><i class='bx bxl-instagram'></i></a>
          <a href="#" class="contact__social"><i class='bx bxl-twitter'></i></a>
        </div>
      </div>
    </div>
</template>

<style scoped>

.contact_grid{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  column-gap: 5%;
  padding-top: 4%;
  padding-bottom: 2.5rem;

}



.contact__box{
  background-color: #FFF;
  border-radius: .5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(174,190,205,.3);
}

.contact__icon, .contact__title{
  color: blue;
}

.contact__icon{
  font-size: 2rem;
}

.contact__title{
  font-size: 1.125rem;
  margin-bottom: 1rem;
}



.contact__social {
  color: lightskyblue;
  font-size: 1.25rem;
  margin: 0 .5rem;
}

.contact__box:hover{
  box-shadow: 0 6px 8px rgba(174,190,205,.5);
}

</style>