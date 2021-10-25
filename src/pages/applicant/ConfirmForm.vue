<template>
  <div>
    <form @submit.prevent="confirmApplicantForm">
      <v-card class="mx-auto mb-3" max-width="960">
        <v-card-title
          class="primary white--text text-center"
          icon="mdi-account"
        >
          Check Your Information
        </v-card-title>
        <v-card-title size class=" text-md-body-1 ">
          <span class="width-label black--text"> Name </span
          >{{ applicantInfo.name }}
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <v-row>
            <v-col cols="4">
              <span class="pro black--text">Profile Photo </span>
            </v-col>
            <v-col cols="8">
              <v-img
                width="200"
                v-if="imgFile && imgFile.length"
                :src="imgFile"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Date of Birth </span
          >{{ applicantInfo.dob }}
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Phone Number </span
          >{{ applicantInfo.phone_no1 }}
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Email </span
          >{{ applicantInfo.email }}
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Current Address </span
          >{{ applicantInfo.currentAddress }}
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Hometown Address </span
          >{{ applicantInfo.hometownAddress }}
        </v-card-title>
        <hr />

        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Bachelor Info </span
          ><span v-if="applicantInfo.bachelorDegree"
            >{{ applicantInfo.bachelorDegree }} ,
          </span>
          <span v-if="applicantInfo.bachelorUni">
            {{ applicantInfo.bachelorUni }}
          </span>
          <span v-if="applicantInfo.bachelorYear">
            , {{ applicantInfo.bachelorYear }}
          </span>
        </v-card-title>
        <hr />
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Master Info </span
          ><span v-if="applicantInfo.masterDegree">
            {{ applicantInfo.masterDegree }} ,
          </span>
          <span>
            {{ applicantInfo.masterUni }}
          </span>
          <span v-if="applicantInfo.masterYear">
            , {{ applicantInfo.masterYear }}
          </span>
        </v-card-title>
        <hr/>
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Deploma Name </span
          >{{ applicantInfo.deplomaName }}
        </v-card-title>
        <hr/>
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Certificate </span
          >{{ applicantInfo.certificate }}
        </v-card-title>
        <hr/>
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Programming Skill </span
          >{{
            applicantInfo.programmingLang +
              " : " +
              applicantInfo.programmingLevel
          }}
        </v-card-title>
        <hr/>
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> English Skill </span
          >{{ applicantInfo.english }}
        </v-card-title>
        <hr/>
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Japanese Language Skill </span
          >{{ applicantInfo.japanese }}
        </v-card-title>
        <hr/>
        <v-card-title size class=" text-md-body-1">
          <span class="width-label black--text"> Other Language</span
          >{{ applicantInfo.otherLang }}
        </v-card-title>
        <hr/>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label black--text">Has Job Experience? </span
              >{{ applicantInfo.jobExperience }}
            </v-card-title>
            <hr/>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label black--text"> Internship Info </span
              >{{ applicantInfo.internshipInfo }}
            </v-card-title>
            <hr/>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label black--text"> Job Experience </span
              >{{ applicantInfo.jobExperience }}
            </v-card-title>
            <hr/>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label black--text"> Total Experience </span>
              {{ applicantInfo.totalExperience }} years
            </v-card-title>
            <hr/>
            <div class="text-center mt-5 pb-10">
              <v-btn @click="cancelApplicantForm" class="mr-4" color="error">
                Cancel
              </v-btn>
              <v-btn type="submit" color="primary">
                Confirm
              </v-btn>
            </div>
      </v-card>
    </form>
  </div>
</template>

<script src="../../services/pages/applicant/confirm-form.js"></script>
<style scoped src="../../assets/css/pages/applicant/confirm-form.css"></style>
