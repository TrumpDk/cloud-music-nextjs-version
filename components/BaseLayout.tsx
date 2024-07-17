import { IBaseLayout } from "@/types";
import { Layout } from "antd";
import React from "react";

const { Header, Footer, Content } = Layout;

const BaseLayout: React.FC<IBaseLayout> = ({ renderPropsChildren }) => {
    return <main className="flex min-h-screen flex-col items-center justify-between">
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
                {renderPropsChildren()}
            </Content>
            <Footer>111</Footer>
        </Layout>
    </main>
}

export default BaseLayout