( function ( $ ) {
	$( '.guten-tabs-nav .guten-tab-item' ).on( 'click', function () {
		let $tabKey = '';
		$tabKey = $( this ).children( '.guten-tab-link' ).data( 'tab' );
		$( this ).children( '.guten-tab-link' ).addClass( 'is-active' );

		$( this )
			.siblings()
			.each( function () {
				$( this )
					.children( '.guten-tab-link' )
					.removeClass( 'is-active' );
			} );
		$( this )
			.parents( '.guten-tab-panel' )
			.find( '.guten-tab-content .guten-tab-pane' )
			.each( function () {
				$( this ).removeClass( 'is-active' );
				if ( $( this ).data( 'tab' ) == $tabKey ) {
					$( this ).addClass( 'is-active' );
				}
			} );
	} );
} )( jQuery );
