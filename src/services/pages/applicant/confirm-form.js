export default {
    name: "Confirm",
    data() {
        return {
            name: "",
        };
    },
    methods: {
        confirmApplicantForm() {
            let formData = new FormData();
            if (this.applicantInfo.profilePhoto !== null) {
                formData.append("imgfile", this.applicantInfo.profilePhoto);
                Object.entries(this.applicantInfo).forEach(([key, value]) => {
                    formData.append(key, value);
                });
            }
            formData.append("profilePhoto", this.applicantInfo.profilePhoto.name);
            this.$store.dispatch("createApplicant", formData);
        },
        cancelApplicantForm() {
            this.$store.dispatch("cancelApplicant");
            this.$router.push({
                name: "applicantform"
            });
        },
    },
    computed: {
        applicantInfo() {
            return this.$store.state.applicantsData;
        },
        imgFile() {
            return this.$store.state.imgFile;
        },
    },
};