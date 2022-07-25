<template>
  <body>
    <div>
      <h4>NOW STREAMING</h4>
      <h1>NOW STREAMING</h1>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
body {
  display: block;
  padding: 0;
  width: 100%;
  background-image: url("@/assets/images/wall.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  color: white;
}
div h4 {
  padding-top: 500px;
  padding-left: 100px;
  font-size: 45px;
  cursor: pointer;
}
h1 {
  cursor: pointer;
  padding-left: 100px;
  font-size: 72px;
  color: red;
  border-bottom: 2px solid red;
  width: 750px;
}
div {
  content: "";
  background: #0a112a;
  opacity: 0.85;
  position: absolute;
  inset: 0;
}
</style>