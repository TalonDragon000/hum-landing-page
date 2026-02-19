'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { comparisonData, CompetitorName, CategoryName } from '@/lib/comparisonData';

export default function ComparePage() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorName>('Discord');

  const getIndicatorColor = (indicator: string) => {
    if (indicator === '✅') return 'text-emerald-500';
    if (indicator === '⚠️') return 'text-amber-500';
    return 'text-rose-400';
  };

  const getIndicatorBg = (indicator: string) => {
    if (indicator === '✅') return 'bg-emerald-500/10 border-emerald-500/20';
    if (indicator === '⚠️') return 'bg-amber-500/10 border-amber-500/20';
    return 'bg-rose-500/10 border-rose-500/20';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sky-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors">
            Hum
          </a>
          <a 
            href="/#waitlist" 
            className="px-6 py-2 bg-gradient-to-r from-sky-500 to-coral-500 text-white rounded-full hover:shadow-lg transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-sky-500 to-coral-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Hum?
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See how Hum compares to other chat platforms. We're building the future of community communication.
          </motion.p>
        </div>
      </section>

      {/* Competitor Selector */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sky-200/50">
            <p className="text-sm font-medium text-slate-600 mb-4">Compare Hum with:</p>
            <div className="flex flex-wrap gap-3">
              {comparisonData.competitors.filter(c => c !== 'Hum').map((competitor) => (
                <button
                  key={competitor}
                  onClick={() => setSelectedCompetitor(competitor as CompetitorName)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCompetitor === competitor
                      ? 'bg-gradient-to-r from-sky-500 to-coral-500 text-white shadow-lg scale-105'
                      : 'bg-white/80 text-slate-600 hover:bg-white hover:shadow-md border border-sky-200/50'
                  }`}
                >
                  {competitor}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompetitor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {comparisonData.categories.map((category) => {
                const features = comparisonData.features[category as CategoryName];
                if (!features || features.length === 0) return null;

                return (
                  <div key={category} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sky-200/50">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">{category}</h2>
                    <div className="space-y-4">
                      {features.map((feature: any, idx: number) => {
                        const humValue = feature.Hum;
                        const compValue = feature[selectedCompetitor];
                        const isHumAdvantage = (humValue === '✅' && compValue !== '✅');

                        return (
                          <div 
                            key={idx} 
                            className={`p-4 rounded-xl border transition-all ${
                              isHumAdvantage 
                                ? 'bg-gradient-to-r from-emerald-50/80 to-sky-50/80 border-emerald-200/50' 
                                : 'bg-white/40 border-slate-200/50'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-semibold text-slate-800 mb-1">{feature.feature}</h3>
                                <p className="text-sm text-slate-600">{feature.description}</p>
                              </div>
                              <div className="flex items-center gap-4 shrink-0">
                                {/* Hum */}
                                <div className="text-center">
                                  <div className="text-xs font-medium text-slate-500 mb-1">Hum</div>
                                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl border ${getIndicatorBg(humValue)}`}>
                                    <span className={getIndicatorColor(humValue)}>{humValue}</span>
                                  </div>
                                </div>

                                {/* Competitor */}
                                <div className="text-center">
                                  <div className="text-xs font-medium text-slate-500 mb-1">{selectedCompetitor}</div>
                                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl border ${getIndicatorBg(compValue)}`}>
                                    <span className={getIndicatorColor(compValue)}>{compValue}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-sky-500 to-coral-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to experience the difference?</h2>
            <p className="text-xl mb-8 text-white/90">Join the waitlist and be first to know when we launch.</p>
            <a 
              href="/#waitlist" 
              className="inline-block px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">© 2026 Hum. Built for Web3 communities who value privacy.</p>
        </div>
      </footer>
    </div>
  );
}
