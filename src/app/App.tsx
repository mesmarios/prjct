import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ContentSection } from './components/ContentSection';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [scaleBalance, setScaleBalance] = useState(0);

  // Transform scroll progress to control statue movement
  const statueX = useTransform(scrollYProgress, [0, 0.4], ['0%', '35%']);
  const statueScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.65]);
  const statueOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 0.8, 0.5]);

  // Subtle scale micro-animation that resets to center
  useEffect(() => {
    const interval = setInterval(() => {
      setScaleBalance(Math.sin(Date.now() / 3000) * 2);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative z-10 flex flex-col items-center"
          style={{
            x: statueX,
            scale: statueScale,
            opacity: statueOpacity
          }}
        >
          <motion.div
            className="relative"
            style={{
              transform: `rotate(${scaleBalance}deg)`,
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1768839722927-df0ef3188f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsYWR5JTIwanVzdGljZSUyMHN0YXR1ZSUyMHNjYWxlcyUyMGJsaW5kZm9sZHxlbnwxfHx8fDE3NzczMDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Lady Justice holding scales"
              className="h-[70vh] w-auto object-contain grayscale contrast-110 opacity-90"
              style={{
                filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                mixBlendMode: 'luminosity'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-deep-navy)] to-[var(--color-butter-cream)]" />
          </motion.div>

          <motion.h1
            className="mt-12 text-center max-w-3xl px-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '3rem',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              opacity: 0.95
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            The scales of justice measure truth through the weight of history
          </motion.h1>
        </motion.div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-butter-cream)] to-[var(--background)]" />
      </section>

      {/* Spacer for scroll */}
      <div className="h-32" />

      {/* Content Sections */}
      <ContentSection
        title="Archives of Accountability"
        content="Throughout history, the pursuit of justice has required meticulous documentation. These archives preserve the evidence of wrongs committed and rights defended, ensuring that memory serves as a foundation for accountability. Each record represents not just a case, but a human story demanding recognition."
        imageSrc="https://images.unsplash.com/photo-1568667256549-094345857637?w=1080&q=80"
        imageAlt="Historical legal documents"
      />

      <ContentSection
        title="Witness to Truth"
        content="The testimony of those who lived through injustice carries a weight that transcends time. Their voices, preserved in depositions and oral histories, form an unbreakable chain of evidence. To bear witness is to participate in the ongoing work of justice, transforming personal experience into collective memory."
        imageSrc="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1080&q=80"
        imageAlt="Archival testimony records"
        reverse
      />

      <ContentSection
        title="Restorative Frameworks"
        content="Justice is not only punitive but restorative. The frameworks we build must acknowledge harm while creating pathways for healing. This requires institutional commitment to truth-telling, reparation, and structural change—mechanisms that honor the dignity of all affected parties and prevent future violations."
        imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&q=80"
        imageAlt="Legal framework documents"
      />

      <ContentSection
        title="The Long Arc"
        content="Progress toward justice is neither linear nor guaranteed. It demands sustained attention across generations, institutional reform, and cultural transformation. The arc bends only through deliberate effort—through research that uncovers hidden truths, advocacy that amplifies silenced voices, and systems that embed accountability into their foundations."
        imageSrc="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1080&q=80"
        imageAlt="Historical timeline"
        reverse
      />

      {/* Footer */}
      <footer className="py-24 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p
            className="opacity-50"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}
          >
            Research Archive · Historical Justice Initiative
          </p>
        </div>
      </footer>
    </div>
  );
}
