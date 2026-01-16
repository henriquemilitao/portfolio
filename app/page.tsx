'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Layers, Terminal, ArrowUpRight, Download, Sparkles, Database, Server, RefreshCcw, Layout, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Foto from '../public/social 2.png';
import imageFinanca from '../public/financas.png'
import fastFood from '../public/fast-food.png'
import breakingBad from '../public/breaking-bad.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'SaaS Financeiro',
      description: 'Plataforma de controle orçamentário. O foco foi criar uma lógica robusta de cálculo de budget no Backend para resolver um problema real de desorganização.',
      tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
      demoUrl: 'https://custos-militao.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao/custos-militao',
      tag: 'Highlight',
      color: 'blue',
      image: imageFinanca
    },
    {
      title: 'FSW Donalds',
      description: 'Sistema de pedidos completo. Desafio técnico de integrar pagamentos reais (Stripe) e gerenciar estados complexos de carrinho.',
      tech: ['Next.js 15', 'Stripe', 'Tailwind', 'Zustand'],
      demoUrl: 'https://fsw-donalds-eta.vercel.app',
      repoUrl: 'https://github.com/henriquemilitao/fsw-donalds',
      tag: 'E-commerce',
      color: 'amber',
      image: fastFood
    },
    {
      title: 'DevMovies',
      description: 'Aplicação de consumo de API externa. Foco em estrutura de componentes e requisições assíncronas eficientes.',
      tech: ['React', 'Vite', 'Axios', 'Styled Components'],
      demoUrl: 'https://devmovies-front.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao/devmovies-front',
      tag: 'Frontend',
      color: 'purple',
      image: breakingBad
    }
  ];

  const stack = [
    "Next.js", "React", "TypeScript", "Node.js", "NestJS", "Docker", "PostgreSQL", "Tailwind"
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Função para scroll suave
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 selection:bg-blue-100 selection:text-blue-900 font-sans overflow-x-hidden">
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent h-full"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 relative z-10">
        
        {/* HERO SECTION */}
        <header className="mb-32">
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-2/3"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6 shadow-sm cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponível para novos projetos
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Henrique Militão
                <span className="block text-gray-400 font-medium text-3xl md:text-5xl mt-2">Engenheiro de Software</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
                Construo sistemas robustos de ponta a ponta. 
                Tenho preferência por <strong>Backend</strong> e <strong>Banco de Dados</strong>, mas atuo em todo o ciclo de desenvolvimento para entregar soluções que funcionam.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* BOTÃO PRINCIPAL - VER PROJETOS */}
                <motion.a 
                  whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#projetos"
                  onClick={scrollToProjects}
                  className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center gap-3 shadow-lg cursor-pointer"
                >
                  Ver Projetos 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* BOTÃO SECUNDÁRIO - LINKEDIN */}
                <motion.a 
                  whileHover={{ scale: 1.05, y: -4, borderColor: "#0077b5", color: "#0077b5" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/henrique-militao" 
                  target="_blank"
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 shadow-sm cursor-pointer hover:shadow-md"
                >
                  <Linkedin size={20} /> LinkedIn
                </motion.a> 
              </div>
            </motion.div>

            {/* Foto Dinâmica */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ type: "spring", duration: 0.8 }}
               className="md:w-1/3 flex justify-center md:justify-end"
            >
              <div className="relative w-48 h-68 md:w-64 md:h-84">
                <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 opacity-10 animate-pulse"></div>
                <div className="relative w-48 h-68 md:w-64 md:h-84 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <Image 
                    src={Foto}
                    alt="Henrique"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* BENTO GRID - SOBRE MIM */}
        <section className="mb-32">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8 flex items-center gap-2"
          >
            <Sparkles size={14} className="text-blue-500" /> Sobre & Stack
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            
            {/* Card 1: Bio */}
            <motion.div variants={itemVariants} className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Engenheiro Full Stack</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Formado pela UFMS. Minha abordagem é prática: priorizo a <strong>resolução do problema</strong> acima da ferramenta.
                  Gosto de entender o negócio para criar a melhor solução técnica. Se existe um problema, eu dou um jeito de resolver, seja no Back, no Front ou no Banco.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Stack Badge - Com Hover nas Tags */}
            <motion.div variants={itemVariants} className="bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white flex flex-col justify-between group">
              <div>
                <Layers className="text-blue-400 mb-6 group-hover:rotate-12 transition-transform duration-500" size={32} />
                <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <motion.span 
                      key={tech} 
                      whileHover={{ scale: 1.1, y: -2, backgroundColor: "#3b82f6", color: "#ffffff", borderColor: "#3b82f6" }}
                      className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs font-semibold text-gray-300 border border-gray-700 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Download CV */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 p-8 rounded-3xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex flex-col justify-center items-center text-center cursor-pointer text-white relative overflow-hidden group"
              onClick={() => window.open('/curriculo.pdf', '_blank')}
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
               <Download className="mb-4 relative z-10 group-hover:animate-bounce" size={32} />
               <h3 className="text-2xl font-bold relative z-10">Baixar CV</h3>
               <p className="text-blue-100 text-sm mt-2 relative z-10">Versão PDF Completa</p>
            </motion.div>

             {/* Card 4: Filosofia Atualizada */}
             <motion.div variants={itemVariants} className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Database size={18} className="text-purple-500" /> Filosofia de Trabalho
                  </h3>
                  <p className="text-gray-600">
                    Sistemas duráveis exigem bases sólidas. Valorizo <strong>Arquitetura Limpa</strong>, <strong>Testes</strong> e <strong>Documentação</strong>. Tenho visão completa do <strong>Ciclo de Software</strong>, da ideia até o deploy e desenvolvo pensando em quem vai dar manutenção no futuro.
                  </p>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-100"></div>
                <div className="flex gap-4">
                    <div className="text-center">
                        <Server className="w-6 h-6 mx-auto text-gray-900 mb-1" />
                        <span className="text-xs text-gray-500 font-bold">Backend</span>
                    </div>
                    <div className="text-center">
                        <Code2 className="w-6 h-6 mx-auto text-gray-900 mb-1" />
                        <span className="text-xs text-gray-500 font-bold">Clean Code</span>
                    </div>
                    <div className="text-center">
                        <RefreshCcw className="w-6 h-6 mx-auto text-gray-900 mb-1" />
                        <span className="text-xs text-gray-500 font-bold">Full Cycle</span>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mb-32">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                <Layout className="text-gray-400" /> Projetos Criados
            </h2>
            
            <motion.a 
              whileHover={{ scale: 1.05, x: 5, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/henriquemilitao" 
              target="_blank" 
              className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-semibold shadow-sm hover:border-gray-300 hover:text-gray-900 transition-all"
            >
              Ver Github Completo 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="group grid md:grid-cols-12 gap-8 items-center"
              >
                {/* Imagem do Projeto */}
                <div className={`md:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-500 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Botão Flutuante Sobre a Imagem */}
                  <div className="absolute bottom-6 right-6 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={project.demoUrl} 
                      target="_blank" 
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:text-blue-600"
                    >
                      Ver Online <ArrowUpRight size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Info do Projeto */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-first md:text-right' : ''}`}>
                  <div className={`flex items-center gap-2 mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <span className={`px-4 py-1.5 rounded-full bg-${project.color}-50 text-${project.color}-700 text-xs font-bold uppercase tracking-wide border border-${project.color}-100`}>
                      {project.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className={`flex flex-wrap gap-3 mb-10 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map(t => (
                      <motion.span 
                        key={t} 
                        whileHover={{ y: -2, backgroundColor: "#f3f4f6" }}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 shadow-sm cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <div className={`flex gap-6 items-center ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <motion.a 
                      whileHover={{ scale: 1.05, x: 2 }}
                      href={project.repoUrl} 
                      target="_blank" 
                      className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-900 transition-all"
                    >
                      <Github size={20} /> Ver Código
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05, x: 5 }}
                      href={project.demoUrl} 
                      target="_blank" 
                      className="flex items-center gap-2 text-blue-600 font-bold border-b-2 border-blue-100 hover:border-blue-600 pb-0.5 transition-all"
                    >
                      Acessar <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 pt-16 pb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="block font-bold text-gray-900 text-lg">Henrique Militão</span>
            <span className="text-gray-500 text-sm">Codando soluções reais.</span>
          </div>
          
          <div className="flex gap-8">
            <motion.a whileHover={{ scale: 1.2, rotate: 10, color: "#171515" }} href="https://github.com/henriquemilitao" target="_blank" className="text-gray-400 transition-colors">
              <Github size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -10, color: "#0077b5" }} href="https://linkedin.com/in/henrique-militao" target="_blank" className="text-gray-400 transition-colors">
              <Linkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -3, color: "#ea4335" }} href="mailto:henriquemilitao35@gmail.com" className="text-gray-400 transition-colors">
              <Mail size={24} />
            </motion.a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;