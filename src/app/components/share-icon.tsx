type ShareIconType = {
    height?: string,
    width?: string,
    fillColor?: string,
}

export default function ShareIcon({ height = "16", width = "16", fillColor = "#f1f5f9" }: ShareIconType) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.21967 11.7989C3.92678 11.506 3.92678 11.0311 4.21967 10.7382L9.43934 5.51855H5.75C5.33579 5.51855 5 5.18277 5 4.76855C5 4.35434 5.33579 4.01855 5.75 4.01855H11.25C11.6642 4.01855 12 4.35434 12 4.76855V10.2686C12 10.6828 11.6642 11.0186 11.25 11.0186C10.8358 11.0186 10.5 10.6828 10.5 10.2686V6.57922L5.28033 11.7989C4.98744 12.0918 4.51256 12.0918 4.21967 11.7989Z"
          fill={fillColor}
        />
      </svg>
    </>
  );
}
