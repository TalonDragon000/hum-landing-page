'use client';

import { motion } from 'framer-motion';

const painPoints = [
  {
    title: 'Discord Scams',
    description: 'DeFi protocols are leaving Discord after repeated security breaches and scams targeting Web3 communities.',
    icon: '🚨',
  },
  {
    title: 'Privacy Lost',
    description: 'New age verification rules starting March 2026 kill anonymity — the foundation of Web3 culture.',
    icon: '🔒',
  },
  {
    title: 'Bot Friction',
    description: 'Token gating requires clunky third-party bots. No native Web3 integration means constant workarounds.',
    icon: '🤖',
  },
  {
    title: 'No True Ownership',
    description: 'Your community data, conversations, and identity are controlled by centralized platforms.',
    icon: '⛓️',
  },
];

export default function PainPoints() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why We Built Hum
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Web3 communities deserve better than retrofitted Web2 tools. We listened to what you needed.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-3xl bg-gradient-to-br from-warm-cream to-white border-2 border-gray-100 hover:border-primary-200 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-5xl mb-4">{point.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{point.title}</h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
