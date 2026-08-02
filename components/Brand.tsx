import type { CSSProperties } from 'react';
import { tokens, fonts } from '@/lib/tokens';

// The ScoutOS compass mark. One master drawing, used bit-identical from the
// master path (masterbrand §3) — never redrawn. Monochrome `currentColor` by
// default; decorative alongside text, so aria-hidden.
export function Compass({
  size = 24,
  color = 'currentColor',
  style,
}: {
  size?: number | string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="2360 945 694 694"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <path
        d="M2527.85 1133.47C2534.87 1126.45 2541.9 1119.42 2548.92 1112.4 2551.78 1111.32 2553.97 1108.37 2556.36 1106.48 2561.52 1102.4 2566.72 1098.24 2572.18 1094.58 2588.48 1083.66 2605.87 1074.56 2624.24 1067.69 2682.81 1045.77 2752.09 1048.14 2808.48 1075.42 2821.84 1081.89 2834.51 1089.39 2846.71 1097.91 2851.59 1101.32 2861.23 1110.79 2865.62 1112.66 2872.45 1119.5 2879.3 1126.35 2886.14 1133.18 2887.9 1137.43 2897.56 1147.3 2900.9 1152.1 2909.39 1164.31 2916.94 1176.95 2923.38 1190.33 2950.48 1246.58 2953.31 1316.18 2931.12 1374.58 2924.17 1392.87 2915.25 1410.4 2904.21 1426.64 2900.5 1432.08 2896.37 1437.28 2892.31 1442.47 2890.42 1444.87 2887.44 1447.06 2886.39 1449.92 2879.38 1456.92 2872.38 1463.92 2865.38 1470.93 2862.43 1472.02 2860.21 1475.12 2857.69 1477.03 2851.26 1481.89 2844.97 1487.05 2838.15 1491.36 2821.57 1501.84 2804.37 1510.13 2786.08 1517.05 2727.95 1538.99 2658.95 1533.02 2603.48 1506.83 2590.9 1500.89 2578.44 1493.59 2567.27 1485.25 2563.44 1482.39 2552.12 1472.16 2548.92 1470.95 2541.89 1463.92 2534.87 1456.9 2527.84 1449.87 2526.36 1446.1 2516.45 1435.62 2513.34 1431.24 2504.73 1419.11 2496.9 1406.22 2490.73 1392.71 2464.46 1335.25 2460.2 1265.72 2484.02 1206.49 2491.09 1188.91 2499.61 1172.08 2510.34 1156.41 2513.98 1151.09 2517.95 1145.96 2521.94 1140.9 2523.83 1138.5 2526.76 1136.34 2527.85 1133.47ZM2562.78 1162.04C2543.76 1183.96 2528.59 1209.4 2520.91 1237.44 2510.16 1276.7 2510.08 1320.08 2524.89 1358.4 2555.21 1436.91 2632.02 1491.49 2717.52 1485.33 2744.43 1483.39 2769.47 1476.87 2793.7 1465.22 2815.2 1454.89 2835.31 1439.5 2851.22 1421.61 2869.94 1400.57 2883.75 1376.25 2892.31 1349.54 2899 1328.68 2901.62 1306.5 2900.91 1284.59 2900.14 1261.34 2895.25 1237.67 2886.01 1216.36 2877.37 1196.42 2865.68 1177.55 2850.93 1161.4 2792.35 1097.32 2698.22 1079.4 2620.57 1118.12 2599.07 1128.85 2578.65 1143.73 2562.78 1162.04ZM2686.74 1134.31C2695.51 1121.55 2715.1 1121.47 2725.42 1131.96 2730.8 1137.44 2732.89 1145.79 2735.81 1152.69 2741.08 1165.12 2746.23 1177.61 2751.6 1190.01 2760.26 1209.97 2768.2 1230.24 2776.71 1250.27 2782.33 1263.53 2789.94 1277 2790.03 1291.85 2790.11 1305.59 2783.1 1318.61 2777.69 1330.78 2768.37 1351.74 2759.71 1373.15 2751 1394.39 2745.39 1408.07 2739.64 1421.68 2733.85 1435.28 2728.96 1446.77 2724.99 1456.69 2710.93 1458.81 2702.2 1460.11 2691.82 1456.51 2686.75 1449.04 2681.95 1441.97 2679.31 1433.14 2675.82 1425.39 2669.82 1412.01 2663.97 1398.57 2658 1385.17 2649.57 1366.29 2641.06 1347.45 2632.86 1328.48 2628.41 1318.17 2622.18 1307.92 2621.18 1296.44 2619.48 1277.26 2630.76 1259.82 2638.15 1243.01 2648.61 1219.25 2659.49 1195.67 2669.7 1171.82 2672.73 1164.73 2675.9 1157.72 2679.09 1150.7 2681.56 1145.28 2683.33 1139.27 2686.74 1134.31ZM2677.54 1270.13C2669.85 1282.21 2668.19 1296.68 2675.21 1309.6 2687.65 1332.51 2720.65 1333.92 2736.26 1313.88 2748.49 1298.18 2744.84 1274.64 2729.34 1262.55 2714.25 1250.78 2688.29 1253.24 2677.54 1270.13Z"
        fill={color}
      />
    </svg>
  );
}

// The ScoutOS wordmark and product lockups (masterbrand §4). Construction:
// "Scout" in Cal Sans Bold · the first "O" of "OS" is the compass glyph ·
// "S" in Nunito Sans Light (the family's Avenir stand-in). A product name,
// when given, is appended after a word space in Cal Sans Bold.
//
// Tones: "mono" (default) uses currentColor; "two-tone" is the family's
// premium dark-surface treatment — the ScoutOS segment in ScoutOS yellow,
// the product name in warm paper. Never use two-tone on a light surface.
export function Wordmark({
  product,
  size = 22,
  tone = 'mono',
  style,
}: {
  product?: string;
  size?: number;
  tone?: 'mono' | 'two-tone';
  style?: CSSProperties;
}) {
  const scoutColor = tone === 'two-tone' ? tokens.yellow : 'currentColor';
  const productColor = tone === 'two-tone' ? tokens.paper : 'currentColor';
  const label = product ? `ScoutOS ${product}` : 'ScoutOS';

  return (
    <span
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontFamily: fonts.display,
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'baseline', color: scoutColor }}>
        <span>Scout</span>
        <Compass size="0.82em" style={{ alignSelf: 'center', margin: '0 -0.02em', transform: 'translateY(0.02em)' }} />
        <span style={{ fontFamily: fonts.body, fontWeight: 300 }}>S</span>
      </span>
      {product ? (
        <span aria-hidden="true" style={{ color: productColor, marginLeft: '0.32em' }}>
          {product}
        </span>
      ) : null}
    </span>
  );
}
