import { getStarTemperature } from './util';

export type TwinkleStarData = {
  x: number,
  y: number,
  size: number,
  color?: number | string
}

export type ShootingStarData = {
  radius: number,
  x: number,
  y: number,
  rotate: number,
  reverse?: boolean
}

export function getRandomStars(count): TwinkleStarData[] {
  const padding = 20; //safe zone, shrink rect accordingly
  const rectangle = {
    x: 0,
    y: 0,
    width: 2000,
    height: 1000
  }



  const stars = Array.from(Array(count)).map(_ => {
    const colorRGB = getStarTemperature();
    const color = `rgb(${colorRGB[0]},${colorRGB[1]},${colorRGB[2]})`;

    return {
      x: padding + rectangle.x + Math.random() * (rectangle.width - padding * 2),
      y: padding + rectangle.y + Math.random() * (rectangle.height - padding * 2),
      size: 1,
      color: color
    }
  });

  return stars;
}

export function generateShootingStars(): ShootingStarData[] {
  return [
    {
      radius: 200, x: 1100, y:250, rotate: -45, reverse: true
    },
    {
      radius: 500, x: 500, y:800, rotate: 0
    },
    {
      radius: 150, x: 100, y:200, rotate: 180
    },
    {
      radius: 75, x: 500, y:250, rotate: -45, reverse: true
    },
    {
      radius: 125, x: 300, y:450, rotate: -185
    },
    {
      radius: 65, x: 400, y:650, rotate: 225, reverse: true
    },
    {
      radius: 50, x: 200, y:300, rotate: 90
    },
    {
      radius: 450, x: 900, y:300, rotate: -90, reverse: true
    },
    {
      radius: 450, x: 1600, y:700, rotate: -30, reverse: true
    }
  ]
};

