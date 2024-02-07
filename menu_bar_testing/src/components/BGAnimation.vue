<script setup>

</script>

<template>

  <body>
  <div class="container">
    <h1 class="text">Welcome to Code.Cafe</h1>

    <div class="bubbles">
      <span style="--i:11;"></span>
      <span style="--i:21;"></span>
      <span style="--i:17;"></span>
      <span style="--i:22;"></span>
      <span style="--i:12;"></span>
      <span style="--i:19;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:26;"></span>
      <span style="--i:29;"></span>
      <span style="--i:18;"></span>
      <span style="--i:30;"></span>
      <span style="--i:23;"></span>
      <span style="--i:31;"></span>
      <span style="--i:14;"></span>
      <span style="--i:37;"></span>
      <span style="--i:16;"></span>
      <span style="--i:09;"></span>
      <span style="--i:20;"></span>
      <span style="--i:26;"></span>
      <span style="--i:09;"></span>
      <span style="--i:11;"></span>
      <span style="--i:21;"></span>
      <span style="--i:17;"></span>
      <span style="--i:22;"></span>
      <span style="--i:12;"></span>
      <span style="--i:19;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:26;"></span>
      <span style="--i:29;"></span>
      <span style="--i:18;"></span>
      <span style="--i:30;"></span>
      <span style="--i:23;"></span>
      <span style="--i:31;"></span>
      <span style="--i:14;"></span>
      <span style="--i:37;"></span>
      <span style="--i:16;"></span>
      <span style="--i:09;"></span>
      <span style="--i:20;"></span>
      <span style="--i:26;"></span>
      <span style="--i:09;"></span>
      <span style="--i:11;"></span>
      <span style="--i:21;"></span>
      <span style="--i:17;"></span>
      <span style="--i:22;"></span>
      <span style="--i:12;"></span>
      <span style="--i:19;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:26;"></span>
      <span style="--i:29;"></span>
      <span style="--i:18;"></span>
      <span style="--i:30;"></span>
      <span style="--i:23;"></span>
      <span style="--i:31;"></span>
      <span style="--i:14;"></span>
      <span style="--i:37;"></span>
      <span style="--i:16;"></span>
      <span style="--i:09;"></span>
      <span style="--i:20;"></span>
      <span style="--i:26;"></span>
      <span style="--i:09;"></span>



    </div>
  </div>



  </body>

</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  min-height: 100vh ;    background:BLACK;
}
.container{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow:hidden;
}
.bubbles{
  position:relative;
  display:flex;
}
.bubbles span{
  position: relative;
  width: 10px;
  height:10px;
  background:#7FFF00;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #7FFF0044,
  0 0 50px #7FFF00,
  0 0 100px #7FFF00;
  animation: animate 15s  linear infinite;
  animation-duration: calc(125s /var(--i));

}
.bubbles span:nth-child(odd){
  background: #40E0D0;
  box-shadow: 0 0 0 10px #40E0D044,
  0 0 50px #40E0D0,
  0 0 100px #40E0D0;

}
@keyframes animate{
  0%{
    transform:translateY(100vh) scale(0);
  }
  100%{
    transform:translateY(-10vh) scale(1);
  }
}
.text{
  text-align: center;
  font-size: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: aqua;
}

</style>