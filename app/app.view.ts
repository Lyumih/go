namespace $.$$ {
	/** 0 - белые, 1 - чёрные */
	export class $go_app extends $.$go_app {
		@$mol_mem
		user() {
			return this.realm().home().hall_by( $go_user_dao, $hyoo_crus_rank_public )
		}

		user_id() {
			return this.user()?.ref().description ?? ''
		}
	}
}
