<template>
<!--  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none" >-->
<!--    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1389 4.38878H0.861111C0.385533 4.38878 0 4.00325 0 3.52767V1.80545C0 1.32987 0.385533 0.944336 0.861111 0.944336H30.1389C30.6145 0.944336 31 1.32987 31 1.80545V3.52767C31 4.00325 30.6145 4.38878 30.1389 4.38878ZM31 13.8612V12.1389C31 11.6634 30.6145 11.2778 30.1389 11.2778H0.861111C0.385533 11.2778 0 11.6634 0 12.1389V13.8612C0 14.3367 0.385533 14.7223 0.861111 14.7223H30.1389C30.6145 14.7223 31 14.3367 31 13.8612ZM31 22.4722V24.1944C31 24.67 30.6145 25.0555 30.1389 25.0555H0.861111C0.385533 25.0555 0 24.67 0 24.1944V22.4722C0 21.9966 0.385533 21.611 0.861111 21.611H30.1389C30.6145 21.611 31 21.9966 31 22.4722Z" fill="#07484A"/>-->
<!--  </svg>-->
  <div class="burger" >
    <span></span>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.burger {
  width: 31px;
  height: 25px;
  position: relative;
  transition-duration: 1s;
  cursor: pointer;

  &.open {
    span {
      transition-duration: 0.1s;
      transition-delay: .25s;
      background: transparent;

      &:before {
        transition: top .25s, transform .25s .25s;
        top: 10px;
        transform: rotateZ(-45deg);
      }

      &:after {
        transition: top 0.4s, transform .25s .25s;
        top: 10px;
        transform: rotateZ(45deg);
      }
    }
  }

  span {
    height: 3px;
    width: 31px;
    background-color: $cl_green-100;
    border-radius: 20px;
    position: absolute;
    transition-duration: .25s;
    transition-delay: .25s;

    &:before {
      left: 0;
      position: absolute;
      top: 11px;
      height: 3px;
      width: 31px;
      background-color: $cl_green-100;
      content: "";
      border-radius: 20px;
      transition-duration: .25s;
      transition: transform .25s, top .25s .25s;
    }

    &:after {
      left: 0;
      position: absolute;
      top: 22px;
      height: 3px;
      width: 31px;
      background-color: $cl_green-100;
      content: "";
      border-radius: 20px;
      transition-duration: .25s;
      transition: transform .25s, top .25s .25s;
    }
  }
}
</style>