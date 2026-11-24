// app/data/types.ts
import type { MicroCMSImage } from "microcms-js-sdk";

export type Hard = {
  id: string;
  name: string;
  image?: MicroCMSImage;
  maker?: string;
  release?: string;
  gpu?: string;
  cpu?: string;
  memory?: string;
  resolution?: string;
  fps?: string;
  storage?: string;
  battery?: string; // 据え置き機は空欄になるので任意
};
