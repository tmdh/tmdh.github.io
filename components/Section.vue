<template>
    <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class='text-xl font-semibold md:w-1/3'>
            <h2 v-text="title"></h2>
        </div>
        <div class='flex flex-col gap-y-3 md:w-2/3'>
            <slot></slot>
        </div>
    </section>
</template>
<script setup>
defineProps({
    title: String
})
</script>