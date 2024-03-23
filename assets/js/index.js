const pageBody = document.body;

const headlines = document.querySelectorAll( 'h1 > span' ); // Alle <spans> auswählen, welche direkte Kinder von h1 sind
const headline = document.querySelector( 'h1' );
// Alle h1 auswählen
const text = document.querySelector( 'h2' );
// Alle h2 auswählen

const updateHeadline = ( ) => {

    const headlineId = `headline-${ headline.dataset.index }`;
    const currentHeadline = document.getElementById( headlineId ); // Greift auf ein bestimmtest Element durch deren ID zu

    headlines.forEach( headline => {
        const showHeadline = ( headline == currentHeadline ); // Schleife wird ausgeführt um zu überprüfen ob eine Headline vorhanden ist. 

        headline.classList.toggle( 'visible', showHeadline ); // Nächste Headline wird sichtbar gemacht. 
    } );
    

    const textlineId = `line-${ headline.dataset.index }`;
    const currentTextLine = document.getElementById( textlineId );

    if ( currentTextLine ) {
        currentTextLine.classList.add( 'visible' );

    
        headline.dataset.index++;
    } else {
        console.log( 'zoomed-in' );
        pageBody.classList.add( 'zoomed-in' );
    }
}

headline.addEventListener( 'click', ( ) => {
    if ( pageBody.classList.contains( 'zoomed-in' ) ) {
        pageBody.classList.remove( 'zoomed-in' );
    } else {
        updateHeadline( );
    }
} );

text.addEventListener( 'click', ( ) => {
    pageBody.classList.add( 'zoomed-in' );
} );

updateHeadline( );