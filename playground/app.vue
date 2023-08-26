<template>
  <div class="w-screen h-screen">
    <div class="relative w-full h-full grid place-items-center">
      <button @click="AddSnackbar">Snackbar!!</button>
    </div>
    <SnackbarContainer position="top-center" shape="oval" />
  </div>
</template>

<script setup lang="ts">
import { useSnackbars } from '#imports';

function AddSnackbar() {
  useSnackbars().push({ type: 'warning', content: 'Lorem ipsum feihzh eizbzehg uhzegiuzhe hozgho zeoigh zeohgzoezoiegh oziehgoizhegoihz oizhgoi hzoigh ozihg' })
}
</script>
