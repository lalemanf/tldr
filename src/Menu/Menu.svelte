<style src="./Menu.scss" lang="scss"></style>
<script>
    export let items;
    let menu = false;

    function menuTrigger(){
        menu = !menu;
        (menu ?
            document.documentElement.style.overflow = 'hidden' :
            document.documentElement.style.overflow = 'scroll'
        );
    }
</script>

<main class="Menu">
    <span
        class="menu-trigger"
        on:click={ menuTrigger }
    >
        <img class="blink" src="img/menu.png" alt="">
    </span>

    { #if menu }
        <div
            class="menu-aside"
            on:click={ menuTrigger }
        >
            <h1 class="blink">
                T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓
            </h1>

            <ul>
                { #each items as item }
                    <li>
                        <a
                            class="glitch"
                            href={ '#' + item }
                            title={ item }
                            on:click={ menuTrigger }
                        >
                            { item }
                        </a>
                    </li>
                { /each }
            </ul>
        </div>
    { /if }

    <ul class="menu">
        { #each items as item }
                <li>
                    <a
                        class="glitch"
                        href={'#' + item }
                        title={ item }
                    >
                        { item }
                    </a>
                </li>
        { /each }
    </ul>
</main>