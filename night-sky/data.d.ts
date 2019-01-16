export declare type TwinkleStarData = {
    x: number;
    y: number;
    size: number;
    color?: number | string;
};
export declare type ShootingStarData = {
    radius: number;
    x: number;
    y: number;
    rotate: number;
    reverse?: boolean;
};
export declare function getRandomStars(count: any): TwinkleStarData[];
export declare function generateShootingStars(): ShootingStarData[];
export declare function generateStarCoordinates(): TwinkleStarData[];
