import { Carousel, Layout } from "antd";
import Image from "next/image";
import service from "@/service/axios";
import { IAlbumItem, IBanner, IPlayListRankItem, IPlayListsRank, IRadioStaion, IResponse } from "@/types";
import RecommendationWrapper from '@/components/RecommendationWrapper';
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";

const { Content } = Layout;

export const getServerSideProps = async () => {
  const {
    data: { banners }
  } = await service.get<IResponse<{ banners: IBanner[] }>>('/banner', {
    params: { type: 0 },
  });

  const { data: { playlists } } = await service.get<IResponse<IPlayListsRank>>('/top/playlist/highquality', { params: { limit: 10 } });

  const { data: { albums } } = await service.get<IResponse<{ albums: IAlbumItem[] }>>('/album/newest', { params: { limit: 10 } });

  const { data: { djRadios } } = await service.get<IResponse<{ djRadios: IRadioStaion[] }>>('/dj/hot', { params: { limit: 5 } });

  return { props: { banners, playlists, albums, djRadios } };
};

export default function Home({ banners, playlists, albums, djRadios }: { banners: IBanner[], playlists: IPlayListRankItem[], albums: IAlbumItem[], djRadios: IRadioStaion[] }) {
  return <BaseLayout renderPropsChildren={() => {
    return <>
      <div className="flex w-full justify-center">
        <div className="flex">
          <div className="w-[750px] h-[278px]">
            <Carousel arrows infinite>
              {banners.map((item) => (
                <Image
                  src={item.imageUrl}
                  alt={item.typeTitle}
                  width={750}
                  height={278}
                  key={item.targetId}
                />
              ))}
            </Carousel>
          </div>
          <div className="w-[230px] h-[278px]">
            <div>未解锁区域，敬请期待</div>
            <div>未解锁区域，敬请期待</div>
            <div>未解锁区域，敬请期待</div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="pl-[20px] pr-[20px] pb-[20px] border-[1px] border-solid border-[#d3d3d3] w-[980px] bg-white">
          <RecommendationWrapper title="热门歌单" recommendationData={playlists} categoryList={[]} renderProps={
            (contentData) => {
              return <div className="flex justify-between flex-wrap gap-6">
                {
                  (contentData as IPlayListRankItem[]).map(item => (
                    <div key={item.id} className="flex flex-col cursor-pointer relative">
                      <Link href={`/playlists/${item.id}`}>
                        <Image src={item.coverImgUrl} alt={item.description} width={160} height={160} />
                        <div className="w-[160px] mt-[5px]">
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    </div>
                  ))
                }
              </div>
            }
          } />
          <RecommendationWrapper title="热门专辑" recommendationData={albums} categoryList={[]} renderProps={
            (contentData) => {
              return <div className="w-full overflow-x-auto">
                <div className="flex flex-nowrap gap-4">
                  {
                    (contentData as IAlbumItem[]).map(item => (
                      <div key={item.id} className="flex flex-col cursor-pointer" title={item.name}>
                        <Image src={item.picUrl} alt={item.name} width={100} height={100} />
                        <div className="w-[100px] mt-[5px] line-clamp-2 overflow-hidden text-ellipsis">
                          <span>{item.name}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            }
          } />
          <RecommendationWrapper title="电台推荐" recommendationData={djRadios} categoryList={[]} renderProps={
            (contentData) => {
              return <div className="flex flex-col">
                {
                  (contentData as IRadioStaion[]).map(item => (
                    <div key={item.id} className="flex cursor-pointer mt-[10px]" title={item.name}>
                      <Image src={item.picUrl} alt={item.name} width={200} height={200} />
                      <div className="p-2">
                        <div className="text-[18px] font-bold">
                          <span>{item.name}</span>
                        </div>
                        <div className="mt-2">
                          <span>{item.rcmdtext}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
          } />
        </div>
      </div>
    </>
  }}></BaseLayout>
}
