'use client';

import React from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import BackButton from '@/components/backButton';

const NewsDetail: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const searchParams = useSearchParams();
    const router = useRouter();

    // Retrieve query parameters
    const image = searchParams.get('image');
    const description = searchParams.get('description');
    const content = searchParams.get('content');
    const author = searchParams.get('author');
    const date = searchParams.get('date');

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="flex items-center justify-end w-full">
                <BackButton />
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl transition transform hover:scale-105">
                {title ? (
                    <>
                        <img
                            src={image || ''}
                            alt={title}
                            className="w-full h-80 object-cover rounded-md mb-6 shadow-md"
                        />
                        <h1 className="font-bold text-gray-800 mb-4">{decodeURIComponent(title)}</h1>
                        <p className="mt-1 text-gray-500 text-sm">{`${author} - ${date}`}</p>
                        <p className="mt-4 text-gray-700 text-lg leading-relaxed">{content}</p>
                        <p className="mt-4 text-gray-500">{description}</p>
                    </>
                ) : (
                    <h1 className="text-4xl font-bold text-gray-800">Article Not Found</h1>
                )}
            </div>
        </div>
    );
};

export default NewsDetail;
