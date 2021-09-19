<template>
    <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div
                class="bg-yellow-50 border-l-4 w-full max-w-md mx-auto border-yellow-400 p-4 fixed top-4 left-1/2 transform -translate-x-1/2"
            >
                <div class="flex">
                    <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/exclamation -->
                        <svg
                            class="h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm text-yellow-700">
                            Wir haben dir einen Bestätigungslink auf zugesendet
                            <a
                                href="#"
                                @click.prevent="resendVerificationEmail"
                                class="border mt-1 block text-center border-yellow-600 px-2 py-1.5 rounded font-medium text-yellow-700 hover:bg-yellow-100"
                            >Bestätigungslink erneut senden</a>
                        </p>
                    </div>
                </div>
            </div>
        </transition>

        <div
            class="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center justify-center"
        >
            <!-- Logo -->
            <Logo />
            <p
                class="text-center text-sm text-gray-600 max-w-md"
            >Jetzt registrieren und zum Erhalt der Wälder beitragen.</p>
        </div>

        <div class="sm:mx-auto sm:w-full sm:max-w-lg">
            <div class="p-8 sm:px-10">
                <form class="space-y-4" method="POST" @submit.prevent="submit">
                    <TextInput
                        name="username"
                        :value.sync="form.username"
                        :error="errors.username"
                        type="text"
                        label="Benutzername"
                        placeholder="Benutzername"
                    />

                    <TextInput
                        name="email"
                        :value.sync="form.email"
                        :error="errors.email"
                        type="text"
                        label="E-mail-Adresse"
                        placeholder="E-Mail-Adresse"
                    />

                    <TextInput
                        name="password"
                        :value.sync="form.password"
                        :error="errors.password"
                        type="password"
                        label="Passwort"
                        autocomplete="new-password"
                        placeholder="Passwort"
                    />

                    <TextInput
                        name="password_confirmation"
                        :value.sync="errors.password_confirmation"
                        :error="errors.password_confirmation"
                        type="password"
                        label="Passwort Bestätigen"
                        autocomplete="new-password"
                        placeholder="Passwort Bestätigen"
                    />
                    <div>
                        <button
                            type="submit"
                            class="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-3 focus:ring-offset-0 focus:ring-green-200"
                        >Registrieren</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from "@/Components/TextInput.vue";
import Logo from "@/Components/Logo.vue";


export default {
    components: {
        TextInput,
        Logo
    },
    props: {
        errors: Object,
    },
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
        }
    },
    methods: {
        submit() {
            console.log("Test")
            this.$inertia.post('/register', this.form)
        },
    },
}
</script>