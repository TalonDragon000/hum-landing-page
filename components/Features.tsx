'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Zero-Knowledge Privacy',
    description: 'Built on ZK proofs. Your conversations stay private — provably. No compromise between security and usability.',
    icon: '🛡️',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Native Token Gating',
    description: 'No bots, no workarounds. Token and NFT gating built directly into channels. Including AI x402 standard support.',
    icon: '🎫',
    gradient: 'from-warm-coral to-accent-500',
  },
  {
    title: 'AI-Powered Summaries',
    description: 'Public channels get smart AI summaries. Control what's scrapable. Make your community discoverable on your terms.',
    icon: '✨',
    gradient: 'from-accent-400 to-accent-600',
  },
  {
    title: 'True Ownership',
    description: 'Your data, your keys, your community. Export anytime. No lock-in. Built for the long term.',
    icon: '🔑',
    gradient: 'from-primary-600 to-primary-800',
  },
];

export default function Features() {
  return (
    <section className="section-container bg-gradient-to-b from-warm-cream to-warm-sand">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built for Web3, From the Ground Up
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Everything you need for your community. Nothing you don't.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

            <div className="relative z-10">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
