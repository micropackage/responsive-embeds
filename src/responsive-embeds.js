import './polyfill';

const responsiveEmbeds = ( items, params = {} ) => {
	const defaults = {
		watch: false,
		wrapClass: 'responsive-embed-wrap',
	};

	params = {
		...defaults,
		...params,
	};

	let observer = false;

	const addItem = ( item ) => {
		const
			ration = item.clientHeight / item.clientWidth * 100,
			wrap = document.createElement( 'div' );

		wrap.style.position = 'relative';
		wrap.style.paddingTop = `${ ration }%`;
		wrap.classList.add( params.wrapClass );

		item.style.position = 'absolute';
		item.style.width = '100%';
		item.style.height = `100%`;
		item.style.top = '0';

		item.parentNode.insertBefore( wrap, item );
		wrap.appendChild( item );
	};

	if ( 'string' === typeof items ) {
		const selector = items;

		items = document.querySelectorAll( selector );

		if ( true === params.watch ) {
			params.watch = document.querySelector( 'body' );
		} else if ( 'string' === typeof params.watch ) {
			params.watch = document.querySelector( params.watch );
		}

		if ( params.watch instanceof HTMLElement ) {
			// eslint-disable-next-line no-shadow
			observer = new MutationObserver( ( records, observer ) => {
				for ( const record of records ) {
					for ( const node of record.addedNodes ) {
						if ( node.matches( selector ) ) {
							observer.disconnect();
							addItem( node );
							observer.observe( params.watch, {
								childList: true,
								subtree: true,
							} );
						}
					}
				}
			} );
		}
	}

	if ( items instanceof NodeList ) {
		items.forEach( ( item ) => addItem( item ) );
	} else if ( items instanceof HTMLElement ) {
		addItem( items );
	} else {
		throw new Error( 'responsiveEmbeds(): argument should be a string selector, an HTMLElement or NodeList instance.' );
	}

	if ( observer ) {
		observer.observe( params.watch, {
			childList: true,
			subtree: true,
		} );
	}
};

export default responsiveEmbeds;
