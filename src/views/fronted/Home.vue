<template>
    <div class="home">
        <Navbar/>
        <router-view ></router-view>
        <Footer class="home_footer"/>
        <Gotop/>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Gotop from '@/components/Gotop.vue';
// import Toast from '@/components/Toast.vue';

export default {
  components: {
    Navbar,
    Footer,
    Gotop,
    // Toast,
  },
};
</script>
