<template>
    <div class='flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0'>
	<h3 class='w-1/5 font-medium' v-text="title"></h3>
	<div class='flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2'>
		<Button as='button' v-for="skill in skills" :title="skill" :style="'pill'"></Button>
	</div>
</div>
</template>
<script setup>
defineProps({
    title: String,
    skills: Array
})
</script>