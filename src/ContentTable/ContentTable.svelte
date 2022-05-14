<style lang="scss" src="./ContentTable.scss"></style>

<script>
    import VideoPlayer from '../VideoPlayer/VideoPlayer.svelte';
    import { getData, cinemaMode, cinemaModeChange } from '../stores/main'
    
    export let database;

    let data = getData(database);
</script>

<main class="ContentTable">
    { #if $cinemaMode }
        <VideoPlayer />
    { /if }
    
    {#await data}
        <p>Cargando listado...</p>
    {:then data}
        {#if database !== `games`}
            <figure>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Nombre del proyecto & descripción
                            </th>
                            <th>
                                Enlace
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { #each data as data }
                            <tr>
                                <td>
                                    { data.name } ~ { data.description }
                                </td>
                                <td>
                                    <a
                                        href={ data.link }
                                        target="_blank"
                                    >
                                        
                                        { data["link-title"] }
                                    </a>
                                </td>
                            </tr>
                        { /each }
                    </tbody>
                </table>
            </figure>
        {:else}
            <h2>
                CinemaMode: { $cinemaMode }
            </h2>
            <button>CINEMA</button>
            <div class="covers">
                { #each data as game }
                    <div class="cover">
                        <img
                            alt={ game.name }
                            src={ `img/` + game.slug + `.jpg` }
                            on:click={ () => cinemaModeChange(game) }
                        >
                    </div>
                { /each }
            </div>
            <p class="total">
                Total juegos: { data.length }
            </p>
        {/if}
    {/await}   
</main>