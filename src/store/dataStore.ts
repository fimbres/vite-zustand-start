import { create } from 'zustand';

interface Album {
    userId: string;
    id: string;
    title: string;
}

interface DataStore {
    data: Album[];
    getData: () => Promise<void>;
    clearData: () => void;
}

export const useDataStore = create<DataStore>(set => ({
    data: [],
    getData: async () => {
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/albums')).json() as Album[];

        console.log(posts);

        set(state => ({
            ...state,
            posts,
        }));
    },
    clearData: () => set({}, true),
}));
