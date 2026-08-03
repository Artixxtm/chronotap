'use client'

import ParallaxImage from "../ParallaxImage";

const BackgroundPicture = ({
  mobileSrc,
  desktopSrc,
  alt = "",
  children,
}) => (
  <ParallaxImage className="absolute inset-0 pointer-events-none select-none isolate">
    <picture className="contents">
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt={alt}
        draggable={false}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </picture>

    <div className="pointer-events-auto">{children}</div>
  </ParallaxImage>
);

export default BackgroundPicture;
