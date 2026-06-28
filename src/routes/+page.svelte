<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	let lang = $state<'ru' | 'en'>('ru');

	// Состояние раскрытых разделов (по умолчанию все закрыты)
	let expanded = $state<Record<string, boolean>>({
		dev: false,
		marketing: false,
		content: false,
		team: false,
		events: false,
		appendix: false
	});

	function toggleSection(section: string) {
		expanded[section] = !expanded[section];
	}
</script>

<!-- Фиксированная навигация (строгая, без прозрачностей и стекла) -->
<header class="fixed top-0 left-0 w-full z-50 bg-[#F8F8F5] px-6 md:px-12 py-6 flex justify-between items-center border-b border-[#E5E5E2]">
	<div class="text-sm font-medium tracking-tight text-[#1B1B1B]">
		{lang === 'ru' ? 'УСТИНА ЕСЬКОВА' : 'USTINA YESKOVA'}
	</div>
	<div class="flex items-center gap-6 text-sm text-[#6B7280]">
		<button onclick={() => lang = 'ru'} class="transition-colors hover:text-[#84D1B2] {lang === 'ru' ? 'text-[#1B1B1B] font-medium' : ''}">RU</button>
		<button onclick={() => lang = 'en'} class="transition-colors hover:text-[#84D1B2] {lang === 'en' ? 'text-[#1B1B1B] font-medium' : ''}">EN</button>
	</div>
</header>

