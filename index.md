<style>
    .covers {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        grid-gap: 20px;
    }
    .cover {
        justify-content: space-between;
        position: relative;
        min-height: 200px
    }
    .cover img {
        width: 250px;
        border-radius: 8px; 
    }
    @media only screen and (min-width: 900px) {
        .covers {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
    }
</style>



# T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓



En este documento se recogen varios consejos y curiosidades que me han parecido interesantes. Espero que os sea de utilidad en vuestra nueva etapa como desarrolladores y os animo a que, de vez en cuando, os hagáis el mismo documento para vosotros mismos y veáis cuánto habéis avanzado con el transcurso del tiempo.

## 🅼🅸🅲🆁🅾 🅾🆁🅳🅴🅽🅰🅳🅾🆁🅴🆂

A todos aquellos a los que os gusta trastear y configurar servidores o crear aplicaciones chorra, os recomiendo que os hagáis con una **Raspberry** o similar. El uso que le vayáis a dar puede ser simplemente autodidáctico, donde poco a poco cogeréis soltura a la hora de entender los diferentes sistemas e incluso haceros una idea de cómo debe gestionarse bien un sistema o servidor.

Una buena web para comprar este tipo de cosas es [KUBII](https://www.kubii.es/215-raspberry-pi)

Si te va más la electrónica puedes probar con [Arduino](https://www.kubii.fr/26-arduino) que también da muchísimo juego. Os dejo también por aquí el proyecto [SUPER MEMO](https://github.com/lupastance/Super-Memo) que hice con esta plaquita, un pequeño juego al más puro estilo SIMÓN (el de los 4 colores).

La diferencia de los proyectos con Arduino es que la programación suele ser una programación que está siempre en un constante bucle para que se refresquen los gráficos de la pantalla, la perspectiva de la lógica cambia bastante y está muy bien que la practiquéis.

Cuidado con ésto porque es un come-horas, pero muy entretenido ;)

| Nombre del proyecto & Descripción                            |                            Enlace                            |
| :----------------------------------------------------------- | :----------------------------------------------------------: |
| Google Enable Magic Mirror ~ Un espejo mágico con información en tiempo real, representada en una pantalla que se sitúa por detrás de un espejo o cristal opaco | [Video demostración](https://www.youtube.com/watch?v=cVmDjJmcd2M) |
| RetroPie ~ Un completo salón ARCADE con un listado enorme de emuladores; desde las recreativas más míticas hasta las consolas domésticas de las últimas generaciones. | [Descargar RetroPie Frontend](https://retropie.org.uk/download/) |
| OpenScan ~ Proyecto para construirte tu propio centro de fotogrametría. Esta técnica consiste en fotografiar un objeto en la vida real desde todos sus ángulos. Después se lleva al ordenador como un objeto 3D completamente modelado y listo para usar |             [OpenScan](https://en.openscan.eu/)              |
| LAMP Server ~ Configurar la Raspberry para que haga de servidor Web es uno de los tops que más puede interesarte. Instala el tipo de server que necesites; Apache + PHP + MySQL y crea webs que luego tengas acceso desde cualquier sitio. Recuerda que el router que tienes en casa tiene un puerto USB el cual lo puedes usar para alimentar tu Raspberry y estar siempre funcionando.<br /><br />Por otro lado, necesitarás abrir los puertos de tu router para que se pueda acceder desde fuera de la red doméstica y un servicio DDNS para que, en caso de que se reinicie el router, no tengas que cambiar ninguna IP |  [Servicio DDNS no-ip gratuito](https://www.noip.com/es-MX)  |
| Tu propio Netflix o PLEX ~ Crea tu propia plataforma de streaming de contenido y comparte con tu familia y amigos las pelis y series que más te gustan. Puedes ir a casa de un amigo o amiga y disfrutar de cualquier contenido que tengas en la Raspberry | [Build your own OTT Platform](https://www.thesecmaster.com/build-your-own-ott-platforms-like-netflix-using-raspberry-pi-and-plex-media-server/) |



## 🅵🆁🅰🅼🅴🆆🅾🆁🅺🆂

Como ya sabéis, hoy en día se utilizan mucho los **Frameworks** a la hora de trabajar en un proyecto y no habéis tenido la oportunidad de ver nada en clase, salvo una pequeña parte de cómo usar **Laravel** y **Eloquent**. El siguiente orden no quiere decir que sean mejor o peor, simplemente es un listado.

| FRAMEWORK                                                    | TUTORIAL                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ReactJS ~ Creo que no necesita presentación, es el más usado a día de hoy según las últimas estadísticas | [React desde 0](https://www.youtube.com/watch?v=Di4eAxkPNp0&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD) |
| VueJS ~ Otro framework de JavaScript con sintaxis más sencilla e igual de potente que React. Cada día va ganando más adept@s | [VueJS desde 0](https://www.youtube.com/watch?v=GAQB7Y4X5fM&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT) |
| Ruby on Rails ~ Parecido a Laravel, también es un framework orientado a MVC (Modelo Vista Controlador) y parece ser que últimamente está bastante de moda. | [Ruby on Rails: de básico a avanzado en 60'](https://www.youtube.com/watch?v=YG_sSqLEKwo) |
| Svelte ~ Otro framework más como ReactJS y VueJS **pero** con la gran diferencia de que no usa un DOM Virtual, es mucho más rápido y la sintaxis es bastante cómoda. Dispone de un ecosistema de librerías para portar o crear tu APP en las plataformas más utilizadas, además de SSR (Server Side Rendering) , promesas nativas y demás. El tutorial básico que hay en la web oficial está genial y toca todos los aspectos del framework, lo recomiendo mucho. | [Tutorial básico](https://svelte.dev/tutorial/basics) \| [Curso Svelte JS SPA + Store + Router + Firebase](https://www.youtube.com/watch?v=77oMfyugtCk&list=PLPl81lqbj-4J6xcUu7SW4f3Y1ou8X8rRY) |
| ExpressJS ~ Un framework para backend en NodeJS, muy interesante | [NodeJS + Express + MongoDB + HWT + API + REST](https://www.youtube.com/watch?v=mG4U9t5nWG8&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6) |



## 🆅🅸🅳🅴🅾🅹🆄🅴🅶🅾🆂

La mayoría seguro que los conocéis pero por si acaso no habéis tenido ocasión de poder jugarlos, os dejo una lista de juegos muy interesantes y algo distintos a lo que normalmente se juega hoy en día. Puede que algunos títulos todavía no se hayan estrenado pero es bueno que los tengáis en el punto de mira.

Puede ser que algunos de estos juegos tengan su versión **remaster** o **HD** así que antes de poneros a jugar yo miraría si existe dicha versión y si no, tiráis de emulación.

<div class="covers">
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=uzBO0XV6Jps" target="_blank">
            <img src='img/ace-combat-the-belkan-war.jpg' title='Ace Combat: The Belkan War'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=F07aEV5Q0b4" target="_blank">
            <img src='img/battletoads-in-battlemaniacs.jpg' title='Battletoads in Battlemaniacs'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=uqtSKkyJgFM" target="_blank">
            <img src='img/braid.jpg' title='Braid'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=73IaO6EVOaU" target="_blank">
            <img src='img/broken-sword.jpg' title='Broken Sword: La Leyenda de los Templarios'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=FB1-xqYukAU" target="_blank">
            <img src='img/broken-sword-2.jpg' title='Broken Sword 2: Las Fuerzas del Mal'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=rbu9w9hn2Fw" target="_blank">
            <img src='img/burnout-revenge.jpg' title='Burnout: Revenge'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=ZZkAJ7z04UA" target="_blank">
            <img src='img/bushido-blade.jpg' title='Bushido Blade'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=XaI-h5_Phww" target="_blank">
            <img src='img/chrono-cross.jpg' title='Chrono Cross'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=6msQYRO1kiw" target="_blank">
            <img src='img/chrono-trigger.jpg' title='Chrono Trigger'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=SwkAFr8LO2c" target="_blank">
            <img src='img/comix-zone.jpg' title='Comix Zone'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=1I4D2KBQMCo" target="_blank">
            <img src='img/commandos.jpg' title='Commandos'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=NN-9SQXoi50" target="_blank">
            <img src='img/cuphead.jpg' title='Cuphead'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=xw8s7YBNi80" target="_blank">
            <img src='img/crush.jpg' title='Crush'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=RjdfdQL8b6w" target="_blank">
            <img src='img/donkey-kong-country.jpg' title='Donkey Kong Country'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=qXknTTEjLwQ" target="_blank">
            <img src='img/donkey-kong-country-2.jpg' title='Donkey Kong Country 2'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=S0zLQFvYdtA" target="_blank">
            <img src='img/dragon-ball-z-2-super-battle.jpg' title='Dragon Ball Z 2: Super Battle'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=2QtZkkb39FU" target="_blank">
            <img src='img/dustforce.jpg' title='Dustforce'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=lrEsNI0aCPk" target="_blank">
            <img src='img/fez.jpg' title='FEZ'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=utVE4aUKYuY" target="_blank">
            <img src='img/final-fantasy-vii.jpg' title='Final Fantasy VII'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=riNzVUJumM8" target="_blank">
            <img src='img/final-fantasy-x.jpg' title='Final Fantasy X'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=dPOMkB8Q9aQ" target="_blank">
            <img src='img/final-fantasy-xv.jpg' title='Final Fantasy XV'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=v8x-xHvVXoY" target="_blank">
            <img src='img/full-throttle.jpg' title='Full Throttle'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=hV1NBHL9Fa4" target="_blank">
            <img src='img/grim-fandango.jpg' title='Grim Fandango'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=BRiKQIVo7ao" target="_blank">
            <img src='img/gris.jpg' title='GRIS'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=UAO2urG23S4" target="_blank">
            <img src='img/hollow-knight.jpg' title='Hollow Knight'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=mg5s5Dq50Rg" target="_blank">
            <img src='img/hotline-miami.jpg' title='HOTLINE Miami'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=nWufEJ1Ava0" target="_blank">
            <img src='img/hyper-light-drifter.jpg' title='Hyper Light Drifter'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=yDm6PAgNohU" target="_blank">
            <img src='img/inside.jpg' title='INSIDE'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=61DZC-60x20" target="_blank">
            <img src='img/journey.jpg' title='journey'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=cEAybHEiZY0" target="_blank">
            <img src='img/killer-instinct.jpg' title='Killer Instinct'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=Y4HSyVXKYz8" target="_blank">
            <img src='img/limbo.jpg' title='LIMBO'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=uwZBdWRSBRs" target="_blank">
            <img src='img/machinarium.jpg' title='Machinarium'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=9N48pEhgqAk" target="_blank">
            <img src='img/max-payne.jpg' title='Max Payne'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=2N1TJP1cxmo" target="_blank">
            <img src='img/mirrors-edge.jpg' title="Mirror's Edge">
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=Ro6r15wzp2o" target="_blank">
            <img src='img/monster-hunter-world.jpg' title='Monster Hunter: World'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=CBUdCumyqEQ" target="_blank">
            <img src='img/monument-valley.jpg' title='Monument Valley'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=A2UHduOn5ZE" target="_blank">
            <img src='img/no-mans-sky.jpg' title="No Man's Sky">
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=RhnhRfTzRnw" target="_blank">
            <img src='img/okami.jpg' title='Okami'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=_QP5X6fcukM" target="_blank">
            <img src='img/papers-please.jpg' title='Papers, Please'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=1CKwmXy0YnY" target="_blank">
            <img src='img/pitfall-the-mayan-adventure.jpg' title='Pitfall: The Mayan Adventure'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=s2SyMPedy_o" target="_blank">
            <img src='img/prince-of-persia-el-alma-del-guerrero.jpg' title='Prince of Persia: El Alma del Guerrero'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=d-b-wpPM7yA" target="_blank">
            <img src='img/samorost-3.jpg' title='Samorost 3'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=GZVLA08lcR0" target="_blank">
            <img src='img/sea-of-stars.jpg' title='Sea Of Stars'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=HQytcf1fAt4" target="_blank">
            <img src='img/secret-of-evermore.jpg' title='Secret of Evermore'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=pdZQ98mWeto" target="_blank">
            <img src='img/shadow-of-the-colossus.jpg' title='Shadow of the Colossus'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=Np7-xrlYhLg" target="_blank">
            <img src='img/super-dodge-ball.jpg' title='Super Dodge Ball'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=0mOsQ8GJJHc" target="_blank">
            <img src='img/super-metroid.jpg' title='Super Metroid'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=_SX8XMwMw6Y" target="_blank">
            <img src='img/superliminal.jpg' title='SUPERLIMINAL'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=0i0TV5r0CSc" target="_blank">
            <img src='img/the-last-guardian.jpg' title='The Last Guardian'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=AdrSpqmmyfk" target="_blank">
            <img src='img/the-last-night.jpg' title='The Last Night'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=qJf9edBS0TQ" target="_blank">
            <img src='img/the-messenger.jpg' title='The Messenger'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=mjWFXHYtAWI" target="_blank">
            <img src='img/the-swapper.jpg' title='The Swapper'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=FYaE_xw4krw" target="_blank">
            <img src='img/ultimate-chicken-horse.jpg' title='Ultimate Chiken Horse'>
        </a>
    </div>
    <div class='cover'>
        <a href="https://www.youtube.com/watch?v=_d9infZeMO0" target="_blank">
            <img src='img/wipeout-2097.jpg' title='Wipeout 2097'>
        </a>
    </div>
</div>
