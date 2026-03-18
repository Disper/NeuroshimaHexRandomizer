import { useState, useCallback, useRef } from 'react';
import type { Army } from '../data/types';
import { generateCode, codeToSeed } from '../utils/rng';

interface DeckSetupProps {
  army: Army;
  onStart: (code: string) => void;
  onBack: () => void;
}

export function DeckSetup({ army, onStart, onBack }: DeckSetupProps) {
  const [code, setCode] = useState<string>(() => generateCode());
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState<'new' | 'join'>('new');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRegenerate = useCallback(() => {
    setCode(generateCode());
    setCopied(false);
  }, []);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase().replace(/[^23456789ABCDEFGHJKMNPQRSTUVWXYZ_]/g, '');
    setInputValue(val.slice(0, 6));
    setError('');
  }, []);

  const handleStart = useCallback(() => {
    if (mode === 'new') {
      onStart(code);
    } else {
      if (inputValue.length !== 6) {
        setError('Code must be exactly 6 characters.');
        inputRef.current?.focus();
        return;
      }
      const seed = codeToSeed(inputValue);
      if (seed === null) {
        setError('Invalid code. Please check and try again.');
        inputRef.current?.focus();
        return;
      }
      onStart(inputValue);
    }
  }, [mode, code, inputValue, onStart]);

  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-colors text-sm font-medium"
      >
        ← Back to Army
      </button>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-100">Set Up Deck</h1>
        <p className="text-stone-400 text-sm mt-1">
          Every deck gets a shareable 6-character code. Anyone using the same code
          draws tiles in the same order.
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex rounded-xl overflow-hidden border border-stone-700 p-1 gap-1 bg-stone-900">
        {(['new', 'join'] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setError(''); }}
            className={[
              'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200',
              mode === m
                ? 'text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200',
            ].join(' ')}
            style={mode === m ? { background: army.accentColor } : undefined}
          >
            {m === 'new' ? '🎲 New Random Deck' : '🔗 Enter a Code'}
          </button>
        ))}
      </div>

      {/* New deck panel */}
      {mode === 'new' && (
        <div className="rounded-2xl border border-stone-700 bg-stone-900 p-6 space-y-5">
          <div>
            <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold mb-3">
              Your Deck Code
            </p>
            <div className="flex items-center gap-3">
              {/* Code display — one char per cell */}
              <div className="flex gap-1.5">
                {code.split('').map((char, i) => (
                  <div
                    key={i}
                    className="w-10 h-12 rounded-lg border border-stone-600 bg-stone-800 flex items-center justify-center text-xl font-mono font-bold text-stone-100"
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleRegenerate}
              className="flex-1 py-2.5 rounded-xl border border-stone-600 text-stone-300 hover:border-stone-400 hover:text-stone-100 transition-all text-sm font-medium"
            >
              ↺ Regenerate
            </button>
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 rounded-xl border border-stone-600 text-stone-300 hover:border-stone-400 hover:text-stone-100 transition-all text-sm font-medium"
            >
              {copied ? '✓ Copied!' : '⧉ Copy Code'}
            </button>
          </div>

          <p className="text-xs text-stone-500 leading-relaxed">
            Share this code with other players so everyone draws the same tile order.
            You can regenerate a new code any time before starting.
          </p>
        </div>
      )}

      {/* Join panel */}
      {mode === 'join' && (
        <div className="rounded-2xl border border-stone-700 bg-stone-900 p-6 space-y-4">
          <div>
            <label
              htmlFor="code-input"
              className="text-xs text-stone-500 uppercase tracking-wider font-semibold block mb-3"
            >
              Enter Deck Code
            </label>
            <div className="flex gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={[
                    'w-10 h-12 rounded-lg border flex items-center justify-center text-xl font-mono font-bold transition-colors',
                    inputValue[i]
                      ? 'border-stone-500 bg-stone-800 text-stone-100'
                      : 'border-stone-700 bg-stone-800/50 text-stone-600',
                  ].join(' ')}
                >
                  {inputValue[i] ?? '·'}
                </div>
              ))}
            </div>
            {/* Hidden but accessible input */}
            <input
              id="code-input"
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="e.g. K7M3PX"
              maxLength={6}
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              className="mt-3 w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-2.5 text-stone-100 text-base font-mono tracking-widest uppercase placeholder:text-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
            />
            {error && (
              <p className="text-red-400 text-xs mt-2">{error}</p>
            )}
          </div>
          <p className="text-xs text-stone-500 leading-relaxed">
            Paste the code shared by another player to draw tiles in the same order.
          </p>
        </div>
      )}

      {/* Start button */}
      <button
        onClick={handleStart}
        className="w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-200 hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
        style={{ background: army.accentColor, color: '#fff' }}
      >
        Start Drawing
      </button>
    </div>
  );
}
