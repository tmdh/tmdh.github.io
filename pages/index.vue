<template>
    <div class='flex w-full flex-col gap-y-10'>
		<section class='flex flex-col items-center gap-y-7'>
			<NuxtImg
				src="/tareque.jpeg"
				alt='profile photo'
				class='h-48 w-auto rounded-full'
				loading='eager'
			/>

			<div class='flex flex-col items-center gap-y-4'>
				<h1 class='text-3xl font-lora italic'>Tareque Md Hanif</h1>
				<a
					href='https://github.com/srleom/astro-theme-resume.git'
					class='flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md'
				>
					<span class='relative flex items-center justify-center'>
						<span
							class='absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75'
						></span>
						<span class='relative inline-flex h-2 w-2 rounded-full bg-green-400'></span>
					</span>

					<p class='font-medium'>Available for work</p>
				</a>
				<div class='flex flex-wrap justify-center gap-x-7 gap-y-3'>
					<Label title='CUET'>
						<AcademicCapIcon class="h-5 w-5"></AcademicCapIcon>
					</Label>
					<Label title='Chittagong'>
						<MapPinIcon class="h-5 w-5"></MapPinIcon>
					</Label>
					<Label
						title='Connect on Linkedin'
						as='a'
						href='https://www.linkedin.com/in/tareque-md-hanif/'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							slot='icon'
							class='h-5 w-5 text-foreground/75'
							>
							<path
								fill='currentColor'
								d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'
							></path>
						</svg>
					</Label>
				</div>
			</div>
		</section>

		<Section title='About'>
			<p class='text-muted-foreground'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque quia omnis
				consectetur, voluptas praesentium veniam blanditiis ratione asperiores accusantium laborum
				odit commodi quis deserunt incidunt et dolor iure ut! Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Alias quia, doloribus ut beatae perspiciatis voluptatibus.
			</p>
		</Section>
		<!-- {
			allPostsByDate.length > 0 && (
				<Section title='Posts'>
					<ul class='flex flex-col gap-y-2'>
						{allPostsByDate.map((p) => (
							<li class='flex flex-col gap-x-2 sm:flex-row'>
								<PostPreview post={p} />
							</li>
						))}
					</ul>
				</Section>
			)
		} -->
		<Section title='Experience'>
			<Card
				heading='Lorem Ipsum'
				subheading='Sit amet consectetur'
				date='Dec 2022 - Nov 2023'
				imagePath='/dummy.webp'
				altText='Lorem, ipsum dolor sit'
				imageClass='h-12 w-auto md:-left-16'
			>
				<ul class='ml-4 list-disc text-muted-foreground'>
					<li>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut
						molestiae laboriosam pariatur!

					</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!</li>
				</ul>
			</Card>
			<Card
				heading='Lorem Ipsum'
				subheading='Sit amet consectetur'
				date='Dec 2022 - Nov 2023'
				imagePath='/dummy.webp'
				altText='Lorem, ipsum dolor sit'
				imageClass='h-12 w-auto md:-left-16'
			/>
		</Section>

		<Section title='Education'>
			<Card
				heading='Lorem Ipsum'
				subheading='Sit amet consectetur'
				date='Dec 2022 - Nov 2023'
				imagePath='/dummy.webp'
				altText='Lorem, ipsum dolor sit'
				imageClass='h-12 w-auto md:-left-16'
			>
				<ul class='ml-4 list-disc text-muted-foreground'>
					<li>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut
						molestiae laboriosam pariatur!

					</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!</li>
				</ul>
			</Card>
			<Card
				heading='Lorem Ipsum'
				subheading='Sit amet consectetur'
				date='Dec 2022 - Nov 2023'
				imagePath='/dummy.webp'
				altText='Lorem, ipsum dolor sit'
				imageClass='h-12 w-auto md:-left-16'
			/>
		</Section>
		<Section title='Projects'>
			<div class='flex flex-col gap-y-3 sm:flex-row sm:gap-x-3 sm:gap-y-0'>
				<ProjectCard
					href='https://www.google.com'
					heading='Consectetur'
					subheading='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
					imagePath='/coming-soon.webp'
					altText='Example'
					class='w-full sm:w-1/2'
				/>
				<ProjectCard
					as='div'
					heading='Coming soon...'
					subheading=''
					imagePath='/coming-soon.webp'
					altText='Lorem, ipsum dolor sit'
					class='w-full sm:w-1/2'
				/>
			</div>
		</Section>

		<Section title='Certifications'>
			<Card
				as='a'
				heading='Lorem ipsum, dolor sit amet consectetur adipisicing.'
				subheading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta magni consequuntur corrupti.'
				date='Mar 2024 - Mar 2024'
				imagePath='/dummy.webp'
				altText='Lorem, ipsum dolor sit'
				imageClass='h-11 w-auto md:-left-16'
				href='https://www.google.com'
			/>
			<Card
				as='a'
				heading='Lorem ipsum, dolor sit amet'
				subheading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta.'
				date='Mar 2029 - Mar 2032'
				imagePath='/dummy.webp'
				altText='Lorem, ipsum dolor sit'
				imageClass='h-11 w-auto md:-left-16'
				href='https://www.google.com'
			/>
		</Section>
		<Section title='Skills'>
			<SkillLayout title='Languages' :skills="languages" />
			<SkillLayout title='Frontend' :skills="frontend" />
			<SkillLayout title='Backend' :skills="backend" />
			<SkillLayout title='Others' :skills="others" />
		</Section>
	</div>
	<a
		href='https://github.com/srleom/astro-theme-resume.git'
		class='mt-16 flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md'
	>
		<span class='relative flex items-center justify-center'>
			<span
				class='absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75'
			></span>
			<span class='relative inline-flex h-2 w-2 rounded-full bg-green-400'></span>
		</span>

		<p class='font-medium'>Get free template</p>
	</a>
</template>
<script setup>
import { AcademicCapIcon, MapPinIcon } from "@heroicons/vue/24/outline"

const languages = ['lorem', 'ipsum']
const frontend = ['lorem', 'ipsum', 'lorem', 'ipsum', 'lorem', 'ipsum', 'lorem']
const backend = ['lorem', 'ipsum', 'lorem', 'ipsum']
const others = ['lorem', 'ipsum', 'lorem', 'ipsum', 'lorem']
</script>