import React from 'react';
import { useState } from 'react';
import { Clock, Info, Languages } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';
import { translations } from './translations';

function calculateTimePerception(age: number) {
  // Model 1: Proportional to real time
  const K1 = 80 / Math.log(80);
  const S1 = K1 * Math.log(age);

  // Model 2: Proportional to subjective time
  const K2 = 80 * 80 / (2 * 80);
  const S2 = Math.sqrt(2 * K2 * age);

  return {
    realTimeModel: S1.toFixed(1),
    subjectiveTimeModel: S2.toFixed(1)
  };
}

function generateChartData() {
  const data = [];
  for (let i = 1; i <= 80; i++) {
    const perception = calculateTimePerception(i);
    data.push({
      age: i,
      realTime: parseFloat(perception.realTimeModel),
      subjectiveTime: parseFloat(perception.subjectiveTimeModel)
    });
  }
  return data;
}

function App() {
  const [age, setAge] = useState<number>(25);
  const [method, setMethod] = useState<'real' | 'subjective'>('subjective');
  const [isEditing, setIsEditing] = useState(false);
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const perception = calculateTimePerception(age);
  const chartData = generateChartData();
  const t = translations[lang];

  const activeColor = method === 'real' ? 'cyan' : 'purple';
  const perceptionValue = method === 'real' ? perception.realTimeModel : perception.subjectiveTimeModel;

  const handleAgeChange = (value: string) => {
    const newAge = Math.min(80, Math.max(1, Number(value) || 1));
    setAge(newAge);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto py-12 px-0 sm:px-4">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 transition-colors"
          >
            <Languages className="w-5 h-5" />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>

        <header className="text-center mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Clock className="w-16 h-16 text-cyan-400 animate-pulse order-first" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mt-6">
            {t.subtitle}
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12 px-4 sm:px-0">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-none sm:rounded-xl shadow-xl p-4 sm:p-8 border-x-0 border-t border-b sm:border border-slate-700 mb-8">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setMethod('subjective')}
                className={`flex-1 py-3 px-4 rounded-lg border ${
                  method === 'subjective'
                    ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
                    : 'border-slate-600 text-slate-400 hover:border-cyan-400/50'
                }`}
              >
                {t.about.subjectiveTimeModel}
              </button>
              <button
                onClick={() => setMethod('real')}
                className={`flex-1 py-3 px-4 rounded-lg border ${
                  method === 'real'
                    ? 'bg-purple-400/10 border-purple-400 text-purple-400'
                    : 'border-slate-600 text-slate-400 hover:border-purple-400/50'
                }`}
              >
                {t.about.realTimeModel}
              </button>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-slate-200">{t.enterAge}</h2>
            <input
              type="range"
              min="1"
              max="80"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className={`w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer ${
                method === 'real' ? 'accent-purple-400' : 'accent-cyan-400'
              }`}
            />
            <div className="flex items-center justify-center gap-4 mt-4">
              {isEditing ? (
                <input
                  type="number"
                  value={age}
                  onChange={(e) => handleAgeChange(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
                  autoFocus
                  className={`w-24 text-4xl font-bold bg-transparent border-b-2 focus:outline-none text-center ${
                    method === 'real' ? 'text-purple-400 border-purple-400' : 'text-cyan-400 border-cyan-400'
                  }`}
                />
              ) : (
                <span
                  onClick={() => setIsEditing(true)}
                  className={`text-4xl font-bold cursor-pointer hover:opacity-80 ${
                    method === 'real' ? 'text-purple-400' : 'text-cyan-400'
                  }`}
                >
                  {age}
                </span>
              )}
              <span className="text-slate-400 ml-2">{t.yearsOld}</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-none sm:rounded-xl shadow-xl p-4 sm:p-8 border-x-0 border-t border-b sm:border border-slate-700 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-200">{t.result}</h2>
            <div className={`p-6 bg-slate-900/50 rounded-xl border ${
              method === 'real' ? 'border-purple-900/50' : 'border-cyan-900/50'
            }`}>
              <h3 className={`font-medium ${method === 'real' ? 'text-purple-400' : 'text-cyan-400'}`}>
                {t.perceivedAge}
              </h3>
              <p className={`text-4xl font-bold mt-2 ${
                method === 'real' ? 'text-purple-400' : 'text-cyan-400'
              }`}>{perceptionValue} {t.yearsOld}</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-none sm:rounded-xl shadow-xl p-4 sm:p-8 border-x-0 border-t border-b sm:border border-slate-700">
            <h2 className={`text-2xl font-semibold mb-6 ${method === 'real' ? 'text-purple-400' : 'text-cyan-400'}`}>
              {t.graph}
            </h2>
            <div className="w-full h-[400px]">
              <ResponsiveContainer>
                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="age" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey={method === 'real' ? 'realTime' : 'subjectiveTime'}
                    stroke={method === 'real' ? '#a855f7' : '#22d3ee'}
                    strokeWidth={3}
                    dot={false}
                  />
                  <ReferenceLine
                    x={age}
                    stroke={method === 'real' ? '#a855f7' : '#22d3ee'}
                    strokeDasharray="3 3"
                    label={{ value: `${t.enterAge}: ${age}`, position: 'top', fill: method === 'real' ? '#a855f7' : '#22d3ee' }}
                  />
                  <ReferenceLine
                    y={parseFloat(perceptionValue)}
                    stroke={method === 'real' ? '#a855f7' : '#22d3ee'}
                    strokeDasharray="3 3"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-none sm:rounded-xl shadow-xl p-4 sm:p-8 border-x-0 border-t border-b sm:border border-slate-700">
            <div className="flex items-center mb-6">
              <Info className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-cyan-400">{t.about.title}</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="mb-6 text-slate-300 text-lg">
                {t.about.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{t.about.modelsTitle}</h3>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-300">
                <li className="mb-3">
                  <strong>{t.about.realTimeModel}:</strong> {t.about.realTimeDesc}
                </li>
                <li className="mb-3">
                  <strong>{t.about.subjectiveTimeModel}:</strong> {t.about.subjectiveTimeDesc}
                </li>
              </ul>

              <blockquote className="border-l-4 border-cyan-400 pl-6 py-2 my-8 text-slate-300 bg-slate-900/30 rounded-r-lg">
                "{t.about.quote}"
              </blockquote>

              <p className="text-sm text-slate-400 mt-8">
                {t.about.source}: <a href="https://en.wikipedia.org/wiki/Time_perception#Changes_with_age" 
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          target="_blank" 
                          rel="noopener noreferrer">{t.about.source}</a>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://github.com/jux310/TimePerception"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;