<template>
  <div class="gotop" :class="{'show':gotop}" @click="goTop">
    <svg height="42" width="42">
      <squre cx="21" cy="21" r="20" />
    </svg>
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotop: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.getPos, true);
  },
  methods: {
    getPos() {
      const pos = document.body.scrollTop;
      // console.log(pos);
      if (pos >= 450) {
        this.gotop = true;
      } else {
        this.gotop = false;
      }
    },
    goTop() {
      document.body.scrollTop = 0;
    },
  },
};
</script>