<div class="relative max-w-[1200px] mx-auto px-6 md:px-12 min-h-screen pt-32 pb-40">
	
	<!-- ТА САМАЯ ВЕРТИКАЛЬНАЯ ЛИНИЯ-ОСЬ (только для десктопа) -->
	<div class="hidden md:block absolute left-12 top-0 bottom-0 w-[1px] bg-[#E5E5E2] z-0"></div>

	<!-- Контент смещен вправо от оси -->
	<main class="relative z-10 md:ml-16 xl:ml-24">
		
		<!-- HERO SECTION -->
		<section class="py-20 md:py-32">
			<h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-[#1B1B1B] leading-[1.05]">
				{#if lang === 'ru'}
					УСТИНА<br/>ЕСЬКОВА
				{:else}
					USTINA<br/>YESKOVA
				{/if}
			</h1>
			
			<div class="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#E5E5E2] pt-8">
				<p class="text-lg md:text-xl text-[#6B7280] font-normal max-w-xl leading-relaxed">
					{#if lang === 'ru'}
						Техническая реализация ваших идей, автоматизация процессов и маркетинг для растущих проектов. <br/><br/>
						От бизнес-идеи к работающему продукту.
					{:else}
						Technical execution of your ideas, process automation, and marketing for growing projects. <br/><br/>
						From business idea to working product.
					{/if}
				</p>
				<div class="flex flex-col gap-3 text-sm text-[#1B1B1B]">
	<!-- Ссылка на Telegram -->
	<a href="https://t.me/ustina_lvovna" target="_blank" rel="noopener noreferrer" class="hover:text-[#84D1B2] transition-colors flex items-center gap-2 group">
		<span>Telegram</span> <span class="text-[#EEC50B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
	</a>
	
	<!-- Ссылка на Email -->
	<a href="mailto:ustinaeskova@gmail.com" class="hover:text-[#84D1B2] transition-colors flex items-center gap-2 group">
		<span>Email</span> <span class="text-[#EEC50B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
	</a>
	
	<!-- Ссылка на LinkedIn -->
	<a href="https://www.linkedin.com/in/ustina-yeskova-28610764/" target="_blank" rel="noopener noreferrer" class="hover:text-[#84D1B2] transition-colors flex items-center gap-2 group">
		<span>LinkedIn</span> <span class="text-[#EEC50B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
	</a>
</div>
			</div>
		</section>

		<!-- СПИСОК РАЗДЕЛОВ -->
		<div class="space-y-0">
			
			<!-- РАЗДЕЛ 1: РАЗРАБОТКА -->
			<section class="relative py-12 md:py-16 border-t border-[#E5E5E2]">
				<!-- Индикатор на оси -->
				<div class="hidden md:flex absolute -left-[4.3rem] top-16 items-center">
					<div class="w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out {expanded.dev ? 'bg-[#84D1B2] scale-[1.3]' : 'bg-[#E5E5E2]'}"></div>
					{#if expanded.dev}
						<div class="h-[1px] w-4 bg-[#84D1B2] ml-[5px]" transition:fade={{duration: 300}}></div>
					{/if}
				</div>

				<!-- Заголовок и анонс -->
				<button onclick={() => toggleSection('dev')} class="w-full text-left group">
					<h2 class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] group-hover:text-[#84D1B2] transition-colors flex justify-between items-center">
						<span>{lang === 'ru' ? 'Разработка IT-продуктов' : 'Product Development'}</span>
						<span class="text-[#EEC50B] text-lg font-light transition-transform duration-500 {expanded.dev ? 'rotate-180' : ''}">↓</span>
					</h2>
					<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg">
						{#if lang === 'ru'}
							Разработка IT продуктов для монетизации экспертизы. Создание MVP для презентации продукта, проверки спроса и привлечения инвестиций.
						{:else}
							Development of IT products for expertise monetization. Building MVPs for product presentation, demand validation, and fundraising.
						{/if}
					</p>
				</button>

				<!-- Скрытый контент (Кейсы) -->
				{#if expanded.dev}
					<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-12">
						<!-- Кейс -->
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">2026</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">ИИ-тренажёр Clean Language</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Для фасилитаторов, педагогов, коучей, терапевтов. Тренажер был презентован в рамках фестиваля DramaFree Live Series 2026, в котором приняли участие 14 стран.' : 'For facilitators, educators, coaches, therapists. The simulator was presented at the DramaFree Live Series 2026 festival (14 countries).'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: Ancora Imparo, Сербия' : 'Client: Ancora Imparo, Serbia'}</div>
								<div class="mt-4 flex flex-wrap gap-2">
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">AI Agent</span>
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">Education</span>
								</div>
							</div>
						</div>
						<!-- Кейс -->
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">MVP</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">Ассистент Allercom</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Для врачей-аллергологов. Прототип создавался для презентации продукта сообществу и потенциальным инвесторам.' : 'For allergists. The prototype was developed for presenting the product to the community and potential investors.'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: RepTech Stockholm' : 'Client: RepTech Stockholm'}</div>
							</div>
						</div>
						<!-- Кейс -->
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">2026</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">MathGym</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Тренажёр устного счёта для детей 6–13 лет на трёх языках.' : 'Mental math trainer for children aged 6–13 in three languages.'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: AboutTheConnection, Сербия' : 'Client: AboutTheConnection, Serbia'}</div>
								<div class="mt-4 flex flex-wrap gap-2">
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">Web App</span>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</section>

			<!-- РАЗДЕЛ 2: МАРКЕТИНГ -->
			<section class="relative py-12 md:py-16 border-t border-[#E5E5E2]">
				<div class="hidden md:flex absolute -left-[4.3rem] top-16 items-center">
					<div class="w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out {expanded.marketing ? 'bg-[#84D1B2] scale-[1.3]' : 'bg-[#E5E5E2]'}"></div>
					{#if expanded.marketing}
						<div class="h-[1px] w-4 bg-[#84D1B2] ml-[5px]" transition:fade={{duration: 300}}></div>
					{/if}
				</div>

				<button onclick={() => toggleSection('marketing')} class="w-full text-left group">
					<h2 class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] group-hover:text-[#84D1B2] transition-colors flex justify-between items-center">
						<span>{lang === 'ru' ? 'Маркетинг и Автоматизация' : 'Marketing & Automation'}</span>
						<span class="text-[#EEC50B] text-lg font-light transition-transform duration-500 {expanded.marketing ? 'rotate-180' : ''}">↓</span>
					</h2>
					<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg">
						{#if lang === 'ru'}
							Привлечение и удержание клиентов, развитие бренда и продаж через CRM системы, социальные сети, сайты и чат-боты.
						{:else}
							Client acquisition and retention, brand positioning, and sales growth via CRM, social networks, websites, and bots.
						{/if}
					</p>
				</button>

				{#if expanded.marketing}
					<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-12">
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">NDA</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">{lang === 'ru' ? 'Работа с негативными отзывами от клиентов IT-холдинга' : 'Handling Critical Feedback for IT Holding'}</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Анализ клиентского пути, текстов и скриптов. Подготовка единых правил коммуникации во избежание потери клиентов.' : 'Analyzing customer journeys and scripts. Developing unified communication rules to prevent churn.'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: Проект под NDA, 2025' : 'Client: Project under NDA, 2025'}</div>
								<div class="mt-4 flex flex-wrap gap-2">
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">Audit</span>
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">Communications</span>
								</div>
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">2025</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">{lang === 'ru' ? 'Цифровизация бизнес процессов' : 'Business Process Digitalization'}</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Создание блогов врачей, онлайн курса, рекламные кампании Ads, локальное продвижение (Maps).' : 'Creating medical blogs, courses, Ads campaigns, and local SEO optimization.'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: Медико-психологический центр' : 'Client: Medical-Psychological Center'}</div>
								<div class="mt-4 flex flex-wrap gap-2">
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">Ads</span>
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">SEO</span>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</section>

			<!-- РАЗДЕЛ 3: МОНЕТИЗАЦИЯ -->
			<section class="relative py-12 md:py-16 border-t border-[#E5E5E2]">
				<div class="hidden md:flex absolute -left-[4.3rem] top-16 items-center">
					<div class="w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out {expanded.content ? 'bg-[#84D1B2] scale-[1.3]' : 'bg-[#E5E5E2]'}"></div>
					{#if expanded.content}
						<div class="h-[1px] w-4 bg-[#84D1B2] ml-[5px]" transition:fade={{duration: 300}}></div>
					{/if}
				</div>

				<button onclick={() => toggleSection('content')} class="w-full text-left group">
					<h2 class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] group-hover:text-[#84D1B2] transition-colors flex justify-between items-center">
						<span>{lang === 'ru' ? 'Монетизация контента' : 'Content Monetization'}</span>
						<span class="text-[#EEC50B] text-lg font-light transition-transform duration-500 {expanded.content ? 'rotate-180' : ''}">↓</span>
					</h2>
					<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg">
						{#if lang === 'ru'}
							Оформление экспертного контента в актуальные форматы (подкасты, курсы, сообщества). Организация подписок и трансграничных платежей.
						{:else}
							Packaging expert content into modern formats. Integrating monetization, subscriptions, and cross-border payment processing.
						{/if}
					</p>
				</button>

				{#if expanded.content}
					<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-8">
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">PODCAST</div>
							<div>
								<h3 class="text-lg text-[#1B1B1B]">DramaFreeWorld (2026)</h3>
								<div class="mt-1 text-sm text-[#BE8073]">{lang === 'ru' ? 'Заказчик: Ancora Imparo, Сербия' : 'Client: Ancora Imparo, Serbia'}</div>
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">PODCAST</div>
							<div>
								<h3 class="text-lg text-[#1B1B1B]">“Совместное внимание” (2025)</h3>
								<div class="mt-1 text-sm text-[#BE8073]">{lang === 'ru' ? 'Заказчик: Территория Речи' : 'Client: Territoria Rechi'}</div>
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">COMMUNITY</div>
							<div>
								<h3 class="text-lg text-[#1B1B1B]">“Психиатры психологам и врачам” (2025)</h3>
								<div class="mt-1 text-sm text-[#BE8073]">{lang === 'ru' ? 'Заказчик: Медико-психологический центр' : 'Client: Medical Center'}</div>
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">MEDIA</div>
							<div>
								<h3 class="text-lg text-[#1B1B1B]">Журнал о робототехнике (2025)</h3>
								<div class="mt-1 text-sm text-[#BE8073]">{lang === 'ru' ? 'Заказчик: Инновационный кластер' : 'Client: Innovation Cluster'}</div>
							</div>
						</div>
					</div>
				{/if}
			</section>

			<!-- РАЗДЕЛ 4: КОММУНИКАЦИИ -->
			<section class="relative py-12 md:py-16 border-t border-[#E5E5E2]">
				<div class="hidden md:flex absolute -left-[4.3rem] top-16 items-center">
					<div class="w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out {expanded.team ? 'bg-[#84D1B2] scale-[1.3]' : 'bg-[#E5E5E2]'}"></div>
					{#if expanded.team}
						<div class="h-[1px] w-4 bg-[#84D1B2] ml-[5px]" transition:fade={{duration: 300}}></div>
					{/if}
				</div>

				<button onclick={() => toggleSection('team')} class="w-full text-left group">
					<h2 class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] group-hover:text-[#84D1B2] transition-colors flex justify-between items-center">
						<span>{lang === 'ru' ? 'Внутренние коммуникации' : 'Team Communications'}</span>
						<span class="text-[#EEC50B] text-lg font-light transition-transform duration-500 {expanded.team ? 'rotate-180' : ''}">↓</span>
					</h2>
					<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg">
						{#if lang === 'ru'}
							Организация взаимодействия внутри команд. Настройка CRM, Trello, внутренних порталов для снижения рисков несогласованной работы.
						{:else}
							Structuring internal collaboration via CRM systems, intranets, and chats to mitigate friction caused by uncoordinated workflows.
						{/if}
					</p>
				</button>

				{#if expanded.team}
					<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-12">
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">NDA</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">{lang === 'ru' ? 'Синхронизация трех команд разработки' : 'Syncing Distributed Engineering Teams'}</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Проведение интервью, выявление проблем во взаимодействии команд и разработка единых подходов к коммуникациям для специалистов по ИБ, разработчиков и тех. менеджеров.' : 'Conducted engineering interviews to discover structural communication blind spots and formulated unified internal workflow interaction guides.'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: Подразделение IT-холдинга, 2025' : 'Client: IT Holding division, 2025'}</div>
								<div class="mt-4 flex flex-wrap gap-2">
									<span class="border border-[#E5E5E2] rounded px-2.5 py-1 text-xs text-[#BE8073]">Management</span>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</section>

			<!-- РАЗДЕЛ 5: МЕРОПРИЯТИЯ -->
			<section class="relative py-12 md:py-16 border-y border-[#E5E5E2]">
				<div class="hidden md:flex absolute -left-[4.3rem] top-16 items-center">
					<div class="w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out {expanded.events ? 'bg-[#84D1B2] scale-[1.3]' : 'bg-[#E5E5E2]'}"></div>
					{#if expanded.events}
						<div class="h-[1px] w-4 bg-[#84D1B2] ml-[5px]" transition:fade={{duration: 300}}></div>
					{/if}
				</div>

				<button onclick={() => toggleSection('events')} class="w-full text-left group">
					<h2 class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] group-hover:text-[#84D1B2] transition-colors flex justify-between items-center">
						<span>{lang === 'ru' ? 'Организация мероприятий' : 'Events & Operations'}</span>
						<span class="text-[#EEC50B] text-lg font-light transition-transform duration-500 {expanded.events ? 'rotate-180' : ''}">↓</span>
					</h2>
					<p class="text-[#6B7280] mt-4 max-w-3xl leading-relaxed text-base md:text-lg">
						{#if lang === 'ru'}
							Организация рекламы, регистрации гостей, продажи билетов, брендинг, техническое и логистическое сопровождение.
						{:else}
							Target advertising, guest registration workflows, ticket processing, brand assets, and deep technical back-office supervision.
						{/if}
					</p>
				</button>

				{#if expanded.events}
					<div transition:slide={{ duration: 500, axis: 'y' }} class="pt-12 space-y-12">
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">NDA</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">{lang === 'ru' ? 'Подготовка фестиваля на 15 000 участников' : 'Festival management for 15,000 attendees'}</h3>
								<p class="text-[#6B7280] mt-2 leading-relaxed max-w-2xl">{lang === 'ru' ? 'Разрабатывала визуал, инструменты коммуникации, брендированный транспорт (лучшее впечатление от фестиваля по версии пользователей).' : 'Engineered visual assets, user engagement systems, and custom branded public transportation.'}</p>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: Цифровая travel-платформа, 2025' : 'Client: Digital travel platform, 2025'}</div>
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
							<div class="font-mono text-xs text-[#6B7280] pt-1 tracking-wider">ONLINE</div>
							<div>
								<h3 class="text-xl text-[#1B1B1B] font-medium">DramaFree life series (2026)</h3>
								<div class="mt-3 text-sm text-[#BE8073] font-medium">{lang === 'ru' ? 'Заказчик: Ancora Imparo' : 'Client: Ancora Imparo'}</div>
							</div>
						</div>
					</div>
				{/if}
			</section>
		</div>

		<!-- ПРИЛОЖЕНИЕ (БЭКГРАУНД) -->
		<section class="mt-32">
			<div class="font-mono text-xs text-[#6B7280] tracking-wider mb-8 uppercase">
				{lang === 'ru' ? 'Приложение // Бэкграунд' : 'Appendix // Background'}
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
				<div>
					<div class="text-[#1B1B1B] font-medium mb-3">{lang === 'ru' ? 'Опыт до релокации' : 'Past Experience'}</div>
					<p class="text-[#6B7280]">
						{#if lang === 'ru'}
							Маркетинг для Bigtool.ru, СНК-Синтез (проф. AV-оборудование), маркетинг Messe Frankfurt RUS. Визуал и копирайтинг для IT, банков и премий.
						{:else}
							Marketing for Bigtool.ru, SNK-Syntez (pro AV), Messe Frankfurt RUS. Visual design and copywriting for fintech, banks, and awards.
						{/if}
					</p>
				</div>
				<div>
					<div class="text-[#1B1B1B] font-medium mb-3">{lang === 'ru' ? 'Образование' : 'Education'}</div>
					<p class="text-[#6B7280]">
						{#if lang === 'ru'}
							Неоконченное высшее (МТУСИ, инженер-математик). Администрирование баз данных (МАИ).
						{:else}
							Undergraduate engineering track at MTUCI, database administration tracks at MAI.
						{/if}
					</p>
				</div>
				<div>
					<div class="text-[#1B1B1B] font-medium mb-3">{lang === 'ru' ? 'Дополнительно' : 'Additional'}</div>
					<p class="text-[#6B7280]">
						{#if lang === 'ru'}
							Более 1000 часов обучения различным инструментам и автоматизации.
						{:else}
							Over 1,000 hours of continuous self-directed training across digital frameworks and automations.
						{/if}
					</p>
				</div>
			</div>
		</section>

	</main>
</div>