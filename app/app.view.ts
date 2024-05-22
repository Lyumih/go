namespace $.$$ {
	/** 0 - белые, 1 - чёрные */
	export class $go_app extends $.$go_app {

		turn_label(): string {
			return `Ход ${this.turns()}: ${this.turn() ? 'Белые' : 'Чёрные'}`
		}

		black_turn( next?: any ) {
			if( !this.turn() ) {
				this.turn( 1 )
				this.turns_increment()
			}
		}

		turns_increment() {
			this.turns( this.turns() + 1 )
		}

		white_turn( next?: any ) {
			if( this.turn() ) {
				this.turn( 0 )
				this.turns_increment()
			}
		}

		white_enabled( next?: boolean | undefined ): boolean {
			return !!this.turn()
		}

		black_enabled( next?: boolean | undefined ): boolean {
			return !this.turn()
		}
		
	}
}
