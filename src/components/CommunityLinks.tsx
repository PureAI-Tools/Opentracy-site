"use client";
import { useAnalytics } from "@/lib/analytics";
import type { Locale } from "@/i18n/config";
import { site } from "@/lib/site";
import Icon, { type IconName } from "./Icon";
export default function CommunityLinks({ locale = "en" }: { locale?: Locale }) {
  const posthog = useAnalytics();
  const copy = {
    en: [["GitHub", "Read the code, report issues, and help build the next version of Lunar.", "Explore the repository"], ["Discord", "Share what you’re building, ask questions, and talk with the team.", "Join the conversation"], ["Documentation", "Make your first request, connect a provider, or deploy your own instance.", "Start exploring"]],
    pt: [["GitHub", "Leia o código, reporte problemas e ajude a construir a próxima versão da Lunar.", "Explorar o repositório"], ["Discord", "Compartilhe o que está criando, tire dúvidas e converse com o time.", "Entrar na conversa"], ["Documentação", "Faça sua primeira requisição, conecte um provedor ou rode sua própria instância.", "Começar a explorar"]],
    es: [["GitHub", "Lee el código, reporta problemas y ayuda a crear la próxima versión de Lunar.", "Explorar el repositorio"], ["Discord", "Comparte lo que creas, haz preguntas y habla con el equipo.", "Únete a la conversación"], ["Documentación", "Haz tu primera solicitud, conecta un proveedor o despliega tu propia instancia.", "Empieza a explorar"]],
  }[locale];
  const urls = [site.github, site.discord, `/${locale}/docs`];
  const icons: IconName[] = ["github", "globe", "book"];
  return <div className="community-links">{copy.map(([title, description, cta], i) => <a key={title} href={urls[i]} onClick={() => posthog?.capture("community_link_clicked", { href: urls[i], label: title })}><Icon name={icons[i]} size={27} /><h2>{title}</h2><p>{description}</p><span className="lunar-text-link">{cta}<Icon name="arrow" size={16} /></span></a>)}</div>;
}
