"use client";

import { useEffect, useRef, type ReactNode } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_DEPLOY_BASE_PATH ?? "";
const CHECKOUT = "https://checkout.brazhits.com.br/checkout/cmsrukfkk00sw01pw02ag439i?offer=osiy9l6";
const WHATSAPP = "https://wa.me/5538984020274?text=Ol%C3%A1!%20Vim%20pelo%20suporte%20do%20Pack%20de%20Clipes";

const testimonials = [
  ["João Carlos", "Finalmente achei tudo com a mesma qualidade. Passei para o pen drive e a multimídia reconheceu sem complicação."],
  ["Marcelo Santos", "Antes eu perdia horas procurando vídeo por vídeo. Aqui veio tudo organizado e pronto para usar."],
  ["Thiago Lima", "Uso no carro todos os dias. Tem ritmo para todo tipo de passageiro e a imagem ficou muito boa."],
  ["Carlos Henrique", "O que mais gostei foi a organização por gênero. Dá para encontrar qualquer clipe em segundos."],
  ["André Ferreira", "Comprei o completo e valeu muito a pena. É conteúdo demais por um preço que cabe no bolso."],
  ["Lucas Martins", "Já recebi atualização nova no grupo. Não tem mensalidade e o atendimento respondeu rápido."],
  ["Rafael Costa", "Na TV e no telão ficou excelente. Os arquivos são leves, bem nomeados e com ótima definição."],
  ["Paulo Roberto", "Foi só baixar, copiar e dar o play. Exatamente o que eu queria para a central multimídia."],
] as const;

