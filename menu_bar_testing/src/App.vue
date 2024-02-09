<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MenuBar from "@/components/MenuBar.vue";
import BGAnimation from "@/components/BGAnimation.vue";
import CardSlide from "@/components/CardSlide.vue";
import MenuBarR from "@/components/MenuBarR.vue";
</script>

<template>


  <main>

    <div class="mycenter"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.47787011585!2d2.057788771668345!3d41.39276734232483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1sen!2ses!4v1707404625532!5m2!1sen!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div class="mytest">
        <CardSlide/>
        <CardSlide/>
      </div>
      <MenuBarR/>

      <MenuBar/></div>


  </main>
</template>

<style scoped>

.mycenter{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
}

.testing2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.mytest{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}

CardSlide{
  width: 25%;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
