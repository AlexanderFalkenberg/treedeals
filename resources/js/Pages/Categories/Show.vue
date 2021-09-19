<template>
    <Layout>
        <main class="mt-8 space-y-8 col-span-12">
            <section>
                <h2 class="text-2xl mb-2 text-green-700">{{ category.name }}</h2>
                <masonry-wall
                    :items="category.deals"
                    :ssr-columns="3"
                    :column-width="250"
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
        category: {
            type: Object,
            required: true
        }
    }
};
</script>
