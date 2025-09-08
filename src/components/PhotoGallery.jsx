import React from 'react';

// Reusable component for displaying a photo gallery.
const PhotoGallery = () => (
    <section className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8">Our Clinic & Treatments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="https://source.unsplash.com/800x600/?physiotherapy" alt="Physiotherapy session" className="w-full h-48 object-cover"/>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="https://source.unsplash.com/800x600/?rehabilitation" alt="Rehabilitation exercises" className="w-full h-48 object-cover"/>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="https://source.unsplash.com/800x600/?clinic,medical" alt="Modern clinic interior" className="w-full h-48 object-cover"/>
            </div>
        </div>
    </section>
);

export default PhotoGallery;

