<template>
  <div class="h-max">
    <video autoplay muted loop class="video" >
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import PhoneVideo from '../assets/GYMPhoneVideo.mp4'

export default {
  name: 'HeroSection',
  data() {
    return {
      video: PhoneVideo
    }
  }
}
</script>

<style>
/* You can add styles for the video or the container div here if needed */

.video{
  object-fit: scale-down;
}

</style>

/* fill contain cover none scale-down*/
