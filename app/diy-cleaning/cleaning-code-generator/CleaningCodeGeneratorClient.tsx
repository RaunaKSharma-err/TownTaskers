'use client';

import { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Check, AlertTriangle, Settings, ShieldCheck, Wrench } from 'lucide-react';
import {
  generateCleaningCode,
  spaceOptions,
  problemOptions,
  severityOptions,
  frequencyOptions,
  type CleaningCodeInput,
  type CleaningCodeResult,
} from '@/lib/cleaning-code';

export function CleaningCodeGeneratorClient() {
  const [input, setInput] = useState<CleaningCodeInput>({
    space: '',
    problem: '',
    severity: '',
    frequency: '',
  });
  const [result, setResult] = useState<CleaningCodeResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleSelect = (field: keyof CleaningCodeInput, value: string) => {
    setInput((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleGenerate = () => {
    if (!input.space || !input.problem || !input.severity || !input.frequency) {
      setError('Please select all four options to generate your cleaning code.');
      return;
    }
    setError('');
    setGenerating(true);
    setResult(null);

    setTimeout(() => {
      const codeResult = generateCleaningCode(input);
      setResult(codeResult);
      setGenerating(false);
    }, 600);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setInput({ space: '', problem: '', severity: '', frequency: '' });
    setResult(null);
    setError('');
  };

  const stepsCompleted = [input.space, input.problem, input.severity, input.frequency].filter(Boolean).length;

  return (
    <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto max-w-3xl">
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Progress</span>
                <span className="text-muted-foreground">{stepsCompleted} of 4 steps completed</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${(stepsCompleted / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Space Type */}
            <div className="mb-6">
              <label className="mb-3 block text-sm font-semibold text-foreground">
                1. Space Type
              </label>
              <div className="flex flex-wrap gap-2">
                {spaceOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect('space', option)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                      input.space === option
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-border bg-white text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Cleaning Problem */}
            <div className="mb-6">
              <label className="mb-3 block text-sm font-semibold text-foreground">
                2. Cleaning Problem
              </label>
              <div className="flex flex-wrap gap-2">
                {problemOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect('problem', option)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                      input.problem === option
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-border bg-white text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Severity */}
            <div className="mb-6">
              <label className="mb-3 block text-sm font-semibold text-foreground">
                3. Severity
              </label>
              <div className="flex flex-wrap gap-2">
                {severityOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect('severity', option)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                      input.severity === option
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-border bg-white text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Frequency */}
            <div className="mb-8">
              <label className="mb-3 block text-sm font-semibold text-foreground">
                4. Frequency
              </label>
              <div className="flex flex-wrap gap-2">
                {frequencyOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect('frequency', option)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                      input.frequency === option
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-border bg-white text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleGenerate}
                disabled={generating}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md disabled:opacity-60"
              >
                <Sparkles className="h-5 w-5" />
                {generating ? 'Generating...' : 'Generate Cleaning Code'}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <RefreshCw className="h-4 w-4" />
                Reset
              </button>
            </div>

            {/* Result */}
            {generating && (
              <div className="mt-8 flex items-center justify-center rounded-2xl border border-border bg-white p-12 shadow-soft">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-200 border-t-primary" />
                  <p className="text-sm text-muted-foreground">Generating your cleaning code...</p>
                </div>
              </div>
            )}

            {result && !generating && (
              <div className="mt-8 animate-slide-up rounded-2xl border border-border bg-white p-6 shadow-soft-md md:p-8">
                {/* Code */}
                <div className="flex items-center justify-between rounded-xl bg-primary-50 p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your Cleaning Code</p>
                    <p className="mt-1 font-heading text-2xl font-bold text-primary">{result.code}</p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 rounded-lg border border-primary-200 bg-white px-3 py-2 text-sm font-medium text-primary transition-all hover:bg-primary-50"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Recommended Approach */}
                <div className="mt-6">
                  <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Recommended Approach
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {result.recommendedApproach}
                  </p>
                </div>

                {/* Tools Needed */}
                <div className="mt-6">
                  <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                    <Wrench className="h-5 w-5 text-primary" />
                    Tools Needed
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.toolsNeeded.map((tool) => (
                      <span key={tool} className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Suggested Steps */}
                <div className="mt-6">
                  <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                    <Settings className="h-5 w-5 text-primary" />
                    Suggested Cleaning Steps
                  </h3>
                  <ol className="mt-3 space-y-3">
                    {result.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="text-sm text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Safety Notes */}
                <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
                  <h3 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                    <ShieldCheck className="h-5 w-5 text-yellow-600" />
                    Safety Notes
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {result.safetyNotes}
                  </p>
                </div>

                {/* When to Call Professional */}
                <div className="mt-6 rounded-xl border border-primary-200 bg-primary-50 p-4">
                  <h3 className="font-heading text-sm font-semibold text-primary">
                    When to Consider Professional Cleaning
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {result.whenToCallProfessional}
                  </p>
                </div>
              </div>
            )}

            {/* Empty state */}
            {!result && !generating && !error && stepsCompleted === 0 && (
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-secondary/20 p-12 text-center">
                <Sparkles className="mx-auto h-10 w-10 text-muted-foreground/40" />
                <p className="mt-4 text-sm text-muted-foreground">
                  Select your options above and click &ldquo;Generate Cleaning Code&rdquo; to get a personalised cleaning recommendation.
                </p>
              </div>
            )}
          </div>
        </div>
    </section>
  );
}
