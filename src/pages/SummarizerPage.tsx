import React, { useState, useEffect } from 'react';
import AudioSummarizer from '../components/AudioSummarizer';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Trash2, Clock, FileText, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

interface HistoryItem {
    id: string;
    date: string;
    summary: string;
}

const SummarizerPage = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem('summarizer_history');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    const saveToHistory = (summary: string) => {
        const newItem: HistoryItem = {
            id: Date.now().toString(),
            date: new Date().toLocaleString(),
            summary,
        };
        const updatedHistory = [newItem, ...history];
        setHistory(updatedHistory);
        localStorage.setItem('summarizer_history', JSON.stringify(updatedHistory));
    };

    const deleteItem = (id: string) => {
        const updatedHistory = history.filter(item => item.id !== id);
        setHistory(updatedHistory);
        localStorage.setItem('summarizer_history', JSON.stringify(updatedHistory));
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <Container>
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-text-secondary hover:text-primary transition-colors">
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back to Home
                    </Link>
                </div>

                <AudioSummarizer onSummaryGenerated={saveToHistory} />

                <div className="mt-20">
                    <FadeIn delay={200}>
                        <div className="flex items-center gap-3 mb-8">
                            <Clock className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold text-text">History</h2>
                        </div>

                        {history.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 border-dashed">
                                <p className="text-text-secondary">No summaries yet. Start recording to create one!</p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {history.map((item) => (
                                    <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                                <Clock className="w-4 h-4" />
                                                {item.date}
                                            </div>
                                            <button
                                                onClick={() => deleteItem(item.id)}
                                                className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete summary"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="prose prose-sm max-w-none text-text-secondary">
                                            <p className="whitespace-pre-wrap">{item.summary}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </FadeIn>
                </div>
            </Container>
        </div>
    );
};

export default SummarizerPage;
