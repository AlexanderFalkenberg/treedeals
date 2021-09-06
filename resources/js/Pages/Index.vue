<template>
    <Layout>
        <main class="mt-8 space-y-8">
            <!-- Neueste -->
            <section>
                <h2 class="text-2xl  mb-2 text-green-700">
                    Neueste
                </h2>
                <masonry-wall
                    :items="newest.data"
                    :ssr-columns="3"
                    :column-width="200"
                    :padding="8"
                >
                    <template #default="{ item }">
                        <DealTeaser :deal="item" :key="item.uuid" />
                    </template>
                </masonry-wall>
            </section>
            <!-- Unter 30 € -->
            <section>
                <h2 class="text-2xl  mb-2 text-green-700">
                    Unter 30 €
                </h2>
                <masonry-wall
                    :items="budget.data"
                    :ssr-columns="3"
                    :column-width="200"
                    :padding="8"
                >
                    <template #default="{ item }">
                        <DealTeaser :deal="item" :key="item.uuid" />
                    </template>
                </masonry-wall>
            </section>
            <!-- Beauty & Pflege -->
            <section>
                <h2 class="text-2xl  mb-2 text-green-700">
                    Beauty &amp; Pflege
                </h2>
                <masonry-wall
                    :items="beauty.data"
                    :ssr-columns="3"
                    :column-width="200"
                    :padding="8"
                >
                    <template #default="{ item }">
                        <DealTeaser :deal="item" :key="item.uuid" />
                    </template>
                </masonry-wall>
            </section>
        </main>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Default";
import DealTeaser from "@/Components/DealTeaser.vue";
import TransformImages from "@/Mixins/transform-storyblok-images";

export default {
    mixins: [TransformImages],
    components: {
        Layout,
        DealTeaser
    },
    props: {
        newest: {
            type: Object,
            required: true
        },
        budget: {
            type: Object,
            required: true
        },
        beauty: {
            type: Object,
            required: true
        }
    }
};
</script>
