import { Component, OnInit, Input,EventEmitter,Output} from '@angular/core';


@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
	@Input() contador:number;
	@Output() contadorCanbio= new EventEmitter<number>();
	constructor() { }

	ngOnInit() {
	}

	multiplicar(){
		this.contador*=2;
		this.contadorCanbio.emit(this.contador);
	}
	dividir(){
		this.contador/=2;
		this.contadorCanbio.emit(this.contador);
	}

}
