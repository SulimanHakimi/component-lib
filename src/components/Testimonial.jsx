export default function Testimonial({ text, name, image, bgColor, Color }) {
  return (
    <div className="Testimonial">
      <div
        className="testimonial"
        style={{
          backgroundColor: bgColor,
          color: Color,
        }}
      >
        <div className="profile-box">
          <img src={image} alt="Profile Picture" />
        </div>
        <div className="testimonial-text">
          <div className="white-box"></div>
          <span className="qoute-icon">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <p className="text">{text}</p>
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  );
}
