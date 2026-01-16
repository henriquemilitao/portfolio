'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Layers, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Foto from '../public/social 2.png';
import imageFinanca from '../public/financas.png'
import fastFood from '../public/fast-food.png'
import breakingBad from '../public/breaking-bad.png'

const Portfolio = () => {
  // Mantendo seus dados
  const projects = [
    {
      title: 'SaaS Financeiro',
      description: 'Plataforma de controle orçamentário. O projeto foca em resolver a dor real da desorganização financeira com uma UX fluida.',
      tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
      demoUrl: 'https://custos-militao.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao',
      tag: 'Highlight',
      image: imageFinanca
    },
    {
      title: 'FSW Donalds',
      description: 'Totem de auto-atendimento com integração de pagamentos reais via Stripe. Foco em arquitetura de vendas.',
      tech: ['Next.js 15', 'Stripe', 'Tailwind'],
      demoUrl: 'https://fsw-donalds-eta.vercel.app',
      repoUrl: 'https://github.com/henriquemilitao',
      tag: 'Commerce',
      image: fastFood
    },
    {
      title: 'DevMovies',
      description: 'Catálogo de streaming consumindo API externa. Demonstração de consumo de dados e interface responsiva.',
      tech: ['React', 'Vite', 'Axios'],
      demoUrl: 'https://devmovies-front.vercel.app/',
      repoUrl: 'https://github.com/henriquemilitao',
      tag: 'Frontend',
      image: breakingBad
    }
  ];

  const stack = [
    "Next.js", "React", "TypeScript", "Node.js", "NestJS", "Docker", "PostgreSQL", "Tailwind"
  ];

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
    <div className="min-h-screen bg-[#fafafa] text-gray-900 selection:bg-gray-900 selection:text-white font-sans">
      
      {/* BACKGROUND GRID - O segredo do visual "Engenheiro" */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32 relative z-10">
        
        {/* HEADER / HERO SECTION */}
        <header className="mb-32">
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-600 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Disponível para novos projetos
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Henrique Militão
                <span className="block text-gray-400">Engenheiro de Software</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed mb-8">
                Transformo problemas complexos em software limpo e escalável. 
                Foco em Backend robusto e Frontend intuitivo.
              </p>

              <div className="flex gap-4">
                <a href="#projetos" onClick={scrollToProjects} className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-2 hover:translate-y-[-2px]">
                  Ver Projetos <ArrowRight size={18} />
                </a>
                <a href="https://linkedin.com/in/henrique-militao" target="_blank" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-all flex items-center gap-2">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Foto Clean - Sem bordas exageradas */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="md:w-1/3 flex justify-center md:justify-end"
            >
              <div className="relative w-48 h-68 md:w-64 md:h-84 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <Image 
                  src={Foto}
                  alt="Henrique"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </header>

        {/* BENTO GRID - SOBRE & STACK */}
        <section className="mb-32">
          <h2 className="text-xl font-bold text-gray-400 uppercase tracking-wider mb-8">Sobre & Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Bio */}
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Terminal className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Background Técnico</h3>
              <p className="text-gray-600 leading-relaxed">
                Formado em Engenharia de Software pela UFMS. Minha jornada não é apenas sobre código, mas sobre entregar valor. 
                Tenho 544h de experiência prática em Núcleo de Práticas e sou movido pela resolução de problemas reais.
              </p>
            </div>

            {/* Card 2: Stack Badge */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm text-white flex flex-col justify-between">
              <div>
                <Layers className="text-gray-400 mb-6" size={24} />
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Experience Numbers */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center">
               <span className="text-5xl font-bold text-gray-900 mb-2">3+</span>
               <span className="text-sm text-gray-500 font-medium">Projetos Full Stack Entregues</span>
            </div>

             {/* Card 4: Methodologies */}
             <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">Filosofia de Trabalho</h3>
                  <p className="text-gray-600 text-sm">Clean Code • TDD • Mobile First • SOLID</p>
                </div>
                <Code2 className="text-gray-300" />
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS - Estilo Clean e Focado na Imagem */}
        <section id="projetos" className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Projetos Selecionados</h2>
            <a href="https://github.com/henriquemilitao" target="_blank" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Ver Github Completo <ArrowRight size={14} />
            </a>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Imagem do Projeto - SEM FILTROS ESCUROS */}
                <div className={`relative aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gray-100 group-hover:bg-transparent transition-colors duration-500" />
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Info do Projeto */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                      {project.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-sm font-medium text-gray-500">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.demoUrl} target="_blank" className="flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                      Live <ArrowUpRight size={18} />
                    </a>
                    <a href={project.repoUrl} target="_blank" className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-900 transition-all">
                      <Github size={18} /> Código
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER SIMPLES */}
        <footer className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Henrique Militão</span>
            <span className="text-gray-500 text-sm">Engenheiro de Software</span>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:henriquemilitao35@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/henrique-militao" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/henriquemilitao" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;