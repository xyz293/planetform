import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      token: '',
      name: '',
      time: '',
      unit: '',
      setToken: (token) => set({ token }),
      setUnit: (unit) => set({ unit }),
      setName: (name) => set({ name }),
      setTime: (time) => set({ time }),
    }),
    {
      name: 'user', // 存储到 localStorage 的 key
    }
  )
)

export default useUserStore
