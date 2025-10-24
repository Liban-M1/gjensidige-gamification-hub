import { questions, tips, badges } from "./data"

// Mock API functions
export const api = {
  getQuestions: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return questions
  },

  getTips: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return tips
  },

  getBadges: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return badges
  },

  getUserProgress: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return {
      points: 450,
      level: 3,
      quizzesCompleted: 12,
      badgesEarned: 2,
      securityLevel: 65,
    }
  },
}
