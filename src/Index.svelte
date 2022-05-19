<script>
    import ContentTable from './ContentTable/ContentTable.svelte';
    import Menu from './Menu/Menu.svelte';

    let menuItems = [
        "microordenadores",
        "frameworks",
        "videojuegos",
        "cinema"
    ];


</script>

<main id="Index">
    <h1 id="top">
        T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓
    </h1>

    <Menu items={ menuItems } />
    
    <p class="blink">
        Actualizado: 19 / 05 / 2022
    </p>
    
    <p>
        En este documento se recogen varios consejos y curiosidades que me han parecido interesantes. Espero que os sea de utilidad en vuestra nueva etapa como desarrolladores y os animo a que, de vez en cuando, os hagáis el mismo documento para vosotros mismos y veáis cuánto habéis avanzado con el transcurso del tiempo.
    </p>

    <h2 id="microordenadores">
        <a href="#top">
            🅼🅸🅲🆁🅾 🅾🆁🅳🅴🅽🅰🅳🅾🆁🅴🆂
        </a>
    </h2>

        <p>
            A todos aquellos a los que os gusta trastear y configurar servidores o crear aplicaciones chorra, os recomiendo que os hagáis con una Raspberry o similar. El uso que le vayáis a dar puede ser simplemente autodidáctico, donde poco a poco cogeréis soltura a la hora de entender los diferentes sistemas e incluso haceros una idea de cómo debe gestionarse bien un sistema o servidor.
        </p>

        <p>
            Una buena web para comprar este tipo de cosas es <a href="https://www.kubii.es/215-raspberry-pi" target="_blank" >KUBII</a>
        </p>

        <p>
            Si te va más la electrónica puedes probar con <a href="https://www.kubii.fr/26-arduino" target="_blank">Arduino</a> que también da muchísimo juego. Os dejo también por aquí el proyecto <a href="https://github.com/lupastance/Super-Memo" target="_blank">SUPER MEMO</a> que hice con esta plaquita, un pequeño juego al más puro estilo SIMÓN (el de los 4 colores).
        </p>

        <p>
            La diferencia de los proyectos con <a href="https://www.kubii.fr/26-arduino" target="_blank">Arduino</a> es que la programación suele ser una programación que está siempre en un constante bucle para que se refresquen los gráficos de la pantalla, la perspectiva de la lógica cambia bastante y está muy bien que la practiquéis.
        </p>

        <p>
            Cuidado con ésto porque es un come-horas, pero muy entretenido ;)
        </p>

        <ContentTable database={ `microcomputers` } />

    <h2 id="frameworks">
        <a href="#top">
            🅵🆁🅰🅼🅴🆆🅾🆁🅺🆂
        </a>
    </h2>
        <p>
            Como ya sabéis, hoy en día se utilizan mucho los Frameworks a la hora de trabajar en un proyecto y no habéis tenido la oportunidad de ver nada en clase, salvo una pequeña parte de cómo usar Laravel y Eloquent. El siguiente orden no quiere decir que sean mejor o peor, simplemente es un listado.
        </p>

        <ContentTable database={ `frameworks` } />

    <h2 id="videojuegos">
        <a href="#top">
            🆅🅸🅳🅴🅾🅹🆄🅴🅶🅾🆂
        </a>
    </h2>
        <p>
            La mayoría seguro que los conocéis pero por si acaso no habéis tenido ocasión de poder jugarlos, os dejo una lista de juegos muy interesantes y <b>algo distintos</b> a lo que normalmente se juega hoy en día. Puede que algunos títulos todavía <b>no se hayan estrenado</b> pero es bueno que los tengáis en el punto de mira.
        </p>

        <p>
            Seguramente veréis juegos que son muy conocidos y no tan raros, que forman parte de alguna saga como <b>Final Fantasy</b> o el incansable <b>Mario Bros.</b> pero os pongo los juegos de dichas sagas que considero los mejores (siempre dentro de mi humilde opinión como jugón desde los 80) o, por lo menos, distintos al resto.
        </p>

        <p>
            Es posible que algunos de estos juegos tengan su versión <b>remaster o HD</b> así que antes de poneros a jugar yo miraría si existe dicha versión y si no, tiráis de emulación.
        </p>

        <ContentTable database={ `games` } />

    <h2 id="cinema">
        <a href="#top">
            🅲🅸🅽🅴🅼🅰
        </a>
    </h2>

        <p>
            En el siguiente listado se muestran películas, series y documentales relacionados con el mundo de la informática y los videojuegos. Contenido que considero bastante interesante y que, si no tenéis nada mejor que hacer o no os apetece jugar a ningún juego de la lista y estáis algo aburrid@s, le deis una oportunidad a alguna de estas cintas.
        </p>

        <p class="blink">
            Próximamente
        </p>
</main>