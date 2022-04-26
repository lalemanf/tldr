<script>
    export let database;
    
    const dataBaseURL = 'https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/';

    const fetchData = () => {
        return fetch(dataBaseURL + database + '.json')
            .then(res => res.json())
            .then(res => res)
            .catch(e => console.error(e))
    }

    let data = fetchData();

</script>

<main>
    {#await data}
        <p>Loading Data...</p>
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
                                        class="glitch"
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
            <div class="covers">
                { #each data as game }
                    <div class="cover">
                        <a
                            href={ `https://www.youtube.com/watch?v=` + game.youtube }
                            title={ game.name }
                            target="_blank"
                        >
                            <img
                                alt={ game.name }
                                src={ `img/` + game.slug + `.jpg` }
                            >
                        </a>
                    </div>
                { /each }
            </div>
            <p class="total">
                Total juegos: { data.length }
            </p>
        {/if}
    {/await}   
</main>

<style>
    .covers {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        grid-gap: 20px;
    }

    .cover {
        justify-content: space-between;
        position: relative;
    }

    .cover img {
        max-width: 100%;
        border-radius: 8px;
    }

    @media only screen and (min-width: 900px) {
        .covers {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
    }
</style>