import PlaylistCommentContainer from "@/components/PlaylistComment";
import service from "@/service/axios";
import {
  IArtistType,
  IPlaylistDetail,
  IPlaylistResponse,
  IResponse,
  ISongType,
} from "@/types";
import { Table, TableColumnsType } from "antd";
import Image from "next/image";

// https://blog.csdn.net/weixin_38441229/article/details/132247115

export const getInitData = async (
  id: number
): Promise<{
  playlist: IPlaylistDetail;
  songs: ISongType[];
}> => {
  const {
    data: { playlist },
  } = await service.get<IResponse<IPlaylistResponse>>(`/playlist/detail`, {
    params: { id },
  });

  const {
    data: { songs },
  } = await service.get<IResponse<{ songs: ISongType[] }>>(
    `/playlist/track/all`,
    { params: { id } }
  );

  return { playlist, songs };
};

export default async function Page({ params }: { params: { id: number } }) {
  const { playlist, songs } = await getInitData(params.id);

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[980px] flex flex-col pl-[40px] pr-[40px] pt-[40px] pb-[40px] border-[1px] border-solid border-[#d3d3d3] bg-white">
        <div className="flex flex-row">
          <div className="border-[1px] border-solid border-[#666666e8] p-[5px] w-[212px] h-[212px]">
            <Image
              src={playlist.coverImgUrl}
              width={200}
              height={200}
              alt={playlist.description}
            ></Image>
          </div>
          <div className="flex flex-col ml-[20px] w-[676px]">
            <div className="text-[20px]">
              <span>{playlist.name}</span>
            </div>
            <div className="flex text-[12px] items-center mt-[10px]">
              <span>标签：</span>
              <div className="flex gap-2">
                {playlist.tags.map((item) => (
                  <span
                    key={item}
                    className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] rounded-[10px] border-[1px] border-solid border-[#cccccc] bg-[#e7e7e78c]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="line-clamp-2 overflow-hidden text-ellipsis mt-[20px]">
              <span>介绍：</span>
              <span className="">{playlist.description}</span>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-[20px]">
          <div className="flex justify-between w-full border-b-[2px] border-solid border-[#C10D0C]">
            <span>
              <span className="text-[18px]">歌曲列表</span>
              <span className="text-[12px] ml-[20px]">
                {playlist.trackCount}首歌
              </span>
            </span>
          </div>
        </div>
        <div className="flex h-[40px]">
          <div className="flex flex-1">
            <span>歌曲名字</span>
          </div>
        </div>
        <div className="h-[500px] overflow-y-auto">
          {songs.map((item) => (
            <div className="flex h-[30px]" key={item.name}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <PlaylistCommentContainer id={playlist.id}></PlaylistCommentContainer>
      </div>
    </div>
  );
}
