import { ShootingStarData } from './data';
declare type ShootStarsConfig = {
    root: SVGElement;
    starlist: ShootingStarData[];
    debug: boolean;
};
export declare function shootingStars({ root, starlist, debug }: ShootStarsConfig): {
    debug: (value: any) => void;
};
export {};
