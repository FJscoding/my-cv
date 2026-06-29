<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	let lang = $state<'ru' | 'en'>('ru');

	// Первая секция раскрыта по умолчанию
	let expanded = $state<Record<string, boolean>>({
		dev: true,
		marketing: false,
		content: false,
		team: false,
		events: false
	});

	function toggleSection(section: string) {
		expanded[section] = !expanded[section];
	}
</script>

<!-- ХЕДЕР: Только Telegram и языки -->
<header class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center border-b border-[#E5E7EB]">
	<!-- Логотип -->
	<a href="/" class="text-lg font-semibold tracking-tight text-[#1B1B1B] hover:text-[#2DD4BF] transition-colors">
		UY
	</a>
	
	<!-- Правая часть хедера: Telegram + Языки (видна везде) -->
	<div class="flex items-center gap-4 md:gap-8">
		
		<!-- Telegram -->
		<a 
			href="https://t.me/ustina_lvovna" 
			target="_blank" rel="noopener noreferrer"
			class="text-[#2DD4BF] hover:text-[#14B8A6] transition-colors flex items-center gap-1.5 font-semibold group text-sm"
		>
			<span>Telegram</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
				<line x1="7" y1="17" x2="17" y2="7"></line>
				<polyline points="7 7 17 7 17 17"></polyline>
			</svg>
		</a>

		<!-- Переключение языка -->
		<div class="flex items-center gap-3 md:gap-4 text-sm text-[#6B7280]">
			<button
				onclick={() => lang = 'ru'}
				class="transition-colors hover:text-[#2DD4BF] {lang === 'ru' ? 'text-[#1B1B1B] font-medium' : ''}"
			>RU</button>
			<button
				onclick={() => lang = 'en'}
				class="transition-colors hover:text-[#2DD4BF] {lang === 'en' ? 'text-[#1B1B1B] font-medium' : ''}"
			>EN</button>
		</div>
	</div>
</header>

<div class="relative max-w-[1200px] mx-auto px-6 md:px-12 min-h-screen pt-28 pb-16 bg-white">

	<!-- Вертикальная ось -->
	<div class="hidden md:block absolute left-12 top-0 bottom-0 w-[1px] bg-[#E5E7EB] z-0"></div>

	<main class="relative z-10 md:ml-16 xl:ml-24 flex flex-col min-h-[calc(100vh-14rem)]">

		<div class="flex-grow">
			<!-- HERO -->
			<section class="pt-8 pb-12 md:pt-10 md:pb-16">
				<h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-[#1B1B1B] leading-[1.05]">
					{#if lang === 'ru'}
						УСТИНА<br/>ЕСЬКОВА
					{:else}
						USTINA<br/>YESKOVA
					{/if}
				</h1>

				<div class="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-[#E5E7EB] pt-8">
					<p class="text-lg md:text-xl text-[#6B7280] font-normal max-w-xl leading-relaxed">
						{#if lang === 'ru'}
							Техническая реализация ваших идей, автоматизация процессов и маркетинг для растущих проектов.
						{:else}
							Technical execution of your ideas, process automation, and marketing for growing projects.
						{/if}
					</p>
				</div>
			</section>

			<!-- СПИСОК РАЗДЕЛОВ -->
			<div class="space-y-0">

				<!-- ========== 1. РАЗРАБОТКА IT-ПРОДУКТОВ ========== -->
				<section class="relative py-12 md:py-16 border-t border-[#E5E7EB]">
					<div class="hidden md:flex absolute -left-[4.4rem] top-14 items-center">
						{#if expanded.dev}
							<div class="w-[3px] h-10 bg-[#2DD4BF]" transition:fade={{duration: 300}}></div>
						{:else}
							<div class="w-2.5 h-2.5 rounded-none bg-[#E5E7EB]"></div>
						{/if}
					</div>

					<button onclick={() => toggleSection('dev')} class="w-full text-left group">
						<!-- Изменен цвет заголовка в зависимости от состояния expanded -->
						<h2 class="text-2xl md:text-3xl font-medium tracking-tight transition-colors flex justify-between items-start gap-4 {expanded.dev ? 'text-[#2DD4BF]' : 'text-[#1B1B1B] group-hover:text-[#2DD4BF]'}">
							<span>{lang === 'ru' ? 'Разработка IT-продуктов' : 'IT Product Development'}</span>
							<span class="text-[#2DD4BF] text-xs font-semibold tracking-widest flex items-center gap-1.5 shrink-0 pt-2 uppercase">
								<span>{lang === 'ru' ? '4 КЕЙСА' : '4 CASES'}</span>
								<span class="text-base transition-transform duration-500 {expanded.dev ? 'rotate-180' : ''}">↓</span>
							</span>
						</h2>
						<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg group-hover:text-[#4B5563] transition-colors">
							{#if lang === 'ru'}
								Приложения, чат-боты, ИИ-агенты и сайты с бюджетами и сроками, которые подходят растущим проектам. MVP для презентации продукта, проверки спроса и привлечения инвестиций.
							{:else}
								Apps, chatbots, AI agents, and websites built on budgets and timelines that fit growing projects. MVPs for product presentation, demand validation, and fundraising.
							{/if}
						</p>

						{#if !expanded.dev}
							<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#1B1B1B]" transition:fade={{duration: 200}}>
								<span>Clean Language</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>Allercom</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>MathGym</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>AboutTheConnection</span>
							</div>
						{/if}
					</button>

					{#if expanded.dev}
						<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-14">
							<!-- Clean Language -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2026</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'ИИ-тренажёр Clean Language' : 'Clean Language AI Trainer'}</h3>
									<div class="mt-2 text-xs font-bold tracking-[0.2em] text-[#F472B6]">14 {lang === 'ru' ? 'СТРАН' : 'COUNTRIES'}</div>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Для фасилитаторов, педагогов, коучей и терапевтов. Тренажёр был презентован в рамках фестиваля DramaFree Live Series 2026, в котором приняли участие 14 стран.'
											: 'For facilitators, educators, coaches, and therapists. Presented at the DramaFree Live Series 2026 festival, attended by participants from 14 countries.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> Ancora Imparo, {lang === 'ru' ? 'Сербия' : 'Serbia'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">MVP</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">AI DRIVEN</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Психология' : 'Psychology'}</span>
									</div>
								</div>
							</article>

							<!-- Allercom -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2024</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Ассистент Allercom' : 'Allercom Assistant'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Для врачей-аллергологов. Прототип создавался для презентации продукта сообществу и потенциальным инвесторам.'
											: 'For allergists. The prototype was built to present the product to the medical community and potential investors.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> RepTech Stockholm
									</div>
									<div class="mt-4 flex flex-wrap items-center gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">MVP</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">AI DRIVEN</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Медицина' : 'Healthcare'}</span>
										
										<a
											href="https://canva.link/789229to3s9wyq5"
											target="_blank"
											rel="noopener noreferrer"
											class="text-sm text-[#1B1B1B] hover:text-[#2DD4BF] underline underline-offset-4 decoration-[#E5E7EB] hover:decoration-[#2DD4BF] transition-colors ml-2"
										>
											{lang === 'ru' ? 'Презентация' : 'Presentation'} ↗
										</a>
									</div>
								</div>
							</article>

							<!-- MathGym -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2026</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">MathGym</h3>
									<div class="mt-2 text-xs font-bold tracking-[0.2em] text-[#F472B6]">3 {lang === 'ru' ? 'ЯЗЫКА' : 'LANGUAGES'}</div>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Пет-проект. Тренажёр устного счёта для детей 6–13 лет на трёх языках.'
											: 'Personal project. A mental math trainer for children aged 6–13 in three languages.'}
									</p>
									<div class="mt-4 flex flex-wrap items-center gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Пет-проект' : 'Pet Project'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">Web App</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">AI DRIVEN</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Образование' : 'Education'}</span>
										<a
											href="https://www.mathgym.xyz/"
											target="_blank"
											rel="noopener noreferrer"
											class="text-sm text-[#1B1B1B] hover:text-[#2DD4BF] underline underline-offset-4 decoration-[#E5E7EB] hover:decoration-[#2DD4BF] transition-colors ml-2"
										>
											mathgym.xyz ↗
										</a>
									</div>
								</div>
							</article>

							<!-- AboutTheConnection -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">AboutTheConnection</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Сайт для детского психолога: онлайн-приём и работа в Белграде. Один из примеров сайтов экспертов в области образования, психологии и экспертных услуг (другие — по запросу).'
											: 'A website for a child psychologist offering online sessions and in-person work in Belgrade. One example of websites built for experts in education, psychology, and consulting services (more available on request).'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> AboutTheConnection, {lang === 'ru' ? 'Сербия' : 'Serbia'}
									</div>
									<div class="mt-4 flex flex-wrap items-center gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Сайт' : 'Website'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Психология' : 'Psychology'}</span>
										<a
											href="https://abouttheconnections.com/"
											target="_blank"
											rel="noopener noreferrer"
											class="text-sm text-[#1B1B1B] hover:text-[#2DD4BF] underline underline-offset-4 decoration-[#E5E7EB] hover:decoration-[#2DD4BF] transition-colors ml-2"
										>
											abouttheconnections.com ↗
										</a>
									</div>
								</div>
							</article>
						</div>
					{/if}
				</section>

				<!-- ========== 2. МАРКЕТИНГ И АВТОМАТИЗАЦИЯ ========== -->
				<section class="relative py-12 md:py-16 border-t border-[#E5E7EB]">
					<div class="hidden md:flex absolute -left-[4.4rem] top-14 items-center">
						{#if expanded.marketing}
							<div class="w-[3px] h-10 bg-[#2DD4BF]" transition:fade={{duration: 300}}></div>
						{:else}
							<div class="w-2.5 h-2.5 rounded-none bg-[#E5E7EB]"></div>
						{/if}
					</div>

					<button onclick={() => toggleSection('marketing')} class="w-full text-left group">
						<h2 class="text-2xl md:text-3xl font-medium tracking-tight transition-colors flex justify-between items-start gap-4 {expanded.marketing ? 'text-[#2DD4BF]' : 'text-[#1B1B1B] group-hover:text-[#2DD4BF]'}">
							<span>{lang === 'ru' ? 'Marketing & Automation' : 'Marketing & Automation'}</span>
							<span class="text-[#2DD4BF] text-xs font-semibold tracking-widest flex items-center gap-1.5 shrink-0 pt-2 uppercase">
								<span>{lang === 'ru' ? '2 КЕЙСА' : '2 CASES'}</span>
								<span class="text-base transition-transform duration-500 {expanded.marketing ? 'rotate-180' : ''}">↓</span>
							</span>
						</h2>
						<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg group-hover:text-[#4B5563] transition-colors">
							{lang === 'ru'
								? 'Привлечение и удержание клиентов, развитие бренда и продаж через CRM-системы, мессенджеры, социальные сети, сайты и чат-боты.'
								: 'Client acquisition and retention, brand development, and sales growth via CRM systems, messengers, social media, websites, and chatbots.'}
						</p>

						{#if !expanded.marketing}
							<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#1B1B1B]" transition:fade={{duration: 200}}>
								<span>{lang === 'ru' ? 'Аудит коммуникаций IT-холдинга' : 'IT Holding Communications Audit'}</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>{lang === 'ru' ? 'Медико-психологический центр' : 'Medical-Psychological Center'}</span>
							</div>
						{/if}
					</button>

					{#if expanded.marketing}
						<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-14">
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Работа с негативными отзывами' : 'Handling Negative Customer Feedback'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Анализ текстов на сайте, в социальных сетях и скриптах, анализ клиентского пути. Подготовка единых правил коммуникации, чтобы не терять клиентов и повысить качество сервиса. Россия, Сербия, Армения, Нидерланды.'
											: 'Analysis of website copy, social media content, and service scripts, plus a full customer journey audit. Developed unified communication guidelines to prevent churn and raise service quality. Markets: Russia, Serbia, Armenia, the Netherlands.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'IT-холдинг (проект под NDA)' : 'IT holding (project under NDA)'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Коммуникации' : 'Communications'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Аудит' : 'Audit'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'ИТ' : 'IT'}</span>
										<span class="border border-[#F472B6]/30 bg-[#F472B6]/5 rounded-none px-3 py-1 text-xs text-[#F472B6] uppercase tracking-wider">NDA</span>
									</div>
								</div>
							</article>

							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Цифровизация бизнес-процессов' : 'Business Process Digitalization'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Личные блоги врачей для привлечения клиентов, запуск онлайн-курса, повышение видимости бизнеса в поисковиках и AI-агентах, рекламные кампании Google Ads, Meta Ads и Bing Ads, локальное продвижение через Google Maps.'
											: 'Personal medical blogs for client acquisition, an online course launch, improved visibility in search engines and AI agents, Google Ads, Meta Ads, and Bing Ads campaigns, plus local SEO via Google Maps.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'Медико-психологический центр' : 'Medical-Psychological Center'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">Ads</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">SEO</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">CRM</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Медицина' : 'Healthcare'}</span>
									</div>
								</div>
							</article>
						</div>
					{/if}
				</section>

				<!-- ========== 3. МОНЕТИЗАЦИЯ КОНТЕНТА ========== -->
				<section class="relative py-12 md:py-16 border-t border-[#E5E7EB]">
					<div class="hidden md:flex absolute -left-[4.4rem] top-14 items-center">
						{#if expanded.content}
							<div class="w-[3px] h-10 bg-[#2DD4BF]" transition:fade={{duration: 300}}></div>
						{:else}
							<div class="w-2.5 h-2.5 rounded-none bg-[#E5E7EB]"></div>
						{/if}
					</div>

					<button onclick={() => toggleSection('content')} class="w-full text-left group">
						<h2 class="text-2xl md:text-3xl font-medium tracking-tight transition-colors flex justify-between items-start gap-4 {expanded.content ? 'text-[#2DD4BF]' : 'text-[#1B1B1B] group-hover:text-[#2DD4BF]'}">
							<span>{lang === 'ru' ? 'Монетизация контента' : 'Content Monetization'}</span>
							<span class="text-[#2DD4BF] text-xs font-semibold tracking-widest flex items-center gap-1.5 shrink-0 pt-2 uppercase">
								<span>{lang === 'ru' ? '4 КЕЙСА' : '4 CASES'}</span>
								<span class="text-base transition-transform duration-500 {expanded.content ? 'rotate-180' : ''}">↓</span>
							</span>
						</h2>
						<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg group-hover:text-[#4B5563] transition-colors">
							{lang === 'ru'
								? 'Оформление экспертного контента в актуальные форматы: подкасты, лекции, онлайн-курсы, платные Telegram-каналы, сообщества по подписке, корпоративные медиа. Подключение монетизации и обработки платежей в разных валютах и из разных стран.'
								: 'Packaging expert content into modern formats: podcasts, lectures, online courses, paid Telegram channels, subscription communities, and corporate media. Setting up monetization and cross-border payments in multiple currencies.'}
						</p>

						{#if !expanded.content}
							<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#1B1B1B]" transition:fade={{duration: 200}}>
								<span>DramaFree World</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>{lang === 'ru' ? '«Совместное внимание»' : 'Joint Attention'}</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>{lang === 'ru' ? 'Психиатры психологам и врачам' : 'Psychiatrists for Psychologists'}</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>{lang === 'ru' ? 'Журнал о робототехнике' : 'Robotics Magazine'}</span>
							</div>
						{/if}
					</button>

					{#if expanded.content}
						<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-14">
							<!-- DramaFree World -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2026</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">DramaFree World</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Международный подкаст в рамках экосистемы DramaFree Live Series.'
											: 'An international podcast within the DramaFree Live Series ecosystem.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> Ancora Imparo, {lang === 'ru' ? 'Сербия' : 'Serbia'}
									</div>
									<div class="mt-4 flex flex-wrap items-center gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Подкаст' : 'Podcast'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Психология' : 'Psychology'}</span>
									
										<a
											href="https://dramafree.world/"
											target="_blank"
											rel="noopener noreferrer"
											class="text-sm text-[#1B1B1B] hover:text-[#2DD4BF] underline underline-offset-4 decoration-[#E5E7EB] hover:decoration-[#2DD4BF] transition-colors ml-2"
										>
											dramafree.world ↗
										</a>
									</div>
								</div>
							</article>

							<!-- Joint Attention -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? '«Совместное внимание»' : 'Joint Attention'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Подкаст для родителей и специалистов о прикладном анализе поведения и развитии речи.'
											: 'A podcast for parents and specialists on applied behavior analysis and speech development.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? '«Территория Речи»' : 'Speech Area'}
									</div>
									<div class="mt-4 flex flex-wrap items-center gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Подкаст' : 'Podcast'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Образование' : 'Education'}</span>
										<a
											href="https://jointattention.mave.digital/"
											target="_blank"
											rel="noopener noreferrer"
											class="text-sm text-[#1B1B1B] hover:text-[#2DD4BF] underline underline-offset-4 decoration-[#E5E7EB] hover:decoration-[#2DD4BF] transition-colors ml-2"
										>
											jointattention.mave.digital ↗
										</a>
									</div>
								</div>
							</article>

							<!-- Community -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? '«Психиатры психологам и врачам»' : 'Psychiatrists for Psychologists and Doctors'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Профессиональное сообщество психологов и врачей с организацией подписок и платежей.'
											: 'A professional community for psychologists and doctors with subscription management and payment processing.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'Медико-психологический центр' : 'Medical-Psychological Center'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Сообщество' : 'Community'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Медицина' : 'Healthcare'}</span>
									</div>
								</div>
							</article>

							<!-- Robotics Magazine -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Журнал о робототехнике' : 'Robotics Magazine'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Отраслевое издание для инженерного сообщества.'
											: 'An industry publication for the engineering community.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'Инновационный кластер' : 'Innovation Cluster'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Медиа' : 'Media'}</span>
									</div>
								</div>
							</article>
						</div>
					{/if}
				</section>

				<!-- ========== 4. ВНУТРЕННИЕ КОММУНИКАЦИИ ========== -->
				<section class="relative py-12 md:py-16 border-t border-[#E5E7EB]">
					<div class="hidden md:flex absolute -left-[4.4rem] top-14 items-center">
						{#if expanded.team}
							<div class="w-[3px] h-10 bg-[#2DD4BF]" transition:fade={{duration: 300}}></div>
						{:else}
							<div class="w-2.5 h-2.5 rounded-none bg-[#E5E7EB]"></div>
						{/if}
					</div>

					<button onclick={() => toggleSection('team')} class="w-full text-left group">
						<h2 class="text-2xl md:text-3xl font-medium tracking-tight transition-colors flex justify-between items-start gap-4 {expanded.team ? 'text-[#2DD4BF]' : 'text-[#1B1B1B] group-hover:text-[#2DD4BF]'}">
							<span>{lang === 'ru' ? 'Внутренние коммуникации' : 'Internal Communications'}</span>
							<span class="text-[#2DD4BF] text-xs font-semibold tracking-widest flex items-center gap-1.5 shrink-0 pt-2 uppercase">
								<span>{lang === 'ru' ? '1 КЕЙС' : '1 CASE'}</span>
								<span class="text-base transition-transform duration-500 {expanded.team ? 'rotate-180' : ''}">↓</span>
							</span>
						</h2>
						<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg group-hover:text-[#4B5563] transition-colors">
							{lang === 'ru'
								? 'Организация коммуникаций внутри команд. Настройка CRM-систем, Trello, корпоративных порталов, внутренних чатов и колл-центров. Снижение финансовых и репутационных рисков, возникающих из-за несогласованной работы.'
								: 'Organizing internal team communications. Setting up CRM systems, Trello, corporate portals, internal chats, and call-center workflows. Reducing financial and reputational risks caused by misaligned teams.'}
						</p>

						{#if !expanded.team}
							<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#1B1B1B]" transition:fade={{duration: 200}}>
								<span>{lang === 'ru' ? 'Синхронизация трёх команд разработки IT-холдинга' : 'Syncing three engineering teams at an IT holding'}</span>
							</div>
						{/if}
					</button>

					{#if expanded.team}
						<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-14">
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Синхронизация трёх команд разработки' : 'Syncing Three Distributed Engineering Teams'}</h3>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Организация коммуникаций между тремя распределёнными командами разработки в подразделении IT-холдинга. Интервью с разработчиками, техническими менеджерами и специалистами по информационной безопасности; выявление проблем во взаимодействии и разработка единых подходов к внутренним рабочим коммуникациям.'
											: 'Organized communications between three distributed engineering teams within an IT holding division. Conducted interviews with developers, technical managers, and information security specialists, identified collaboration friction points, and developed unified internal communication guidelines.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'IT-холдинг (проект под NDA)' : 'IT holding (project under NDA)'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Аудит' : 'Audit'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Коммуникации' : 'Communications'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'ИТ' : 'IT'}</span>
										<span class="border border-[#F472B6]/30 bg-[#F472B6]/5 rounded-none px-3 py-1 text-xs text-[#F472B6] uppercase tracking-wider">NDA</span>
									</div>
								</div>
							</article>
						</div>
					{/if}
				</section>

				<!-- ========== 5. ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ ========== -->
				<section class="relative py-12 md:py-16 border-y border-[#E5E7EB]">
					<div class="hidden md:flex absolute -left-[4.4rem] top-14 items-center">
						{#if expanded.events}
							<div class="w-[3px] h-10 bg-[#2DD4BF]" transition:fade={{duration: 300}}></div>
						{:else}
							<div class="w-2.5 h-2.5 rounded-none bg-[#E5E7EB]"></div>
						{/if}
					</div>

					<button onclick={() => toggleSection('events')} class="w-full text-left group">
						<h2 class="text-2xl md:text-3xl font-medium tracking-tight transition-colors flex justify-between items-start gap-4 {expanded.events ? 'text-[#2DD4BF]' : 'text-[#1B1B1B] group-hover:text-[#2DD4BF]'}">
							<span>{lang === 'ru' ? 'Организация мероприятий' : 'Events & Operations'}</span>
							<span class="text-[#2DD4BF] text-xs font-semibold tracking-widest flex items-center gap-1.5 shrink-0 pt-2 uppercase">
								<span>{lang === 'ru' ? '3 КЕЙСА' : '3 CASES'}</span>
								<span class="text-base transition-transform duration-500 {expanded.events ? 'rotate-180' : ''}">↓</span>
							</span>
						</h2>
						<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg group-hover:text-[#4B5563] transition-colors">
							{lang === 'ru'
								? 'Реклама, регистрация гостей, продажа билетов, брендинг, technical и логистическое сопровождение мероприятий.'
								: 'Advertising, guest registration, ticket sales, branding, and technical and logistical event support.'}
						</p>

						{#if !expanded.events}
							<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#1B1B1B]" transition:fade={{duration: 200}}>
								<span>{lang === 'ru' ? 'Фестиваль на 15 000 гостей' : 'Festival for 15,000 attendees'}</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>DramaFree Live Series</span>
								<span class="text-[#E5E7EB]">·</span>
								<span>{lang === 'ru' ? 'Цикл онлайн-встреч' : 'Online meeting series'}</span>
							</div>
						{/if}
					</button>

					{#if expanded.events}
						<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-14">
							<!-- Festival -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2025</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Фестиваль для travel-платформы' : 'Festival for a Travel Platform'}</h3>
									<div class="mt-2 text-xs font-bold tracking-[0.2em] text-[#F472B6]">15 000 {lang === 'ru' ? 'УЧАСТНИКОВ' : 'ATTENDEES'}</div>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Участвовала в подготовке офлайн-фестиваля для цифровой платформы для путешествий и покупки билетов. Разрабатывала визуал, инструменты коммуникации и брендированный транспорт, который участники назвали лучшим впечатлением от фестиваля.'
											: 'Helped prepare an offline festival for a digital travel and ticketing platform. Designed the visual identity, communication tools, and branded transportation — which attendees voted the best experience of the festival.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'Цифровая travel-платформа (проект под NDA)' : 'Digital travel platform (project under NDA)'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Фестиваль' : 'Festival'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'ОФЛайн' : 'Offline'}</span>	
										<span class="border border-[#F472B6]/30 bg-[#F472B6]/5 rounded-none px-3 py-1 text-xs text-[#F472B6] uppercase tracking-wider">NDA</span>
									</div>
								</div>
							</article>

							<!-- DramaFree Live Series -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2026</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">DramaFree Live Series</h3>
									<div class="mt-2 text-xs font-bold tracking-[0.2em] text-[#F472B6]">14 {lang === 'ru' ? 'СТРАН' : 'COUNTRIES'}</div>
									<p class="text-[#6B7280] mt-3 leading-relaxed max-w-2xl">
										{lang === 'ru'
											? 'Международный онлайн-портал и серия мероприятий о жизни без драмы. Участники из 14 стран.'
											: 'An international online portal and event series about drama-free living, with participants from 14 countries.'}
									</p>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> Ancora Imparo
									</div>
									<div class="mt-4 flex flex-wrap items-center gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'Мероприятие' : 'Event'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'ОНЛАЙН' : 'Online'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'ПСИХОЛОГИЯ' : 'Psychology'}</span>
										
										<a
											href="https://www.linkedin.com/events/dramafreeliveseries-thrivingthr7457149362343862272/"
											target="_blank"
											rel="noopener noreferrer"
											class="text-sm text-[#1B1B1B] hover:text-[#2DD4BF] underline underline-offset-4 decoration-[#E5E7EB] hover:decoration-[#2DD4BF] transition-colors ml-2"
										>
											{lang === 'ru' ? 'Событие на LinkedIn' : 'LinkedIn event'} ↗
										</a>
									</div>
								</div>
							</article>

							<!-- Online meetings -->
							<article class="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-3 md:gap-8">
								<div class="font-mono text-sm text-[#6B7280] pt-1 tracking-widest">2026</div>
								<div>
									<h3 class="text-2xl text-[#1B1B1B] font-semibold tracking-tight">{lang === 'ru' ? 'Цикл онлайн-встреч для психологов и врачей' : 'Online Meeting Series for Psychologists and Doctors'}</h3>
									<div class="mt-4 text-sm text-[#6B7280]">
										<span class="text-[#6B7280] font-medium">{lang === 'ru' ? 'Заказчик:' : 'Client:'}</span> {lang === 'ru' ? 'Медико-психологический центр' : 'Medical-Psychological Center'}
									</div>
									<div class="mt-4 flex flex-wrap gap-2">
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'МЕРОПРИЯТИЕ' : 'Event'}</span>
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'ОНЛАЙН' : 'Online'}</span>									
										<span class="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-none px-3 py-1 text-xs text-[#14B8A6] uppercase tracking-wider">{lang === 'ru' ? 'МЕДИЦИНА' : 'Medical'}</span>
									</div>
								</div>
							</article>
						</div>
					{/if}
				</section>
			</div>

			<!-- ========== ПРИЛОЖЕНИЕ ========== -->
			<section class="mt-24">
				<div class="font-mono text-xs text-[#6B7280] tracking-widest mb-8 uppercase">
					{lang === 'ru' ? 'Приложение // Бэкграунд' : 'Appendix // Background'}
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-sm leading-relaxed">
					<div>
						<div class="text-[#1B1B1B] font-medium mb-3">{lang === 'ru' ? 'Опыт до релокации' : 'Past Experience'}</div>
						<p class="text-[#6B7280] leading-relaxed">
							{#if lang === 'ru'}
								Маркетинг для Bigtool.ru (магазин электроинструментов), СНК-Синтез (профессиональное AV-оборудование), Messe Frankfurt RUS (музыкальная выставка, выставка сценического и AV-оборудования, форум химчисток и прачечных). Визуал и копирайтинг для IT, банков, информационных агентств, премий и фестивалей.
							{:else}
								Marketing for Bigtool.ru (power tools retailer), SNK-Sintez (professional AV equipment), and Messe Frankfurt RUS (music expo, stage and AV equipment expo, dry-cleaning industry forum). Visual design and copywriting for IT companies, banks, news agencies, awards, and festivals.
							{/if}
						</p>
					</div>
					<div>
						<div class="text-[#1B1B1B] font-medium mb-3">{lang === 'ru' ? 'Образование' : 'Education'}</div>
						<p class="text-[#6B7280] leading-relaxed">
							{#if lang === 'ru'}
								Неоконченное высшее: МТУСИ, инженер-математик. Администрирование баз данных, МАИ. Курсы по созданию подкастов.
							{:else}
								Undergraduate studies in mathematical engineering at MTUCI (unfinished). Database administration program at MAI. Podcast production courses.
							{/if}
						</p>
					</div>
					<div>
						<div class="text-[#1B1B1B] font-medium mb-3">{lang === 'ru' ? 'Дополнительно' : 'Additional'}</div>
						<p class="text-[#6B7280] leading-relaxed">
							{#if lang === 'ru'}
								Более 1000 часов обучения различным инструментам и автоматизации.
							{:else}
								Over 1,000 hours of self-directed training across digital tools and automation frameworks.
							{/if}
						</p>
					</div>
				</div>
			</section>

		</div>
		
		<!-- ========== НОВЫЙ ФУТЕР ========== -->
		<footer class="mt-20 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-6 text-[#6B7280] text-sm">
			<!-- Контакты внизу (всегда видны) -->
			<div class="flex flex-wrap justify-center gap-6 font-medium">
				<a 
					href="mailto:ustinaeskova@gmail.com" 
					class="hover:text-[#EAB308] transition-colors"
				>
					Email
				</a>
				<a 
					href="https://www.linkedin.com/in/ustina-yeskova-28610764/" 
					target="_blank" rel="noopener noreferrer"
					class="hover:text-[#F472B6] transition-colors"
				>
					LinkedIn
				</a>
				<a 
					href="https://github.com/FJscoding" 
					target="_blank" rel="noopener noreferrer"
					class="hover:text-[#14B8A6] transition-colors"
				>
					GitHub
				</a>
			</div>
			
			<!-- Подпись (меняется в зависимости от языка) -->
			<div class="text-[#9CA3AF]">
				{#if lang === 'ru'}
					Спроектировано и разработано — Устина Еськова
				{:else}
					Designed & Built by Ustina Yeskova
				{/if}
			</div>
		</footer>

	</main>
</div>