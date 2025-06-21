export default function ogTags(name: string, description: string, thumbnail: string, card = false) {
    
    let twitterCard

    if (card) {
        twitterCard = <meta name="twitter:card" content="summary_large_image"></meta>
    }

    return (
        <>
            <meta property="og:title" content={name}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:image" content={thumbnail}></meta>
            
            {twitterCard}
            <meta name="twitter:site" content="MeminIt!"></meta>
            <meta name="twitter:creator" content="@itsprobablyjackson"></meta>
            <meta name="twitter:description" content={description}></meta>
            <meta name="twitter:image" content={thumbnail}></meta>
        </>
    )
}