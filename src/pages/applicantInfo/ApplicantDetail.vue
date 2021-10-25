<template>
  <v-container>
    <v-card class="mx-auto pl-6" max-width="960">
      <v-row>
        <v-col cols="15">
          <v-img
            width="200"
            height="200"
            class="custom-img grey darken-4 ml-10"
            :src="applicant.profilePhoto"
          ></v-img>
          <v-card class="mb-1 py-5 ml-15 text-center " width="30%">
            <h4 color="primary">{{ applicant.name }}</h4>
          </v-card>
          <v-card width="100%" class="mt-5">
            <h3 class="pr-5 py-2  primary text-center h3-custom">
              PERSONAL INFORMATION
            </h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-email
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.email }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-map-marker
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.currentAddress }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-phone
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.phone_no1 }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-cake-variant
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.dob }}</v-list-item-content
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card width="100%" class="mt-5">
            <h3 class="pr-5 py-2 mb-1 primary h3-custom text-center">
              EDUCATION
            </h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Balchelor Degree </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.bachelorUni
                  }}</v-list-item-content>
                  <v-list-item-subtitle class=""
                    ><strong class="mr-2"
                      >{{ applicant.bachelorDegree }} /
                    </strong>
                    {{ applicant.bachelorYear }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Master Degree </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.masterUni
                  }}</v-list-item-content>
                  <v-list-item-subtitle>
                    <strong class="mr-2"
                      >{{ applicant.masterDegree }} /
                    </strong>
                    {{ applicant.masterYear }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Deploma Name</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.deplomaName }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card width="100%" class="mt-5">
            <h3 class="pr-5 py-2 mb-1 primary h3-custom text-center">
              SKILLS
            </h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Programming Skill </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.programmingLang
                  }} /</v-list-item-content>
                  <v-list-item-subtitle class=""
                    ><strong class="mr-2"
                      >{{ applicant.programmingLevel }} 
                    </strong>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> English Skill </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.english
                  }}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Japanese SKill</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.japanese }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Other SKill</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.otherLang }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card width="100%" class="mt-5">
            <h3 class="pr-5 py-2 mb-1 primary h3-custom text-center">
              EXPERIENCE
            </h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Internship Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.internshipInfo
                  }}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Job Experience Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.jobExperience
                  }}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Total Experience years</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.totalExperience }} years
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script src="../../services/applicant-info/applicant-detail.js"></script>
<style
  scoped
  src="../../assets/css/pages/applicant-info/applicant-detail.css"
></style>
