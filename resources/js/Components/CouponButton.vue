<template>
    <div v-if="coupon_code" class="relative">
        <CopyToClipboard :text="coupon_code">
            <button
                :class="[
                    expired ? '' : ''
                ]"
                class="w-full tracking-wider py-4 px-4 border border-gray-600 text-gray-800 text-sm inline-flex justify-center text-center items-center cursor-pointer whitespace-nowrap font-bold focus:outline-none transition duration-150 ease-in-out"
            >{{ coupon_code }}</button>
        </CopyToClipboard>
    </div>
</template>

<script>
import VueCopyToClipboard from "vue-copy-to-clipboard";

export default {
    data() {
        return {
            showIcon: false
        };
    },
    components: {
        CopyToClipboard: VueCopyToClipboard
    },
    props: {
        coupon_code: {
            type: String,
            required: true
        },
        expired: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>
