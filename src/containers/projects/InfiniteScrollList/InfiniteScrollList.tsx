import React, { useState, useRef, useEffect, ReactEventHandler, useCallback } from "react";
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

  const _scrollUpdate = useCallback((e: any) => {
    if (!listWrapperRef.current) return;
    const scrollPosition = getScrollPos() || 0;

    if (clonedListHeight.current + scrollPosition >= listWrapperRef.current.scrollHeight) {
      //scroll to top when reach the bottom
      setScrollPos(1);
    } else if (scrollPosition <= 0) {
      //scroll to bottom when reach the top
      setScrollPos(listWrapperRef.current.scrollHeight - clonedListHeight.current);
    }
  }, []);

  useEffect(() => {
    cloneListItems();
    initScrollPos();

    if (!listWrapperRef.current) return;
    listWrapperRef.current.addEventListener("scroll", _scrollUpdate);

    return () => {
      if (!listWrapperRef.current) return;
      listWrapperRef.current.removeEventListener("scroll", _scrollUpdate);
    };
  }, []);

  return (
    <>
      <Head />
      <S.Wrapper>
        <S.ListWrapper ref={listWrapperRef}>
          {renderedListItems.map((item) => (
            <ListItem title={item.title} imageUrl={item.url} />
          ))}
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
};

export default InfiniteScrollList;
