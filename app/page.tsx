'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Coffee, Heart, Code2, Briefcase, GraduationCap, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Foto from '../public/social 2.png';
import imageFinanca from '../public/financas.png'
import fastFood from '../public/fast-food.png'
import breakingBad from '../public/breaking-bad.png'

const Portfolio = () => {
  const projects = [
      {
        title: 'SaaS de Gestão Financeira',
        description: 'MVP de controle orçamentário pessoal com arquitetura limpa e foco em UX. Desenvolvido para resolver uma dor real de gestão financeira.',
        tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
        demoUrl: 'https://custos-militao.vercel.app/',
        repoUrl: 'https://github.com/henriquemilitao',
        emoji: '💰',
        badge: 'PROJETO AUTORAL ⭐',
        mobileFirst: true,
        gradient: 'from-blue-500/10 to-purple-500/10',
        image: imageFinanca
      },
      {
        title: 'FSW Donalds',
        description: 'Sistema de auto-atendimento inspirado em redes de fast-food. Totem digital completo com integração Stripe e gestão de pedidos em tempo real.',
        tech: ['Next.js 15', 'Prisma', 'Stripe', 'TypeScript'],
        demoUrl: 'https://fsw-donalds-eta.vercel.app',
        repoUrl: 'https://github.com/henriquemilitao',
        emoji: '🍔',
        mobileFirst: true,
        gradient: 'from-yellow-500/10 to-red-500/10',
        image: fastFood
      },
      // {
      //   title: 'BeWare Store',
      //   description: 'E-commerce completo de roupas com autenticação, carrinho de compras e integração de pagamentos. Desenvolvido com as melhores práticas.',
      //   tech: ['Next.js 15', 'Drizzle ORM', 'Better Auth', 'Stripe'],
      //   demoUrl: 'https://beweare.vercel.app',
      //   repoUrl: 'https://github.com/henriquemilitao',
      //   emoji: '👕',
      //   mobileFirst: true,
      //   gradient: 'from-purple-500/10 to-pink-500/10'
      // },
      {
        title: 'DevMovies',
        description: 'Catálogo de filmes e séries consumindo API externa. Interface elegante com carrosséis e sistema de busca avançado.',
        tech: ['React', 'Vite', 'Styled Components', 'Axios'],
        demoUrl: 'https://devmovies-front.vercel.app/',
        repoUrl: 'https://github.com/henriquemilitao',
        emoji: '🎬',
        desktopFirst: true,
        gradient: 'from-indigo-500/10 to-cyan-500/10',
        image: breakingBad
      }
    ];

  const timeline = [
    {
      year: '2025',
      title: 'Engenheiro de Software',
      company: 'UFMS',
      description: 'Graduação em Engenharia de Software',
      type: 'education'
    },
    {
      year: '2025',
      title: 'Núcleo de Práticas',
      company: 'UFMS - Projetos de Extensão',
      description: '544 horas de experiência prática. Desenvolvimento de soluções para clientes reais com metodologias ágeis.',
      type: 'work'
    },
    {
      year: '2024-2025',
      title: 'Projetos Autorais',
      company: 'Desenvolvimento Independente',
      description: 'SaaS de Gestão Financeira e outras soluções usando stacks modernas.',
      type: 'work'
    }
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Foto */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image 
                  src={Foto}
                  alt="Henrique Dias Militão - Desenvolvedor Full Stack"
                  width={256}
                  height={256}
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            HENRIQUE <span className="font-light text-gray-600">MILITÃO</span>
          </h1>

          <h2 className="text-2xl text-gray-700 font-medium mb-6">
            Engenheiro de Software Full Stack
          </h2>

          {/* Descrição */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Recém-formado pela UFMS com foco em Backend e qualidade de software. 
            Experiência prática em projetos reais desenvolvendo soluções escaláveis. 
            Language Agnostic e Fast Learner.
          </p>

          {/* Crédito */}
          <p className="text-gray-400 text-sm mb-12">
            📍 Campo Grande - MS, Brasil
          </p>

          {/* CTA */}
          <a 
            href="#projetos"
            onClick={scrollToProjects}
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            VER PROJETOS
          </a>

          {/* Social */}
          <div className="flex gap-4 justify-center mt-12">
            <a 
              href="https://github.com/henriquemilitao" 
              target='_blank' 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a 
              href="https://www.linkedin.com/in/henrique-militao" 
              target='_blank'
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a 
              href="mailto:henriquemilitao35@gmail.com"
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Cards de Info - Estilo Apple com Animações */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Code2, title: 'Clean Code', desc: 'Compromisso com código limpo, testável e manutenível', color: 'blue' },
              { icon: Heart, title: 'Quality First', desc: 'Foco em QA, testes automatizados (TDD/E2E) e estabilidade', color: 'red' },
              { icon: Coffee, title: 'Fast Learner', desc: 'Adaptação rápida a novas tecnologias e frameworks', color: 'amber' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl transform transition-transform group-hover:scale-105 blur-sm opacity-0 group-hover:opacity-100" />
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm">
                  <item.icon className={`w-10 h-10 text-${item.color}-500 mb-4 transform group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Stack Tecnológico
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Ferramentas que utilizo no dia a dia
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Node.js', 'NestJS', 'Next.js', 'React',
              'TypeScript', 'PostgreSQL', 'Docker', 'Git'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all text-center group"
              >
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              + Conhecimento em: Java, C++, C#, Python, PHP (Laravel), MongoDB, MySQL
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - Simplificada */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Trajetória
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Minha jornada profissional e acadêmica
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg z-10">
                  {item.type === 'work' ? (
                    <Briefcase className="w-6 h-6 text-blue-500" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-purple-500" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all hover:border-gray-300">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Projetos em Destaque
            </h2>
            <p className="text-gray-600 text-center mb-16">
              Experiência prática em desenvolvimento de software
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            {/* Container principal com bordas e sombra */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl group">
              
              {/* Container da imagem com proporção 16:9 */}
              <div className="aspect-video overflow-hidden relative bg-gray-100">
                {/* A imagem do projeto */}
                <Image 
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradiente colorido opcional sobre a imagem (50% de opacidade) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient} mix-blend-multiply opacity-30`} />
              </div>

              {/* Conteúdo abaixo da imagem */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full mb-4">
                  {projects[0].badge}
                </div>
                
                {projects[0].mobileFirst && (
                  <div className="inline-block ml-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                    📱 Mobile First - Aperte F12 no PC
                  </div>
                )}

                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={projects[0].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Acessar <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={projects[0].repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects Grid - Dinâmico e Responsivo */}
          {(() => {
            const otherProjects = projects.slice(1);
            const count = otherProjects.length;
            
            // Define classes do grid baseado no número de projetos
            let gridClass = '';
            if (count === 1) gridClass = 'flex justify-center';
            else if (count === 2) gridClass = 'grid md:grid-cols-2 gap-6 max-w-4xl mx-auto';
            else gridClass = 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';
            
            return (
              <div className={gridClass}>
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`group ${count === 1 ? 'max-w-md w-full' : ''}`}
                  >
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl transition-all">
                      
                      {/* Container da imagem */}
                      <div className="aspect-video overflow-hidden relative bg-gray-100">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-20 group-hover:opacity-30 transition-opacity`} />
                      </div>

                      {/* Conteúdo do card */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        
                        {project.mobileFirst && (
                          <div className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-3">
                            📱 Mobile First
                          </div>
                        )}
                        
                        {project.desktopFirst && (
                          <div className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded mb-3">
                            🖥️ Desktop First
                          </div>
                        )}

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-all text-center"
                          >
                            Acessar <ExternalLink className="w-4 h-4" />
                            
                          </a>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-all"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Engenheiro de Software formado pela UFMS com especialização prática em Backend. 
                Durante a graduação, atuei na Fábrica de Software desenvolvendo soluções para clientes reais.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Meu interesse por programação vem da possibilidade de criar ferramentas úteis. 
                Me considero Language Agnostic: priorizo a resolução do problema e me adapto à melhor ferramenta.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '544h', label: 'Experiência Prática' },
                { value: '3', label: 'Projetos Reais' },
                { value: '2024', label: 'Formado UFMS' },
                { value: '100%', label: 'Dedicação' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Estou em busca de uma oportunidade onde possa aplicar meus conhecimentos de 
            Engenharia de Software para gerar valor e crescer junto com a equipe.
          </p>
          <a
            href="mailto:henriquemilitao35@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Entre em Contato
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Henrique Militão. Feito com ❤️ e muito ☕
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/henriquemilitao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/henrique-militao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              LinkedIn
            </a>
            <a href="mailto:henriquemilitao35@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;