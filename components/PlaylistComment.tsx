"use client";

import { useEffect, useRef, useState } from "react";
import service from "@/service/axios";
import { ICommentResposeType, ICommentType, IResponse } from "@/types";
import Image from "next/image";

const PlaylistCommentContainer: React.FC<{ id: number }> = ({ id }) => {
  const isObserved = useRef(false);
  const intersectionObserver = useRef<IntersectionObserver>();
  const intersectionObserverRoot = useRef<HTMLDivElement>(null);

  const observerTargetRef = useRef<HTMLDivElement>(null);

  const currentPageIndex = useRef(1);

  const commentListTemp = useRef<ICommentType[]>([]);

  const [commentList, setCommentList] = useState<ICommentType[]>([]);

  const [isloadedAll, setIsLoadedAll] = useState(false);

  const retrieveComments = async (pageIndex: number) => {
    const {
      data: { comments, code, more, total },
    } = await service.get<IResponse<ICommentResposeType>>("/comment/playlist", {
      params: { id, limit: 20, offset: (pageIndex - 1) * 20 },
    });
    currentPageIndex.current += 1;
    commentListTemp.current = [...commentListTemp.current, ...comments];

    setCommentList([...commentListTemp.current]);

    if (more === false) {
      setIsLoadedAll(true);
    }
  };

  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            retrieveComments(currentPageIndex.current);
          }
        });
      },
      {
        root: intersectionObserverRoot.current,
      }
    );

    if (!isObserved.current && observerTargetRef.current) {
      intersectionObserver.current.observe(observerTargetRef.current);
      isObserved.current = true;
    }
  }, []);

  return (
    <div className="mt-[20px]">
      <div className="flex flex-row justify-start mb-[15px] border-b-[2px] border-solid border-[#C10D0C]">
        <span className="text-[18px]">热门评论</span>
      </div>
      <div className="h-[500px] overflow-y-auto" ref={intersectionObserverRoot}>
        {commentList.map((item) => (
          <div
            key={item.commentId}
            className="flex pt-[10px] pb-[10px] border-b-[1px] border-[#ccc] border-dotted gap-[10px]"
          >
            <div className="h-[60px] w-[60px]">
              <Image
                src={item.user.avatarUrl}
                width={60}
                height={60}
                alt="user avatar"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div>
                <span className="text-[#C10D0C]">{item.user.nickname}: </span>
                <span>{item.content}</span>
              </div>
              <div className="mt-[15px]">
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
        {!isloadedAll && (
          <div ref={observerTargetRef}>
            <span>数据正在加载...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistCommentContainer;
