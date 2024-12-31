import { Layout } from "antd";
import "./globals.css";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Providers from "@/app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body>
        <AntdRegistry>
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
              <Content className="h-[500px] overflow-y-auto">
                <Providers>
                  {children}
                </Providers>
              </Content>
              <Footer>111</Footer>
            </Layout>
          </main>
        </AntdRegistry>
      </body>
    </html>
  );
}
