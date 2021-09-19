<template>
    <a
        :class="[
            expired
                ? 'bg-gray-300  focus:outline-none'
                : 'bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-400 focus:ring-2 focus:ring-offset-0 focus:ring-green-100',
            'relative w-full min-w-button text-white tracking-wider uppercase inline-flex font-semibold justify-center items-center whitespace-nowrap py-4  text-sm transition duration-150 ease-in-out',
        ]"
        :href="link"
        target="_blank"
    >
        <template>
            <slot></slot>
        </template>
    </a>
</template>

<script>
export default {
    props: {
        expired: {
            type: Boolean,
            required: true,
        },
        link: {
            type: String,
            required: false,
        },
    },
}
</script>
