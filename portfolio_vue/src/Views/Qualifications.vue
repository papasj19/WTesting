<script setup>

import EducationHistory from "@/components/EducationHistory.vue";
import Qualifications_Accordian from "@/components/Qualifications_Accordian.vue";
</script>

<template>
  <div class="qual_body_big">

  <EducationHistory/>

    <div class="qual_body">
  <div class="qual_body_left">
  <ol class="relative border-s border-gray-200 dark:border-gray-700">
    <li class="mb-10 ms-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg></a>
    </li>
    <li class="mb-10 ms-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ms-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
  </ol>
  </div>
  <div class="qual_body_min">
  <div class="mb-1 text-base font-medium dark:text-white">Dark</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
  </div>
  <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
  </div>
  <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div class="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style="width: 45%"></div>
  </div>
  <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div class="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style="width: 45%"></div>
  </div>
  <div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 45%"></div>
  </div>
  <div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">Indigo</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div class="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style="width: 45%"></div>
  </div>
  <div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Purple</div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div class="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style="width: 45%"></div>
  </div>

  </div>
  </div>
    <Qualifications_Accordian/>
  </div>

</template>

<style scoped>

.qual_body_big{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.qual_body{
  display: flex;
  flex-direction: row;
  padding-top: 10%;

}

.qual_body_left{
  width: 65%;
  padding-right: 10%;
  padding-bottom: 5%;
}

.qual_body_min{
  display: flex;
  flex-direction: column;
  width: 20%;
}



</style>