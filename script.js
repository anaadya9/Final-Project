document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Simple testimonial slider (can be enhanced)
  const testimonials = [
    {
      name: "Atharva",
      image: "",
      text: "My Golden Retriever always looks amazing after his grooming sessions here. The staff is patient and caring, and they truly understand how to handle pets. Highly recommend!",
    },
    {
      name: "Maa",
      image: "",
      text: "My cat is usually very anxious at grooming places, but she seems comfortable here. The groomers take their time and don't rush the process. The results are always fantastic!",
    },
    {
      name: "Anaadya",
      image: "",
      text: "I've been taking my dogs here for years. They use high-quality products and the staff is knowledgeable about different breeds. My pups always come home looking and smelling wonderful!",
    },
    {
      name: "Prathamesh",
      image: "",
      text: "The groomers at Paws & Whiskers are magicians! They handled my anxious rescue dog with such care, and now he actually enjoys his grooming appointments. Thank you!",
    },
    {
      name: "Rahul",
      image: "",
      text: "Exceptional service every time! My Persian cat needs special attention, and they know exactly how to groom her to perfection. Worth every penny!",
    }
  ];

  // Implement more interactive features as needed
  
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial styles
  const cards = document.querySelectorAll('.service-card, .testimonial-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
  });

  // Call once on load
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);

  // Optional: implement testimonial rotation
  let currentTestimonialIndex = 3; // Start with the ones not shown initially
  
  // Rotate testimonials every 5 seconds
  setInterval(() => {
    const testimonialsContainer = document.getElementById('testimonials');
    if (!testimonialsContainer) return;
    
    const testimonialsHTML = [];
    
    // Get 3 testimonials starting from current index
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonialIndex + i) % testimonials.length;
      const testimonial = testimonials[index];
      
      testimonialsHTML.push(`
        <div class="testimonial-card" style="opacity: 0; transform: translateY(20px);">
          <div class="flex items-center mb-4">
            <div class="h-12 w-12 rounded-full overflow-hidden mr-4">
              <img src="${testimonial.image}" alt="Client" class="h-full w-full object-cover" />
            </div>
            <div>
              <h4 class="font-bold">${testimonial.name}</h4>
              <div class="flex text-yellow-400">
                <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                <i data-lucide="star" class="h-4 w-4 fill-current"></i>
              </div>
            </div>
          </div>
          <p class="text-gray-600">"${testimonial.text}"</p>
        </div>
      `);
    }
    
    // Update current index
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    
    // Fade out existing testimonials
    const existingTestimonials = testimonialsContainer.querySelectorAll('.testimonial-card');
    existingTestimonials.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });
    
    // Replace testimonials after fade out
    setTimeout(() => {
      testimonialsContainer.innerHTML = testimonialsHTML.join('');
      lucide.createIcons(); // Reinitialize icons
      
      // Fade in new testimonials
      setTimeout(() => {
        const newTestimonials = testimonialsContainer.querySelectorAll('.testimonial-card');
        newTestimonials.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          }, index * 200);
        });
      }, 100);
    }, 500);
  }, 10000); // Change testimonials every 10 seconds
});
