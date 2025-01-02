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
        strong: 'Analista Desenvolvedor',
        p: 'Zap Software & Soluções | DEZ/2021 - Presente',
      },
      text: `<p>  Analista Desenvolvedor para novos projetos usando SpringFramework,
            Angular(13), Android com Jetpack Compose(Kotlin).
            CodeReview, pair programming, análises(técnicas e funcionais) e
            gerenciamento técnico de novas soluções.
      </p>
      `,
    },
    {
      summary: {
        strong: 'Desenvolvedor Back-end',
        p: 'Gempe Soluções em Tec. da Info. | MAI/2021 - DEZ/2021',
      },
      text: `<p>   Desenvolvimento de API Java(SpringFramework) e AngularJS, MySql,
              atuando diretamente com o cliente.Também no sistema back-office com
              PHP,Docker,Node e SQS.
      </p>
      `,
    },
    {
      summary: {
        strong: 'Desenvolvedor Java JR',
        p: 'Zap Software & Soluções | NOV/2019 - MAI/2021',
      },
      text: `<p> Desenvolvimento com Java 8 em manutenção de ERP,utilizando da
         biblioteca Swing, persistência de dados com Hibernate,controle de
        versões SVN,relatórios com Jasper Reports e Scrum para organização de
        sprints.
      </p>
      `,
    },
  ]);
}
