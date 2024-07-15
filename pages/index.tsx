import { Carousel, Layout } from "antd";
import Image from "next/image";
import service from "@/service/axios";
import { IBanner, IResponse } from "@/types";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const { Header, Content, Footer } = Layout;

export const getServerSideProps = async () => {
  const {
    data: { banners },
  } = await service.get<IResponse<"banners", IBanner>>("/banner", {
    params: { type: 0 },
  });
  console.log(banners, "s");
  return { props: { banners } };
};

export default function Home({ banners }: { banners: IBanner[] }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Layout className="w-full">
        <Header className="flex flex-row w-full justify-center">
          <div className="flex w-[1100px]">
            <div className="w-[150px] h-full text-[20px] text-white text-center">
              <span>Music Center</span>
            </div>
            <div className="w-[100px] h-full text-[14px] text-white text-center">
              <span>Songs</span>
            </div>
            <div className="w-[100px] h-full text-[14px] text-white text-center">
              <span>Albums</span>
            </div>
            <div className="w-[100px] h-full text-[14px] text-white text-center">
              <span>Videos</span>
            </div>
          </div>
        </Header>
        <Content>
          <div className="flex w-full h-full justify-center align-center">
            <div className="flex">
              <div className="w-[730px] h-[270px]">
                <Carousel arrows infinite>
                  {banners.map((item) => (
                    <Image
                      src={item.imageUrl}
                      alt={item.typeTitle}
                      width={730}
                      height={284}
                      key={item.targetId}
                    />
                  ))}
                </Carousel>
              </div>
              <div className="w-[250px] h-[270px]">
                <div>未解锁区域，敬请期待</div>
                <div>未解锁区域，敬请期待</div>
                <div>未解锁区域，敬请期待</div>
              </div>
            </div>
          </div>
        </Content>
        <Footer>111</Footer>
      </Layout>
    </main>
  );
}
