'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, ExternalLink, Code2, Heart, Coffee, Terminal, Database, Sparkles, Server, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Foto from '../public/social 2.png';
import Teste from '../public/teste6.png';
import imageFinanca from '../public/financas.png';
import fastFood from '../public/fast-food.png';
import breakingBad from '../public/breaking-bad.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'SaaS Financeiro',
      description: 'Plataforma de controle orçamentário. O foco foi criar uma lógica robusta de cálculo de budget no Backend para resolver um problema real.',
      tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
      demoUrl: 'https://custos-militao.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao/custos-militao',
      tag: 'Highlight',
      image: imageFinanca
    },
    {
      title: 'FSW Donalds',
      description: 'Sistema de pedidos completo. Desafio técnico de integrar pagamentos reais (Stripe) e gerenciar estados complexos de carrinho.',
      tech: ['Next.js 15', 'Stripe', 'Tailwind', 'Zustand'],
      demoUrl: 'https://fsw-donalds-eta.vercel.app',
      repoUrl: 'https://github.com/henriquemilitao/fsw-donalds',
      tag: 'E-commerce',
      image: fastFood
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

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
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
      
      {/* BACKGROUND DECORATION (V2 Style) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 relative z-10">
        
        {/* HERO SECTION - CENTRALIZADO (V2) */}
        <section className="flex flex-col items-center text-center mb-32 pt-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-10 relative group"
          >
             <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image 
                  src={Teste}
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
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponível para novos projetos
            </div> */}

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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projetos"
                onClick={scrollToProjects}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                Ver Projetos <ArrowRight size={20} />
              </motion.a>

              <div className="flex gap-2">
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/henriquemilitao" target="_blank" className="p-4 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-black shadow-sm hover:shadow-md transition-all">
                  <Github size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://linkedin.com/in/henrique-militao" target="_blank" className="p-4 bg-white border border-gray-200 rounded-full text-blue-600 shadow-sm hover:shadow-md transition-all">
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CARDS ESTILO APPLE (V2) */}
        <section className="mb-32">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Code2, title: 'Clean Code', desc: 'Código limpo, testável e manutenível é inegociável.', color: 'blue' },
              { icon: Heart, title: 'Quality First', desc: 'Foco em estabilidade e arquitetura escalável.', color: 'red' },
              { icon: Coffee, title: 'Fast Learner', desc: 'Adaptação rápida a qualquer stack necessária.', color: 'amber' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-4`}>
                  <item.icon className={`text-${item.color}-500`} size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BENTO GRID - SOBRE & STACK (V1 Logic + V2 Clarity) */}
        <section className="mb-32">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-8"
          >
             <Sparkles size={20} className="text-blue-500" />
             <h2 className="text-2xl font-bold text-gray-900">Visão Geral</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
             
             {/* Card 1: Bio (Largo) */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Terminal size={120} />
                </div>
                <div className="relative z-10">
                   <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                     <Terminal className="text-blue-500" /> Engenheiro Full Stack
                   </h3>
                   <p className="text-gray-600 leading-relaxed text-lg mb-6">
                     Formado pela UFMS. Minha abordagem é prática: priorizo a <strong>resolução do problema</strong> acima da ferramenta.
                     Gosto de entender o negócio para criar a melhor solução técnica, seja no Back, no Front ou no Banco de Dados.
                   </p>
                   <div className="flex gap-4 pt-4 border-t border-gray-100">
                      <div className="text-center">
                         <span className="block font-bold text-2xl text-gray-900">3+</span>
                         <span className="text-xs text-gray-500 uppercase">Projetos Reais</span>
                      </div>
                      <div className="text-center px-4 border-l border-gray-100">
                         <span className="block font-bold text-2xl text-gray-900">544h</span>
                         <span className="text-xs text-gray-500 uppercase">Exp. Prática</span>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Card 2: Stack (Evidente como na V2) */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-gray-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Layers size={100} />
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                   <Layers className="text-blue-400" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                   {stack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm font-medium border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">
                         {tech}
                      </span>
                   ))}
                </div>
             </motion.div>

             {/* Card 3: Download CV */}
             <motion.div 
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="md:col-span-1 bg-blue-600 p-6 rounded-3xl shadow-lg shadow-blue-600/20 text-white flex flex-col justify-center items-center text-center cursor-pointer group"
               onClick={() => window.open('/curriculo.pdf', '_blank')}
             >
                <Download className="mb-3 group-hover:animate-bounce" size={28} />
                <span className="font-bold text-lg">Baixar CV</span>
                <span className="text-blue-200 text-xs">PDF Completo</span>
             </motion.div>

             {/* Card 4: Filosofia */}
             <motion.div className="md:col-span-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-center">
                <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                   <Database size={18} className="text-purple-500" /> Filosofia
                </h4>
                <div className="flex justify-between items-center text-xs font-medium text-gray-500">
                   <div className="text-center">
                      <Server size={20} className="mx-auto mb-1 text-gray-800" />
                      Backend
                   </div>
                   <div className="text-center">
                      <Code2 size={20} className="mx-auto mb-1 text-gray-800" />
                      Clean Code
                   </div>
                </div>
             </motion.div>

          </div>
        </section>

        {/* PROJETOS (Grid Layout V2 + Interactions V1) */}
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
                 transition={{ delay: index * 0.1 }}
                 className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
               >
                 {/* Imagem com Efeito V1 */}
                 <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <a 
                         href={project.demoUrl} 
                         target="_blank"
                         className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-blue-50"
                       >
                         Visitar <ExternalLink size={16} />
                       </a>
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
                             <span key={t} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                               {t}
                             </span>
                          ))}
                       </div>

                       <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                          <a href={project.repoUrl} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                             <Github size={18} /> Código
                          </a>
                          <a href={project.demoUrl} target="_blank" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors ml-auto">
                             Live Demo <ArrowRight size={16} />
                          </a>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </section>

      </main>

      {/* FOOTER - Estilo Escuro V2 com conteúdo V1 */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <h3 className="font-bold text-xl mb-1">Henrique Militão</h3>
               <p className="text-gray-400 text-sm">Codando soluções reais. Campo Grande, MS.</p>
            </div>

            <div className="flex gap-6">
               <a href="https://github.com/henriquemilitao" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                 <Github size={24} />
               </a>
               <a href="https://linkedin.com/in/henrique-militao" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                 <Linkedin size={24} />
               </a>
               <a href="mailto:henriquemilitao35@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors hover:scale-110 transform duration-200">
                 <Mail size={24} />
               </a>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default Portfolio;