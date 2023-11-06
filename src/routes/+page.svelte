<script>
    import index from './index.svelte';
    import {onMount} from 'svelte'
    import { base } from '$app/paths';
    import Clouds from './Clouds.svelte';
</script>


<Clouds/>
<div id="body">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.8.0/lib/p5.js"></script>
    <div class="about-blurb">Hello! I'm a PhD student studying atmospheric chemistry and climate science at MIT. I'm interested in data science, visualization, modeling, and science communication. </div>
</div>


<style>
    #body {
        width: 40vw;
        min-width: 500px;
        margin: auto;
        margin-top: 15vh;
        font-size: 1em;
        line-height: 2rem;
        padding: 10px 10px 50px 10px;
    }
    :global(canvas) {
        pointer-events: none;
    }

    :global(a:hover) {
        color: var(--black) !important;
        text-shadow: 0 0 5px rgba(0,255,0,.18);
    }
    
    a {
        text-decoration: none !important;
        color: var(--black);
    }
</style>
