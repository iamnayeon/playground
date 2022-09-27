import { GetStaticProps } from "next";

export const pageData = [
  { url: "https://images.unsplash.com/photo-1661685249316-a06e692e1cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80", title: "Coffee", info: [] },
  { url: "https://images.unsplash.com/photo-1662041520222-6372825d7e9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80", title: "Watermelon juice", info: [] },
  { url: "https://images.unsplash.com/photo-1660970147575-7bacd111e276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", title: "Sweet pepper", info: [] },
  { url: "https://images.unsplash.com/photo-1652169890471-17c3e68bf920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", title: "Waffle", info: [] },
  { url: "https://images.unsplash.com/photo-1655233787900-4f0226481193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", title: "Donut", info: [] },
  { url: "https://images.unsplash.com/photo-1656312185259-359c742c2044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", title: "Hamburger", info: [] },
];

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
