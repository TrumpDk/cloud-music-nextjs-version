export interface IBanner {
    typeTitle: string,
    url: string,
    bannerId: number,
    pic: string
}

export type IResponse<T extends string, U> = {code: number} & Record<T, U>