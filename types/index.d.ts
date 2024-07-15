export interface IBanner {
    typeTitle: string,
    targetId: number,
    imageUrl: string
}

export type IResponse<T extends string, U> = {code: number} & Record<T, U>