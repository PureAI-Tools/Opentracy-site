import type { Locale } from "./config";

const en = {
  meta: "An AI lab for agents, self-improving systems, RL environments, evaluations, and small language models.",
  eyebrow: "Lunar Research & Engineering",
  belief: "We believe in systems that manage themselves.",
  intro: "Agents that act. Models that specialize. Systems that learn from what happens next.",
  primary: "Build with our lab", explore: "Explore the lab", sticker: "Serious research. Curious minds.",
  orbit: {
    label: "Explore the autonomous system loop", phases: ["Observe", "Act", "Evaluate", "Improve"],
    notes: ["Read the context. Find the signal.", "Use a tool. Take a useful step.", "Check the outcome against the goal.", "Turn feedback into the next experiment."],
    run: "Run the loop", running: "Pause the loop", replay: "Run it again", note: "Interactive concept", agent: "a curious little agent", hint: "Psst. Try the buttons.",
  },
  bench: {
    label: "The experiment bench", title: ["Big questions.", "Small experiments."], intro: "A few building blocks. Go ahead, play with them.",
    tabs: ["RL environments", "Evaluations", "Small models"],
    titles: [["A tiny world.", "A useful lesson."], ["Looks good?", "Let’s test it."], ["Less model.", "More focus."]],
    descriptions: ["An agent, a constraint, a reward. Change the environment and watch the next decision.", "An output is a hypothesis. Run a few checks before it becomes a feature.", "Curate the task. Distill the knowledge. Evaluate the model that needs to do the work."],
    tags: [["Reward design", "Policy training"], ["Reproducible checks", "Failure analysis"], ["Fine-tuning", "Distillation"]],
    note: "Small illustrative experiments. The real work starts with your context.",
  },
  evaluation: {
    label: "Evaluation playground", candidate: "Candidate", versions: ["First attempt", "After iteration"], run: "Run evaluations", running: "Evaluating…", reset: "Run again",
    tests: ["Valid JSON", "Required fields", "Expected category"], pending: "Waiting", pass: "Pass", fail: "Fail", result: "checks passed", note: "Local checks on example outputs. No model is called.",
    input: "Task: classify a billing request and return JSON.", output: "Candidate output", ready: "Try the first attempt. Then change the candidate.",
  },
  smallModel: {
    label: "Small model experiment", steps: ["Curate", "Specialize", "Evaluate"],
    teacher: "Reference model", student: "Small model", task: "Domain task", dataset: "Curated examples", distill: "Transfer the useful patterns", test: "Test on held-out examples",
    descriptions: ["Choose examples that represent the job.", "Use fine-tuning and distillation to specialize.", "Check the output against the task’s criteria."],
    tasks: ["Document extraction", "Request classification"], taskLabel: "Choose a task", output: "Example output", note: "A concept sketch of the workflow, not a training benchmark.",
  },
  principlesTitle: ["A little less babysitting.", "A lot more intention."],
  principles: [
    { title: "Autonomy, with boundaries.", text: "Defined tools, permissions, and human approval where it matters.", word: "Boundaries" },
    { title: "Feedback becomes an experiment.", text: "Production traces inform the next dataset, reward, or evaluation.", word: "Feedback" },
    { title: "Evidence before deployment.", text: "Compare against a baseline. Review failures. Decide what ships.", word: "Evidence" },
  ],
  closing: ["Got a weird", "AI problem?"], closingText: "Good. Bring it to the lab.", contact: "Let’s build something", github: "Explore our open source", footnote: "Your context. Our curiosity. A project we build together.",
};

