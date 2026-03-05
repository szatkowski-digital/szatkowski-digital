"use client";

import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(props, context) {
  const { alt = "", title, sizes } = props;
  const { photo, width, height } = context;

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src} // 🔥 KLUCZOWA POPRAWKA
        alt={alt || photo.alt}
        title={title}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export default function LogoGrid({ className, imgs }) {
  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      <RowsPhotoAlbum
        photos={imgs}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            {
              viewport: "(max-width: 1200px)",
              size: "calc(100vw - 32px)",
            },
          ],
        }}
      />
    </div>
  );
}
