<template>
    <div id="app">
        <Header />
        <Home />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";
import Home from "@/views/AppHome.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Home,
    },
};
</script>

<style>
/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
</style>
