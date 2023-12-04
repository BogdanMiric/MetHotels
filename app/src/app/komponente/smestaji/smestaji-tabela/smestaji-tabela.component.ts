import { Component, Input } from '@angular/core';
import { Smestaj } from 'src/app/model/smestaj.interface';

@Component({
  selector: 'app-smestaji-tabela',
  templateUrl: './smestaji-tabela.component.html',
  styleUrls: ['./smestaji-tabela.component.css']
})
export class SmestajiTabelaComponent {
  @Input() smestaji: Smestaj[];


}
