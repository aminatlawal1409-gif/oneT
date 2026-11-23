import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text-blue">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className={`text-[#AAB6CC] text-base sm:text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
