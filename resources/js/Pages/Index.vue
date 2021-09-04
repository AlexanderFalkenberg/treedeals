<template>
    <Layout>
        <main>
            <h2 class="text-2xl mb-2 text-green-500">Kleidung & Stil</h2>
            <masonry-wall
                :items="items"
                :ssr-columns="3"
                :column-width="200"
                :padding="8"
            >
                <template #default="{ item }">
                    <DealTeaser :deal="item" :key="item.uuid" />
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
    },
    computed: {
        items() {
            return this.deals;
        }
    }
};
</script>
