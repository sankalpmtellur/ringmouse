import React, { useState, useRef } from 'react';
import { Mic, Square, FileText, Loader2, Sparkles, Copy, Check } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import { FadeIn } from './FadeIn';

interface AudioSummarizerProps {
    onSummaryGenerated?: (summary: string) => void;
}

const AudioSummarizer: React.FC<AudioSummarizerProps> = ({ onSummaryGenerated }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [summary, setSummary] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            setError(null);
            setSummary('');
            setAudioBlob(null);
        } catch (err) {
            console.error('Error accessing microphone:', err);
            setError('Could not access microphone. Please ensure you have granted permission.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleSummarize = async () => {
        if (!audioBlob) return;

        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.webm');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
            const response = await fetch(`${apiUrl}/api/summarize`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || errorData.details || 'Failed to get summary');
            }

            const data = await response.json();
            setSummary(data.summary);
            if (onSummaryGenerated) {
                onSummaryGenerated(data.summary);
            }
        } catch (err: any) {
            console.error('Error summarizing audio:', err);
            setError(err.message || 'Failed to generate summary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="summarizer" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <Container>
                <FadeIn>
                    <div className="flex flex-col items-center justify-center text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>AI-Powered Feature</span>
                        </div>
                        <SectionTitle
                            title="Voice-to-Summary"
                            subtitle="Transform your meetings and ideas into concise, actionable summaries instantly with Ring Mouse."
                        />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col items-center gap-8">

                                    {/* Recording Interface */}
                                    <div className="relative">
                                        {isRecording && (
                                            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
                                        )}
                                        <div className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${isRecording ? 'bg-red-50 border-4 border-red-500' : 'bg-gray-50 border-4 border-gray-100'}`}>
                                            {isRecording ? (
                                                <Mic className="w-12 h-12 text-red-500 animate-pulse" />
                                            ) : (
                                                <Mic className="w-12 h-12 text-gray-400" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-4">
                                        {!isRecording ? (
                                            <Button
                                                onClick={startRecording}
                                                size="lg"
                                                className="min-w-[250px] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                            >
                                                <Mic className="w-5 h-5" />
                                                Start Recording
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={stopRecording}
                                                variant="secondary"
                                                size="lg"
                                                className="min-w-[200px] border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 flex items-center justify-center gap-2"
                                            >
                                                <Square className="w-5 h-5 fill-current" />
                                                Stop Recording
                                            </Button>
                                        )}
                                    </div>

                                    {/* Error Message */}
                                    {error && (
                                        <div className="w-full max-w-md p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm text-center">
                                            {error}
                                        </div>
                                    )}

                                    {/* Audio Preview & Action */}
                                    {audioBlob && !isRecording && (
                                        <div className="w-full max-w-md flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <audio controls src={URL.createObjectURL(audioBlob)} className="w-full" />
                                            </div>

                                            <Button
                                                onClick={handleSummarize}
                                                disabled={isLoading}
                                                size="lg"
                                                className="w-full justify-center"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                        Processing Audio...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Sparkles className="w-5 h-5 mr-2" />
                                                        Generate Summary
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* Summary Result */}
                                {summary && (
                                    <div className="mt-12 pt-12 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-text flex items-center gap-2">
                                                <FileText className="w-6 h-6 text-primary" />
                                                Summary Result
                                            </h3>
                                            <button
                                                onClick={copyToClipboard}
                                                className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        Copy Text
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 text-text-secondary leading-relaxed whitespace-pre-wrap shadow-inner">
                                            {summary}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
};

export default AudioSummarizer;
