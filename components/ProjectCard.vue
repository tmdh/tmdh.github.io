<template>
    <component
        :is="(href && 'a') || 'div'"
        :href="href"
        target="blank"
        class="flex flex-col gap-y-1 rounded-2xl border border-border bg-primary-foreground w-full sm:w-1/2-gapped"
        :class="{
            'transition-all hover:border-foreground/25 hover:shadow-sm': href,
        }"
    >
        <NuxtImg
            v-if="imagePath"
            class="h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover"
            :src="imagePath"
            :alt="altText"
            :class="imageClass"
        />
        <div class="flex flex-col gap-y-0.5 px-5 py-4">
            <h1 class="text-lg font-medium" v-text="heading"></h1>
            <h2 class="text-muted-foreground" v-text="subheading"></h2>
        </div>
        <slot></slot>
    </component>
</template>
<script setup>
defineProps({
    href: String,
    heading: String,
    subheading: String,
    imagePath: String,
    altText: String,
    imageClass: String,
});
</script>
