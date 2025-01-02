import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icons/knowledge/java.svg',
      alt: 'Icone Java'
    },
    {
      src:'assets/icons/knowledge/spring.svg',
      alt: 'Icone Spring Framework'
    },
    {
      src:'assets/icons/knowledge/angular.svg',
      alt: 'Icone Angular'
    },
    {
      src:'assets/icons/knowledge/postgres.svg',
      alt: 'Icone Postgres'
    },
    {
      src:'assets/icons/knowledge/jetpack-compose.svg',
      alt: 'Icone Jetpack Compose'
    },

  ]);
}
