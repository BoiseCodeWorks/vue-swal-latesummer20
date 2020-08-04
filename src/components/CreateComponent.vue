<template>
  <div class="CreateComponent col-12">
    <form @submit.prevent="createQuestion()">
      <label for="Description">Description</label>
      <input
        type="text"
        placeholder="Description"
        class="form-control"
        v-model="newQuestion.Description"
      />
      <label for="Points">Points</label>
      <input type="number" placeholder="Points" class="form-control" v-model="newQuestion.Points" />
      <label for="Time">Time</label>
      <input type="number" placeholder="Time" class="form-control" v-model="newQuestion.Time" />
      <button type="submit" class="btn btn-primary">Create</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "CreateComponent",
  data() {
    return { newQuestion: {} };
  },
  computed: {},
  methods: {
    createQuestion() {
      // this.$store.dispatch("createQuestion", {
      //   Description: this.newQuestion.Description,
      //   Time: this.newQuestion.Time,
      //   Points: this.newQuestion.Points
      // });
      this.$store.dispatch("createQuestion", this.newQuestion);
    },
  },
  props: {},
  components: {},
};
</script>


<style lang="css" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>