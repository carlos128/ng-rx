import { Action } from '@ngrx/store';

export	const	INCREMENTAR = '[contador] Incrementar';
export	const	DECREMENTART = '[contador] Decrementar';
export	const	MULTIPLICAR = '[contador] Multiplicar';
export	const	DIVIDIR = '[contador] Dividir';
export	const	RESET = '[contador] Reset';

export	class	IncrementarAction	implements	Action{
	readonly	type=INCREMENTAR;
}

export	class	DecrementarAction	implements	Action{
	readonly	type= DECREMENTART;
}

export	class	MultiplicarAction	implements	Action{
	readonly	type=MULTIPLICAR;
}

export	class	DividirAction	implements	Action{
	readonly	type= DIVIDIR;
}

export	class	ResetAction		implements	Action{
	readonly	type= RESET;
	
}