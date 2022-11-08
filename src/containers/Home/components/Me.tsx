import * as S from "containers/Home/components/Me.style";
import Image from "next/image";

import emailIcon from "../assets/email_icon.svg";
import githubIcon from "../assets/github_icon.svg";
import linkedinIcon from "../assets/linkedin_icon.svg";
import underlineIcon from "../assets/dynamic_underline_icon.svg";
import pageScrollDownIcon from "../assets/page_scroll_icon.svg";

const Me = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <SNSIcon
          src={emailIcon}
          onClick={() => {
            location.href = "mailto:nana.nayeonk@gmail.com";
          }}
        />
        <SNSIcon
          src={githubIcon}
          onClick={() => {
            window.open("https://github.com/iamnayeon", "_blank");
          }}
        />
        <SNSIcon
          src={linkedinIcon}
          onClick={() => {
            window.open("https://www.linkedin.com/in/nayeon-kim-a363311b4/", "_blank");
          }}
        />
      </S.Header>
      <S.IntroduceWrapper>
        <S.Sentence>
          <S.String>Hi I&apos;m&nbsp;</S.String>
          <S.String style={{ color: "#BF697F" }}>N</S.String>
          <S.String style={{ color: "#6EAC9A" }}>a</S.String>
          <S.String style={{ color: "#AF8CD8" }}>y</S.String>
          <S.String style={{ color: "#E5DC71" }}>e</S.String>
          <S.String style={{ color: "#AF8CD8" }}>o</S.String>
          <S.String style={{ color: "#BF697F" }}>n</S.String>
          <S.HandLetter style={{ color: "#BF697F" }}>👋</S.HandLetter>
        </S.Sentence>
        <S.Sentence>
          <S.String>I’m a frontend developer</S.String>
        </S.Sentence>
        <S.Sentence>
          <S.String>who loves&nbsp;</S.String>
          <S.HoveredStringWrapper style={{ cursor: "pointer" }}>
            <S.String>interactive&nbsp; </S.String>

            <S.UnderlineWrapper>
              <img src={underlineIcon.src} style={{ width: "100%" }} />
            </S.UnderlineWrapper>
          </S.HoveredStringWrapper>

          <S.String>visualization</S.String>
        </S.Sentence>
        <S.DownloadButtonWrapper href="/assets/Nayeon_Kim.pdf" download>
          <S.DownloadButtonInner>Download Resume</S.DownloadButtonInner>
        </S.DownloadButtonWrapper>
      </S.IntroduceWrapper>

      <S.Footer>
        <S.ScrollDownIconWrapper>
          <Image src={pageScrollDownIcon} width="50rem" />
        </S.ScrollDownIconWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

const SNSIcon = ({ src, onClick }: { src: string; onClick: any }) => {
  return (
    <S.IconWrapper onClick={onClick}>
      <Image src={src} width="25px" height="25px" />
    </S.IconWrapper>
  );
};

export default Me;
