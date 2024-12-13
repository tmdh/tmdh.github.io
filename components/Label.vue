<template>
    <component :is="href && 'a' || 'div'" class="flex flex-row items-center justify-center gap-x-2" :class="{'hover:opacity-75 transition-all': href}" :href="href">
        <slot></slot>
        <p v-text="title"></p>
    </component>
</template>
<script setup>
defineProps({
    title: String,
    href: String
})
</script>