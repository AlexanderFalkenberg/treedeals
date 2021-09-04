<template>
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
    <div class="bg-white">
        <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  

  -->
        <transition
            enter-active-class="transition-all duration-300 ease-in-out"
            leave-active-class="transition-all duration-300 ease-in-out"
        >
            <div
                v-if="mobileMenuOpen"
                class="fixed ease-in-out inset-0 flex z-20 lg:hidden"
                role="dialog"
                aria-modal="true"
            >
                <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
                <!--  <div
                class="fixed inset-0 bg-black bg-opacity-25"
                aria-hidden="true"
            ></div> -->

                <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
       
    -->

                <div
                    :class="
                        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    "
                    class="transition-transform transform duration-300 ease-in-out relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
                >
                    <div class="px-4 pt-5 pb-2 flex">
                        <button
                            @click="mobileMenuOpen = false"
                            type="button"
                            class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                        >
                            <span class="sr-only">Close menu</span>
                            <!-- Heroicon name: outline/x -->
                            <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <!-- Links -->
                    <div class="mt-2">
                        <div class="border-b border-gray-200">
                            <div
                                class="-mb-px flex px-4 space-x-8"
                                aria-orientation="horizontal"
                                role="tablist"
                            >
                                <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" -->
                                <button
                                    id="tabs-1-tab-1"
                                    class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                                    aria-controls="tabs-1-panel-1"
                                    role="tab"
                                    type="button"
                                >
                                    Women
                                </button>

                                <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" -->
                                <button
                                    id="tabs-1-tab-2"
                                    class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                                    aria-controls="tabs-1-panel-2"
                                    role="tab"
                                    type="button"
                                >
                                    Men
                                </button>
                            </div>
                        </div>

                        <!-- 'Women' tab panel, show/hide based on tab state. -->
                        <div
                            id="tabs-1-panel-1"
                            class="pt-10 pb-8 px-4 space-y-10"
                            aria-labelledby="tabs-1-tab-1"
                            role="tabpanel"
                            tabindex="0"
                        >
                            <div class="space-y-4">
                                <div
                                    class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                                >
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                        class="object-center object-cover group-hover:opacity-75"
                                    />
                                    <div class="flex flex-col justify-end">
                                        <div
                                            class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"
                                        >
                                            <a
                                                href="#"
                                                class="font-medium text-gray-900"
                                            >
                                                <span
                                                    class="absolute inset-0"
                                                    aria-hidden="true"
                                                ></span>
                                                New Arrivals
                                            </a>
                                            <p
                                                aria-hidden="true"
                                                class="mt-0.5 text-gray-700 sm:mt-1"
                                            >
                                                Shop now
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                                >
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                                        alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                        class="object-center object-cover group-hover:opacity-75"
                                    />
                                    <div class="flex flex-col justify-end">
                                        <div
                                            class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"
                                        >
                                            <a
                                                href="#"
                                                class="font-medium text-gray-900"
                                            >
                                                <span
                                                    class="absolute inset-0"
                                                    aria-hidden="true"
                                                ></span>
                                                Basic Tees
                                            </a>
                                            <p
                                                aria-hidden="true"
                                                class="mt-0.5 text-gray-700 sm:mt-1"
                                            >
                                                Shop now
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                                >
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg"
                                        alt="Model wearing minimalist watch with black wristband and white watch face."
                                        class="object-center object-cover group-hover:opacity-75"
                                    />
                                    <div class="flex flex-col justify-end">
                                        <div
                                            class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"
                                        >
                                            <a
                                                href="#"
                                                class="font-medium text-gray-900"
                                            >
                                                <span
                                                    class="absolute inset-0"
                                                    aria-hidden="true"
                                                ></span>
                                                Accessories
                                            </a>
                                            <p
                                                aria-hidden="true"
                                                class="mt-0.5 text-gray-700 sm:mt-1"
                                            >
                                                Shop now
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-10">
                                <p class="font-medium text-gray-900">
                                    Kategorien
                                </p>
                                <ul
                                    role="list"
                                    aria-labelledby="women-shoes-heading"
                                    class="mt-4 space-y-4"
                                >
                                    <li
                                        class="flex py-2"
                                        v-for="category in categories"
                                        :key="category.slug"
                                    >
                                        <a href="#" class="hover:text-gray-800">
                                            {{ category.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div class="flow-root">
                            <a
                                href="#"
                                class="-m-2 p-2 block font-medium text-gray-900"
                                >Company</a
                            >
                        </div>

                        <div class="flow-root">
                            <a
                                href="#"
                                class="-m-2 p-2 block font-medium text-gray-900"
                                >Stores</a
                            >
                        </div>
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4">
                        <a href="#" class="-m-2 p-2 flex items-center">
                            <img
                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                alt=""
                                class="w-5 h-auto block flex-shrink-0"
                            />
                            <span
                                class="ml-3 block text-base font-medium text-gray-900"
                            >
                                CAD
                            </span>
                            <span class="sr-only">, change currency</span>
                        </a>
                    </div>
                </div>
            </div>
        </transition>

        <header class="relative bg-white">
            <nav
                aria-label="Top"
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div>
                    <div class="h-16 flex items-center justify-between">
                        <div class="flex-1 flex items-center lg:hidden">
                            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
                            <button
                                @click="mobileMenuOpen = true"
                                type="button"
                                class="-ml-2 bg-white p-2 rounded-md text-gray-400"
                            >
                                <span class="sr-only">Open menu</span>

                                <!-- Heroicon name: outline/menu -->
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>

                            <a
                                href="#"
                                class="ml-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                                <span class="sr-only">Search</span>
                                <!-- Heroicon name: outline/search -->
                                <svg
                                    class="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </a>
                        </div>

                        <!-- Flyout menus -->
                        <div class="hidden lg:flex-1 lg:block lg:self-stretch">
                            <div class="h-full flex space-x-8">
                                <div class="flex">
                                    <div class="relative flex">
                                        <!-- Item active: "text-indigo-600", Item inactive: "text-gray-700 hover:text-gray-800" -->
                                        <button
                                            @click="setActiveFlyout"
                                            type="button"
                                            class=" relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm"
                                            aria-expanded="false"
                                        >
                                            Kategorien
                                            <!-- Open: "bg-indigo-600", Closed: "" -->
                                            <span
                                                class="absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px"
                                                aria-hidden="true"
                                            ></span>
                                        </button>
                                    </div>

                                    <!--
                  'Women' flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                                    <transition
                                        enter-active-class="transition ease-out duration-200"
                                        leave-active-class="transition ease-out duration-200"
                                        enter-class="opacity-0"
                                        enter-to-class="opacity-100"
                                        leave-class="opacity-100"
                                        leave-to-class="opacity-0"
                                    >
                                        <div
                                            v-if="flyoutMenuOpen"
                                            class="absolute z-50 top-full inset-x-0"
                                        >
                                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                            <div
                                                class="absolute inset-0 top-1/2 bg-white shadow"
                                                aria-hidden="true"
                                            ></div>

                                            <div class="relative bg-white">
                                                <div
                                                    class="max-w-7xl mx-auto px-8"
                                                >
                                                    <div
                                                        class="grid grid-cols-2 gap-y-10 gap-x-8 py-12"
                                                    >
                                                        <div
                                                            class="grid grid-rows-1 grid-cols-2 gap-8 text-sm"
                                                        >
                                                            <div
                                                                class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden col-span-2 aspect-w-2"
                                                            >
                                                                <img
                                                                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                                                    alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                                                    class="object-center object-cover group-hover:opacity-75"
                                                                />
                                                                <div
                                                                    class="flex flex-col justify-end"
                                                                >
                                                                    <div
                                                                        class="p-4 bg-white bg-opacity-60 text-sm"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            class="font-medium text-gray-900"
                                                                        >
                                                                            <span
                                                                                class="absolute inset-0"
                                                                                aria-hidden="true"
                                                                            ></span>
                                                                            New
                                                                            Arrivals
                                                                        </a>
                                                                        <p
                                                                            aria-hidden="true"
                                                                            class="mt-0.5 text-gray-700 sm:mt-1"
                                                                        >
                                                                            Shop
                                                                            now
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                                                            >
                                                                <img
                                                                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                                                                    alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                                                    class="object-center object-cover group-hover:opacity-75"
                                                                />
                                                                <div
                                                                    class="flex flex-col justify-end"
                                                                >
                                                                    <div
                                                                        class="p-4 bg-white bg-opacity-60 text-sm"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            class="font-medium text-gray-900"
                                                                        >
                                                                            <span
                                                                                class="absolute inset-0"
                                                                                aria-hidden="true"
                                                                            ></span>
                                                                            Basic
                                                                            Tees
                                                                        </a>
                                                                        <p
                                                                            aria-hidden="true"
                                                                            class="mt-0.5 text-gray-700 sm:mt-1"
                                                                        >
                                                                            Shop
                                                                            now
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                                                            >
                                                                <img
                                                                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg"
                                                                    alt="Model wearing minimalist watch with black wristband and white watch face."
                                                                    class="object-center object-cover group-hover:opacity-75"
                                                                />
                                                                <div
                                                                    class="flex flex-col justify-end"
                                                                >
                                                                    <div
                                                                        class="p-4 bg-white bg-opacity-60 text-sm"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            class="font-medium text-gray-900"
                                                                        >
                                                                            <span
                                                                                class="absolute inset-0"
                                                                                aria-hidden="true"
                                                                            ></span>
                                                                            Accessories
                                                                        </a>
                                                                        <p
                                                                            aria-hidden="true"
                                                                            class="mt-0.5 text-gray-700 sm:mt-1"
                                                                        >
                                                                            Shop
                                                                            now
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="text-sm text-gray-700"
                                                        >
                                                            <div
                                                                class="space-y-10"
                                                            >
                                                                <div>
                                                                    <p
                                                                        class="font-medium text-gray-900"
                                                                    >
                                                                        Kategorien
                                                                    </p>
                                                                    <ul
                                                                        role="list"
                                                                        aria-labelledby="women-shoes-heading"
                                                                        class="mt-4 grid grid-cols-3 gap-6"
                                                                    >
                                                                        <li
                                                                            class="flex"
                                                                            v-for="category in categories"
                                                                            :key="
                                                                                category.slug
                                                                            "
                                                                        >
                                                                            <a
                                                                                href="#"
                                                                                class="hover:text-gray-800"
                                                                            >
                                                                                {{
                                                                                    category.name
                                                                                }}
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </div>

                        <!-- Logo -->
                        <Link
                            href="/"
                            class="flex text-xl font-display text-green-500"
                        >
                            <span class="sr-only">treedeals</span>
                            tree<span class="text-green-900">deals</span>
                        </Link>

                        <div class="flex-1 flex items-center justify-end">
                            <!-- Search -->
                            <a
                                href="#"
                                class="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
                            >
                                <span class="sr-only">Search</span>
                                <!-- Heroicon name: outline/search -->
                                <svg
                                    class="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </a>

                            <!-- Account -->
                            <a
                                href="#"
                                class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
                            >
                                <span class="sr-only">Account</span>
                                <!-- Heroicon name: outline/user -->
                                <svg
                                    class="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </a>

                            <!-- Cart -->
                            <div class="ml-4 flow-root lg:ml-6">
                                <a
                                    href="#"
                                    class="group -m-2 p-2 flex items-center"
                                >
                                    <!-- Heroicon name: outline/shopping-bag -->
                                    <svg
                                        class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                    <span
                                        class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                        >0</span
                                    >
                                    <span class="sr-only"
                                        >items in cart, view bag</span
                                    >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";

export default {
    components: {
        Link
    },
    data() {
        return {
            mobileMenuOpen: false,
            flyoutMenuOpen: false
        };
    },
    computed: {
        categories() {
            return this.$page.props.categories;
        }
    },
    methods: {
        setActiveFlyout() {
            this.flyoutMenuOpen = !this.flyoutMenuOpen;
        }
    }
};
</script>
