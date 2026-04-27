import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContentSectionProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function ContentSection({ title, content, imageSrc, imageAlt, reverse = false }: ContentSectionProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <section className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} gap-16 items-start max-w-7xl mx-auto px-8 py-32`}>
      <div className="flex-1 relative group cursor-pointer" onClick={() => setIsTextVisible(!isTextVisible)}>
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto opacity-75 grayscale contrast-125 transition-all duration-700 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)] to-transparent opacity-40" />
        </div>

        <AnimatePresence>
          {!isTextVisible && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
            >
              <span className="text-white/90 tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '0.1em' }}>
                Click to reveal
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 flex flex-col justify-start pt-4">
        <h2
          className="mb-12 opacity-90"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            lineHeight: '1.3',
            letterSpacing: '-0.02em'
          }}
        >
          {title}
        </h2>

        <AnimatePresence>
          {isTextVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="opacity-80 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  lineHeight: '2',
                  letterSpacing: '0.01em'
                }}
              >
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!isTextVisible && (
          <div className="h-px w-24 bg-current opacity-20" style={{ marginTop: '2rem' }} />
        )}
      </div>
    </section>
  );
}