export function generateStarCoordinates(): TwinkleStarData[] {
  const otherDefaults = {
    size: 1.5,
    color: null
  }

  return [ {
    x: 1596.973448245577,
    y: 578.4171532781027,
    ...otherDefaults
  },
  {
    x: 624.1864228031227,
    y: 227.26089443712394,
    ...otherDefaults
  },
  {
    x: 195.53121286639285,
    y: 830.2913557403084,
    ...otherDefaults
  },
  {
    x: 654.6718140243884,
    y: 357.55987380696473,
    ...otherDefaults
  },
  {
    x: 1270.262628273585,
    y: 556.1937909655104,
    ...otherDefaults
  },
  {
    x: 1874.1099861074613,
    y: 537.8371896254555,
    ...otherDefaults
  },
  {
    x: 227.66702184447672,
    y: 933.5058204022108,
    ...otherDefaults
  },
  {
    x: 849.1452025050253,
    y: 753.8239408253662,
    ...otherDefaults
  },
  {
    x: 162.39455177885364,
    y: 371.44565705415175,
    ...otherDefaults
  },
  {
    x: 536.8391119975487,
    y: 471.438417884515,
    ...otherDefaults
  },
  {
    x: 1700.8735348500447,
    y: 811.1546053915013,
    ...otherDefaults
  },
  {
    x: 1313.5764431918108,
    y: 177.0490832716154,
    ...otherDefaults
  },
  {
    x: 1380.7843468122915,
    y: 705.8869453492149,
    ...otherDefaults
  },
  {
    x: 1611.2247060049194,
    y: 121.86836681480617,
    ...otherDefaults
  },
  {
    x: 416.4980895593402,
    y: 100.97360726285487,
    ...otherDefaults
  },
  {
    x: 1605.3045718862004,
    y: 568.3522232795161,
    ...otherDefaults
  },
  {
    x: 1872.2274578638203,
    y: 353.43127251104664,
    ...otherDefaults
  },
  {
    x: 609.8554307846044,
    y: 933.4880549032565,
    ...otherDefaults
  },
  {
    x: 738.2998430349312,
    y: 586.219408066047,
    ...otherDefaults
  },
  {
    x: 218.99173543432494,
    y: 990.9343797547301,
    ...otherDefaults
  },
  {
    x: 1731.2780427178832,
    y: 288.2617875993787,
    ...otherDefaults
  },
  {
    x: 536.515464451623,
    y: 704.4454412867656,
    ...otherDefaults
  },
  {
    x: 1231.5398910809145,
    y: 932.9406357890622,
    ...otherDefaults
  },
  {
    x: 1767.7240418782917,
    y: 377.4978308404437,
    ...otherDefaults
  },
  {
    x: 60.763730956239215,
    y: 180.0428524529891,
    ...otherDefaults
  },
  {
    x: 504.66745458498474,
    y: 822.3694625674929,
    ...otherDefaults
  },
  {
    x: 190.57438689705154,
    y: 850.4664376865585,
    ...otherDefaults
  },
  {
    x: 1226.602311895454,
    y: 166.00523960305534,
    ...otherDefaults
  },
  {
    x: 28.252940020621065,
    y: 95.72025749659052,
    ...otherDefaults
  },
  {
    x: 776.7402174706963,
    y: 182.0857667170639,
    ...otherDefaults
  },
  {
    x: 1661.4365255203802,
    y: 9.199715819379062,
    ...otherDefaults
  },
  {
    x: 1791.3643331034255,
    y: 137.16432244657108,
    ...otherDefaults
  },
  {
    x: 264.2306334627267,
    y: 179.96747301355498,
    ...otherDefaults
  },
  {
    x: 144.12707359609112,
    y: 419.5856575392614,
    ...otherDefaults
  },
  {
    x: 1562.3921330416733,
    y: 727.132203970914,
    ...otherDefaults
  },
  {
    x: 1477.836836260912,
    y: 772.3942484736992,
    ...otherDefaults
  },
  {
    x: 740.0053875532842,
    y: 808.3813934419943,
    ...otherDefaults
  },
  {
    x: 1791.0710885194505,
    y: 786.1241026349015,
    ...otherDefaults
  },
  {
    x: 645.5653888153922,
    y: 736.4977734546056,
    ...otherDefaults
  },
  {
    x: 1384.4168196732044,
    y: 829.9732607536924,
    ...otherDefaults
  },
  {
    x: 163.6915577740048,
    y: 387.589934948666,
    ...otherDefaults
  },
  {
    x: 1030.752807909637,
    y: 986.8638306532176,
    ...otherDefaults
  },
  {
    x: 1547.5697556980297,
    y: 738.4827189459013,
    ...otherDefaults
  },
  {
    x: 911.6204926165387,
    y: 288.19639143783735,
    ...otherDefaults
  },
  {
    x: 436.2726947153002,
    y: 156.52925590335153,
    ...otherDefaults
  },
  {
    x: 470.90493070521467,
    y: 508.3648167337842,
    ...otherDefaults
  },
  {
    x: 570.7832681150248,
    y: 90.46864903266116,
    ...otherDefaults
  },
  {
    x: 286.4828739132141,
    y: 331.890507980424,
    ...otherDefaults
  },
  {
    x: 839.1294725722154,
    y: 459.50407507204005,
    ...otherDefaults
  },
  {
    x: 918.5794503208701,
    y: 382.36947443013645,
    ...otherDefaults
  },
  {
    x: 978.32693336608,
    y: 233.22793996980872,
    ...otherDefaults
  },
  {
    x: 1942.6378792746775,
    y: 775.2262931872873,
    ...otherDefaults
  },
  {
    x: 183.57275380766546,
    y: 490.23746673496936,
    ...otherDefaults
  },
  {
    x: 1870.1346895593947,
    y: 5.340554080379922,
    ...otherDefaults
  },
  {
    x: 77.8455233825599,
    y: 991.3432482687949,
    ...otherDefaults
  },
  {
    x: 1150.8916475486242,
    y: 734.8173445629565,
    ...otherDefaults
  },
  {
    x: 1267.778063245026,
    y: 76.46690911117871,
    ...otherDefaults
  },
  {
    x: 412.5649555878659,
    y: 388.8894946239125,
    ...otherDefaults
  },
  {
    x: 1963.9488881788552,
    y: 332.86133487469607,
    ...otherDefaults
  },
  {
    x: 558.0428440555471,
    y: 555.534536568679,
    ...otherDefaults
  },
  {
    x: 1800.204256032283,
    y: 606.9161588457371,
    ...otherDefaults
  },
  {
    x: 446.76135290536666,
    y: 184.04218476261437,
    ...otherDefaults
  },
  {
    x: 722.4139720353855,
    y: 166.0382370352249,
    ...otherDefaults
  },
  {
    x: 385.7923791367068,
    y: 522.5903196230092,
    ...otherDefaults
  },
  {
    x: 280.86655197312814,
    y: 306.91336158262294,
    ...otherDefaults
  },
  {
    x: 929.575833643574,
    y: 276.84878095307374,
    ...otherDefaults
  },
  {
    x: 1576.1257876455063,
    y: 642.0639364621978,
    ...otherDefaults
  },
  {
    x: 272.42012120065783,
    y: 303.4312556623606,
    ...otherDefaults
  },
  {
    x: 1308.241904521537,
    y: 777.277639109069,
    ...otherDefaults
  },
  {
    x: 1798.34651340239,
    y: 728.9710737899151,
    ...otherDefaults
  },
  {
    x: 1034.1455081792458,
    y: 866.6111552206579,
    ...otherDefaults
  },
  {
    x: 191.3789885191175,
    y: 26.837480326682428,
    ...otherDefaults
  },
  {
    x: 267.4427480940049,
    y: 435.20349308803463,
    ...otherDefaults
  },
  {
    x: 169.5951738454462,
    y: 16.116964765581223,
    ...otherDefaults
  },
  {
    x: 1304.4617878663903,
    y: 300.4144440678036,
    ...otherDefaults
  },
  {
    x: 1057.5827335967429,
    y: 423.5485979150542,
    ...otherDefaults
  },
  {
    x: 914.283134053933,
    y: 79.1276015573803,
    ...otherDefaults
  },
  {
    x: 1514.105232679034,
    y: 4.439816438432498,
    ...otherDefaults
  },
  {
    x: 1440.5716820429939,
    y: 757.3441195933785,
    ...otherDefaults
  },
  {
    x: 301.8884359195071,
    y: 879.0979664055392,
    ...otherDefaults
  }]
};