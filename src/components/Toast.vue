<template>
    <div class="toast">
        <h1>{{text}}</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  created() {
    this.$bus.$on('send', (para) => {
      this.text = para;
    });
  },
};
</script>
