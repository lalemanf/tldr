import { writable } from 'svelte/store';

export function getData(criteria) {
    return fetch('https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/' + criteria + '.json')
        .then(response => response.json())
        .catch(e => console.log(e))
}

export const cinemaMode = writable(false);
export const cinemaCurrentVideo = writable();

    export const cinemaModeChange = (game) => {
        cinemaMode.update((s) => !s);
        cinemaCurrentVideo.set(game);
    }