<!-- <script>
    import { base } from '$app/paths';
</script> -->

<script>
    import { onMount, onDestroy } from 'svelte';
    import { base } from '$app/paths';

    export let particleBackground = true;

    onMount(() => {
        window.particleBackground = particleBackground;
    });

    $: {
        if (typeof window !== 'undefined') {
            window.particleBackground = particleBackground;
        }
    }
</script>

<div id="clouds">
    <script src="{base}/js/sketch.js"></script>
</div>

<style>

    #clouds {
        top:0;
        position: relative;
        width: 0vw;
        height: 0vw;
        pointer-events: none;
    }
    
</style>