import { Component, OnInit, Input,EventEmitter,Output} from '@angular/core';
import { Store } from '@ngrx/store'
import { MultiplicarAction,DividirAction } from '../../actions/acontador.action';
import { AppStore } from '../../models/contador.model';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
	contador: number;
	constructor(  private store:Store<AppStore>) { 
		 this.store.subscribe( state=>{
			this.contador=state.contador;
		 })
	}

	ngOnInit() {
	}

	multiplicar(){
		const action =  new MultiplicarAction();
		this.store.dispatch(action);
	}
	dividir(){
		const	action =	new DividirAction();
		this.store.dispatch(action);
	}

}
