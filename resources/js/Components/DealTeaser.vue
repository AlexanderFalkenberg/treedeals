<template>
    <article class="items-center" v-if="deal">
        <Link :href="route('deal.show', deal.slug)">
            <div class="flex-shrink-0 leading-tight items-stretch relative">
                <div class="rounded relative mr-2 flex items-center">
                    <v-lazy-image
                        :style="[
                            deal.expired
                                ? { filter: 'grayscale(100%)', opacity: '35%' }
                                : {}
                        ]"
                        class="sm:w-auto sm:h-auto bg-gray-200 object-cover rounded-md"
                        :src="transformImage(deal.image[0].filename, '300x0')"
                    />
                </div>
            </div>
            <div
                class="md:flex md:flex-col mt-1 flex-1 pl-0 relative self-stretch"
            >
                <h3
                    :class="[deal.expired ? 'text-gray-500' : 'text-gray-800']"
                    class="sm:text-lg mt-1 font-display line-clamp-1"
                >
                    {{ deal.name }}
                </h3>

                <div>
                    <div>
                        <span
                            v-if="deal.original_price"
                            class="text-gray-400 line-through block text-xs"
                            >{{ deal.original_price }} €</span
                        >
                    </div>
                    <div
                        class="space-x-2 items-center flex justify-between pr-2"
                    >
                        <span
                            v-if="deal.price"
                            :class="[
                                deal.expired
                                    ? 'text-gray-500'
                                    : 'text-green-500',
                                'text-xl sm:text-xl  font-bold'
                            ]"
                            >{{ deal.price }} €</span
                        >

                        <span
                            v-if="deal.discount"
                            :class="[
                                deal.expired
                                    ? 'text-gray-500'
                                    : 'bg-green-100 text-green-800 px-2',
                                'font-bold text-lg rounded'
                            ]"
                            v-html="deal.discount"
                        ></span>
                    </div>
                    <span class="block text-xs text-gray-400">
                        {{ deal.published_at }}</span
                    >
                </div>
            </div>
        </Link>
    </article>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
import TransformImages from "@/Mixins/transform-storyblok-images";
import VLazyImage from "v-lazy-image/v2";

export default {
    mixins: [TransformImages],
    components: {
        Link,
        VLazyImage
    },
    props: {
        deal: {
            type: Object,
            required: true
        }
    }
};
</script>
