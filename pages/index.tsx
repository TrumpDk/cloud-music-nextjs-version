import { Layout } from "antd";
import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Layout className="w-full">
        <Header className="flex flex-row w-full justify-center">
          <div className="flex w-[980px]">
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
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </main>
  );
}
