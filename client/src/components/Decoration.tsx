import { FC } from 'react'

export const Decoration: FC<{ id: string }> = ({ id }) => {
  return (
    <svg
      viewBox='0 0 140 140'
      className='decoration-image'
      id={id}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_26_31810)'>
        <path
          d='M25.4559 58.2254C30.1422 62.9117 30.1422 70.5097 25.4559 75.1959C20.7696 79.8822 13.1716 79.8822 8.4853 75.1959C3.79901 70.5097 3.79901 62.9117 8.4853 58.2254C13.1716 53.5391 20.7696 53.5391 25.4559 58.2254Z'
          fill='#E84A8F'
        />
        <path
          d='M79.196 4.48527C83.8823 9.17156 83.8823 16.7695 79.196 21.4558C74.5097 26.1421 66.9117 26.1421 62.2254 21.4558C57.5391 16.7695 57.5391 9.17156 62.2254 4.48527C66.9117 -0.201022 74.5097 -0.201022 79.196 4.48527Z'
          fill='#E84A8F'
        />
        <path d='M36.7696 32.7695L56.846 38.149L42.149 52.8459L36.7696 32.7695Z' fill='#E84A8F' />
        <path
          d='M77.7818 110.551C82.4681 115.238 82.4681 122.836 77.7818 127.522C73.0955 132.208 65.4975 132.208 60.8112 127.522C56.1249 122.836 56.1249 115.238 60.8112 110.551C65.4975 105.865 73.0955 105.865 77.7818 110.551Z'
          fill='#E84A8F'
        />
        <path
          d='M131.522 56.8112C136.208 61.4975 136.208 69.0954 131.522 73.7817C126.836 78.468 119.238 78.468 114.551 73.7817C109.865 69.0954 109.865 61.4975 114.551 56.8112C119.238 52.1249 126.836 52.1249 131.522 56.8112Z'
          fill='#E84A8F'
        />
        <path
          d='M89.0955 85.0954L109.172 90.4749L94.4749 105.172L89.0955 85.0954Z'
          fill='#E84A8F'
        />
        <path
          d='M78.4889 57.5183C83.1752 62.2046 83.1752 69.8025 78.4889 74.4888C73.8026 79.1751 66.2046 79.1751 61.5183 74.4888C56.832 69.8025 56.832 62.2046 61.5183 57.5183C66.2046 52.832 73.8026 52.832 78.4889 57.5183Z'
          fill='#E84A8F'
        />
        <path d='M36.0625 85.8026L56.1389 91.182L41.4419 105.879L36.0625 85.8026Z' fill='#E84A8F' />
        <path d='M89.8026 32.0624L109.879 37.4419L95.182 52.1388L89.8026 32.0624Z' fill='#E84A8F' />
      </g>
      <defs>
        <filter
          id='filter0_d_26_31810'
          x='0.970581'
          y='0.970551'
          width='138.066'
          height='138.066'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_26_31810' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_26_31810'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
