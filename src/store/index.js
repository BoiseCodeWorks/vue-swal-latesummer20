import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
let api = Axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000,
  withCredentials: true
})

import ns from "../services/NotificationService"
export default new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions
    },
    addQuestion(state, question) {
      state.questions.push(question)
    }
  },
  actions: {
    async getQuestions({ commit, dispatch }) {
      try {
        let res = await api.get('questions')
        commit('setQuestions', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createQuestion({ commit, dispatch }, question) {
      try {
        let res = await api.post("questions", question)
        ns.toast(question.Description + "\nQuestion Created")
        dispatch("getQuestions")
      } catch (error) {
        console.error(error)
      }
    },
    async deleteQuestion({ commit, dispatch }, questionId) {
      try {
        let res = await api.delete("questions/" + questionId)
        dispatch("getQuestions")
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
