const events = [
  {
    id: 1,
    name: "Islamabad Auto Show",
    date: "July 15, 2025",
    time: "3:00 PM - 8:00 PM",
    location: "Centaurus Parking, Islamabad",
    description: "Experience the thrill of roaring engines and sleek designs as car enthusiasts showcase vintage, luxury, and modified vehicles.",
    image: "images/carshow.jpg"
  },
  {
    id: 2,
    name: "Coke Fest",
    date: "June 25-27, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Convention Center, Chicago",
    description: "Enjoy a lively weekend of music, food, and fun with performances by top artists and food stalls from your favorite local eateries at Coke Fest.",
    image: "images/cokefest.jpeg"
  },
  {
    id: 3,
    name: "Career Fair",
    date: "September 10, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "NUST University, Islamabad",
    description: "Meet recruiters from leading companies, explore job opportunities, and attend workshops designed to launch your career.",
    image: "images/career.jpg"
  },
  {
    id: 4,
    name: "DevFest 2025",
    date: "July 2, 2025",
    time: "8:00 AM - 12:00 PM",
    location: "Air University Auditoruim, Islamabad",
    description: "Join developers, designers, and tech enthusiasts for a morning of talks, coding sessions, and networking with industry leaders.",
    image: "images/devfest.jpeg"
  },
  {
    id: 5,
    name: "Entertainment Expo",
    date: "August 3-5, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Gulberg Greens, Islamabad",
    description: "Dive into a world of movies, games, cosplay, and pop culture with exhibits and activities for fans of all ages.",
    image: "images/expo.jpeg"
  }
];

const eventsContainer = document.getElementById('events-container');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function displayEvents(eventsToDisplay) {
  eventsContainer.innerHTML = '';
  
  if (eventsToDisplay.length === 0) {
    eventsContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fas fa-calendar-times fa-3x mb-3 text-gray-400"></i>
        <h3>No events found</h3>
        <p>Try adjusting your search criteria.</p>
      </div>
    `;
    return;
  }

  eventsToDisplay.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'col-md-6 col-lg-4 mb-4';
    eventCard.innerHTML = `
      <div class="event-card">
        <img src="${event.image}" alt="${event.name}" class="event-card-img">
        <div class="event-card-content">
          <span class="event-date">${event.date}</span>
          <h3>${event.name}</h3>
          <div class="event-location">
            <i class="fas fa-map-marker-alt"></i>
            ${event.location}
          </div>
          <p class="event-description">${event.description}</p>
          <button class="btn-register">Register Now</button>
        </div>
      </div>
    `;
    eventsContainer.appendChild(eventCard);
  });
}

function filterEvents(searchTerm) {
  if (!searchTerm) {
    return events;
  }
  
  searchTerm = searchTerm.toLowerCase();
  return events.filter(event => 
    event.name.toLowerCase().includes(searchTerm) ||
    event.location.toLowerCase().includes(searchTerm) ||
    event.description.toLowerCase().includes(searchTerm)
  );
}

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  const filteredEvents = filterEvents(searchTerm);
  displayEvents(filteredEvents);
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const searchTerm = searchInput.value.trim();
    const filteredEvents = filterEvents(searchTerm);
    displayEvents(filteredEvents);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    displayEvents(events);
  }, 800);
  
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});