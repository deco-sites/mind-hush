import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { CTA } from "./ImageWithParagraph.tsx";

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: string;
  cta?: CTA[];
  image: { source: ImageWidget; description: string };
}

export default function ParagraphWithPhoneMockup(
  { title, tagline, cta, description, image }: Props,
) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto px-4 text-sm py-6">
      <div class="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-20">
        <div class="w-full space-y-2 md:space-y-4 md:max-w-xl gap-4">
          <p class="text-sm font-semibold">
            {tagline}
          </p>

          {title && <h1 class="text-4xl leading-snug">{title}</h1>}

          <p class="leading-normal">
            {description}
          </p>

          <div class="flex gap-3 pt-4">
            {cta?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary
                  ${!item.style || item.style == "Outline" && "btn-outline"}
                  ${item.style == "Ghost" && "btn-ghost"}
                `}
              >
                {item?.text}
                {item.style == "Ghost" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                      fill="#18181B"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div class="flex items-center justify-center w-full rounded-lg overflow-hidden">
          <div class="mockup-phone border-primary">
            <div class="camera" />

            <div class="display">
              <div class="artboard artboard-demo phone-1 relative">
                <Image
                  src={image.source}
                  alt={image.description}
                  width={320}
                  height={568}
                  loading="eager"
                  preload
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
