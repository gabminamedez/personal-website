import { Helmet } from "react-helmet";

type MetaProps = {
  title: string;
  description: string;
  title2: string;
  url: string;
};

const Meta = ({ title, description, title2, url }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="keywords"
        content="Gabriel Minamedez, Developer, Writer, Computer Science, Philippines"
      />
      <meta
        name="description"
        content={
          "Gabriel Minamedez is a fullstack Software Engineer with experience in the e-commerce, data science, and FMCG industries. He enjoys taking on leadership and management roles, and values writing and other creative endeavors. " +
          description +
          " © " +
          new Date().getFullYear().toString() +
          " Gabriel Minamedez."
        }
      />

      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="Gabriel Minamedez" />
      <meta property="og:title" content={title2} />
      <meta property="og:url" content={url} />

      <link rel="canonical" href={url} />

      <script src="//www.google-analytics.com/analytics.js" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Gabriel Minamedez",
            url: "https://gabminamedez.vercel.app/",
            sameAs: null,
          }),
        }}
      />
    </Helmet>
  );
};

export default Meta;
