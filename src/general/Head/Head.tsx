/**
 * Dynamic head
 * */
import NextHead from "next/head";

export interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const defaultHeadProps: HeadProps = {
  title: "Nayeon Kim — Frontend developer",
  description: "Front-end Developer based in South Korea.",
};

export const Head = (props: HeadProps) => {
  const { title = "title", description = "description", ogImage = "" } = props;
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </NextHead>
  );
};
