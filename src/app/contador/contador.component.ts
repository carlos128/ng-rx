import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from '../actions/acontador.action';
import { AppStore } from '../models/contador.model';


@Component({
	selector: 'app-contador',
	templateUrl: './contador.component.html',
	styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
	
	contador:number;

	constructor( private store:Store<AppStore>) {
		
		this.store.subscribe( state=>{
			this.contador = state.contador;
		})
	}

	ngOnInit() {

	}
	decrementar(){
		const  action = new  DecrementarAction();
		this.store.dispatch(action);
	 }
	incrementar(){
		const action =  new IncrementarAction();
		this.store.dispatch(action);
		this.contador++;
	 }
	
}
