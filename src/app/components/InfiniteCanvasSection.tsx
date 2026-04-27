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
    <section className="relative h-[260vh] border-t border-current/10">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute left-0 top-0 z-20 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] opacity-70">Infinite Archive Canvas</p>
          <p className="mt-2 max-w-sm text-sm opacity-60">
            Scroll to move deeper in the archive. When you reach the end, page scroll continues normally.
          </p>
        </div>

        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--background)]">
            <p className="text-sm opacity-60">Loading archive images...</p>
          </div>
        )}

        {isLoaded && media.length > 0 && (
          <InfiniteCanvas
            media={media}
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
    </section>
  );
}
