<template>
    <Layout>
        <main v-if="deal" class="py-4  px-2 max-w-7xl mx-auto relative">
            <div class="md:flex space-x-8">
                <div class="md:w-1/2 lg:w-3/5">
                    <figure
                        :style="[
                            { background: `url(${deal.image[0].filename})` }
                        ]"
                        class="
                    relative
                   
                    bg-gray-100
                    flex
                    justify-center
                    items-center
                    text-center
                    bg-center
                    rounded-md
                "
                    >
                        <img
                            :style="[
                                deal.is ? { filter: 'grayscale(100%)' } : {}
                            ]"
                            class="relative z-40 h-72"
                            :src="deal.image[0].filename"
                        />
                        <div
                            class="
                        absolute
                        z-0
                        top-0
                        left-0
                        w-full
                        h-full
                        bg-gray-100 bg-opacity-50
                        backdrop-filter backdrop-blur-md
                        rounded-md
                    "
                        ></div>
                    </figure>
                    <!-- pricebox -->
                    <section class="mt-8 md:hidden">
                        <span class="block text-xs text-gray-400">
                            {{ deal.published_at }}</span
                        >
                        <h3
                            :class="[
                                deal.expired
                                    ? 'text-gray-500'
                                    : 'text-green-800'
                            ]"
                            class="
                        text-2xl
                        sm:text-3xl
                        mt-1
                        font-display
                        line-clamp-1
                    "
                        >
                            {{ deal.name }}
                        </h3>
                        <span
                            v-if="deal.original_price"
                            class="text-gray-400 line-through text-sm"
                            >{{ deal.original_price }}€</span
                        >
                        <div class="flex items-center space-x-2">
                            <span
                                v-if="deal.price"
                                :class="[
                                    deal.expired
                                        ? 'text-gray-500'
                                        : 'text-green-500',
                                    'text-xl block sm:text-2xl md:text-2xl lg:text-3xl  font-bold'
                                ]"
                                >{{ deal.price }}€</span
                            >
                            <span
                                v-if="deal.discount"
                                :class="[
                                    deal.expired
                                        ? 'text-gray-600'
                                        : 'text-green-900 bg-green-100 py-1 px-2',
                                    'font-bold text-xs md:text-xl rounded'
                                ]"
                                >{{ deal.discount }}</span
                            >
                        </div>
                        ç
                    </section>
                    <div v-if="deal.html" class="html mt-4">
                        <rich-text-renderer
                            v-if="deal.html"
                            :document="JSON.parse(deal.html)"
                        />
                    </div>
                </div>
                <aside class="hidden md:block sm:w-1/2 lg:2/5">
                    <div class="sticky top-8">
                        <span class="block text-xs text-gray-400">
                            {{ deal.published_at }}</span
                        >
                        <h1
                            :class="[
                                deal.expired
                                    ? 'text-gray-500'
                                    : 'text-green-800'
                            ]"
                            class="
                        
                        text-2xl
                        mt-1
                        font-display
                        line-clamp-1
                    "
                        >
                            {{ deal.name }}
                        </h1>
                        <span
                            v-if="deal.original_price"
                            class="text-gray-400 line-through text-sm"
                            >{{ deal.original_price }}€</span
                        >
                        <div class="flex items-center space-x-2">
                            <span
                                v-if="deal.price"
                                :class="[
                                    deal.expired
                                        ? 'text-gray-500'
                                        : 'text-green-500',
                                    'text-xl block sm:text-2xl md:text-2xl lg:text-3xl  font-bold'
                                ]"
                                >{{ deal.price }}€</span
                            >
                            <span
                                v-if="deal.discount"
                                :class="[
                                    deal.expired
                                        ? 'text-gray-600'
                                        : 'text-green-900 bg-green-100 py-1 px-2',
                                    'font-bold text-xs md:text-xl rounded'
                                ]"
                                >{{ deal.discount }}</span
                            >
                        </div>
                        <CouponButton :coupon_code="deal.coupon_code" />
                    </div>
                </aside>
            </div>
        </main>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Default";
import CouponButton from "@/Components/CouponButton";

export default {
    components: {
        Layout,
        CouponButton
    },
    props: {
        deal: Object,
        required: true
    },
    computed: {
        image() {
            return this.deal.image.length > 0
                ? this.deal.image[0].filename
                : this.deal.image.image;
        }
    }
};
</script>
