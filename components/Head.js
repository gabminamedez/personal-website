import Head from 'next/head';

const Meta = ({title, description, title2, url}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='keywords' content='Gabriel Minamedez, Developer, Writer, Computer Science, Philippines' />
            <meta name='description' content={description} />
            <meta property='og:locale' content='en-US' />
            <meta property='og:site_name' content='Gabriel Minamedez' />
            <meta property='og:title' content={title2} />
            <meta property='og:url' content={url} />
            <link rel='canonical' href={url} />
            
            <script async='' src='//www.google-analytics.com/analytics.js' />
            <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        '@context' : 'http://schema.org',
                        '@type' : 'Person',
                        'name' : 'Gabriel Nicolas Minamedez',
                        'url' : 'https://gabminamedez.github.io/',
                        'sameAs' : null
                })}}
            />

            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/img/favicon.ico' />

            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' />
        </Head>
    );
}

export default Meta;