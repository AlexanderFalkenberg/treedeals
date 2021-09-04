<template>
    <div>
        <Header />
        <div class="grid grid-cols-12 px-2 sm:px-4 lg:px-8 max-w-7xl mx-auto">
            <div class="col-span-12">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/Components/Header";
import Sidenav from "@/Components/Sidenav";

export default {
    components: {
        Header,
        Sidenav
    }
};
</script>
