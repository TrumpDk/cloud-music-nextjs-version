import { IRecommendationProps } from "@/types";
import React from "react";

const recommendationWrapper: React.FC<IRecommendationProps<{}>> = ({ categoryList, recommendationData, title, renderProps }) => {

    return <div className="mt-[20px]">
        <div className="flex flex-row justify-start mb-[15px] border-b-[2px] border-solid border-[#C10D0C]">
            <div className="text-[18px] ">
                <span>{title}</span>
            </div>
        </div>
        {renderProps(recommendationData)}
    </div>
}

export default recommendationWrapper;