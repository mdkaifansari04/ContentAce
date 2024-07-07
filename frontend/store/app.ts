import { create } from 'zustand';

interface UserSchema {
  email: string;
  name: string;
  bio: string;
}
interface Message {
  sender: 'user' | 'model';
  message: string;
}

interface MainStoreSchema {
  user: UserSchema;
  setUser: (user: UserSchema) => void;
  generatedContent: string;
  setGeneratedContent: (value: string) => void;
  chats: Message[];
  setChat: (value: Message) => void;
}

const useStore = create<MainStoreSchema>()((set) => ({
  user: {} as UserSchema,
  generatedContent: '',
  chats: [],
  setChat: (message) => set((state) => ({ chats: [...state.chats, message] })),
  setUser: (user) => set({ user: user }),
  setGeneratedContent: (generatedContent) =>
    set({ generatedContent: generatedContent }),
}));

export default useStore;
