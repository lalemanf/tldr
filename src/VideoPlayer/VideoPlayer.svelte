<style src="./VideoPlayer.scss" lang="scss"></style>
<script>
    import { cinemaCurrentVideo, cinemaModeChange } from "../stores/main";
</script>

<main class="VideoPlayer">
    <div
        class="overlay"
        on:click={ cinemaModeChange }
    ></div>

    { #if $cinemaCurrentVideo }
        <h2 class="glitch">
            { $cinemaCurrentVideo.name }
        </h2>
        <iframe
            src={ 'https://www.youtube.com/embed/' + $cinemaCurrentVideo.youtube }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    { /if }
</main>
