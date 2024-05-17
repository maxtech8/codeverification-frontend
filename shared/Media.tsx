import Image from "next/image"
import { CSSProperties, DetailedHTMLProps, VideoHTMLAttributes } from "react"

interface IMedia {
  link?: string
  containerStyle?: CSSProperties
  containerClasses?: string
  className?: string
  blurLink?: string
  alt?: string
  layout?: "fill" | "responsive" | "fixed" | "intrinsic"
  width?: string
  height?: string
  imageClasses?: string
}

function Media({
  link,
  containerClasses,
  containerStyle,
  blurLink,
  alt,
  layout = "fill",
  width,
  height,
  imageClasses,
}: IMedia) {
  return (
    <div className={`relative ${containerClasses || ""}`} style={containerStyle || {}}>
      {link && (
        <Image
          className={`absolute !w-full object-contain z-1 ${imageClasses}`}
          src={link}
          layout={layout}
          alt={alt || "not found image"}
          placeholder="blur"
          blurDataURL={
            blurLink ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMXP2OQAGOQKc/DqDigAAAABJRU5ErkJggg=="
          }
          {...(width &&
            height && {
              width,
              height,
            })}
          unoptimized
        />
      )}
    </div>
  )
}

export default Media
