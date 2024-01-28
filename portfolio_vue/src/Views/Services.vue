<script setup>


import ServicesTable from "@/components/ServicesTable.vue";
import Carousel_Services from "@/components/Carousel_Services.vue";
import Accordian_Services from "@/components/Accordian_Services.vue";
import Adventure_Grid from "@/components/Adventure_Grid.vue";
import Previous_Org_Table from "@/components/Previous_Org_Table.vue";
</script>

<template>
  <Adventure_Grid />


  <div class="mytable">

    <Previous_Org_Table />
  </div>
  <Accordian_Services />






</template>

<style scoped>

.mytable{
  padding-top: 5%;
  padding-bottom: 10%;
}

</style>