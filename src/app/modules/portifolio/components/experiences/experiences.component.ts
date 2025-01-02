import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista Desenvolvedor Fullstack',
        p: 'Zap Software & Soluções | DEZ/2021 - Presente',
      },
      text: `
      <p><strong>Resumo:</strong></p>
      <p>Atuei como analista e desenvolvedor fullstack, focado em projetos com Angular 13 e Spring,
      também em ERP (Java Swing) da minha primeira experiência, participando de code reviews e participação em análises (técnicas e funcionais).
      Também trabalhei no desenvolvimento de um projeto para atualização de licenças do ERP via filacom RabbitMQ.</p>
      <p>Implementei novos módulos em um app Android nativo usando Jetpack Compose (Kotlin),
      em uma aplicação offline com sincronização quando online e integração de assinatura digital para confirmação
      de participantes. A API utilizada para o app seguiu uma arquitetura limpa, e fui responsável pela implementação
      dos novos módulos e funcionalidades.</p>

      <p><strong>Tecnologias e Ferramentas:</p></strong>

      <p>Back-End: Java (8, 17 e 19), Spring Framework.</p>
      <p>Front-End: Angular 13.</p>
      <p>Banco de Dados:Postgres.</p>
      <p>Infraestrutura: RabbitMQ, Azure Boards, Git.</p>
      <p>Testes: Mockito e Junit 5.</p>

      <p><strong>Desafios e Soluções:</p></strong>

       <p>Desafio: Desenvolver uma aplicação Android nativa com funcionalidade offline e
       sincronização de dados quando online, além de integrar assinatura digital na aplicação.</p>

      <p>Solução: Usei Jetpack Compose (Kotlin) para criar uma interface intuitiva e implementei
      a sincronização de dados com a API (arquitetura limpa).
      A integração de assinatura digital foi realizada com uma biblioteca de terceiros,
      garantindo a confirmação de pedidos enquanto o sistema estava offline e realizando a
      sincronização quando a internet estava disponível.</p>
      `,
    },
    {
      summary: {
        strong: 'Desenvolvedor Back-end',
        p: 'Gempe Soluções em Tec. da Info. | MAI/2021 - DEZ/2021',
      },
      text: `
      <p><strong>Resumo:</strong></p>
        <p>Contratado pela Gempe para atuar como desenvolvedor alocado em um cliente,
        trabalhei no desenvolvimento e manutenção de APIs em Java (Spring Framework) e AngularJS,
        além de um sistema back-office utilizando PHP, Docker, Node.js e SQS. Durante o projeto, contribui com integrações,
        geração de relatórios e alterações no sistema de atendimento, além de auxiliar na implantação do código em
        ambientes de homologação.</p>

        <p><strong>Tecnologias e Ferramentas:</p></strong>

        <p>Back-End: Java 11 (Spring Framework), PHP, Node.js.</p>
        <p>Front-End: AngularJS.</p>
        <p>Banco de Dados: MySQL (queries manuais para relatórios).</p>
        <p>Infraestrutura: Docker, Azure DevOps, Jenkins, SQS.</p>
        <p>Metodologias: Scrum e reuniões diárias com múltiplas equipes.</p>

        <p><strong>Desafios e Soluções:</p></strong>
        <p>No início, a atuação envolveu o estudo de um grande sistema de condomínio em Java 11,
        com arquitetura customizada e sem uso do Spring, para compreender integrações essenciais para o sistema de atendimento.
        Posteriormente, foquei no sistema de atendimento, realizando alterações no AngularJS,
        adicionando funcionalidades no back-end com Spring e ajustando relatórios SQL sob demanda,
        atendendo às necessidades do cliente.</p>

        <p>Um dos maiores desafios foi lidar com a complexidade das integrações e a necessidade de validar logins
        por meio do sistema principal, antes de acessar o sistema de atendimento.
        Além disso, no período final do contrato, fui realocado para um sistema back-office,
        onde atuei na manutenção e melhorias em PHP, Docker e Node.js.</p>
      `,
    },
    {
      summary: {
        strong: 'Desenvolvedor Java JR',
        p: 'Zap Software & Soluções | NOV/2019 - MAI/2021',
      },
      text: `
      <p><strong>Resumo:</strong></p>

      <p>
        Atuei no desenvolvimento e manutenção de um ERP com múltiplos módulos,
        abrangendo áreas como Comercial (pedidos, notas fiscais), Produção, Transporte (CT-e, MDF-e) e Financeiro (contas a pagar e receber) entre outros.
        A maior parte do trabalho consistia em resolver problemas identificados pelos clientes ou pela gerência, além de implementar novas funcionalidades dentro do ERP.
        Trabalhei em equipe utilizando metodologias ágeis (Scrum), com participação ativa em sprints e revisão de código.
      </p>
       <p><strong>Tecnologias e Ferramentas:</strong></p>
        <p>Linguagens e Frameworks: Java 8, Hibernate.</p>
        <p>Interface de Usuário: Java Swing.</p>
        <p>Banco de Dados: PostgreSQL (queries SQL diretas para otimização).</p>
        <p>Relatórios: Jasper Reports.</p>
        <p>Controle de Versão: SVN (Tortoise).</p>
        <p>Metodologias: Scrum.</p>
       <p><strong>Desafios e Soluções:</strong></p>
       <p>Um dos projetos mais desafiadores foi a implementação de uma nova funcionalidade para gerenciar planos contábeis e gerenciais dentro do ERP. O objetivo era permitir que contas, como parcelas a pagar ou a receber, fossem associadas a múltiplos planos contábeis e, dentro deles, rateadas novamente em planos gerenciais, obedecendo diversas regras de negócio.</p>
       <p>A complexidade residia em:</p>
        <ul>
          <li><p>Criar uma interface genérica e uma tela modular capaz de atender a diferentes módulos (pedidos, notas fiscais, contas a pagar/receber) com uma única implementação.</p></li>
        </ul>
       <p>O projeto exigiu análise detalhada dos diferentes pontos do ERP para integração, cálculos de rateio precisos e extensiva validação para assegurar a conformidade das regras. A solução foi desenvolvida com uma arquitetura baseada em interfaces, possibilitando modularidade e reuso de código.</p>

      `,
    },
  ]);
}
