import {
    mapGetters
} from "vuex";
import axios from "axios";
export default {
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [{
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Phone Number",
                    value: "phone_no1",
                },
                {
                    text: "University",
                    value: "bachelorUni",
                },
                {
                    text: "Job Experience",
                    value: "jobExperience",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
            searchValue: null,
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    created() {
        this.selectAllApplicant();
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * {string} searchValue The Keywork to search
         * @returns void
         */
        filterPosts() {
            if (this.searchValue) {
                this.showList = this.postList.filter((post) => {
                    return (
                        post.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                        post.bachelorUni
                        .toLowerCase()
                        .includes(this.searchValue.toLowerCase())
                    );
                });
            } else {
                this.showList = this.postList;
            }
        },
        /**
         * This is to delete the applicant
         * @param {id} id The applicant id to delete
         * @returns void
         */
        DeleteUser(id) {
            if (confirm("Are you sure ?")) {
                axios
                    .delete("/api/destroy?id=" + id)
                    .then((resp) => {
                        if (resp) {
                            this.selectAllApplicant();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        applicantDetail(id) {
            this.$router.push(`/applicantinfo/${id}`);
        },
        /**
         * This is to read all applicants from database.
         * @returns void
         */
        selectAllApplicant() {
            axios
                .get("/api/show")
                .then((response) => {
                    this.postList = response.data;
                    this.showList = this.postList;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};