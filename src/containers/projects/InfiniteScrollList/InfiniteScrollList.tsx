import React, { useState, useRef, useEffect, useCallback } from "react";
import { Head } from "general/Head/Head";
import { pageData } from "./InfiniteScrollList.data";
import ListItem from "./ListItem/ListItem";
import * as S from "./InfiniteScrollList.styles";

const InfiniteScrollList = () => {
  const listWrapperRef = useRef<HTMLDivElement>(null);
  const [renderedListItems, setRenderedListItems] = useState(pageData);
  const clonedListHeight = useRef<number>(0);

  const cloneListItems = useCallback(() => {
    if (!listWrapperRef.current) return;
    const listItemHeight = (listWrapperRef.current.childNodes[0] as HTMLDivElement).offsetHeight;
    const fitInItemCount = Math.ceil(window.innerHeight / listItemHeight);

    const clonedListItems = renderedListItems.slice(0, fitInItemCount);
    setRenderedListItems([...pageData, ...clonedListItems]);

    clonedListHeight.current = clonedListItems.length * listItemHeight;
  }, []);

  const getScrollPos = useCallback(() => {
    if (listWrapperRef.current)
      return listWrapperRef.current.scrollTop - (listWrapperRef.current.clientTop || 0);
  }, []);

  const setScrollPos = useCallback((position: number) => {
    if (!listWrapperRef.current) return;
    listWrapperRef.current.scrollTop = position;
  }, []);

  const initScrollPos = useCallback(() => {
    const currentScrollPos = getScrollPos() || 0;
    if (currentScrollPos <= 0) setScrollPos(1);
  }, []);

  const onScrollUpdate = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollPosition = getScrollPos() || 0;
    if (clonedListHeight.current + scrollPosition >= e.currentTarget.scrollHeight) {
      //scroll to top when reach the bottom
      setScrollPos(1);
    } else if (scrollPosition <= 0) {
      //scroll to bottom when reach the top
      setScrollPos(e.currentTarget.scrollHeight - clonedListHeight.current);
    }
  }, []);

  useEffect(() => {
    cloneListItems();
    initScrollPos();
  }, []);

  return (
    <>
      <Head />
      <S.Wrapper>
        <S.ListWrapper ref={listWrapperRef} onScroll={onScrollUpdate}>
          {renderedListItems.map((item, i) => (
            <ListItem title={item.title} imageUrl={item.url} key={i} index={i} />
          ))}
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
};

export default InfiniteScrollList;
