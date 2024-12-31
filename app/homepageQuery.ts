import { queryOptions } from "@tanstack/react-query";
import service from "@/service/axios";
import { IAlbumItem, IPlayListsRank, IRadioStaion } from "@/types";
import { IBanner } from "@/types";
import { IResponse } from "@/types";

export const homepageQuery = queryOptions({
  queryKey: ["homepage"],
  queryFn: async () => {
    try {
      const {
        data: { banners },
      } = await service.get<IResponse<{ banners: IBanner[] }>>("/banner", {
        params: { type: 0 },
      });

      const {
        data: { playlists },
      } = await service.get<IResponse<IPlayListsRank>>(
        "/top/playlist/highquality",
        { params: { limit: 10 } }
      );

      const {
        data: { albums },
      } = await service.get<IResponse<{ albums: IAlbumItem[] }>>("/album/newest", {
        params: { limit: 10 },
      });

      const {
        data: { djRadios },
      } = await service.get<IResponse<{ djRadios: IRadioStaion[] }>>("/dj/hot", {
        params: { limit: 5 },
      });
      return { banners, playlists, albums, djRadios };
    } catch (error) {
      console.error("Error fetching homepage data:", error);
      throw error;
    }
  },
});
