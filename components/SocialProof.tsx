'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
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
          The Web3 Community is Ready
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          People are already looking for Discord alternatives. Here's what they're saying.
        </motion.p>
      </div>

      {/* Placeholder for social proof screenshots */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-8 rounded-3xl bg-gradient-to-br from-warm-cream to-warm-sand border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">📸</div>
              <p className="text-gray-500 font-medium">
                Social proof screenshot #{item}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                (X, Reddit, LinkedIn posts)
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.p
        className="text-center text-gray-500 mt-8 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        💡 Replace these placeholders with actual screenshots of community complaints about Discord
      </motion.p>
    </section>
  );
}
