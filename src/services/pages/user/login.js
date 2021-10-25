export default {
    data: () => ({
        valid: true,
        username: "",
        password: "",
        error: "",

        // validation rules for user email.
        // emailRules: [
        //     value => !!value || "The email field is required.",
        //     value => /.+@.+\..+/.test(value) || "E-mail must be valid."
        // ],

        // validation rules for password.
        pwdRules: [value => !!value || "The password field is required."]
    }),

    methods: {
        /**
         * This to submit login form to admin side.
         * @returns void
         */
        login() {
            this.$store
                .dispatch("login", {
                    username: this.username,
                    password: this.password
                })
        }
    },
    computed: {
        validateError() {
            this.$store.state.errMsg
        }
    }
};