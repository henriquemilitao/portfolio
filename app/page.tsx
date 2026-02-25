'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, ExternalLink, Code2, Heart, Coffee, Terminal, Database, Sparkles, Server, Layers, RefreshCcw, Users, Zap, Target, Cpu, ShieldCheck, GitBranch, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Foto from '../public/foto.png';
import imageFinanca from '../public/financas.png';
import fastFood from '../public/fast-food.png';
import breakingBad from '../public/breaking-bad.png';

import saasConstrucao from '../public/saas-sua-obra.png'; // Coloque o print do seu SaaS na pasta public
import lpConstrutora from '../public/lp-construtora.png';   // Print da LP da Construtora
import lpIngles from '../public/lp-ingles.png';             // Print da LP do Curso

const Portfolio = () => {
  // --- DADOS ---
const projects = [
    {
      title: 'SaaS Gestão de Obras',
      description: 'Plataforma para construtoras atualizarem investidores. Destaque para a API em NestJS e integração segura com AWS S3 para armazenamento de mídias.',
      tech: ['NestJS', 'AWS S3', 'React', 'PostgreSQL'],
      demoUrl: 'https://sua-obra.vercel.app/', // Atualize o link
      repoUrl: '', // Deixe vazio se não quiser mostrar o repo
      tag: 'Backend / Cloud',
      image: saasConstrucao
    },
    {
      title: 'SaaS Financeiro',
      description: 'Plataforma de controle orçamentário. O foco foi criar uma lógica robusta de cálculo de budget no Backend para resolver um problema real.',
      tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
      demoUrl: 'https://custos-militao.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao/custos-militao',
      tag: 'Full Stack',
      image: imageFinanca
    },
    {
      title: 'FSW Donalds',
      description: 'Sistema de pedidos completo. Desafio técnico de integrar pagamentos reais (Stripe) e gerenciar estados complexos de carrinho.',
      tech: ['Next.js 15', 'Stripe', 'Tailwind', 'Context API'],
      demoUrl: 'https://fsw-donalds-eta.vercel.app',
      repoUrl: 'https://github.com/henriquemilitao/fsw-donalds',
      tag: 'E-commerce',
      image: fastFood
    },
    {
      title: 'LP Institucional (Construtora)',
      description: 'Landing Page B2B de alta conversão. Foco em performance web, SEO técnico e design Mobile-First.',
      tech: ['React', 'Next.js', 'TailwindCSS'],
      demoUrl: 'https://sua-obra-invest.vercel.app/', // Atualize
      repoUrl: '', // Deixe vazio se não quiser mostrar o repo
      tag: 'Presença Digital',
      image: lpConstrutora
    },
    {
      title: 'LP Captação (Curso de Idiomas)',
      description: 'Página focada em captação de leads. Estrutura componentizada para fácil atualização de conteúdo pelo cliente.',
      tech: ['Next.js', 'TailwindCSS', 'Componentização'],
      demoUrl: 'https://max-fluence-lp.vercel.app/', // Atualize
      repoUrl: '', 
      tag: 'Presença Digital',
      image: lpIngles
    },
    
    {
      title: 'DevMovies',
      description: 'Aplicação de consumo de API externa. Foco em estrutura de componentes e requisições assíncronas eficientes.',
      tech: ['React', 'Vite', 'Axios', 'Styled Components'],
      demoUrl: 'https://devmovies-front.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao/devmovies-front',
      tag: 'Frontend',
      image: breakingBad
    }
  ];

  const stack = [
    "Next.js", "React", "TypeScript", "Node.js", "NestJS", "Docker", "PostgreSQL", "Tailwind"
  ];

  const features = [
      { 
        icon: Target, 
        title: 'Foco na Solução', 
        desc: 'Tecnologia é meio, não fim. Priorizo resolver a dor real do negócio de forma eficiente e escalável.', 
        bgClass: 'bg-blue-50', 
        textClass: 'text-blue-500' 
      },
      { 
        icon: Users, 
        title: 'Trabalho em Equipe', 
        desc: 'Mantenho documentação ativa e alinhamento constante com o time. Transparência evita retrabalho.', 
        bgClass: 'bg-green-50', 
        textClass: 'text-green-500' 
      },
      { 
        icon: Zap, 
        title: 'Aprendizado Ágil', 
        desc: 'O ecossistema muda rápido. Tenho facilidade em aprender novas linguagens se o projeto demandar.', 
        bgClass: 'bg-amber-50', 
        textClass: 'text-amber-500' 
      }
    ];

  // --- ANIMAÇÕES FLUIDAS (CORRIGIDAS) ---
  
  // 1. CORREÇÃO DO TYPESCRIPT: Adicionei "as const" no type: "spring"
  // 2. CORREÇÃO DE VELOCIDADE: Aumentei o stiffness (tensão) para 400 para ficar bem ágil
  const hoverSpring = {
    scale: 1.03,
    y: -5,
    transition: { 
      type: "spring" as const, // O "as const" resolve o erro de tipagem
      stiffness: 400,          // Mais alto = mais rápido/rígido
      damping: 25              // Controla o "balanço" final
    }
  };

  // Versão para cards que não devem dar zoom (scale), apenas subir
  const hoverLift = {
    y: -5,
    transition: { 
      type: "spring" as const, 
      stiffness: 400, 
      damping: 25 
    }
  };

  const tapSpring = {
    scale: 0.95
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center mb-28 pt-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-10 relative group"
          >
             <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image 
                  src={Foto}
                  alt="Henrique"
                  fill
                  className="object-cover"
                  priority
                />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
               Henrique Militão
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400 font-medium text-2xl md:text-4xl mt-3">
                 Engenheiro de Software
               </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Construo sistemas robustos de ponta a ponta. 
              Tenho preferência por <strong>Backend</strong> e <strong>Banco de Dados</strong>, mas atuo em todo o ciclo de desenvolvimento para entregar soluções que funcionam.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                whileHover={hoverSpring}
                whileTap={tapSpring}
                href="#projetos"
                onClick={scrollToProjects}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Ver Projetos <ArrowRight size={20} />
              </motion.a>

              <div className="flex gap-2">
                <motion.a whileHover={hoverSpring} whileTap={tapSpring} href="https://github.com/henriquemilitao" target="_blank" className="p-4 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-black hover:shadow-xl transition-colors shadow-sm cursor-pointer">
                  <Github size={24} />
                </motion.a>
                <motion.a whileHover={hoverSpring} whileTap={tapSpring} href="https://linkedin.com/in/henrique-militao" target="_blank" className="p-4 bg-white border border-gray-200 rounded-full text-blue-600 hover:text-blue-800 hover:shadow-xl transition-colors shadow-sm cursor-pointer">
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CARDS FEATURES */}
        <section className="mb-32">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                whileHover={hoverSpring} /* Padronizado para hoverSpring rápido */
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bgClass} flex items-center justify-center mb-6`}>
                  <item.icon className={item.textClass} size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BENTO GRID - SOBRE & EXPERTISE */}
        <section className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-gray-500 uppercase tracking-wider mb-8 flex items-center gap-2 pl-2"
          >
            <Sparkles size={16} className="text-blue-600" /> Sobre & Stack
          </motion.h2>
          
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            
            {/* Card 1: Bio (Mantido igual) */}
            <motion.div 
                variants={itemFadeUp} 
                whileHover={hoverLift} 
                className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Terminal size={140} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Engenheiro / Desenvolvedor Full Stack</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Atuo desenvolvendo soluções completas e escaláveis, construindo desde Landing Pages de alta conversão até <strong>produtos SaaS complexos</strong>. Minha abordagem é prática e "Language Agnostic": domino o ecossistema JavaScript (Node/Nest/React), mas priorizo a <strong>arquitetura correta e a resolução do problema de negócio</strong> acima da ferramenta.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Download CV (Compacto) */}
            <motion.div 
              variants={itemFadeUp} 
              whileHover={hoverSpring}
              whileTap={tapSpring}
              className="bg-blue-600 p-8 rounded-3xl shadow-lg shadow-blue-600/20 flex flex-col justify-center items-center text-center cursor-pointer text-white relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              onClick={() => window.open('/Curriculo 2.0.pdf', '_blank')}
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Download className="mb-3 relative z-10 group-hover:scale-110 transition-transform" size={32} />
               <h3 className="text-xl font-bold relative z-10">Baixar CV</h3>
               <p className="text-blue-100 text-xs mt-1 relative z-10">PDF Completo</p>
            </motion.div>

            {/* Card 3: A NOVA STACK (2 Colunas - Destaque + Background) */}
            <motion.div 
                variants={itemFadeUp}
                whileHover={hoverSpring}
                className="md:col-span-2 bg-gray-900 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
               {/* Background decorativo */}
               <div className="absolute right-0 top-0 p-4 opacity-5">
                  <Code2 size={180} />
               </div>

               <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
                  {/* Lado Esquerdo: O que eu uso HOJE (Destaque) */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Layers className="text-blue-400" size={20} />
                        <h3 className="font-bold text-lg text-gray-200">Stack Principal</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "NestJS", "AWS (S3)", "PostgreSQL", "Docker", "Next.js", "React", "TypeScript"].map((tech) => (                            <span key={tech} className="px-3 py-1.5 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-lg text-sm font-semibold hover:border-blue-500 hover:bg-blue-500 hover:text-white transition duration-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                  </div>

                  {/* Lado Direito: Background Poliglota (Lista de texto) */}
                  <div className="md:border-l md:border-gray-700 md:pl-8">
                     <div className="flex items-center gap-2 mb-4">
                        <Code2 className="text-purple-400" size={20} />
                        <h3 className="font-bold text-lg text-gray-200">Background Sólido</h3>
                    </div>
                     <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                        Conhecimento acadêmico e prático em múltiplas linguagens ao longo da formação:
                     </p>
                     <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-gray-300">
                        {["Java", "C", "C++", "C#", "Python", "PHP (Laravel)", "MySQL", "MongoDB"].map((lang) => (
                            <span key={lang} className="hover:text-white transition-colors cursor-default">• {lang}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>

             {/* Card 4: Padrões de Engenharia (Substitui o texto genérico) */}
             <motion.div 
                variants={itemFadeUp} 
                whileHover={hoverLift} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center"
            >
               <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <Layout size={20} className="text-purple-600" /> Padrões & Práticas
               </h3>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                        <Database size={16} className="text-purple-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">Clean Architecture</h4>
                        <p className="text-xs text-gray-500">Código testável e desacoplado.</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <GitBranch size={16} className="text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">CI/CD & DevOps</h4>
                        <p className="text-xs text-gray-500">Pipelines, Docker e Deploy.</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        <Code2 size={16} className="text-gray-700" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">SOLID & Design Patterns</h4>
                        <p className="text-xs text-gray-500">Estruturas robustas.</p>
                     </div>
                  </div>
               </div>
            </motion.div>

          </motion.div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mb-32">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos Criados</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               Uma seleção de projetos onde apliquei arquitetura limpa e soluções modernas.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 25 } }} /* Padronizado a velocidade */
                 className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
               >
                 {/* Imagem */}
                 <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <motion.a 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         href={project.demoUrl} 
                         target="_blank"
                         className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-blue-50"
                       >
                         Visitar <ExternalLink size={16} />
                       </motion.a>
                    </div>
                 </div>

                 {/* Conteúdo */}
                 <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                       <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gray-100 text-gray-600`}>
                         {project.tag}
                       </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                       <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                             <motion.span 
                               key={t} 
                               whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6", transition: { duration: 0.1 } }}
                               className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 cursor-default"
                             >
                               {t}
                             </motion.span>
                          ))}
                       </div>

                       <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                          {project.repoUrl ? (
                            <motion.a 
                              whileHover={{ x: 3, transition: { type: "spring", stiffness: 400 } }}
                              href={project.repoUrl} 
                              target="_blank" 
                              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              <Github size={18} /> Código
                            </motion.a>
                          ) : (
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 cursor-not-allowed" title="Repositório privado do cliente">
                              <ShieldCheck size={18} /> Privado
                            </div>
                          )}
                          <motion.a 
                            whileHover={{ x: 3, transition: { type: "spring", stiffness: 400 } }}
                            href={project.demoUrl} 
                            target="_blank" 
                            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors ml-auto"
                          >
                             Acessar <ArrowRight size={16} />
                          </motion.a>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <h3 className="font-bold text-xl mb-1">Henrique Militão</h3>
               <p className="text-gray-400 text-sm">Codando soluções reais. Campo Grande, MS.</p>
            </div>

            <div className="flex gap-6">
               <motion.a whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }} href="https://github.com/henriquemilitao" className="text-gray-400 hover:text-white transition-colors" target="_blank" >
                 <Github size={24} />
               </motion.a>
               <motion.a whileHover={{ scale: 1.2, rotate: -5, transition: { duration: 0.2 } }} href="https://linkedin.com/in/henrique-militao" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank">
                 <Linkedin size={24} />
               </motion.a>
               <motion.a whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }} href="mailto:henriquemilitao35@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors" target="_blank">
                 <Mail size={24} />
               </motion.a>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default Portfolio;