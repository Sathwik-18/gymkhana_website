import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Intra-Gymkhana Sports Fest',
      date: 'Feb 7, 2023',
      time: '9:00 AM - 6:00 PM',
      venue: 'Sports Ground',
      image: 'event_sports.jpg', 
      description: 'Get ready for a day of thrilling sports competitions across various disciplines. Participate and cheer for your house!',
    },
    {
      title: 'Cultural Night - "Rhythms of India"',
      date: 'Feb 12, 2023',
      time: '7:00 PM onwards',
      venue: 'Nalanda Auditorium',
      image: 'event_cultural.jpg', 
      description: 'A mesmerizing evening showcasing the diverse cultural heritage of India through music, dance, and drama.',
    },
    {
      title: 'Tech Workshop - AI & Machine Learning',
      date: 'Feb 26, 2023',
      time: '10:00 AM - 4:00 PM',
      venue: 'Gargi Seminar Hall',
      image: 'event_tech.jpg', 
      description: 'Hands-on workshop on the fundamentals of Artificial Intelligence and Machine Learning. Learn from industry experts.',
    },
    {
      title: 'Academic Seminar - Career Pathways',
      date: 'Mar 3, 2023',
      time: '2:00 PM - 5:00 PM',
      venue: 'Lecture Hall Complex',
      image: 'event_academic.jpg', 
      description: 'Guidance seminar on various career pathways after graduation. Expert speakers from different fields will share their insights.',
    },
    {
      title: 'Coding Competition - "CodeSprint 2023"',
      date: 'Mar 18, 2023',
      time: '10:00 AM - 8:00 PM',
      venue: 'CITC',
      image: 'event_coding.jpg', 
      description: 'Test your coding skills in our annual coding competition. Exciting prizes and recognition for top performers!',
    },
  ];

  return (
    <div className="upcoming-events-container">
      <h2>Upcoming Events</h2>
      <div className="events-carousel">
        <div className="events-track">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.title} className="event-image" />
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
                <p className="event-venue">{event.venue}</p>
                <p className="event-description">{event.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;