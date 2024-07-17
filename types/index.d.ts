import { ReactNode } from "react"

export interface IBanner {
    typeTitle: string,
    targetId: number,
    imageUrl: string
}

export interface IPlayListRankItem {
    description: string,
    name: string,
    playCount: number,
    coverImgUrl: string,
    tags: string,
    id: number,
}

export interface IPlayListsRank {
    lastTime: number,
    playlists: IPlayListRankItem[]
}

export interface IAlbumItem {
    name: string,
    picUrl: string,
    id: number,
}

export interface IRadioStaion {
    id: number,
    name: string,
    picUrl: string,
    rcmdtext: string
}

export interface IPlaylistDetail {
    coverImgUrl: string,
    description: string,
    createTime: number,
    id: number,
    name: string,
    tags: string[],
    trackCount: number
}

export interface IPlaylistResponse {
    playlist: IPlaylistDetail
}

export interface ISongType {
    name: string,
    dt: number,
    id: number,
    al: IAlbumType,
    ar: IArtistType[]
}

export interface IAlbumType {
    id: number,
    name: string,
    pic: number,
    picUrl: string,
}

export interface IArtistType {
    name: string,
    id: number,
}

export interface IRecommendationProps<T> {
    title: string,
    categoryList: string[],
    recommendationData: T,
    renderProps: (recommendationData: T) => ReactNode
}

export interface IBaseLayout {
    renderPropsChildren: () => ReactNode
}

export type IResponse<T extends Record<string, any>> = { code: number } & T