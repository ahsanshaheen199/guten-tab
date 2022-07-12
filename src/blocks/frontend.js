( function ( $ ) {
	$( '.guten-tab-wrapper .guten-tabs-nav' )
		.find( '.guten-tab-item' )
		.each( function ( index ) {
			if ( index === 0 ) {
				$( this ).children( '.guten-tab-link' ).addClass( 'is-active' );
			}
		} );

	$( '.guten-tab-wrapper .guten-tab-content' )
		.find( '.wp-block-ahsan03-tab' )
		.each( function ( index ) {
			if ( index === 0 ) {
				$( this )
					.children( '.guten-tab-panel' )
					.addClass( 'is-active' );
			}
		} );

	$( '.guten-tabs-nav .guten-tab-item' ).on( 'click', function () {
		let $tabKey = '';
		$tabKey = $( this ).children( '.guten-tab-link' ).data( 'tab-id' );
		$( this ).children( '.guten-tab-link' ).addClass( 'is-active' );

		$( this )
			.siblings()
			.each( function () {
				$( this )
					.children( '.guten-tab-link' )
					.removeClass( 'is-active' );
			} );
		$( this )
			.parents( '.wp-block-ahsan03-tabs' )
			.find( '.guten-tab-content .wp-block-ahsan03-tab' )
			.each( function () {
				$( this ).find( '.guten-tab-panel' ).removeClass( 'is-active' );
				if (
					$( this ).find( '.guten-tab-panel' ).data( 'tab-id' ) ===
					$tabKey
				) {
					$( this )
						.find( '.guten-tab-panel' )
						.addClass( 'is-active' );
				}
			} );
	} );
} )( jQuery );
