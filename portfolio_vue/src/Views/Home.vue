<script setup>

import {useRouter} from "vue-router";
import Myfooter from "@/components/myfooter.vue";

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};
</script>





<template>
  <div class="home-container">
  <div class="welcome">
    <div class="left_side">
    <div class="home__data">
      <span class="home__greeting">Hello, I am</span>
      <h1 class="home__name">SJ</h1>
      <span class="home__profession">Web Developer</span>



      <a download="" href="/src/assets/person.jpg" class="button button-light">Download CV</a>
      <div class="home__social">
        <a href="#" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
        <a href="#" class="home__social-icon"><i class='bx bxl-github'></i></a>
        <a href="#" class="home__social-icon"><i class='bx bxl-instagram'></i></a>
      </div>
    </div>

    </div>
    <img class="h-auto max-w-xs ms-auto" src="/src/assets/person.jpg" alt="image description">

  </div>

  <div class="mission">

    <h1 class="mission__name">Who is SJ?</h1>
    <div class="mission__description">
      <i class='bx bx-laptop'>  A student of computers that enjoys all things technology
        <i class='bx bx-laptop'></i></i>
    </div>

    <div class="mission__description">
      <i class='bx bx-code-alt'>  Programming enthusiast who is always excited to acquire new skills
        <i class='bx bx-code-alt'></i></i>
    </div>
    <div class="mission__description">
      <i class='bx bxs-hard-hat' >  Forged into a jack of all trades through many different job experiences
        <i class='bx bxs-hard-hat' ></i></i>
    </div>




    <hr class="w-96 h-1 mx-auto my-4 bg-red-50 border-0 rounded md:my-10 dark:bg-red-50">



    <h1 class="bring__name">What does SJ bring?</h1>

    <div class="bring">
      <div class="bring__description">
       <p>I try everyday to put on a big smile and accomplish as much as possible. This is what was taught to me throughout my family's years of entrepreneurship.  </p>
      </div>
    <div class="bring__description">
      <p>As an individual that has enjoyed many hobbies, it can be beneficial to analyze similarities according to a different scope. By utilizing programming concepts in sports and vice-versa, I allow myself to step outside normal pattern recognition and look at the true symmetry that exists </p>
    </div>

    </div>
    <hr class="w-96 h-1 mx-auto my-4 bg-red-50 border-0 rounded md:my-10 dark:bg-red-50">


    <h1 class="bring__name">What are SJ's personal goals?</h1>

    <div class="bring">
      <div class="bring__description">
        <p>My first goal is to one year complete all of the days in an <a href="https://adventofcode.com">Advent of Code</a> session</p>
      </div>
      <div class="bring__description">
        <p>To create, develop, and launch a completed video game by cohesively working with a team</p>
      </div>
      <div class="bring__description">
        <p>My last goal is to learn as many languages (people and programming!) as possible</p>
      </div>

    </div>


    <hr class="w-96 h-1 mx-auto my-4 bg-red-50 border-0 rounded md:my-10 dark:bg-red-50">
    <div class="bring">
      <div class="bring__description">
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
           @click="navigateTo('Qualifications')">To see my education and professional history, you can click here or on the top menu tab named 'About'</a>
      </div>
      <div class="bring__description">
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
           @click="navigateTo('Services')">To view more about me and what I offer, you can click here or on the top menu tab named 'Services'</a>
      </div>
    </div>


  </div>


  </div>

  <myfooter/>



</template>

<style>

.myGuy{
  width: 50%;
}

.bring{
  margin-right: 2rem;
  margin-left: 2rem;
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

.mission__name{
  font-size: 2.5rem;
}

.bring__name{
  font-size: 2.0rem;
}

.bring__description{
  display: flex;
  flex-direction: row;
  padding-top: .5rem;
  padding-bottom: 1rem;
}

.mission__description{
  display: flex;
  flex-direction: row;
  padding-top: .5rem;
  padding-bottom: 1rem;

}

.mission{
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: .5rem;
  margin-right: calc(100vw - 80vw);
  margin-left: calc(100vw - 80vw);

}

.left_side{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button{
  display: inline-block;
  background-color: blue;
  color: black;
  padding: .5rem .5rem;
  border-radius: .25rem;
  transition: .3s;
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.button:hover{
  background-color: darkblue;
  color: white;
}

.button-light{
  background-color: lightblue;
}


  .welcome{
    display: flex;
    flex-direction: row;
    background-color: white;
    margin-left: calc(100vw - 75vw);
    margin-right: calc(100vw - 75vw);

  }

  .home__data{
    border-left: 4px solid rgb(128, 128, 128);
    padding-left: 1.5rem;
    color: cornflowerblue;
  }

  .home__social{
    display: flex;
    justify-content: center;
  }

  .home__name{
    font-size: 2.5rem;
  }

  .home__greeting, .home__profession{
    display: block;
    font-weight: 700;
  }

  .home__greeting{
    font-size: .813rem;
  }

  .home__profession{
    font-size: .938rem;
    margin-bottom: 1.5rem;
  }

  .home__social-icon{
    color: cornflowerblue;
    font-size: 1rem;
    margin-right: 1rem;
  }


@media screen and (max-width: 576px){
.welcome{
  flex-direction: column;
}

  img{
    width: 100%;
  }


}
</style>


