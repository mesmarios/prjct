import { useEffect, useMemo, useState } from "react";
import { InfiniteCanvas } from "./infinite-canvas";
import type { MediaItem } from "./infinite-canvas/types";

type ManifestItem = {
  url: string;
  width: number;
  height: number;
};

export function InfiniteCanvasSection() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCanvasActive, setIsCanvasActive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch("/artworks/manifest.json")
      .then((res) => res.json())
      .then((items: ManifestItem[]) => {
        if (!isMounted) {
          return;
        }

        const normalized = items
          .filter((item) => item?.url && item?.width && item?.height)
          .map((item) => ({
            url: item.url.startsWith("/") ? item.url : `/${item.url}`,
            width: item.width,
            height: item.height,
          }));

        setMedia(normalized);
      })
      .catch(() => {
        if (isMounted) {
          setMedia([]);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoaded(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const maxCameraZ = useMemo(() => {
    if (!media.length) {
      return 220;
    }
    return Math.min(340, 180 + media.length * 0.45);
  }, [media.length]);

  return (
    <section className="relative h-[230vh] border-t border-current/10 bg-white">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6 py-10 sm:px-10">
        <div className="w-full max-w-6xl">
          <div className="mb-4 text-center">
            <p className="text-xs uppercase tracking-[0.22em] opacity-70">Infinite Archive Canvas</p>
            <p className="mt-2 text-sm opacity-60">
              Scroll inside the rectangle to explore. Scroll outside it to continue down the page.
            </p>
          </div>

          <div
            className="relative mx-auto h-[68vh] w-full overflow-hidden rounded-sm border border-black/15 bg-[#f6f4ef] shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            onMouseEnter={() => setIsCanvasActive(true)}
            onMouseLeave={() => setIsCanvasActive(false)}
            onFocus={() => setIsCanvasActive(true)}
            onBlur={() => setIsCanvasActive(false)}
            onTouchStart={() => setIsCanvasActive(true)}
          >
            {!isLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--background)]">
                <p className="text-sm opacity-60">Loading archive images...</p>
              </div>
            )}

            {isLoaded && media.length > 0 && (
              <InfiniteCanvas
                media={media}
                enableScrollZoom={isCanvasActive}
                minCameraZ={20}
                maxCameraZ={maxCameraZ}
                showControls
                backgroundColor="#f6f4ef"
                fogColor="#f6f4ef"
                fogNear={110}
                fogFar={285}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
