import { Component, OnInit } from '@angular/core';
import { ResetAction } from '../../../actions/acontador.action';
import { AppStore } from '../../../models/contador.model';
import { Store } from '@ngrx/store';
@Component({
	selector: 'app-nieto',
	templateUrl: './nieto.component.html',
	styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
	
	contador:number;
	constructor( private  store:Store<AppStore>) { 
		this.store.subscribe( state=>{
			this.contador=state.contador;
		})
	}

	ngOnInit() {
	}
	reset(){
		const	accion =  new ResetAction();
		this.store.dispatch(accion);
	}
}
