import React from 'react';

// Reusable component for displaying a single patient review.
const ReviewCard = ({ review }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center mb-4">
            <span className="font-bold text-gray-800 mr-2">{review.author}</span>
            <div className="flex">
                {/* Render star icons based on rating */}
                {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.031a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.031a1 1 0 00-1.175 0l-2.8 2.031c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.46a1 1 0 00.95-.69l1.07-3.292z"/>
                    </svg>
                ))}
            </div>
        </div>
        <p className="text-gray-600 italic">"{review.comment}"</p>
    </div>
);

export default ReviewCard;

