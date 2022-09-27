import { Head } from "general/Head/Head";
import { pageData } from "./InfiniteScrollList.data";
import ListItem from "./ListItem/ListItem";
import * as S from "./InfiniteScrollList.styles";
const InfiniteScrollList = () => {
  return (
    <>
      <Head />
      <S.Wrapper>
        <S.ListWrapper>
          {pageData.map((data) => (
            <ListItem title={data.title} imageUrl={data.url} />
          ))}
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
};

export default InfiniteScrollList;
