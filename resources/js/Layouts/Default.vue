<template>
    <div>
        <Banner />
        <Header />
      
        <div class="grid grid-cols-12 px-2 sm:px-4 lg:px-8 max-w-7xl mx-auto">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/Components/Header";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";

export default {
    components: {
        Banner,
        Header,
        Hero,
        Footer
    }
};
</script>
