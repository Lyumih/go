namespace $ {
	export class $go_rock_dao extends $hyoo_crus_entity.with( {
		Games: $hyoo_crus_atom_real
	} ) {
		win() {
			console.log('rock dao win', this.Title()?.val(), this.ref())
			this.Games( null )?.val( this.Games( null )?.val() ?? 0 + 1)
		}
	}
}