export type ResearchLabCopy = typeof en;
export const researchLabCopy: Record<Locale, ResearchLabCopy> = {
  en,
  pt: {
    meta: "Um AI Lab para agentes, sistemas que evoluem, RL environments, avaliações e Small Language Models.",
    eyebrow: "Lunar Research & Engineering", belief: "We believe in systems that manage themselves.",
    intro: "Agentes que agem. Modelos que se especializam. Sistemas que aprendem com o que vem depois.",
    primary: "Construa com nosso lab", explore: "Explore o laboratório", sticker: "Pesquisa séria. Mentes curiosas.",
    orbit: { label: "Explore o ciclo de um sistema autônomo", phases: ["Observar", "Agir", "Avaliar", "Evoluir"], notes: ["Ler o contexto. Encontrar o sinal.", "Usar uma ferramenta. Dar um passo útil.", "Comparar o resultado com o objetivo.", "Transformar feedback no próximo experimento."], run: "Rodar o ciclo", running: "Pausar o ciclo", replay: "Rodar de novo", note: "Conceito interativo", agent: "um pequeno agente curioso", hint: "Psst. Teste os botões." },
    bench: {
      label: "A bancada de experimentos", title: ["Grandes perguntas.", "Pequenos experimentos."], intro: "Algumas peças do que construímos. Pode mexer.",
      tabs: ["RL environments", "Evaluations", "Small models"],
      titles: [["Um pequeno mundo.", "Uma boa lição."], ["Parece bom?", "Vamos testar."], ["Modelo menor.", "Foco maior."]],
      descriptions: ["Um agente, uma restrição, uma recompensa. Mude o ambiente e observe a próxima decisão.", "Uma resposta é uma hipótese. Rode os testes antes de transformá-la em uma funcionalidade.", "Curar a tarefa. Destilar o conhecimento. Avaliar o modelo que vai fazer o trabalho."],
      tags: [["Reward design", "Treinamento de políticas"], ["Testes reproduzíveis", "Análise de falhas"], ["Fine-tuning", "Destilação"]],
      note: "Pequenos experimentos ilustrativos. O trabalho real começa com o seu contexto.",
    },
    evaluation: {
      label: "Experimento de avaliação", candidate: "Candidato", versions: ["Primeira tentativa", "Após uma iteração"], run: "Rodar avaliações", running: "Avaliando…", reset: "Rodar novamente",
      tests: ["JSON válido", "Campos obrigatórios", "Categoria esperada"], pending: "Aguardando", pass: "Passou", fail: "Falhou", result: "testes aprovados", note: "Testes locais com respostas de exemplo. Nenhum modelo é chamado.",
      input: "Tarefa: classificar uma solicitação de cobrança e retornar JSON.", output: "Resposta do candidato", ready: "Teste a primeira tentativa. Depois, troque o candidato.",
    },
    smallModel: {
      label: "Experimento com modelo pequeno", steps: ["Curar", "Especializar", "Avaliar"], teacher: "Modelo de referência", student: "Modelo pequeno", task: "Tarefa do domínio", dataset: "Exemplos curados", distill: "Transferir os padrões úteis", test: "Testar com exemplos separados",
      descriptions: ["Escolher exemplos que representem o trabalho.", "Especializar com fine-tuning e destilação.", "Verificar a resposta pelos critérios da tarefa."],
      tasks: ["Extração de documentos", "Classificação de solicitações"], taskLabel: "Escolha uma tarefa", output: "Resposta de exemplo", note: "Ilustração do fluxo de trabalho, sem métricas de treinamento.",
    },
    principlesTitle: ["Menos supervisão manual.", "Mais intenção no sistema."],
    principles: [
      { title: "Autonomia, com limites.", text: "Ferramentas, permissões e aprovação humana onde importa.", word: "Limites" },
      { title: "Feedback vira experimento.", text: "Traces da operação orientam o próximo dataset, recompensa ou avaliação.", word: "Feedback" },
      { title: "Evidência antes do deploy.", text: "Comparar com um baseline. Revisar falhas. Decidir o que vai para produção.", word: "Evidência" },
    ],
    closing: ["Um problema de IA", "fora do comum?"], closingText: "Ótimo. Traga para o lab.", contact: "Vamos construir juntos", github: "Explore nosso open source", footnote: "Seu contexto. Nossa curiosidade. Um projeto construído em conjunto.",
  },
  es: {
    meta: "Un AI Lab para agentes, sistemas que evolucionan, RL environments, evaluaciones y Small Language Models.",
    eyebrow: "Lunar Research & Engineering", belief: "We believe in systems that manage themselves.",
    intro: "Agentes que actúan. Modelos que se especializan. Sistemas que aprenden de lo que viene después.",
    primary: "Construye con nuestro lab", explore: "Explora el laboratorio", sticker: "Investigación seria. Mentes curiosas.",
    orbit: { label: "Explora el ciclo de un sistema autónomo", phases: ["Observar", "Actuar", "Evaluar", "Mejorar"], notes: ["Leer el contexto. Encontrar la señal.", "Usar una herramienta. Dar un paso útil.", "Comparar el resultado con el objetivo.", "Convertir el feedback en el próximo experimento."], run: "Ejecutar el ciclo", running: "Pausar el ciclo", replay: "Repetir el ciclo", note: "Concepto interactivo", agent: "un pequeño agente curioso", hint: "Psst. Prueba los botones." },
    bench: {
      label: "La mesa de experimentos", title: ["Grandes preguntas.", "Pequeños experimentos."], intro: "Algunas piezas de lo que construimos. Puedes tocarlas.",
      tabs: ["RL environments", "Evaluations", "Small models"], titles: [["Un pequeño mundo.", "Una buena lección."], ["¿Parece bueno?", "Vamos a probarlo."], ["Modelo pequeño.", "Foco preciso."]],
      descriptions: ["Un agente, una restricción, una recompensa. Cambia el entorno y observa la siguiente decisión.", "Una respuesta es una hipótesis. Ejecuta las pruebas antes de convertirla en una funcionalidad.", "Curar la tarea. Destilar el conocimiento. Evaluar el modelo que hará el trabajo."],
      tags: [["Reward design", "Entrenamiento de políticas"], ["Pruebas reproducibles", "Análisis de fallos"], ["Fine-tuning", "Destilación"]], note: "Pequeños experimentos ilustrativos. El trabajo real empieza con tu contexto.",
    },
    evaluation: {
      label: "Experimento de evaluación", candidate: "Candidato", versions: ["Primer intento", "Después de una iteración"], run: "Ejecutar evaluaciones", running: "Evaluando…", reset: "Ejecutar de nuevo",
      tests: ["JSON válido", "Campos obligatorios", "Categoría esperada"], pending: "Esperando", pass: "Aprobado", fail: "Falló", result: "pruebas aprobadas", note: "Pruebas locales con respuestas de ejemplo. No se llama a ningún modelo.", input: "Tarea: clasificar una solicitud de facturación y devolver JSON.", output: "Respuesta del candidato", ready: "Prueba el primer intento. Después, cambia el candidato.",
    },
    smallModel: {
      label: "Experimento con modelo pequeño", steps: ["Curar", "Especializar", "Evaluar"], teacher: "Modelo de referencia", student: "Modelo pequeño", task: "Tarea del dominio", dataset: "Ejemplos curados", distill: "Transferir los patrones útiles", test: "Probar con ejemplos separados",
      descriptions: ["Elegir ejemplos que representen el trabajo.", "Especializar con fine-tuning y destilación.", "Verificar la respuesta según los criterios de la tarea."], tasks: ["Extracción de documentos", "Clasificación de solicitudes"], taskLabel: "Elige una tarea", output: "Respuesta de ejemplo", note: "Ilustración del flujo de trabajo, sin métricas de entrenamiento.",
    },
    principlesTitle: ["Menos supervisión manual.", "Más intención en el sistema."], principles: [
      { title: "Autonomía, con límites.", text: "Herramientas, permisos y aprobación humana donde importa.", word: "Límites" },
      { title: "El feedback se vuelve experimento.", text: "Los traces guían el siguiente dataset, recompensa o evaluación.", word: "Feedback" },
      { title: "Evidencia antes del despliegue.", text: "Comparar con un baseline. Revisar fallos. Decidir qué llega a producción.", word: "Evidencia" },
    ],
    closing: ["¿Un problema de IA", "fuera de lo común?"], closingText: "Bien. Tráelo al lab.", contact: "Construyamos juntos", github: "Explora nuestro open source", footnote: "Tu contexto. Nuestra curiosidad. Un proyecto que construimos juntos.",
  },
};
