import type { Locale } from "./config";

const en = {
  announcement: "Open source. Built for your next big idea.",
  headline: ["Your LLM stack.", "Under control."],
  intro: "One API to connect your models, see every request, and keep costs in check. The open-source toolkit for developers shipping AI that works.",
  start: "Start building for free", docs: "Read the docs", note: "No credit card. Cloud or self-host. Your call.",
  providers: "Your favorite models. One place to build.", more: "providers",
  featureTitle: "Less plumbing. More building.", featureIntro: "From your first API call to production traffic, Lunar gives you the visibility and control to ship with confidence.",
  features: [
    { title: "Every model. One API.", text: "Keep the SDK you know. Connect providers, switch models, and set fallbacks without rewriting your app.", link: "Explore the gateway", tag: "OpenAI-compatible" },
    { title: "Follow every request.", text: "See prompts, responses, latency, and cost together. Find what went wrong and understand why.", link: "Explore observability", tag: "Full request visibility" },
    { title: "Make every token count.", text: "Understand spend by model and feature. Route to the right model for the job, with quality in view.", link: "Explore cost intelligence", tag: "Cost + quality" },
  ],
  demo: { sample: "Interactive example", project: "My first project", tabs: ["Gateway", "Traces", "Costs"], route: "One request. The right model.", app: "Your app", gateway: "Lunar gateway", connected: "3 providers connected", request: "Send a test request", running: "Routing request…", rerun: "Run again", success: "Request completed", prompt: "Explain an API in one sentence.", response: "An API lets two applications talk to each other.", waiting: "Your response will appear here.", trace: "Request details", cost: "Cost per request", latency: "Latency", status: "Status", model: "Model", costTitle: "See where every token goes.", costNote: "Example requests · USD", total: "Total cost", traceNote: "Select a request to inspect it.", detail: "Response", ready: "Ready", complete: "Completed", failure: "Provider unavailable", fallback: "Try a provider outage", recovered: "Fallback completed", recoveredNote: "The primary provider failed. Lunar routed the request to your backup.", disclaimer: "Simulated locally. No API key needed." },
  workflowTitle: "Fits your stack. Gets out of your way.", workflowIntro: "Already using the OpenAI SDK? You’re almost there. Point your client at Lunar and keep building.",
  steps: [{ title: "Connect a provider", text: "Add your API key in the console, or use your own deployment." }, { title: "Update your base URL", text: "Keep your SDK. Set your Lunar endpoint and API key." }, { title: "Make a call. See the whole picture.", text: "Your requests, costs, and latency appear together in Lunar." }],
  codeNote: "Use the endpoint and key from your Lunar workspace.", copy: "Copy code", copied: "Copied!", copyError: "Couldn’t copy. Select the code to copy it.",
  productTitle: "Real requests. Real answers.", productIntro: "Go from “something feels off” to the exact trace. Explore the interfaces your team will use every day.",
  productTabs: ["Observability", "Cost analysis", "Evaluations"], productCaption: "Product screenshots · Example workspace", fullPlatform: "Explore the full platform",
  openTitle: "Your stack. Your rules.", openText: "Lunar is open source and MIT licensed. Read the code, run it on your infrastructure, or build something we haven’t thought of yet.", openCta: "Explore on GitHub", community: "Meet the community", openTags: ["MIT licensed", "Self-hostable", "No vendor lock-in"],
  faqTitle: "A few things you might be wondering.", faqContact: "Have something else in mind?", contact: "Let’s talk", faqs: [
    { question: "What is Lunar?", answer: "Lunar is an open-source gateway and observability toolkit for LLM applications. It brings model routing, request tracing, cost tracking, and evaluations into one platform." },
    { question: "Do I need to change my existing code?", answer: "Lunar works with the OpenAI SDK. Configure your Lunar base URL and API key, then use the provider/model identifier for your chosen model. Provider-specific features may need additional configuration." },
    { question: "Can I run Lunar on my own infrastructure?", answer: "Yes. Lunar is MIT licensed and can be self-hosted. The repository includes deployment instructions, so your team can choose where to run it and how to manage its data." },
    { question: "How do model costs work?", answer: "Lunar’s platform plans are separate from model provider charges. Bring your own provider keys and use cost tracking to understand your usage. See pricing for plan limits." },
  ],
  ctaTitle: "Build something worth shipping.", ctaText: "We’ll take care of the LLM plumbing. You bring the idea.",
  startTitle: "Your next project starts here.", startIntro: "Choose where to run Lunar. Use the cloud console or take the full stack into your own infrastructure.", cloud: "Lunar Cloud", cloudText: "Open the console, connect a provider, and start exploring your requests.", cloudCta: "Open the console", selfhost: "On your infrastructure", selfhostText: "Get the source, follow the deployment guide, and make Lunar your own.", selfhostCta: "View the deployment guide",
  docsTitle: "Let’s make your first request.", docsIntro: "Connect a provider, configure your client, and send a request through Lunar.", apiGuide: "Full setup guide", docsHelp: "Need a hand? Join the community on Discord.",
};

