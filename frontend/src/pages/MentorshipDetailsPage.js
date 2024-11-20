import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
import './MentorshipDetailsPage.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MentorshipDetailsPage = () => {
  const [date, setDate] = useState(new Date());
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    document.title = "Mentorship - PESync";
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    alert(`Session requested on ${newDate.toDateString()}`);
  };
  

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage("");
    }
  };

  return (
    <div>
      <main className="mentorship-details-page">
        <h1 className="page-title">Mentorship</h1>

        <div className="details-content">
          {/* Mentor Profile */}
          <div className="mentor-profile">
            <div className="mentor-image">👤</div>
            <h2>Mentor Name</h2>
            <p className="mentor-field">Generative AI</p>
          </div>

          {/* Mentor Bio */}
          <div className="mentor-bio">
            <p>With over 10 years of experience as a faculty member at PES University, [Mentor's Name] brings a unique blend of academic expertise and real-world industry experience. Specializing in computer science and engineering, [Mentor's Name] is particularly well-versed in the emerging field of generative AI, having worked extensively on AI-driven solutions and applications. Their deep understanding of both foundational and cutting-edge technologies makes them a sought-after mentor for students interested in AI, software development, and innovation. [Mentor's Name] is passionate about empowering the next generation of engineers through collaborative learning and hands-on projects.</p>
          </div>

          {/* Reviews Section */}
          <div className="reviews-section">
            <h3>Reviews & Testimonials</h3>
            <div className="review">
              <div className="rating">⭐ 4.0</div>
              <p>Having [Mentor's Name] as my mentor has been an incredible experience. He’s always been patient, approachable, and ready to help, offering both academic guidance and practical insights. His encouragement pushed me to take on challenging projects, and his belief in my potential gave me the confidence to grow. I'm truly grateful for his support and mentorship.</p>
              <p className="reviewer">- Student [batch of 20XX]</p>
            </div>
          </div>

          {/* Calendar Booking Section */}
          <div className="calendar-section">
            <h3>Request Session</h3>
            <Calendar onChange={handleDateChange} value={date} />
          </div>

          {/* Chat Section */}
          <div className="chat-section">
            <h3>Start Conversations</h3>
            <div className="chat-box">
              {messages.map((msg, index) => (
                <div key={index} className="message">{msg}</div>
              ))}
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorshipDetailsPage;
