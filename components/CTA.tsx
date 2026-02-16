'use client';

import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

export default function CTA() {
  return (
    <section className="section-container bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Find Your Community's Voice?
        </motion.h2>
        <motion.p
          className="text-xl text-primary-100 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join the waitlist and be among the first to experience Web3-native community chat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}
