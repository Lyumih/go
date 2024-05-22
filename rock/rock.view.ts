namespace $.$$ {
	export class $go_rock extends $.$go_rock {

		games_label(): string {
			return `Сыграно игр: ${ this.rock_dao()?.Games(null)?.val() }`
		}

		rock_dao() {
			return this.realm().Node( $hyoo_crus_ref( 'a8DadZCd_vIt9OxY8' ), $go_rock_dao )
		}
		
		turn_label(): string {
			return `Ход ${ this.turns() }: ${ this.turn() ? 'Белые' : 'Чёрные' }`
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

		win( next?: any ) {
			this.rock_dao()?.win()
		}

		title(): string {
			return this.rock_dao()?.Title()?.val() ?? 'Камень, Ножницы, Бумага *(404)'
		}
		
	}
}
