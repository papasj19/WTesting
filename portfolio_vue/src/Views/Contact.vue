<script setup>

import Contact_Grid from "@/components/Contact_Grid.vue";
</script>

<template>
  <div class="home-container">
  <section class="contact" id="contact">
    <span class="section-subtitle">Lets get in touch</span>
    <p class="section-title">Contact Me</p>

    <Contact_Grid />

      <form action="" class="contact__form">
        <div class="contact__inputs">
          <label>
            <input type="text" placeholder="Name" class="contact__input">
          </label>
          <label>
            <input type="email" placeholder="Email" class="contact__input">
          </label>
        </div>
        <div class="contact__inputs">
          <label>
            <input type="text" placeholder="Subject" class="contact__input">
          </label>
          <label>
            <input type="text" placeholder="Number" class="contact__input">
          </label>
        </div>
        <div class="testing__button">
          <input type="submit" value="Send" class="button button-light">
        </div>
      </form>

  </section>
  </div>
</template>

<style scoped>

.section-title{
  display: block;
  font-weight: 700;
}

.section-title{
  font-size: .813rem;
}

.home-container {
  background-image: url('src/assets/bckgnd.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: scroll;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  padding-bottom: 7rem;
}

.contact{
  display: flex;
  flex-direction: column;
  align-items: center;

}


.contact__container{
  row-gap: 2.5rem;
}

.contact__content{
  grid-template-columns: repeat(2, 1fr);
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

.contact__inputs{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
}

.contact__input, .contact__button{
  outline: none;
  font-family: sans-serif;
  font-size: .813rem;
}

.contact__input{
  width: 100%;
  border: 2px solid skyblue;
  padding: 1rem;
  color: blue;
  border-radius: .5rem;
  margin-bottom: .5rem;
}

.contact::placeholder{
  color: lightskyblue;
  font-family: sans-serif;
  font-weight: 600;
}

.contact__textarea{
  width: 100%;
  border: 2px solid lightskyblue;
  padding: 1rem;
  color: blue;
  border-radius: .5rem;
  margin-bottom: .5rem;
  resize: none;
}

.contact__button{
  cursor: pointer;
  border: none;

}

.testing__button{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>