type Copy = typeof en;
const pt: Copy = {
  announcement: "Código aberto. Espaço para sua próxima grande ideia.",
  headline: ["Seu stack de LLMs.", "Sob controle."],
  intro: "Uma API para conectar modelos, acompanhar cada requisição e controlar custos. O toolkit open source para devs que colocam IA em produção.",
  start: "Começar a construir grátis", docs: "Ler a documentação", note: "Sem cartão. Na cloud ou no seu servidor. Você escolhe.",
  providers: "Seus modelos favoritos. Um lugar para construir.", more: "provedores",
  featureTitle: "Menos infraestrutura. Mais criação.", featureIntro: "Da primeira chamada de API ao tráfego em produção, a Lunar dá a visibilidade e o controle para você seguir com confiança.",
  features: [
    { title: "Todo modelo. Uma API.", text: "Continue com o SDK que você conhece. Conecte provedores, troque modelos e configure fallbacks sem reescrever seu app.", link: "Conheça o gateway", tag: "Compatível com OpenAI" },
    { title: "Acompanhe cada requisição.", text: "Veja prompts, respostas, latência e custo no mesmo lugar. Descubra o que deu errado e entenda o motivo.", link: "Explore a observabilidade", tag: "Visibilidade de ponta a ponta" },
    { title: "Cada token conta.", text: "Entenda os gastos por modelo e funcionalidade. Use o modelo certo para cada tarefa, sem perder a qualidade de vista.", link: "Explore a análise de custos", tag: "Custo + qualidade" },
  ],
  demo: { sample: "Exemplo interativo", project: "Meu primeiro projeto", tabs: ["Gateway", "Traces", "Custos"], route: "Uma requisição. O modelo certo.", app: "Seu app", gateway: "Gateway Lunar", connected: "3 provedores conectados", request: "Enviar requisição de teste", running: "Roteando requisição…", rerun: "Testar novamente", success: "Requisição concluída", prompt: "Explique uma API em uma frase.", response: "Uma API permite que dois aplicativos conversem entre si.", waiting: "Sua resposta vai aparecer aqui.", trace: "Detalhes da requisição", cost: "Custo por requisição", latency: "Latência", status: "Status", model: "Modelo", costTitle: "Saiba para onde vai cada token.", costNote: "Requisições de exemplo · USD", total: "Custo total", traceNote: "Selecione uma requisição para inspecionar.", detail: "Resposta", ready: "Pronto", complete: "Concluída", failure: "Provedor indisponível", fallback: "Simular falha de provedor", recovered: "Fallback concluído", recoveredNote: "O provedor principal falhou. A Lunar encaminhou a requisição para o backup.", disclaimer: "Simulação local. Não precisa de chave de API." },
  workflowTitle: "Encaixa no seu stack. Libera seu tempo.", workflowIntro: "Já usa o SDK da OpenAI? Você está quase lá. Aponte seu cliente para a Lunar e continue criando.",
  steps: [{ title: "Conecte um provedor", text: "Adicione sua chave de API no console ou na sua própria instalação." }, { title: "Atualize a URL base", text: "Mantenha seu SDK. Configure o endpoint e a chave da Lunar." }, { title: "Faça uma chamada. Veja o contexto.", text: "Suas requisições, custos e latência aparecem juntos na Lunar." }],
  codeNote: "Use o endpoint e a chave do seu workspace na Lunar.", copy: "Copiar código", copied: "Copiado!", copyError: "Não foi possível copiar. Selecione o código para copiá-lo.",
  productTitle: "Requisições reais. Respostas concretas.", productIntro: "Saia de “algo parece errado” e encontre o trace exato. Explore as interfaces que seu time vai usar no dia a dia.",
  productTabs: ["Observabilidade", "Análise de custos", "Avaliações"], productCaption: "Telas do produto · Workspace de exemplo", fullPlatform: "Conheça a plataforma completa",
  openTitle: "Seu stack. Suas regras.", openText: "A Lunar é open source com licença MIT. Leia o código, rode na sua infraestrutura ou crie algo que a gente ainda nem imaginou.", openCta: "Explorar no GitHub", community: "Conhecer a comunidade", openTags: ["Licença MIT", "Self-host disponível", "Sem dependência de fornecedor"],
  faqTitle: "Talvez você esteja pensando nisso.", faqContact: "Ficou com outra dúvida?", contact: "Fale com a gente", faqs: [
    { question: "O que é a Lunar?", answer: "A Lunar é um gateway open source e toolkit de observabilidade para aplicações com LLMs. Ela reúne roteamento de modelos, traces de requisições, controle de custos e avaliações em uma plataforma." },
    { question: "Preciso mudar meu código?", answer: "A Lunar é compatível com o SDK da OpenAI. Configure a URL base e a chave da Lunar e use o identificador de provedor/modelo desejado. Recursos específicos de cada provedor podem exigir configurações adicionais." },
    { question: "Posso rodar a Lunar na minha infraestrutura?", answer: "Sim. A Lunar tem licença MIT e pode ser hospedada por você. O repositório inclui instruções de implantação para seu time escolher onde executar a plataforma e como gerenciar os dados." },
    { question: "Como funcionam os custos dos modelos?", answer: "Os planos da Lunar são separados das cobranças dos provedores de modelos. Use suas próprias chaves e acompanhe o consumo na análise de custos. Consulte os limites na página de preços." },
  ],
  ctaTitle: "Sua próxima ideia merece ir ao ar.", ctaText: "A gente cuida da infraestrutura de LLMs. Você traz a ideia.",
  startTitle: "Seu próximo projeto começa aqui.", startIntro: "Escolha onde rodar a Lunar. Use o console na cloud ou leve a plataforma para sua própria infraestrutura.", cloud: "Lunar Cloud", cloudText: "Abra o console, conecte um provedor e comece a explorar suas requisições.", cloudCta: "Abrir o console", selfhost: "Na sua infraestrutura", selfhostText: "Acesse o código, siga o guia de implantação e deixe a Lunar do seu jeito.", selfhostCta: "Ver guia de implantação",
  docsTitle: "Vamos fazer sua primeira requisição.", docsIntro: "Conecte um provedor, configure seu cliente e envie uma requisição pela Lunar.", apiGuide: "Guia completo de configuração", docsHelp: "Precisa de uma mão? Encontre a comunidade no Discord.",
};
const es: Copy = {
  announcement: "Código abierto. Espacio para tu próxima gran idea.",
  headline: ["Tu stack de LLMs.", "Bajo control."],
  intro: "Una API para conectar modelos, seguir cada solicitud y controlar los costes. El toolkit open source para desarrolladores que llevan IA a producción.",
  start: "Empieza a crear gratis", docs: "Lee la documentación", note: "Sin tarjeta. En la nube o en tu servidor. Tú eliges.",
  providers: "Tus modelos favoritos. Un lugar para crear.", more: "proveedores",
  featureTitle: "Menos infraestructura. Más creación.", featureIntro: "Desde tu primera llamada hasta el tráfico en producción, Lunar te da la visibilidad y el control para avanzar con confianza.",
  features: [
    { title: "Cada modelo. Una API.", text: "Conserva el SDK que conoces. Conecta proveedores, cambia modelos y configura fallbacks sin reescribir tu app.", link: "Explora el gateway", tag: "Compatible con OpenAI" },
    { title: "Sigue cada solicitud.", text: "Ve prompts, respuestas, latencia y costes juntos. Descubre qué falló y entiende por qué.", link: "Explora la observabilidad", tag: "Visibilidad completa" },
    { title: "Cada token cuenta.", text: "Entiende el gasto por modelo y funcionalidad. Elige el modelo adecuado para cada tarea sin perder de vista la calidad.", link: "Explora los costes", tag: "Coste + calidad" },
  ],
  demo: { sample: "Ejemplo interactivo", project: "Mi primer proyecto", tabs: ["Gateway", "Traces", "Costes"], route: "Una solicitud. El modelo adecuado.", app: "Tu app", gateway: "Gateway Lunar", connected: "3 proveedores conectados", request: "Enviar solicitud de prueba", running: "Enrutando solicitud…", rerun: "Probar de nuevo", success: "Solicitud completada", prompt: "Explica una API en una frase.", response: "Una API permite que dos aplicaciones se comuniquen.", waiting: "Tu respuesta aparecerá aquí.", trace: "Detalles de la solicitud", cost: "Coste por solicitud", latency: "Latencia", status: "Estado", model: "Modelo", costTitle: "Descubre adónde va cada token.", costNote: "Solicitudes de ejemplo · USD", total: "Coste total", traceNote: "Selecciona una solicitud para inspeccionarla.", detail: "Respuesta", ready: "Listo", complete: "Completada", failure: "Proveedor no disponible", fallback: "Simular fallo de proveedor", recovered: "Fallback completado", recoveredNote: "El proveedor principal falló. Lunar envió la solicitud al respaldo.", disclaimer: "Simulación local. No necesitas clave de API." },
  workflowTitle: "Encaja en tu stack. Libera tu tiempo.", workflowIntro: "¿Ya usas el SDK de OpenAI? Casi estás. Apunta tu cliente a Lunar y sigue creando.",
  steps: [{ title: "Conecta un proveedor", text: "Añade tu clave de API en la consola o en tu propia instalación." }, { title: "Actualiza la URL base", text: "Conserva tu SDK. Configura el endpoint y la clave de Lunar." }, { title: "Haz una llamada. Ve el contexto.", text: "Tus solicitudes, costes y latencia aparecen juntos en Lunar." }],
  codeNote: "Usa el endpoint y la clave de tu workspace de Lunar.", copy: "Copiar código", copied: "¡Copiado!", copyError: "No se pudo copiar. Selecciona el código para copiarlo.",
  productTitle: "Solicitudes reales. Respuestas concretas.", productIntro: "Pasa de «algo parece fallar» al trace exacto. Explora las interfaces que tu equipo usará cada día.",
  productTabs: ["Observabilidad", "Análisis de costes", "Evaluaciones"], productCaption: "Capturas del producto · Workspace de ejemplo", fullPlatform: "Explora toda la plataforma",
  openTitle: "Tu stack. Tus reglas.", openText: "Lunar es open source con licencia MIT. Lee el código, ejecútalo en tu infraestructura o crea algo que aún no hemos imaginado.", openCta: "Explora en GitHub", community: "Conoce la comunidad", openTags: ["Licencia MIT", "Self-host disponible", "Sin dependencia de proveedor"],
  faqTitle: "Quizás te estés preguntando esto.", faqContact: "¿Tienes otra pregunta?", contact: "Hablemos", faqs: [
    { question: "¿Qué es Lunar?", answer: "Lunar es un gateway open source y toolkit de observabilidad para aplicaciones con LLMs. Reúne enrutamiento de modelos, traces, seguimiento de costes y evaluaciones en una plataforma." },
    { question: "¿Necesito cambiar mi código?", answer: "Lunar funciona con el SDK de OpenAI. Configura la URL base y la clave de Lunar y usa el identificador del proveedor/modelo elegido. Algunas funciones específicas requieren configuración adicional." },
    { question: "¿Puedo ejecutar Lunar en mi infraestructura?", answer: "Sí. Lunar tiene licencia MIT y permite self-hosting. El repositorio incluye instrucciones para que tu equipo decida dónde ejecutar la plataforma y cómo gestionar los datos." },
    { question: "¿Cómo funcionan los costes de los modelos?", answer: "Los planes de Lunar son independientes de los cargos de los proveedores. Usa tus propias claves y sigue el consumo en el análisis de costes. Consulta los límites en la página de precios." },
  ],
  ctaTitle: "Tu próxima idea merece salir al mundo.", ctaText: "Nos ocupamos de la infraestructura de LLMs. Tú traes la idea.",
  startTitle: "Tu próximo proyecto empieza aquí.", startIntro: "Elige dónde ejecutar Lunar. Usa la consola cloud o lleva la plataforma a tu infraestructura.", cloud: "Lunar Cloud", cloudText: "Abre la consola, conecta un proveedor y empieza a explorar tus solicitudes.", cloudCta: "Abrir la consola", selfhost: "En tu infraestructura", selfhostText: "Accede al código, sigue la guía de despliegue y haz Lunar tuyo.", selfhostCta: "Ver la guía de despliegue",
  docsTitle: "Hagamos tu primera solicitud.", docsIntro: "Conecta un proveedor, configura tu cliente y envía una solicitud con Lunar.", apiGuide: "Guía completa de configuración", docsHelp: "¿Necesitas ayuda? Encuentra a la comunidad en Discord.",
};
export const lunarCopy: Record<Locale, Copy> = { en, pt, es };
export type LunarCopy = Copy;
