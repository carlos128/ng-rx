import { Action } from "@ngrx/store";
import { 
	INCREMENTAR, 
	DECREMENTART, 
	MULTIPLICAR, 
	DIVIDIR,
	RESET } from '../actions/acontador.action';

export  function  contadorReducer( state: number=10, accion:Action){
	
	switch(accion.type){
		case INCREMENTAR:
			return state +1;
		case DECREMENTART:
			return state -1;
		case MULTIPLICAR:
			return state *2
		case DIVIDIR:
			return  state /2;
		case RESET:
			return  state=0;
		default:
			return state;
	}
}