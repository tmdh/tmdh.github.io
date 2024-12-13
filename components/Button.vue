<template>
    <component :is="as" class="inline-flex items-center gap-x-1 rounded-lg bg-primary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input" :class="{'cursor-default': !href, 'rounded-xl': style == 'pill'}" :href="href">
        <slot name="icon-before"></slot>
        <p v-text="title"></p>
        <slot name="icon-after"></slot>
    </component>
</template>
<script setup>
defineProps({
    as: String,
    href: String,
    style: String,
    title: String
})
</script>