<script>
    export let items;
    let menu = false;

    function menuTrigger(){
        menu = !menu;
    }
</script>

<main>
    <span
        class="menu-trigger"
        on:click={ menuTrigger }
    >
        <img class="blink" src="icon/menu.png" alt="">
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

<style>

    a {
        font-weight: 900;
        text-decoration: none;
        text-transform: capitalize;
    }

    .menu {
        display: none;
    }

    .menu-aside {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        
        width: 100%;
        height: 100%;
        background: var(--c-purple-2);
    }

    .menu-aside h1 {
        margin: 100px 0;
        text-align: center;
        font-family: system-ui;
    }

    .menu-aside ul {
        list-style-type: none;

        text-align: center;
        padding-left: 0;
    }

    .menu-aside li {
        margin-bottom: 45px;
    }

    .menu-trigger {
        position: fixed;
        top: 20px;
        right: 20px;
        mix-blend-mode: revert;
        z-index: 1;
        background: rgba(255,255,255,.3);
        padding: 10px;
        border-radius: 4px;
        height: 44px;
    }

        .menu-trigger img {
            width: 24px;
        }

    @media (min-width: 1024px) {
        .menu-trigger {
            display: none;
        }

        .menu {
            display: grid;
        }

        ul {
            width: 100%;
            list-style-type: none;
            padding: 20px 0;

            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-items: center;
        }
    }

    /* BUTTON GLITCH */
    .glitch,
    .glitch::after {
        padding: 8px 10px;
        font-size: 14px;
        font-style: italic;
        margin-right: 8px;
        background: linear-gradient(45deg, transparent 5%, var(--c-pink) 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        line-height: 1;
        box-shadow: 6px 0px 0px #54c6f4;
        outline: transparent;
        position: relative;
    }

    .glitch::after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        content: "//// tldr ////";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #54c6f4 3%, #54c6f4 5%, var(--c-pink) 5%);
        text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #54c6f4;
        clip-path: var(--slice-0);
    }

    .glitch:hover::after {
        animation: 1s glitch;
        animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }

        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }

        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }

        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }

        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }

        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }

        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }

        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }

        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }

        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }

        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
    }
</style>