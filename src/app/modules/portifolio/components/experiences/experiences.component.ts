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
      garantindo a confirmação, salvando temporariamente no dispositivo enquanto o sistema estava offline, e realizando a
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
        <p>Atuei no desenvolvimento e manutenção de APIs em Java (Spring Framework) e AngularJS,
        além de contribuir com integrações, geração de relatórios e melhorias no sistema de atendimento.
        Também auxiliei na implantação de código em ambientes de homologação.
        Posteriormente, trabalhei em um sistema back-office utilizando PHP, Docker, Node.jse SQS.
      </p>

        <p><strong>Tecnologias e Ferramentas:</p></strong>

        <p>Back-End: Java 11 (Spring Framework), PHP, Node.js.</p>
        <p>Front-End: AngularJS.</p>
        <p>Banco de Dados: MySQL (queries manuais para relatórios).</p>
        <p>Infraestrutura: Docker, Azure DevOps, Jenkins, SQS.</p>
        <p>Metodologias: Scrum e reuniões diárias com múltiplas equipes.</p>

        <p><strong>Desafios e Soluções:</p></strong>
        <p>No início, estudei um complexo sistema de condomínio em Java 11 com arquitetura customizada,
        sem uso do Spring, para entender integrações cruciais para o sistema de atendimento.
        Posteriormente, concentrei-me no sistema de atendimento, realizando melhorias em AngularJS,
        adicionando funcionalidades no back-end com Spring e ajustando relatórios SQL sob demanda.</p>

        <p>Enfrentei desafios significativos, como lidar com a complexidade das integrações
        e a validação de logins através do sistema principal antes de acessar o sistema de atendimento.
        No final do contrato, fui realocado para um sistema back-office, onde trabalhei na manutenção e
        melhorias usando PHP, Docker e Node.js.</p>
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
        Atuei no desenvolvimento e manutenção de um ERP modular abrangendo Comercial, Produção, Transporte e Financeiro.
        Resolvia problemas identificados por clientes e gerência, além de implementar novas funcionalidades.
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
        <p>Um dos projetos mais desafiadores foi a implementação de uma funcionalidade de gerenciamento de planos contábeis e gerenciais no ERP.
        O objetivo era permitir que contas fossem associadas a múltiplos planos contábeis e rateadas em planos gerenciais, obedecendo a várias regras de negócio.</p>

        <ul>
        <p>A complexidade incluía:</p>

          <li><p>Design de Interface: Desenvolver uma interface de usuário modular e reutilizável capaz de suportar diferentes módulos do ERP (pedidos, notas fiscais, contas a pagar/receber).</p></li>

          <li><p>Arquitetura Baseada em Interfaces: Implementação de uma arquitetura extensível e modular, permitindo a reutilização de componentes e facilitando a manutenção e extensão do código.</p></li>

          <li><p>Validação e Cálculos de Rateio: Realizar cálculos de rateio precisos e aplicar validações complexas para garantir a conformidade das regras de negócio.</p></li>

          <li><p>Análise de Integração: Análise detalhada dos pontos de integração no ERP para assegurar que a nova funcionalidade fosse perfeitamente integrada aos módulos existentes.</p></li>
        </ul>
      `,
    },
  ]);
}
