<template>
    <component :is="href && 'a' || 'div'" :href="href" class="relative rounded-2xl border border-border bg-primary-foreground px-5 py-3" :class="{'transition-all hover:border-foreground/25 hover:shadow-sm': href}">
        <NuxtImg v-if="imagePath" class="mb-3 md:absolute md:mb-0" :src="imagePath" :alt="altText" :class="imageClass" />
        <div class='flex flex-col gap-y-1.5'>
            <div class='flex flex-col gap-y-0.5'>
                <h1 class='text-lg font-medium' v-text="heading"></h1>
                <h2 class='text-muted-foreground' v-text="subheading"></h2>
                <h2 class='text-muted-foreground' v-text="date"></h2>
            </div>
            <slot></slot>
        </div>
    </component>
</template>
<script setup>
defineProps({
    href: String,
    heading: String,
    subheading: String,
    date: String,
    imagePath: String,
    altText: String,
    imageClass: String
})
</script>