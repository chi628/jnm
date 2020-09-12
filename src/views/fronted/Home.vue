<template>
    <div class="home">
        <Navbar :router="router"/>
        <router-view ></router-view>
        <Footer class="home_footer"/>
        <Gotop/>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Gotop from '@/components/Gotop.vue';

export default {
  components: {
    Navbar,
    Footer,
    Gotop,
  },
  data() {
    return {
      router: '',
    };
  },
  created() {
    this.router = this.$router.history.current.name;
  },
};
</script>
