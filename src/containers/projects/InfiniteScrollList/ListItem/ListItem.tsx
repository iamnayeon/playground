import * as S from "./ListItem.styles";
import Image from "next/image";
interface Props {
  title: string;
  imageUrl: string;
  infos?: string[];
}

const ListItem = (props: Props) => {
  const { title, imageUrl, infos = ["example1", "example2", "example3"] } = props;
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.Image src={imageUrl} />

      <S.InfoBlockWrapper>
        {infos.map((info, i) => (
          <S.InfoItem key={i}>{info}</S.InfoItem>
        ))}
      </S.InfoBlockWrapper>
    </S.Wrapper>
  );
};

export default ListItem;
