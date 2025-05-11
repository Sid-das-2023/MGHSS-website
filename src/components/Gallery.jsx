import React, { useState, useEffect } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const importImages = async () => {
      try {
        // Import all images from the assets folder
        const imageContext = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif,webp,avif}', { eager: true });
        const loadedImages = [];
        
        for (const path in imageContext) {
          loadedImages.push({ 
            src: imageContext[path].default, 
            alt: path.split('/').pop().replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
          });
        }
        
        setImages(loadedImages);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    };
    
    importImages();
  }, []);
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#201E3E] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Photo Gallery</h1>
          <p className="text-lg text-gray-200 text-center mt-4 max-w-3xl mx-auto">
            Explore moments and memories from our school events, activities, and achievements
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E46A16]"></div>
          </div>
        ) : (
          <>
            {/* Category Filters
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button className="px-4 py-2 bg-[#201E3E] text-white rounded-full hover:bg-opacity-90 transition">
                All Photos
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                Events
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                Campus
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                Activities
              </button>
            </div> */}
            
            {/* Masonry Gallery */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid-column overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer relative"
                  onClick={() => openModal(image)}
                >
                  <div className="overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-2"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Call to Action
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#201E3E] mb-4">Want to contribute to our gallery?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you have photos from school events or activities that you'd like to share, we'd love to add them to our gallery!
          </p>
          <a 
            href="mailto:sidharthadas2149@gmail.com" 
            className="inline-block bg-[#E46A16] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Submit Your Photos
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Gallery;