<template>
  <div class="home container-fluid">
    <div class="row" @click="getQuestions">
      <div class="col-1">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-1">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-10 align-self-center">
        <HelloWorld msg="elcome to who wants to win money" />
      </div>
    </div>
    <button @click="createSection = !createSection" class="btn btn-warning">Toggle Create</button>
    <create-component v-if="createSection" />
    <div class="row questionRow">
      <question-component
        v-for="question in questions"
        :key="question._id"
        :questionProp="question"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import QuestionComponent from "@/components/QuestionComponent.vue";
import CreateComponent from "@/components/CreateComponent.vue";
export default {
  name: "Home",
  data() {
    return {
      createSection: false,
    };
  },
  components: {
    HelloWorld,
    CreateComponent,
    QuestionComponent,
  },
  mounted() {
    this.$store.dispatch("getQuestions");
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
  },
  methods: {
    getQuestions() {
      this.$store.dispatch("getQuestions");
    },
  },
};
</script>