const faqs = [
  ["Como recebo os clipes?", "Após a confirmação do pagamento, as instruções de acesso chegam automaticamente no seu e-mail."],
  ["Funciona na multimídia do meu carro?", "Os arquivos são entregues em MP4 Full HD 1080p, formato amplamente compatível com centrais multimídia, TVs, PCs e telões."],
  ["Preciso de internet para assistir?", "Não. A internet é necessária somente para baixar. Depois, você pode reproduzir os arquivos salvos quando quiser."],
  ["Existe alguma mensalidade?", "Não. O pagamento é único, o acesso é vitalício e as atualizações mensais não têm custo adicional."],
  ["Posso escolher quais arquivos baixar?", "Sim. Você pode baixar pastas completas ou selecionar somente os clipes que desejar."],
] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.unobserve(node);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -36px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`sl-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Brand() { return <span className="sl-brand"><span>Braz</span>Hits</span>; }
function Arrow() { return <span className="sl-arrow" aria-hidden="true" />; }

function PhoneProof({ name, text, image }: { name: string; text: string; image: string }) {
  return (
    <div className="sl-phone">
      <div className="sl-phone-top"><i /><span>{name}</span><b>•••</b></div>
      <img src={`${BASE_PATH}/${image}`} alt="Cliente usando um Pack BrazHits" />
      <div className="sl-phone-copy"><strong>“{text}”</strong><span>★★★★★</span></div>
    </div>
  );
}

export default function RedesignPreview() {
  useEffect(() => {
    document.documentElement.classList.add("sl-motion");
    return () => document.documentElement.classList.remove("sl-motion");
  }, []);

  return (
    <main className="sl-page">
      <section className="sl-hero">
        <img className="sl-hero-photo" src={`${BASE_PATH}/hero-expert-brazhits.jpeg`} alt="Especialista BrazHits em um carro com clipe reproduzindo na central multimídia" />
        <div className="sl-hero-shade" />
        <div className="sl-hero-light" aria-hidden="true" />
        <div className="sl-shell sl-hero-inner">
          <Reveal className="sl-hero-copy">
            <div className="sl-hero-signature" aria-label="BrazHits Clipes e Músicas para Multimídia">
              <span className="sl-hero-mark" aria-hidden="true"><i /><i /></span>
              <span><strong>BrazHits</strong>Clipes e Músicas<br />para Multimídia</span>
            </div>
            <h1>Eu fiz o trabalho <em>difícil</em><br />por você.</h1>
            <p>Todos os meses eu atualizo minha multimídia com os <strong>melhores lançamentos em clipes e músicas.</strong> Agora você só acessa as pastas, baixa e reproduz em qualquer tela — sem precisar de internet.</p>
            <a className="sl-cta sl-hero-cta" href={CHECKOUT} target="_blank" rel="noopener noreferrer">QUERO O PACK COMPLETO <Arrow /></a>
            <div className="sl-secure"><span aria-hidden="true" /> COMPRA 100% SEGURA</div>
          </Reveal>
        </div>
        <a className="sl-hero-scroll" href="#conteudo" aria-label="Ver o conteúdo da página"><span /></a>
      </section>

      <section className="sl-proof" id="conteudo"><div className="sl-shell">
        <Reveal className="sl-section-heading sl-compact"><span className="sl-pill">CLIENTES BRAZHITS</span><h2>De motoristas comuns<br />a <em>multimídias completas.</em></h2></Reveal>
        <div className="sl-phone-row">
          <Reveal delay={40}><PhoneProof name="Marcelo" image="criativo-pack-sertanejo-1080x1920.png" text="A qualidade ficou excelente na tela do carro." /></Reveal>
          <Reveal delay={120}><PhoneProof name="Carlos" image="criativo-pack-sertanejo-9x16.png" text="Veio tudo separado e muito fácil de encontrar." /></Reveal>
        </div>
        <Reveal className="sl-proof-note"><span>★★★★★</span><p>Mais variedade, organização e qualidade para quem gosta de dar o play sem perder tempo.</p></Reveal>
      </div></section>

      <div className="sl-tape" aria-hidden="true"><span>FULL HD 1080P · ORGANIZAÇÃO · TODOS OS RITMOS · ACESSO VITALÍCIO · ATUALIZAÇÕES MENSAIS ·</span></div>

      <section className="sl-spoiler"><div className="sl-shell">
        <Reveal className="sl-orb-wrap"><div className="sl-orb"><span>▶</span></div><i className="sl-orbit one" /><i className="sl-orbit two" /></Reveal>
        <Reveal className="sl-section-heading sl-compact"><span className="sl-pill">POR DENTRO DO PACK</span><h2>Um pequeno spoiler do que<br />te espera após a compra.</h2></Reveal>
        <div className="sl-mini-grid">{[
          ["01", "+2.000 clipes", "Um acervo completo para todos os momentos."],
          ["02", "Full HD 1080p", "Imagem padronizada para telas pequenas e grandes."],
          ["03", "Todos os ritmos", "Sertanejo, pagode, forró, gospel, rock e MPB."],
          ["04", "Atualizações", "Novidades mensais sem nenhum custo adicional."],
        ].map(([number, title, text], index) => <Reveal className="sl-mini-card" delay={index * 55} key={number}><i>{number}</i><strong>{title}</strong><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className="sl-testimonials"><div className="sl-shell">
        <Reveal className="sl-section-heading sl-compact"><span className="sl-pill">O RESULTADO NA PRÁTICA</span><h2>Boas-vindas à era da<br /><em>multimídia de verdade.</em></h2><p>Veja o que mudou para quem trocou arquivos espalhados por uma biblioteca pronta para usar.</p></Reveal>
        <div className="sl-testimonial-grid">{testimonials.map(([name, text], index) => <Reveal className="sl-testimonial" delay={(index % 4) * 45} key={name}><b>“</b><p>{text}</p><div><span>{name.charAt(0)}</span><small><strong>{name}</strong>Cliente verificado</small></div></Reveal>)}</div>
      </div></section>

      <section className="sl-steps"><div className="sl-shell">
        <Reveal className="sl-section-heading sl-compact"><span className="sl-pill">DO DOWNLOAD AO PLAY</span><h2>As 4 etapas da sua <em>transformação.</em></h2><p>Uma experiência simples, feita para você começar a usar sem depender de conhecimento técnico.</p></Reveal>
        <div className="sl-step-deck">{[
          ["01", "ESCOLHA", "Garanta o Super Pack em uma compra segura."],
          ["02", "ACESSE", "Receba as instruções diretamente no seu e-mail."],
          ["03", "ORGANIZE", "Escolha as pastas e copie para o dispositivo."],
          ["04", "DÊ O PLAY", "Reproduza no carro, na TV, no PC ou no telão."],
        ].map(([number, title, text], index) => <Reveal className="sl-step-card" delay={index * 60} key={number}><div className={`sl-step-image step-${number}`}><span>{number}</span><i /><i /></div><strong>{title}</strong><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className="sl-features"><div className="sl-shell">
        <Reveal className="sl-feature-row">
          <div className="sl-media-mock"><div className="sl-media-screen"><img src={`${BASE_PATH}/album-gusttavo.png`} alt="Clipe rodando na multimídia" /><span className="sl-media-play">▶</span></div><div className="sl-media-controls"><i /><b>0:30</b><span>▮▮▮▮▮▮▮▮</span></div></div>
          <div className="sl-feature-copy"><span className="sl-pill">BÔNUS #01</span><h2>Uma multimídia<br /><em>para todos os gostos.</em></h2><p>Tenha o ritmo certo para cada viagem, encontro ou evento. São milhares de clipes para você alternar sem cair sempre nas mesmas músicas.</p><ul><li>Sertanejo e modão</li><li>Pagode e forró</li><li>Rock, gospel e MPB</li></ul></div>
        </Reveal>
        <Reveal className="sl-feature-row reverse">
          <div className="sl-folder-mock"><div className="sl-folder-window"><header><i /><i /><i /></header>{["Sertanejo 2026", "Pagode 2026", "Forró e Arrocha", "Rock Nacional"].map((item, index) => <p key={item}><span>{index + 1}</span><b>{item}</b><small>MP4 · Full HD</small></p>)}</div><div className="sl-folder-card"><span>✓</span><strong>PRONTO PARA USAR</strong><small>Tudo no lugar certo</small></div></div>
          <div className="sl-feature-copy"><span className="sl-pill">BÔNUS #02</span><h2>Organização<br /><em>sem bagunça.</em></h2><p>Nada de arquivos perdidos ou nomes confusos. O acervo chega separado por gênero para você encontrar o que procura em poucos segundos.</p><ul><li>Pastas separadas por gênero</li><li>Arquivos padronizados</li><li>Download simples e rápido</li></ul></div>
        </Reveal>
        <Reveal className="sl-feature-row">
          <div className="sl-chat-mock"><header><span>BH</span><p><strong>Grupo VIP BrazHits</strong><small>Atualizações mensais</small></p></header><div className="sl-chat-line left">Pack atualizado! Os novos clipes já estão disponíveis.</div><div className="sl-chat-line right">Boa! Já vou baixar 👏</div><div className="sl-chat-users"><span>MC</span><span>PR</span><span>JL</span><b>+248</b></div></div>
          <div className="sl-feature-copy"><span className="sl-pill">BÔNUS #03</span><h2>Atualizações que<br /><em>acompanham você.</em></h2><p>Entre para o grupo VIP da BrazHits e fique por dentro das atualizações mensais e de novos Packs sem pagar nada a mais.</p><ul><li>Grupo exclusivo no WhatsApp</li><li>Novidades mensais</li><li>Sem mensalidade</li></ul></div>
        </Reveal>
      </div></section>

      <section className="sl-offer" id="oferta"><div className="sl-shell">
        <Reveal className="sl-offer-wrap">
          <div className="sl-offer-copy"><span className="sl-pill">OFERTA ESPECIAL</span><h2>O preço da praticidade<br /><em>poderia ser o dobro.</em></h2><p>Mas hoje você pode levar o maior acervo da BrazHits por um pagamento único.</p></div>
          <div className="sl-price-card"><Brand /><span className="sl-plan">SUPER PACK DE CLIPES</span><h3>+2.000 clipes<br />em Full HD</h3><div className="sl-price"><small>de <s>R$ 110,00</s> por</small><strong><sup>R$</sup>67<em>,00</em></strong><span>pagamento único</span></div><ul><li>Todos os Packs disponíveis</li><li>MP4 Full HD 1080p</li><li>Organizados por gênero</li><li>Acesso vitalício</li><li>Atualizações mensais</li><li>15 dias de garantia</li></ul><a className="sl-cta" href={CHECKOUT} target="_blank" rel="noopener noreferrer">QUERO O SUPER PACK <Arrow /></a><small>PIX ou cartão · acesso imediato</small></div>
        </Reveal>
        <Reveal className="sl-guarantee"><div className="sl-guarantee-seal"><span>15</span><strong>DIAS</strong><small>GARANTIA</small></div><div><span className="sl-pill">RISCO ZERO</span><h2>Teste por 15 dias.</h2><p>Se o conteúdo não fizer sentido para você, basta entrar em contato dentro do prazo de garantia. Você terá seu investimento devolvido de acordo com as condições da oferta.</p></div></Reveal>
      </div></section>

      <section className="sl-story"><div className="sl-shell sl-story-inner">
        <Reveal className="sl-story-copy"><span className="sl-pill">QUEM ESTÁ POR TRÁS</span><h2>Prazer, somos a<br /><em>BrazHits.</em></h2><p>A BrazHits nasceu para resolver um problema simples: encontrar conteúdo de qualidade para multimídia não deveria exigir horas de procura.</p><p>Por isso reunimos, padronizamos e organizamos cada Pack para que você encontre tudo em um só lugar e use com liberdade.</p><a href="https://brazhits.com.br/loja/" target="_blank" rel="noopener noreferrer">CONHECER A LOJA <Arrow /></a></Reveal>
        <Reveal className="sl-story-art" delay={80}><div className="sl-story-glow" /><div className="sl-story-image"><img src={`${BASE_PATH}/capa-sertanejo-2026-artistas-600x600.jpg`} alt="BrazHits" /></div><span><Brand /><small>Clipes e músicas para sua multimídia</small></span></Reveal>
      </div></section>

      <section className="sl-faq"><div className="sl-shell sl-faq-grid">
        <Reveal className="sl-section-heading"><span className="sl-pill">FICOU COM DÚVIDA?</span><h2>A resposta pode<br />estar <em>aqui.</em></h2><p>Se ainda precisar, nossa equipe também atende pelo WhatsApp.</p><a className="sl-whatsapp" href={WHATSAPP} target="_blank" rel="noopener noreferrer">FALAR COM O SUPORTE <Arrow /></a></Reveal>
        <div className="sl-faq-list">{faqs.map(([question, answer], index) => <Reveal delay={index * 45} key={question}><details><summary>{question}<span>+</span></summary><p>{answer}</p></details></Reveal>)}</div>
      </div></section>

      <footer className="sl-footer"><div className="sl-shell"><Brand /><p>© 2026 BrazHits. Todos os direitos reservados.</p><a href="#oferta">VER OFERTA <Arrow /></a></div></footer>
    </main>
  );
}
