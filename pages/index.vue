<template>
    <div class="flex w-full flex-col gap-y-10">
        <section class="flex flex-col items-center gap-y-7">
            <NuxtImg
                src="/tareque.jpeg"
                alt="profile photo"
                class="h-48 w-auto rounded-full"
                loading="eager"
            />

            <div class="flex flex-col items-center gap-y-4">
                <h1 class="text-3xl font-lora italic">Tareque Md Hanif</h1>
                <a
                    href="https://github.com/srleom/astro-theme-resume.git"
                    class="flex flex-row items-center gap-x-2 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"
                >
                    <ArrowDownTrayIcon
                        class="w-4 text-green-400"
                    ></ArrowDownTrayIcon>
                    <p class="font-medium">Resume</p>
                </a>
                <div class="flex flex-wrap justify-center gap-x-7 gap-y-3">
                    <Label title="CUET">
                        <AcademicCapIcon class="h-5 w-5"></AcademicCapIcon>
                    </Label>
                    <Label title="Chittagong">
                        <MapPinIcon class="h-5 w-5"></MapPinIcon>
                    </Label>
                    <Label
                        title="Connect on Linkedin"
                        as="a"
                        href="https://www.linkedin.com/in/tareque-md-hanif/"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            slot="icon"
                            class="h-5 w-5 text-foreground/75"
                        >
                            <path
                                fill="currentColor"
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                            ></path>
                        </svg>
                    </Label>
                </div>
            </div>
        </section>

        <Section title="About">
            <p class="text-muted-foreground">
                I am an undergraduate student in the department of
                <a href="https://cuet.ac.bd/dept/cse"
                    >Computer Science and Engineering</a
                >
                at
                <a href="https://cuet.ac.bd"
                    >Chittagong University of Engineering and Technology</a
                >. Throughout my years since high school, I have developed a
                range of projects, including desktop applications, mobile apps,
                and web applications. Currently, I am primarily interested in
                researching Natural Language Processing. I am also interested in
                multimodal models for low-resource languages, such as Bengali.
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

        <Section title="Education">
            <Card
                heading="Chittagong University of Engineering and Technology"
                subheading="B. Sc. in Computer Science and Engineering"
                date="2020 - Current"
                imagePath="/cuetlogo.png"
                imageClass="h-12 w-auto md:-left-16"
            >
            </Card>
            <Card
                heading="Bangladesh International School and College, Jeddah"
                subheading="PSC, JSC, SSC and HSC"
                date="2007 - 2019"
                imagePath="/biscjlogo.png"
                imageClass="h-12 w-auto md:-left-16"
            />
        </Section>
        <Section title="Projects">
            <div class="flex flex-wrap flex-row gap-8">
                <ProjectCard
                    href="https://github.com/tmdh/laravel-kit"
                    heading="Laravel Kit"
                    subheading="A desktop Laravel admin panel app"
                    imagePath="/laravel-kit.jpeg"
                />
                <ProjectCard
                    href="https://github.com/codeflow-dev/ecopoints"
                    heading="EcoPoints"
                    subheading="A recyclable collection app made with Flutter"
                    imagePath="/ecopoints.png"
                />
                <ProjectCard
                    heading="Summit"
                    subheading="A text summarization app made with Flutter"
                    imagePath="/coming-soon.webp"
                />
                <ProjectCard
                    heading="Simplux"
                    subheading="Linear programming problem solver"
                    imagePath="/coming-soon.webp"
                />
                <ProjectCard
                    heading="Codeflow"
                    subheading="An online competitive programming platform made with Node.js and MongoDB"
                    imagePath="/coming-soon.webp"
                />
                <ProjectCard
                    heading="Copper"
                    subheading="A code editor for competitive programming"
                    imagePath="/coming-soon.webp"
                />
            </div>
        </Section>
        <Section title="Experience">
            <Card
                heading="Hamid Al-Mostadi Est"
                subheading="Software Developer and Salesman (Part-time)"
                date="2014 - 2028"
            >
                <ul class="ml-4 list-disc text-muted-foreground">
                    <li>
                        Developed a custom invoicing software for wholesale
                        recharge card sale using PHP
                    </li>
                    <li>
                        Maintained and fixed numerous bugs in the system
                        throughout my time there
                    </li>
                </ul>
            </Card>
        </Section>

        <Section title="Certifications and Achievements">
            <Card
                as="a"
                heading="Code Samurai 2024"
                subheading="Participated in the final round of the hackathon where we developed a smart waste collection system for Dhaka North City Corporation"
                date="May 10-11 2024"
                imagePath="/codesamurai.png"
                imageClass="h-8 w-auto md:-left-16"
                href="https://www.linkedin.com/posts/tareque-md-hanif_after-succeeding-in-two-preliminary-rounds-activity-7196011423712362496-rpQ2?utm_source=share&utm_medium=member_desktop"
            />
        </Section>
        <Section title="Skills">
            <SkillLayout title="Languages" :skills="languages" />
            <SkillLayout title="Frontend" :skills="frontend" />
            <SkillLayout title="Backend" :skills="backend" />
            <SkillLayout title="Machine Learning" :skills="ml" />
            <SkillLayout title="Others" :skills="others" />
        </Section>
    </div>
    <!-- <a
        href="https://github.com/srleom/astro-theme-resume.git"
        class="mt-16 flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"
    >
        <span class="relative flex items-center justify-center">
            <span
                class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"
            ></span>
            <span
                class="relative inline-flex h-2 w-2 rounded-full bg-green-400"
            ></span>
        </span>

        <p class="font-medium">Get free template</p>
    </a> -->
</template>
<script setup>
import {
    AcademicCapIcon,
    MapPinIcon,
    ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";

const languages = ["JavaScript", "TypeScript", "Python", "C++", "Rust", "Dart"];
const frontend = ["Vue", "TailwindCSS", "Flutter", "Jetpack Compose"];
const backend = ["Node.js", "Express", "MySQL", "Firebase", "MongoDB"];
const ml = ["PyTorch", "Huggingface", "BERT", "CNN"];
const others = ["Electron.js", "Linux", "Git"];
</script>
