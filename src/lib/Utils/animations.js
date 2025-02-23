import { fly, fade, slide } from 'svelte/transition';

export const animateIn = (/** @type {Element} */ node) => fly(node, { y: 50, duration: 500 });
export const animateOut = (/** @type {Element} */ node) => fade(node, { duration: 300 });