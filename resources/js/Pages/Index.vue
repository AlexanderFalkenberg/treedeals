<template>
    <Layout>
        <main class="grid grid-cols-3 gap-6">
            <masonry-wall
                :items="deals"
                :ssr-columns="1"
                :column-width="300"
                :padding="16"
            >
                <template #default="{ deal, deal->u }">
                    <DealTeaser :deal="deal" />
                </template>
            </masonry-wall>
        </main>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Default";
import DealTeaser from "@/Components/DealTeaser.vue";

export default {
    components: {
        Layout,
        DealTeaser
    },
    props: {
        deals: {
            type: Array,
            required: true
        }
    }
};
</script>
