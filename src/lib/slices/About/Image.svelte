<script lang="ts">
    import {onMount} from 'svelte'
    import { type ImageField } from "@prismicio/client"
    import { PrismicImage } from "@prismicio/svelte";
	// import { SliceSimulator } from "@slicemachine/adapter-sveltekit/simulator";
	import clsx from "clsx";
    import gsap from 'gsap'
	import { components } from '..';

    export let image: ImageField
    let className: string = ""
    export {className as class}

    let component: HTMLElement

    onMount(()=>{
        // GSAP animación de inicio "fade in"
        gsap.fromTo('.img-info',{
            opcity: 0,
            scale: 1.3,
        },{
            scale: 1,
            opacity: 1,
            duration: 1.3,
            ease: 'power3.inOut'
        })

        //GSAP reaccionando al movimiento del mouse, mueve imagen
        window.onmousemove = (e)=>{
            if(!component) return;
            const componentRect = (component as HTMLElement).getBoundingClientRect(); //constante de rectangulo del componente
            const componentCenterX = componentRect.left + componentRect.width / 2; //fijar el centro en el eje x

            let componentPercent = {
                x: (e.clientX - componentCenterX) / componentRect.width / 2
            }

            let distFromCenterX = 1 - Math.abs(componentPercent.x)

            gsap.timeline({
                default: {duration: 0.5, overwrite: 'auto', ease: 'power3.out'}
            }).to('.img-info', {
                rotation: gsap.utils.clamp(-2,2, 2*componentPercent.x)
            }, 0)
        }

    })
</script>

<div class={clsx('relative h-full w-full', className)} bind:this={component}>
    <div class='img-info overflow rounded-1x opacity-0'>
        <PrismicImage field={image} class="h-full object-fill" imgixParams={{ q: 90}}/>
    </div>
</div>

<style>
    .img-info {
        perspective: 500px;
        perspective-origin: 150% 150%;
    }
</style>
