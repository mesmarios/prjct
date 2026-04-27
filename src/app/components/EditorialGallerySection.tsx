import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type EditorialGalleryItem = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

type EditorialGallerySectionProps = {
  heading: string;
  subheading: string;
  items: EditorialGalleryItem[];
};

export function EditorialGallerySection({ heading, subheading, items }: EditorialGallerySectionProps) {
  return (
    <section className="border-t border-current/10 bg-[var(--background)] py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-14">
          <p
            className="mb-4 text-xs uppercase tracking-[0.18em] opacity-65"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Continued Archive
          </p>
          <h3
            className="max-w-3xl text-4xl leading-tight opacity-95"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
          >
            {heading}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 opacity-70" style={{ fontFamily: "var(--font-sans)" }}>
            {subheading}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className={`overflow-hidden border border-black/10 bg-white shadow-[0_12px_34px_rgba(0,0,0,0.08)] ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`grid ${index % 3 === 0 ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-1"}`}>
                <div className="relative min-h-[250px] overflow-hidden bg-[#eceae4]">
                  <ImageWithFallback
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover grayscale-[35%] contrast-110 transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                <div className="p-7 sm:p-9">
                  <p
                    className="mb-3 text-xs uppercase tracking-[0.15em] opacity-55"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.eyebrow}
                  </p>
                  <h4
                    className="mb-4 text-2xl leading-snug opacity-90"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.015em" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[0.98rem] leading-8 opacity-75" style={{ fontFamily: "var(--font-sans)" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
