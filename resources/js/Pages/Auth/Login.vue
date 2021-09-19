<template>
    <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div
            class="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center justify-center"
        >
            <!-- Logo -->
            <Logo />
        </div>

        <div class="sm:mx-auto sm:w-full sm:max-w-lg">
            <div class="p-8 sm:px-10">
                <form class="space-y-4" method="POST" @submit.prevent="form.post('/login')">
                    <TextInput
                        name="username"
                        :value.sync="form.username"
                        :error="errors.username"
                        type="text"
                        label="Benutzername"
                        placeholder="Benutzername"
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
                    <div>
                        <button
                            type="submit"
                            class="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-3 focus:ring-offset-0 focus:ring-green-200"
                        >Anmelden</button>
                    </div>
                </form>
                <p class="mt-8 mb-1 text-gray-500">Noch kein Konto?</p>
                <Link
                    href="/register"
                    class="font-semibold border-2 block py-2.5 text-center border-green-700 hover:bg-green-50 text-green-700"
                >Jetzt Registrieren</Link>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from "@/Components/TextInput.vue";
import Logo from "@/Components/Logo.vue";
import { Link } from "@inertiajs/inertia-vue";

export default {
    components: {
        TextInput,
        Logo,
        Link
    },
    props: {
        errors: Object,
    },
    data() {
        return {
            form: this.$inertia.form({
                email: null,
                password: null,
                remember: false,
            }),
        }
    },
}
</script>