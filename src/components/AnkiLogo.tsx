import React from 'react';

interface AnkiLogoProps {
  className?: string;
  ankiColor?: string;
  sweetsColor?: string;
  heartColor?: string;
  heartStripeColor?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Anki Sweets Official Vector Logotype
 * Exact reproduction of the authentic uploaded image:
 * - Fluid signature cursive "Anki" in #6E3635 (Plum Burgundy) with sweeping 'A' loops and elegant 'k' and 'i'
 * - Striped purple heart dot for the letter 'i' in #8D53A0
 * - Clean geometric lowercase "sweets" tagline in #8D53A0
 */
export const AnkiLogo: React.FC<AnkiLogoProps> = ({
  className = '',
  ankiColor = '#6E3635',
  sweetsColor = '#8D53A0',
  heartColor = '#8D53A0',
  heartStripeColor = '#FAF7F5',
  width = '100%',
  height = 'auto',
}) => {
  const maskId = `heart-mask-${ankiColor.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <svg
      viewBox="0 0 1000 480"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="Anki sweets logo"
    >
      <defs>
        <mask id={maskId}>
          {/* Exact Heart Silhouette rotated ~25 deg */}
          <path
            d="M 50,22 C 50,6 30,-2 14,0 C -4,2 -16,18 -14,38 C -10,64 24,96 52,118 C 76,96 112,62 112,36 C 112,16 98,0 80,0 C 66,0 52,10 50,22 Z"
            fill="#ffffff"
          />
        </mask>
      </defs>

      <g id="anki-sweets-logo">
        {/* ========================================================
            1. STRIPED PURPLE HEART (Dot on the letter 'i')
            ======================================================== */}
        <g transform="translate(856, 78) rotate(14)">
          {/* Base Heart in #8D53A0 */}
          <path
            d="M 50,22 C 50,6 30,-2 14,0 C -4,2 -16,18 -14,38 C -10,64 24,96 52,118 C 76,96 112,62 112,36 C 112,16 98,0 80,0 C 66,0 52,10 50,22 Z"
            fill={heartColor}
          />
          {/* Heart diagonal white wave stripes */}
          <g mask={`url(#${maskId})`}>
            <path
              d="M -30,42 Q 35,10 130,55 L 130,69 Q 35,24 -30,56 Z"
              fill={heartStripeColor}
            />
            <path
              d="M -30,76 Q 40,42 130,86 L 130,100 Q 40,56 -30,90 Z"
              fill={heartStripeColor}
            />
          </g>
        </g>

        {/* ========================================================
            2. SIGNATURE "Anki" CALLIGRAPHIC WORDMARK (#6E3635)
            ======================================================== */}
        <g id="anki-wordmark" fill={ankiColor}>
          {/* --- LETTER 'A' --- */}
          {/* Main Apex Loop & Downstroke */}
          <path
            d="M 334,2 C 348,2 388,48 424,142 C 452,216 468,328 468,446 C 468,474 446,480 422,480 C 400,480 392,464 392,434 C 392,342 368,230 338,136 C 314,60 292,28 274,38 C 248,52 208,134 164,260 C 130,358 112,476 112,476 C 112,476 92,476 82,442 C 94,360 136,198 206,94 C 250,30 298,2 334,2 Z"
          />
          {/* Dramatic Cross Loop / Flourish of 'A' extending to the left */}
          <path
            d="M 416,290 C 274,324 116,336 46,354 C 16,362 2,348 2,328 C 2,298 52,260 134,260 C 218,260 316,280 416,290 Z M 116,278 C 68,278 28,306 28,330 C 28,344 42,344 70,338 C 138,324 246,310 354,290 C 258,280 180,278 116,278 Z"
          />

          {/* --- LETTER 'n' --- */}
          <path
            d="M 506,208 C 522,208 530,220 530,240 C 530,268 512,336 498,384 C 492,404 500,412 516,412 C 546,412 588,346 608,294 C 618,268 626,218 648,218 C 662,218 668,230 668,248 C 668,284 650,344 636,392 C 630,412 640,418 658,418 C 694,418 742,320 754,290 C 762,290 758,304 742,328 C 716,372 668,436 624,436 C 596,436 580,414 588,380 C 570,416 538,436 506,436 C 466,436 450,406 458,362 L 478,280 C 484,250 478,238 460,240 C 452,240 450,230 458,224 C 472,214 492,208 506,208 Z"
          />

          {/* --- LETTER 'k' --- */}
          {/* Tall Ascender Loop */}
          <path
            d="M 708,24 C 724,24 738,44 740,70 C 742,110 724,194 698,274 L 666,374 C 658,402 666,412 684,412 C 706,412 748,348 768,294 C 776,294 774,306 760,330 C 734,378 690,436 652,436 C 622,436 608,410 618,366 L 658,222 C 672,172 686,96 678,60 C 672,40 658,56 638,86 C 630,86 626,76 634,66 C 654,36 686,24 708,24 Z"
          />
          {/* 'k' Center Loop and Kick */}
          <path
            d="M 758,262 C 794,262 824,286 824,320 C 824,348 804,372 774,378 C 794,398 824,428 854,434 C 854,442 844,446 824,446 C 794,446 764,414 748,390 L 736,430 C 726,434 718,428 720,416 L 740,340 C 750,300 744,278 724,278 C 716,278 714,270 720,264 C 734,260 748,262 758,262 Z M 766,302 C 756,332 764,354 780,354 C 794,354 804,340 804,324 C 804,310 788,298 770,298 C 768,298 766,300 766,302 Z"
          />

          {/* --- LETTER 'i' --- */}
          {/* Stem and Sweeping Descender Tail */}
          <path
            d="M 898,182 C 916,182 924,192 924,212 C 924,242 908,312 894,366 C 888,396 892,408 912,408 C 948,408 992,336 1012,286 C 1020,286 1020,298 1006,326 C 984,370 950,432 900,432 C 874,432 860,414 862,384 C 858,430 840,490 824,490 C 812,490 808,474 814,440 C 824,386 844,282 860,232 C 868,204 862,196 844,200 C 836,200 834,190 842,184 C 860,176 882,182 898,182 Z"
          />
        </g>

        {/* ========================================================
            3. TAGLINE "sweets" (#8D53A0)
            Exact lowercase geometric typography positioned below 'k' and 'i'
            ======================================================== */}
        <text
          x="755"
          y="472"
          textAnchor="middle"
          fill={sweetsColor}
          fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
          fontSize="64"
          fontWeight="400"
          letterSpacing="18"
          style={{ textTransform: 'lowercase' }}
        >
          sweets
        </text>
      </g>
    </svg>
  );
};

export default AnkiLogo;

