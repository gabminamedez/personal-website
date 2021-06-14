import Head from 'next/head';

const Meta = ({title}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content='Gabriel Minamedez, Computer Science, Web Developer, De La Salle University' />
            <meta name='description' content='Gabriel Minamedez is a Computer Science in De La Salle University based in Manila, Philippines. He is an aspiring web developer and machine learning engineer. He also writer for SLAM Philippines. © 2021 Gab Minamedez.' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/img/favicon.ico' />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' />
            <title>{title}</title>
        </Head>
    );
}

export default Meta;